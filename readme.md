# Isign

Isign ipa 

Isign for nodejs
just support lunux

# demo code
```
import { ISignApple } from "apple-zsign";
import * as path from 'path';

const sign = new ISignApple();
const iap = path.join(__dirname, 'test.ipa')
const mobileProvision = path.join(__dirname, 'cert.mobileprovision')
const pKey = path.join(__dirname, 'cert.p12')
const outPath = path.join(__dirname, 'output.ipa')
sign.addIpa(iap).addMobileProvision(mobileProvision).addP12File(pKey).addPassword('1').addOutput(outPath).build();
sign.event.on("message", (message) => {
    console.log(message)
})
```