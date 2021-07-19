const cityTrip = require("../models/trip_model");
const outstationTrip = require("../models/outstation_trip");
const rentalTrip = require("../models/rental_trip");
const express = require("express");
const driverTripRouter = express.Router({ mergeParams: true });

class DriverTrip {
  static async drivertripFind(req, res) {
    const cityTriphistory = await cityTrip.find();
    const outstationTriphistory = await outstationTrip.find();
    const rentalTriphistory = await rentalTrip.find();

    try {
      res.send({ cityTriphistory, outstationTriphistory, rentalTriphistory });
    } catch (ex) {
      console.log(ex.message);
    }
  }
  static async driverTrips(req, res) {
    const ID = parseInt(req.params.id);

    const cityTrips = await cityTrip.find({ driverNumber: ID });
    const cityCustomer = await cityTrip.find({ customerNumber: ID });

    const outstationTrips = await outstationTrip.find({
      driverNumber: ID,
    });
    const outstationCustomer = await outstationTrip.find({
      customerNumber: ID,
    });

    const rentalTrips = await rentalTrip.find({ driverNumber: ID });
    const rentalCustomer = await rentalTrip.find({
      customerNumber: ID,
    });

    if (cityTrips.length != 0) {
      res.status(200).send(cityTrips);
    } else if (cityCustomer.length != 0) {
      res.status(200).send(cityCustomer);
    } else if (outstationCustomer.length != 0) {
      res.status(200).send(outstationCustomer);
    } else if (rentalCustomer.length != 0) {
      res.status(200).send(rentalCustomer);
    } else if (outstationTrips.length != 0) {
      res.status(200).send(outstationTrips);
    } else if (rentalTrips.length != 0) {
      res.status(200).send(rentalTrips);
    } else {
      res.status(404).send("Your Data is Not Avilable");
    }
  }
}
driverTripRouter.get("/", DriverTrip.drivertripFind);
driverTripRouter.get("/:id", DriverTrip.driverTrips);

module.exports = driverTripRouter;
