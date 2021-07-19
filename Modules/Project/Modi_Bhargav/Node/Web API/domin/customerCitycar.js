const cityCar = require("../models/cityCar");
const express = require("express");
const customerCitycars = express.Router();

class customerCitycar {
  static async customerCars(req, res) {
    const newData = req.body;
    const Source1 = newData.Source;
    const Destination1 = newData.Destination;
    const carDetails = await cityCar.find({
      Source: Source1,
      Destination: Destination1,
    });

    if (carDetails.length === 0) {
      return res.status(404).json({
        message: "Not a Any Car Avilable This Address",
      });
    }
    try {
      res.send(carDetails);
    } catch (ex) {
      console.log(ex.message);
    }
  }
}

customerCitycars.post("/", customerCitycar.customerCars);

module.exports = customerCitycars;
