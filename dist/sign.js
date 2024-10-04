"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISignApple = void 0;
const path = require("path");
const childProcess = require("child_process");
const stream_1 = require("stream");
class ISignApple {
    constructor() {
        this.isForceSign = false;
        this.event = new stream_1.EventEmitter();
        this.getPathOfZsign();
    }
    async getVersion() {
        const getVersionExec = `${this.signPath} -v`;
        const version = await this.runExec(getVersionExec);
        console.log(version.stdout);
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
    addAppName(appName) {
        this.appName = appName;
        return this;
    }
    addMobileProvision(mobileProvision) {
        this.mobileProvision = mobileProvision;
        return this;
    }
    addZipLevel(zipLevel = 1) {
        this.zipLevel = zipLevel;
        return this;
    }
    buildArgs() {
        const args = [this.signPath];
        if (this.isForceSign)
            args.push('-f');
        if (this.p12File)
            args.push('-k', this.p12File);
        if (this.password)
            args.push('-p', this.password);
        if (this.mobileProvision)
            args.push('-m', this.mobileProvision);
        if (this.output)
            args.push('-o', this.output);
        if (this.zipLevel)
            args.push('-z', this.zipLevel.toString());
        if (this.appName)
            args.push('-n', this.appName);
        if (this.dylib && this.dylib.length > 0) {
            this.dylib.forEach(path => {
                args.push('-l', path);
            });
        }
        if (this.weak && this.weak.length > 0) {
            this.weak.forEach(path => {
                args.push('-w', path);
            });
        }
        if (this.ipaFile)
            args.push(this.ipaFile);
        return args;
    }
    build() {
        const args = this.buildArgs();
        const cmd = args.join(' ');
        this.runExec(cmd);
    }
    forceSign() {
        this.isForceSign = true;
        return this;
    }
    addWeak(filesPath) {
        this.weak = filesPath;
        return this;
    }
    addDylib(filesPath) {
        this.dylib = filesPath;
        return this;
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