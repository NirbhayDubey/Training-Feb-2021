const nodemailer = require("nodemailer");
const debug = require("debug")("rx:mailer");
const user = process.env.mail_user;
const pass = process.env.mail_pass;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user,
    pass,
  },
});

const sendEmail = (emailAddress, emailSub, emailHtml) => {
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: user,
      to: emailAddress,
      subject: emailSub,
      html: emailHtml,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        debug(error);
        reject(error);
      } else {
        debug("Email sent: " + info.response);
        resolve(info.response);
      }
    });
  });
};

module.exports = sendEmail;
