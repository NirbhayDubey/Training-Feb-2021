const cityDriver = require("../../../models/cityCar");
const outstationDriver = require("../../../models/outstationCars");
const rentalDriver = require("../../../models/rentalCar");
const express = require("express");
const routerDriver = express.Router();

const jwt = require("jsonwebtoken");

class Login {
  static async driverLogin(req, res) {
    const driverData = {
      Email1: req.body.Email,
      passWord1: req.body.passWord,
    };
    let token = jwt.sign({ driverData }, global.config.secretKey, {
      algorithm: global.config.algorithm,
      expiresIn: "24h",
    });

    const cityDriver1 = await cityDriver.findOne({
      Email: driverData.Email1,
      passWord: driverData.passWord1,
    });
    const outstationDriver1 = await outstationDriver.findOne({
      Email: driverData.Email1,
      passWord: driverData.passWord1,
    });

    const rentalDriver1 = await rentalDriver.findOne({
      Email: driverData.Email1,
      passWord: driverData.passWord1,
    });
    if (cityDriver1 !== null) {
      res.status(200).send({
        message: "Login Successful cityDriver",
        Token: token,
        cityDriver1,
      });
    } else if (outstationDriver1 !== null) {
      res.status(200).send({
        message: "Login Successful outstationDriver",
        Token: token,
        outstationDriver1,
      });
    } else if (rentalDriver1 !== null) {
      res.status(200).send({
        message: "Login Successful rentalDriver",
        Token: token,
        rentalDriver1,
      });
    } else {
      res.status(401).send({
        message: "Login Failed",
      });
    }
  }
}
routerDriver.post("/", Login.driverLogin);

module.exports = routerDriver;
