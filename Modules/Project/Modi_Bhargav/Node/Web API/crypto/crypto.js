const crypto = require('crypto');

class endc {

  static encrypt(text) {
    var mykey1 = crypto.createCipher("aes-128-cbc", "mypassword");
    var hash = mykey1.update(text, "utf8", "hex");
    hash += mykey1.final("hex");
    return hash
  }

  static decrypt(text) {
    var mykey = crypto.createDecipher("aes-128-cbc", "mypassword");
    var mystr = mykey.update(text, "hex", "utf8");
    mystr += mykey.final("utf8");
    return mystr
  }
}

module.exports = endc
