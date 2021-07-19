const nodemailer = require("nodemailer")

var otp;
async function Email(toemail) {

  otp = Math.floor(1000 + Math.random() * 9000).toString()

  //step:1
  let transporter = nodemailer.createTransport({
    pool: true,
    service: "gmail",
    tls: {
      rejectUnauthorized: false
    },
    secure: false,
    auth: {
        user: "jayc20110@gmail.com",
        pass: "jaykant@32"
    }
  });


  //step:2
  let mailOptions = {
    from: "jayc20110@gmail.com",
    to: toemail,
    subject: "testing",
    text: otp
  };


  //step:3
  await transporter.sendMail(mailOptions, function(err, data){
    if(err){
        console.log("error",err)
    }
    else{
        console.log("Email sent!!!!")
    }
  })
  return otp
}

function verifyOTP(otp1) {
  if(otp1 == otp){
    console.log("registration successfully")
  }
  else{
    console.log("Wrong otp",otp,otp1)
  }
}

// var mail = "pkgohil7698435117@gmail.com"
// var otp = Math.floor(1000 + Math.random() * 9000).toString()
// Email(mail,otp)
module.exports = {Email,verifyOTP}

