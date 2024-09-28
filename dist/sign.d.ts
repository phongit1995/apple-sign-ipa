import { EventEmitter } from 'stream';
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
    private isForceSign;
    getVersion(): Promise<void>;
    addIpa(ipaPath: string): this;
    addP12File(p12File: string): this;
    addPassword(password: string): this;
    addOutput(output: string): this;
    addAppName(appName: string): this;
    addMobileProvision(mobileProvision: string): this;
    addZipLevel(zipLevel?: number): this;
    buildArgs(): string[];
    build(): void;
    forceSign(): this;
    private getPathOfZsign;
    private runExec;
}
