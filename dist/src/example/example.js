"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("../sign");
const path = require("path");
const pathTestFile = path.join(__dirname, 'test.ipa');
const pathProvision = path.join(__dirname, 'cert.mobileprovision');
const pathKey = path.join(__dirname, 'cert.p12');
const outPut = path.join(__dirname, 'output.ipa');
const iSign = new sign_1.ISignApple();
iSign.addPassword('1').addOutput(outPut).addP12File(pathKey).addMobileProvision(pathProvision).addIpa(pathTestFile);
iSign.event.on("message", (message) => {
    console.log("message", message);
});
iSign.build();
//# sourceMappingURL=example.js.map