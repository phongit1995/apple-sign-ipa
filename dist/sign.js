"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISignApple = void 0;
const path = require("path");
const childProcess = require("child_process");
const stream_1 = require("stream");
class ISignApple {
    constructor() {
        this.event = new stream_1.EventEmitter();
        this.getPathOfZsign();
    }
    getVersion() {
        const getVersionExec = `${this.signPath} -v`;
        return this.runExec(getVersionExec);
    }
    addIpa(ipaPath) {
        this.ipaFile = ipaPath;
        return this;
    }
    addP12File(p12File) {
        this.p12File = p12File;
        return this;
    }
    addPassword(password) {
        this.password = password;
        return this;
    }
    addOutput(output) {
        this.output = output;
        return this;
    }
    addMobileProvision(mobileProvision) {
        this.mobileProvision = mobileProvision;
        return this;
    }
    buildArgs() {
        const args = [this.signPath];
        if (this.p12File)
            args.push('-k', this.p12File);
        if (this.password)
            args.push('-p', this.password);
        if (this.mobileProvision)
            args.push('-m', this.mobileProvision);
        if (this.output)
            args.push('-o', this.output);
        if (this.ipaFile)
            args.push(this.ipaFile);
        return args;
    }
    build() {
        const args = this.buildArgs();
        const cmd = args.join(' ');
        this.runExec(cmd);
    }
    getPathOfZsign() {
        const signPath = path.join(__dirname, '..', 'zsign', 'build', 'zsign');
        this.signPath = signPath;
    }
    runExec(cmd) {
        const executable = Array.isArray(cmd) ? cmd.join(";") : cmd;
        const options = {
            stdio: "pipe",
            cwd: process.cwd(),
        };
        const { platform } = process;
        try {
            const cmd = platform === "win32" ? "cmd" : "sh";
            const arg = platform === "win32" ? "/C" : "-c";
            const child = childProcess.spawn(cmd, [arg, executable], options);
            return new Promise((resolve) => {
                const stdoutList = [];
                const stderrList = [];
                if (child.stdout) {
                    child.stdout.on("data", (data) => {
                        this.event.emit("message", data.toString());
                        if (Buffer.isBuffer(data))
                            return stdoutList.push(data.toString());
                        stdoutList.push(data);
                    });
                }
                if (child.stderr) {
                    child.stderr.on("data", (data) => {
                        this.event.emit("error", data.toString());
                        if (Buffer.isBuffer(data))
                            return stderrList.push(data.toString());
                        stderrList.push(JSON.stringify(data));
                    });
                }
                const getDefaultResult = () => {
                    const stderr = stderrList.join("\n");
                    const stdout = stdoutList.join("\n");
                    return { stdout, stderr, cmd: executable };
                };
                child.on("error", (error) => resolve(Object.assign(Object.assign({}, getDefaultResult()), { error })));
                child.on("close", (code) => resolve(Object.assign(Object.assign({}, getDefaultResult()), { code })));
            });
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
}
exports.ISignApple = ISignApple;
//# sourceMappingURL=sign.js.map