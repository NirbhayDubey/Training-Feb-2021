const Driver = require("../models/Drivers_model");
const encrypt = require("../crypto/crypto");
const emailSend = require("../otpValidation/otpSend");
const express = require("express");
const signupRouter = express.Router();

var newData;

class signUp {
  static async InsertData(req, res) {
    var userData = req.body;
    const email = userData.Email;
    const password = userData.passWord;
    console.log(password);

    const newPassword = encrypt.encrypt(password);
    console.log(newPassword);

    userData.passWord = newPassword;

    const sendEmail = emailSend.sendOTP(email);

    newData = userData;
    try {
      res.status(200).send("Please Check Your Email And Verify OTP");
    } catch (ex) {
      for (let field in ex.errors) {
        res.status(404).send(ex.errors[field].message);
      }
    }
  }

  static async verifyotpData(req, res) {
    const ID = parseInt(req.params.otp);
    let verifyCode = emailSend.verifyOTP(ID);
    console.log(verifyCode);
    if (verifyCode == true) {
      const addData = new Driver(newData);
      try {
        const result = await addData.save();
        res.status(200).send(result);
      } catch (ex) {
        for (let field in ex.errors) {
          res.status(404).send(ex.errors[field].message);
        }
      }
    } else {
      res.send("Your Otp Is Not valid");
    }
  }
}

signupRouter.post("/", signUp.InsertData);

signupRouter.post("/verify/:otp", signUp.verifyotpData);

module.exports = signupRouter;
