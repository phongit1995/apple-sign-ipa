"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("../sign");
const path = require("path");
const signTest = async () => {
    try {
        const pathTestFile = path.join(__dirname, 'test.ipa');
        const pathProvision = path.join(__dirname, 'cert.mobileprovision');
        const pathKey = path.join(__dirname, 'cert.p12');
        const outPut = path.join(__dirname, 'output.ipa');
        const dylib = [path.join(__dirname, 'adspeed.dylib'), path.join(__dirname, 'noads.dylib')];
        const weak = [path.join(__dirname, 'test.deb')];
        const iSign = new sign_1.ISignApple();
        iSign.addPassword('1').addOutput(outPut).addP12File(pathKey).addMobileProvision(pathProvision).addIpa(pathTestFile).addDylib(dylib).addWeak(weak);
        const result = await iSign.buildSync();
    }
    catch (error) {
        console.log(error);
    }
};
signTest();
//# sourceMappingURL=example.js.map