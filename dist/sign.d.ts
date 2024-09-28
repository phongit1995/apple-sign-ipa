import { EventEmitter } from 'stream';
interface CmdResult {
    code?: number | null;
    stdout: string;
    stderr: string;
    error?: Error;
    cmd: string;
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
    getVersion(): Promise<void>;
    addIpa(ipaPath: string): this;
    addP12File(p12File: string): this;
    addPassword(password: string): this;
    addOutput(output: string): this;
    addMobileProvision(mobileProvision: string): this;
    buildArgs(): string[];
    build(): void;
    getPathOfZsign(): void;
    runExec(cmd: string): Promise<CmdResult>;
}
export {};
