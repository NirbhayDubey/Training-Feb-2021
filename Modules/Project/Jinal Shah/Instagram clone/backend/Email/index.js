const fs = require('fs')
var nodemailer = require('nodemailer');

fs.readFile('mail.txt','utf8',(err,data) => {
    if(err) console.log(err)

    var transporter =nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'jinalkshah1@gmail.com',
            pass: 'jsca2211'
          }
    });

    var mailOptions = {
        from : 'jinalkshah1@gmail.com',
        to : data.toString(),
        //to : data.split(','),
        subject : 'email sending through Nodemailer ',
        text : 'Wooohooo it works!!'
    };

    transporter.sendMail(mailOptions, function(err, data1) {
        if (err) {
            console.log(err);
        }
        else console.log('Email sent!!!'+ data1.response);
    });
})

