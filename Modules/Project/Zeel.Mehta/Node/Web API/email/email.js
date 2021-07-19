var nodemailer = require('nodemailer');
const verify = require('../authenticate/security');

var otp1

class emailOTP
{
    static getOTP()
    {
        var digits = '0123456789';
        var otp = '';
        for(let i=1; i<=6; i++)
        {
            otp += digits[Math.floor(Math.random() * 10)];
        }
        console.log(otp);
        return otp;
    }
    static send(receiver)
    {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user : 'zeel92000@gmail.com',
                pass : 'R0y@lM@r!0'
            }
        });
        
      otp1 = this.getOTP();

        var mailOptions = {
            from : 'zeel92000@gmail.com',
            to : receiver,
            subject : 'OTP',
            text : 'Your One Time Password (OTP) : ' + otp1
        };

        transporter.sendMail(mailOptions, function(err, data){
            if(err)
                console.log(err);
            else
                console.log('Email sent !!! '+ data.response);
        });
    }
    static verifyOTP(ID)
    {
        if(otp1 == ID)
            return true
        else
            return false
    }
}


// var rec = 'mehtazeel922000@gmail.com'

module.exports = emailOTP