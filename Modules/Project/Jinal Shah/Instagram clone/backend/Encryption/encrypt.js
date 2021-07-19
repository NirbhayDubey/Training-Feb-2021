const encrypt = require('crypto')

class encryptData{

    static encryptPWD(pwd){
        var a = encrypt.createCipher("aes-128-cbc","mypassword");
        var hash = a.update(pwd,"utf8","hex");
        hash += a.final("hex");
        return hash
    }

    static decryptPWD(pwd){
        var a1 = encrypt.createDecipher("aes-128-cbc","mypassword");
        var hash1 = a1.update(pwd,"hex","utf8");
        hash1 += a1.final("utf8");
        return hash1
    }

}

module.exports = encryptData