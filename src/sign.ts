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
    private zipLevel?: number;
    private appName?: string;
    private bundleId?: string;
    private bundleVersion?: string;
    private isForceSign: boolean = false;
    private dylib?: string[];
    private weak?: string[];
    async getVersion() {
        const getVersionExec = `${this.signPath} -v`
        const version = await this.runExec(getVersionExec)
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

    addAppName(appName: string) {
        this.appName = appName;
        return this;
    }

    addBundleId(bundleId: string) {
        this.bundleId = bundleId;
        return this;
    }

    addBundleVersion(bundleVersion: string) {
        this.bundleVersion = bundleVersion;
        return this;
    }

    addMobileProvision(mobileProvision: string) {
        this.mobileProvision = mobileProvision;
        return this;
    }

    addZipLevel(zipLevel: number = 1) {
        this.zipLevel = zipLevel;
        return this;
    }

    buildArgs() {
        const args: string[] = [this.signPath!];
        if (this.isForceSign) args.push('-f')
        if (this.p12File) args.push('-k', this.p12File)
        if (this.password) args.push('-p', this.password)
        if (this.mobileProvision) args.push('-m', this.mobileProvision)
        if (this.output) args.push('-o', this.output)
        if (this.zipLevel) args.push('-z', this.zipLevel.toString())
        if (this.appName) args.push('-n', this.appName)
        if (this.bundleId) args.push('-b', this.bundleId)
        if (this.bundleVersion) args.push('-r', this.bundleVersion)
        if (this.dylib && this.dylib.length > 0) {
            this.dylib.forEach(path => {
                args.push('-l', path)
            })
        }

        if (this.weak && this.weak.length > 0) {
            this.weak.forEach(path => {
                args.push('-w', '-l', path)
            })
        }
        if (this.ipaFile) args.push(this.ipaFile)
        return args;
    }

    build() {
        const args = this.buildArgs()
        const cmd = args.join(' ')
        this.runExec(cmd)
    }

    forceSign() {
        this.isForceSign = true;
        return this;
    }

    addWeak(filesPath: string[]) {
        this.weak = filesPath;
        return this;
    }

    addDylib(filesPath: string[]) {
        this.dylib = filesPath;
        return this;
    }

    private getPathOfZsign() {
        const signPath = path.join(__dirname, '..', 'zsign', 'build', 'zsign');
        this.signPath = signPath;
    }
    private runExec(cmd: string): Promise<CmdResult> {
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