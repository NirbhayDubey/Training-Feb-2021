const cityDriver = require("../models/cityCar");
const outstationDriver = require("../models/outstationCars");
const rentalDriver = require("../models/rentalCar");
const express = require("express");
const driversRouter = express.Router();

class DriverDetails {
  static async AllDriver(req, res) {
    const cityDrivers = await cityDriver.find();
    const outstationDrivers = await outstationDriver.find();
    const rentalDrivers = await rentalDriver.find();

    try {
      res.send({ cityDrivers, outstationDrivers, rentalDrivers });
    } catch (ex) {
      console.log(ex.message);
    }
  }
}
driversRouter.get("/", DriverDetails.AllDriver);

module.exports = driversRouter;
