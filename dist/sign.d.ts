import { EventEmitter } from 'stream';
interface PackageInfo {
    AppName: string;
    BundleId: string;
    BundleVer: string;
    TeamId: string;
    SubjectCN: string;
}
export declare class ISignApple {
    constructor();
    private signPath?;
    event: EventEmitter;
    private ipaFile?;
    private p12File?;
    private password?;
    private output?;
    private mobileProvision?;
    private zipLevel?;
    private appName?;
    private bundleId?;
    private bundleVersion?;
    private isForceSign;
    private dylib?;
    private weak?;
    getVersion(): Promise<void>;
    addIpa(ipaPath: string): this;
    addP12File(p12File: string): this;
    addPassword(password: string): this;
    addOutput(output: string): this;
    addAppName(appName: string): this;
    addBundleId(bundleId: string): this;
    addBundleVersion(bundleVersion: string): this;
    addMobileProvision(mobileProvision: string): this;
    addZipLevel(zipLevel?: number): this;
    buildArgs(): string[];
    build(): Promise<void>;
    buildSync(): Promise<PackageInfo>;
    forceSign(): this;
    addWeak(filesPath: string[]): this;
    addDylib(filesPath: string[]): this;
    private getPathOfZsign;
    private runExec;
    private runExecSync;
}
export {};
