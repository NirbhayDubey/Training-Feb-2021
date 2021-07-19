const cityCar = require("../../../models/cityCar");
const outstationCar = require("../../../models/outstationCars");
const rentalCar = require("../../../models/rentalCar");
const express = require("express");
const driversRouter = express.Router({ mergeParams: true });

class GetDrivers {
  static async driverFind(req, res) {
    const ID = parseInt(req.params.id);
    const cityData = await cityCar.find({ registrationNumber: ID });
    const outstationData = await outstationCar.find({ registrationNumber: ID });
    const rentalData = await rentalCar.find({ registrationNumber: ID });

    if (cityData.length != 0) {
      res.status(200).send(cityData);
    } else if (outstationData.length != 0) {
      res.status(200).send(outstationData);
    } else if (rentalData.length != 0) {
      res.status(200).send(rentalData);
    } else {
      res.status(404).send("Your Data is Not Avilable");
    }
  }
}
driversRouter.get("/:id", GetDrivers.driverFind);
module.exports = driversRouter;
