const crypto = require('crypto');

class Crypt 
{
    static encrypt(text)
    {
        var key1 = crypto.createCipher("aes-128-cbc" , "mypassword");
        var str1 = key1.update(text, "utf-8", "hex");
        str1 += key1.final("hex");
        console.log(str1);
        return str1
    }

    static decrypt(text)
    {
        var key2 = crypto.createDecipher("aes-128-cbc" , "mypassword");
        var str2 = key2.update(text, "hex", "utf-8");
        str2 += key2.final("utf-8");
        console.log(str2);
        return str2
    }
}
// Crypt.encrypt("abc123");
// Crypt.decrypt("1221ad8321600541e4113fc4ebc581b0");
module.exports = Crypt

// class Crypt 
// {
//     static encrypt(text)
//     {
//         let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
//         let encrypted = cipher.update(text);
//         encrypted = Buffer.concat([encrypted, cipher.final()]);
//         return {iv : iv.toString('hex'), encryptedData : encrypted.toString('hex')};
//     }

//     static decrypt(text)
//     {
//         let iv = Buffer.from(text.iv, 'hex');
//         let encryptedText = Buffer.from(text.encryptedData, 'hex');
//         let decipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
//         let decrypted = decipher.update(encryptedText);
//         decrypted = Buffer.concat([decrypted, decipher.final()]);
//         return decrypted.toString();
//     }
// }