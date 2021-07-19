const cityTrip = require("../models/trip_model");
const outstationTrip = require("../models/outstation_trip");
const rentalTrip = require("../models/rental_trip");
const express = require("express");
const cusTripsRouter = express.Router({ mergeParams: true });

class customerTrip {
  static async custripFind(req, res) {
    const ID = parseInt(req.params.id);

    const cityTriphistory = await cityTrip.find({ customerNumber: ID });
    const outstationTriphistory = await outstationTrip.find({
      customerNumber: ID,
    });
    const rentalTriphistory = await rentalTrip.find({ customerNumber: ID });

    try {
      res.send({ cityTriphistory, outstationTriphistory, rentalTriphistory });
    } catch (ex) {
      console.log(ex.message);
    }
  }
}
cusTripsRouter.get("/", customerTrip.custripFind);

module.exports = cusTripsRouter;
