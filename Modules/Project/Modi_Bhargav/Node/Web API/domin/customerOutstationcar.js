const outstationCars = require("../models/outstationCars");
const CityAndArea = require("../models/CityAndArea");
const express = require("express");
const customerOutstationcars = express.Router();
// const cusbookingRouter = express.Router({ mergeParams: true });

class Data {
  static distance(Slat1, Slon1, Dlat1, Dlon2) {
    if (Slat1 == Dlat1 && Slon1 == Dlon2) {
      return 0;
    } else {
      var radlat1 = (Math.PI * Slat1) / 180;
      var radlat2 = (Math.PI * Dlat1) / 180;
      var theta = Slon1 - Dlon2;
      var radtheta = (Math.PI * theta) / 180;
      var dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.85315962;

      return Math.ceil(dist);
    }
  }
}
class customerOutstationcar {
  static async customerCars(req, res) {
    const newData = req.body;
    const Source1 = newData.Source;
    const Destination1 = newData.Destination;
    const carDetailsSource = await outstationCars.find({
      Source: Source1,
    });
    const carSource = await CityAndArea.findOne({
      cityName: Source1,
    });

    const carDestinaion = await CityAndArea.findOne({
      cityName: Destination1,
    });

    if (carDetailsSource.length === 0) {
      return res.status(404).json({
        message: "Not a Any Car Avilable This Address",
      });
    }
    try {
      if (carSource && carDestinaion) {
        const Slat1 = carSource.latitude;
        const Slon1 = carSource.longitude;
        const Dlat1 = carDestinaion.latitude;
        const Dlon2 = carDestinaion.longitude;
        const distance1 = Data.distance(Slat1, Slon1, Dlat1, Dlon2);
        res.send({ carDetailsSource, distance1 });
      }
    } catch (ex) {
      console.log(ex.message);
    }
  }
}

customerOutstationcars.post("/", customerOutstationcar.customerCars);
module.exports = customerOutstationcars;
