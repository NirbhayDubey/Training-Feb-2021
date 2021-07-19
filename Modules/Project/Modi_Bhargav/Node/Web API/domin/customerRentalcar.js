const rentalCar = require("../models/rentalCar");
const express = require("express");
const customerRentalcars = express.Router();
// const cusbookingRouter = express.Router({ mergeParams: true });

class customerRentalcar {
  static async customerCars(req, res) {
    const newData = req.body;
    const pickUp1 = newData.pickUp;
    const Package1 = newData.Package;
    const kilometer = Package1.split(" ");
    const distance2 = parseInt(kilometer[2]);
    const hours = parseInt(kilometer[0]);

    const carDetails = await rentalCar.find({
      pickUp: pickUp1,
      Package: Package1,
    });

    if (carDetails.length === 0) {
      return res.status(404).json({
        message: "Not a Any Car Avilable This Address",
      });
    }
    try {
      res.send({ carDetails, distance2, hours });
    } catch (ex) {
      console.log(ex.message);
    }
  }
}

customerRentalcars.post("/", customerRentalcar.customerCars);
module.exports = customerRentalcars;
