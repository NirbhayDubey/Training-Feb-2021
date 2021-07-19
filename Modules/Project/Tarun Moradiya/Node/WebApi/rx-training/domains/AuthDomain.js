// import modules
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const Joi = require("joi");

const { User, validate: validateUser } = require("../models/user");
const { Department } = require("../models/department");
const { Technology } = require("../models/technology");
const asyncHandler = require("express-async-handler");
const sendEmail = require("../helpers/mailer");
const debug = require("debug")("rx:auth");

class AuthDomain {
  changePassword = async (req, res) => {
    try {
      debug(req.body);
      const user = await User.findById(req.user._id);

      const validPassword = await bcrypt.compare(
        req.body.oldPassword,
        user.password
      );
      if (validPassword) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(req.body.newPassword, salt);
        await user.save();
        res.send(true);
      } else {
        debug("wrong password");
        res.send(false);
      }
    } catch (error) {
      debug(error);
      res.send(false);
    }
  };

  recover = async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) return res.json({ msg: "user does not exist" });
      const recoverToken = await user.generateRecoverToken();
      const resetUrl = `${process.env.reactOrigin}/reset-password`;
      const subject = "Reset Password";
      const msg = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
          <style>
            h1 {
              text-align: center;
            }
            p {
              text-align: center;
              color: skyblue;
            }
            a {
              text-decoration: none;
              font-weight: bold;
            }
            table {
              margin: auto;
              border-collapse: collapse;
            }
            td,
            th {
              border: 1px solid #333;
              padding: 1rem;
            }
          </style>
        </head>
        <body>
          <h1>Reset Password</h1>
          <table>
            <tr>
              <th>Email</th>
              <td>${user.email}</td>
            </tr>
            <tr>
              <th>OTP</th>
              <td>${recoverToken}</td>
            </tr>
          </table>
          <p>click <a href=${resetUrl}>here</a> to reset password</p>
        </body>
      </html>

      `;
      const info = await sendEmail(user.email, subject, msg);
      debug({ msg: "email sent", info });
      res.json({ msg: "email sent", info });
    } catch (err) {
      debug(err);
      res.json({ msg: "error", err });
    }
  };

  resetPassword = async (req, res) => {
    try {
      debug(req.body);
      const user = await User.findOne({ email: req.body.email });
      debug(user);
      if (user.resetPasswordToken && user.resetPasswordToken === req.body.otp) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(req.body.password, salt);
        user.resetPasswordToken = undefined;
        await user.save();
        debug({ msg: "password reset successful", success: true });
        res.json({ msg: "password reset successful", success: true });
      } else {
        debug({ msg: "otp is incorrect", success: false });
        res.json({ msg: "otp is incorrect", success: false });
      }
    } catch (err) {
      debug(err);
      res.json({ msg: "error", success: false, err });
    }
  };

  //To login
  async login(req, res) {
    try {
      // const { error } = validate(req.body);
      // if (error) return res.status(400).send(error.details[0].message);

      debug(req.body);

      let user = await User.findOne({ email: req.body.email });
      if (!user) return res.status(400).send("Invalid email or password");

      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (!validPassword)
        return res.status(400).send("Invalid email or password");

      // generate token
      const token = user.getAuthToken();
      debug(user, token);

      //set cookie and send
      // res.cookie("token", token, {
      //   expires: new Date(Date.now() + 36000000),
      //   secure: false, // set to true if your using https
      //   httpOnly: true,
      // });
      res.send({
        message: "login successful",
        loggedIn: true,
        token,
        userInfo: { email: user.email, isAdmin: user.isAdmin },
      });
    } catch (error) {
      res.send(error);
    }
  }
}

module.exports = AuthDomain;
