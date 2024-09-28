import * as path from 'path';
import * as childProcess from "child_process";
import { EventEmitter } from 'stream';
interface CmdResult {
    code?: number | null;
    stdout: string;
    stderr: string;
    error?: Error;
    cmd: string;
}
export class ISignApple {
    constructor() {
        this.event = new EventEmitter()
        this.getPathOfZsign()
    }
    private signPath?: string;
    public event: EventEmitter;
    private ipaFile?: string;
    private p12File?: string;
    private password?: string;
    private output?: string;
    private mobileProvision?: string;
    async getVersion() {
        const getVersionExec = `${this.signPath} -v`
        const version= await this.runExec(getVersionExec)
        console.log(version.stdout)
    }

    addIpa(ipaPath: string) {
        this.ipaFile = ipaPath;
        return this;
    }

    addP12File(p12File: string) {
        this.p12File = p12File;
        return this;
    }

    addPassword(password: string) {
        this.password = password;
        return this;
    }
    addOutput(output: string) {
        this.output = output;
        return this;
    }

    addMobileProvision(mobileProvision: string) {
        this.mobileProvision = mobileProvision;
        return this;
    }

    buildArgs() {
        const args: string[] = [this.signPath!];
        if (this.p12File) args.push('-k', this.p12File)
        if (this.password) args.push('-p', this.password)
        if (this.mobileProvision) args.push('-m', this.mobileProvision)
        if (this.output) args.push('-o', this.output)
        if (this.ipaFile) args.push(this.ipaFile)
        return args;
    }

    build() {
        const args = this.buildArgs()
        const cmd = args.join(' ')
        this.runExec(cmd)
    }

    getPathOfZsign() {
        const signPath = path.join(__dirname, '..', 'zsign', 'build', 'zsign');
        this.signPath = signPath;
    }
    runExec(cmd: string): Promise<CmdResult> {
        const executable = Array.isArray(cmd) ? cmd.join(";") : cmd;
        const options: childProcess.SpawnOptionsWithoutStdio = {
            stdio: "pipe",
            cwd: process.cwd(),
        };
        const { platform } = process;
        try {
            const cmd = platform === "win32" ? "cmd" : "sh";
            const arg = platform === "win32" ? "/C" : "-c";
            const child = childProcess.spawn(cmd, [arg, executable], options);
            return new Promise((resolve) => {
                const stdoutList: string[] = [];
                const stderrList: string[] = [];

                if (child.stdout) {
                    child.stdout.on("data", (data) => {
                        this.event.emit("message", data.toString())
                        if (Buffer.isBuffer(data)) return stdoutList.push(data.toString());
                        stdoutList.push(data);
                    });
                }

                if (child.stderr) {
                    child.stderr.on("data", (data) => {
                        this.event.emit("error", data.toString())
                        if (Buffer.isBuffer(data)) return stderrList.push(data.toString());
                        stderrList.push(JSON.stringify(data));
                    });
                }

                const getDefaultResult = () => {
                    const stderr = stderrList.join("\n");
                    const stdout = stdoutList.join("\n");
                    return { stdout, stderr, cmd: executable };
                };

                child.on("error", (error) => resolve({ ...getDefaultResult(), error }));
                child.on("close", (code) => resolve({ ...getDefaultResult(), code }));
            });
        } catch (error) {
            return Promise.reject(error);
        }
    }
}