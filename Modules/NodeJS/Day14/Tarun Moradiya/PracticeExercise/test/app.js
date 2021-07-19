const nodemailer = require('nodemailer');
const fs = require('fs');

const user = process.env.USER;
const password = process.env.PASSWORD;

if(!(user || password)) return console.log('please set username and password for your email')

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: user,
    pass: password
  }
});

fs.readFile('recipient.txt', 'utf8' , (err, dataRec) => {
    if (err) {
      console.error(err)
      return
    }

    fs.readFile('emailTemplate.html', 'utf8' , (errHtml, dataHtml) => {
        if (err) {
          console.error(errHtml)
          return
        }

        var mailOptions = {
            from: user,
            to: dataRec,
            subject: 'Sending Email using Node.js',
            html: dataHtml
          };
    
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    
    })

    
  })

