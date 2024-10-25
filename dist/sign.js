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
    addBundleId(bundleId) {
        this.bundleId = bundleId;
        return this;
    }
    addBundleVersion(bundleVersion) {
        this.bundleVersion = bundleVersion;
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
        if (this.bundleId)
            args.push('-b', this.bundleId);
        if (this.bundleVersion)
            args.push('-r', this.bundleVersion);
        if (this.dylib && this.dylib.length > 0) {
            this.dylib.forEach(path => {
                args.push('-l', path);
            });
        }
        if (this.weak && this.weak.length > 0) {
            this.weak.forEach(path => {
                args.push('-w', '-l', path);
            });
        }
        if (this.ipaFile)
            args.push(this.ipaFile);
        return args;
    }
    async build() {
        const args = this.buildArgs();
        const cmd = args.join(' ');
        this.runExec(cmd);
    }
    async buildSync() {
        const args = this.buildArgs();
        const cmd = args.join(' ');
        return this.runExecSync(cmd);
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
        return new Promise((resolve, reject) => {
            try {
                const command = platform === "win32" ? "cmd" : "sh";
                const arg = platform === "win32" ? "/C" : "-c";
                const child = childProcess.spawn(command, [arg, executable], options);
                const stdoutList = [];
                const stderrList = [];
                if (child.stdout) {
                    child.stdout.on("data", (data) => {
                        try {
                            this.event.emit("message", data.toString());
                            stdoutList.push(Buffer.isBuffer(data) ? data.toString() : data);
                        }
                        catch (err) {
                            reject(new Error(`Error processing stdout data: ${err.message}`));
                        }
                    });
                }
                if (child.stderr) {
                    child.stderr.on("data", (data) => {
                        try {
                            this.event.emit("error", data.toString());
                            stderrList.push(Buffer.isBuffer(data) ? data.toString() : JSON.stringify(data));
                        }
                        catch (err) {
                            reject(new Error(`Error processing stderr data: ${err.message}`));
                        }
                    });
                }
                const getDefaultResult = () => {
                    const stderr = stderrList.join("\n");
                    const stdout = stdoutList.join("\n");
                    return { stdout, stderr, cmd: executable };
                };
                child.on("error", (error) => {
                    console.log(error);
                    reject(new Error(`Child process error: ${error.message}`));
                });
                child.on("close", (code) => {
                    console.log(code);
                    resolve(Object.assign(Object.assign({}, getDefaultResult()), { code }));
                });
            }
            catch (error) {
                reject(new Error(`Failed to execute command: ${error.message}`));
            }
        });
    }
    runExecSync(cmd) {
        const executable = Array.isArray(cmd) ? cmd.join(";") : cmd;
        const options = {
            stdio: "pipe",
            cwd: process.cwd(),
        };
        const { platform } = process;
        return new Promise((resolve, reject) => {
            try {
                const command = platform === "win32" ? "cmd" : "sh";
                const arg = platform === "win32" ? "/C" : "-c";
                const child = childProcess.spawn(command, [arg, executable], options);
                let packageInfo;
                child.stdout.on("data", (data) => {
                    try {
                        this.event.emit("message", data.toString());
                        const message = data.toString();
                        if (message.includes('ERROR')) {
                            reject(message.replace('ERROR', ''));
                        }
                        if (message.includes('PackageInfo:::')) {
                            try {
                                const jsonRegex = /{[^}]*}/;
                                const jsonPart = message.match(jsonRegex);
                                packageInfo = jsonPart[0];
                            }
                            catch (error) {
                            }
                        }
                        if (message.includes('>>> Done.')) {
                            resolve(packageInfo);
                        }
                    }
                    catch (err) {
                        reject(new Error(`Error processing stdout data: ${err.message}`));
                    }
                });
                child.stderr.on("data", (data) => {
                    try {
                        this.event.emit("error", data.toString());
                        reject(new Error(data.toString()));
                    }
                    catch (err) {
                        reject(new Error(`Error processing stderr data: ${err.message}`));
                    }
                });
            }
            catch (error) {
                reject(new Error(`Failed to execute command: ${error.message}`));
            }
        });
    }
}
exports.ISignApple = ISignApple;
//# sourceMappingURL=sign.js.map