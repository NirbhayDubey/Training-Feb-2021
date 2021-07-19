const fs = require('fs')
var nodemailer = require('nodemailer')
var otp = '123456'
fs.readFile('emails.txt','utf8',(err,data) => {
    if(err)
    {
        console.log(err);
    }
    var transporter = nodemailer.createTransport({
        
        service : 'gmail',
        auth: {
            user: 'zeel92000@gmail.com',
            pass: 'R0y@lM@r!0'
        }
    });

    var mailOptions = {
        from : 'zeel92000@gmail.com',
        to: data.toString(),
        subject : 'send Email to each Employee',
        text : 'emailtemplate.html',
        html : 'One Time Password (OTP) : '+ otp
    };

    transporter.sendMail(mailOptions, function(error,info)
    {
        if(error)
        {
            console.log(error);
        }
        else 
        {
            console.log('Email sent : ' + info.response);
        }
    });
})