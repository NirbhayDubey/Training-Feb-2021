const nodemailer = require("nodemailer");
const fs = require("fs")


let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sampatharshit03@gmail.com',
        pass: 'readdata'
    }
});
sendmail = async ()=>{
let mailDetails = {
    
    from: 'sampatharshit03@gmail.com',
    to: await fs.read('recipient.txt'),
    subject: 'Test mail',
    html: await fs.read('emailtemplate.html')
};

mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log('Error Occurs');
    } else {
        console.log('Email sent successfully');
    }
})
}

sendmail()
  
