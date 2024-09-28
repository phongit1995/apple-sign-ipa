import { ISignApple } from "../sign";
import * as path from 'path';


const pathTestFile = path.join(__dirname, 'test.ipa')
const pathProvision = path.join(__dirname, 'cert.mobileprovision')
const pathKey = path.join(__dirname, 'cert.p12')
const outPut = path.join(__dirname, 'output.ipa')
const iSign = new ISignApple()
iSign.addPassword('1').addOutput(outPut).addP12File(pathKey).addMobileProvision(pathProvision).addIpa(pathTestFile)
iSign.event.on("message", (message) => {
    console.log("message", message);
})
iSign.build()