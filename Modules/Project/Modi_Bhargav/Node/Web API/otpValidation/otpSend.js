const nodemailer = require("nodemailer");

var OTP;

class validateOTP {
  static createOTP() {
    var code = "0123456789";
    var OTP1 = "";
    for (let i = 1; i <= 6; i++) {
      OTP1 += code[Math.floor(Math.random() * 10)];
    }
    console.log(OTP1);
    OTP = OTP1;
    return OTP1;
  }

  static sendOTP(email) {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "modibhargav1998@gmail.com",
        pass: "Bhai@321",
      },
    });

    OTP = this.createOTP();
    var mailOptions = {
      from: "modibhargav1998@gmail.com",
      to: email,
      subject: "Verify OTP",
      html: `<h1 style = "color:green;">Please Verify Your OTP:</h1><h2 style="color:black;">${OTP}</h2>`,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }
  static verifyOTP(ID) {
    if (OTP == ID) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = validateOTP;
