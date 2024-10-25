# Isign

Isign ipa 

Isign for nodejs
just support lunux

# install ubuntu
```
wget http://nz2.archive.ubuntu.com/ubuntu/pool/main/o/openssl/libssl1.1_1.1.1f-1ubuntu2_amd64.deb
sudo dpkg -i libssl1.1_1.1.1f-1ubuntu2_amd64.deb
```



# demo code
```
import { ISignApple } from "../sign";
import * as path from 'path';
const signTest = async ()=>{
    try {
        const pathTestFile = path.join(__dirname, 'test.ipa')
        const pathProvision = path.join(__dirname, 'cert.mobileprovision')
        const pathKey = path.join(__dirname, 'cert.p12')
        const outPut = path.join(__dirname, 'output.ipa')
        const dylib = [path.join(__dirname, 'adspeed.dylib'), path.join(__dirname, 'noads.dylib')]
        const weak = [path.join(__dirname, 'test.deb')]
        const iSign = new ISignApple()
        iSign.addPassword('1').addOutput(outPut).addP12File(pathKey).addMobileProvision(pathProvision).addIpa(pathTestFile).addDylib(dylib).addWeak(weak)
        const result = await iSign.buildSync();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

signTest();
```

