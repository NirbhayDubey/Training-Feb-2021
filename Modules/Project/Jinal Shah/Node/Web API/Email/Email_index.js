var nodemailer = require('nodemailer');

var otp1;
class emailOTP {

    static getOTP() {
        var digits = '0123456789';
        var otp = '';
        for (let i = 1; i <= 6; i++) {
            otp += digits[Math.floor(Math.random() * 10)];
        }
        console.log(otp)
        return otp;
    }

    static send(receiver) {

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'jinalkshah1@gmail.com',
                pass: '*****'
            }
        });

        otp1 = this.getOTP()
        //const receiver = 'jinalkshah56@gmail.com'
        console.log(receiver)
        var mailOptions = {
            from: 'jinalkshah1@gmail.com',
            to: receiver,
            subject: 'OTP ',
            text: 'Your One Time Password is : ' + otp1
        };

        transporter.sendMail(mailOptions, function (err, data1) {
            if (err) {
                console.log(err);
            }
            else console.log('Email sent!!!' + data1.response);
        });

    }

    static verifyOTP(ID) {
        if (otp1 == ID) return true;
        else return false;
    }

}


var rec = 'zeel92000@gmail.com'

//emailOTP.send(rec)
//emailOTP.send()

module.exports = emailOTP


