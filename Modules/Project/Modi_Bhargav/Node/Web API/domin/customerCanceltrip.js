const cityTrip = require("../models/trip_model");
const outstationTrip = require("../models/outstation_trip");
const rentalTrip = require("../models/rental_trip");
const express = require("express");
const customerCanceltrip = express.Router({ mergeParams: true });

class CustomerCanceltrip {
  static async cancelTripDone(req, res) {
    const ID = req.params.id;

    const reasonTrip = req.body;
    const customerRentaltrip = await rentalTrip.findOne({ _id: ID });
    const customerOutstationtrip = await outstationTrip.findOne({ _id: ID });
    const customerCitytrip = await cityTrip.findOne({ _id: ID });
    if (customerOutstationtrip !== null) {
      customerOutstationtrip.Reason = reasonTrip.reason;
      customerOutstationtrip.save();
      res.status(200).send("data save suucessfully");
    } else if (customerRentaltrip !== null) {
      customerRentaltrip.Reason = reasonTrip.reason;
      customerRentaltrip.save();
      res.status(200).send("data save suucessfully");
    } else if (customerCitytrip !== null) {
      customerCitytrip.Reason = reasonTrip.reason;
      customerCitytrip.save();
      res.status(200).send("data save suucessfully");
    } else {
      res.status(404).send("Not data Id Show");
    }
  }
}

customerCanceltrip.post("/", CustomerCanceltrip.cancelTripDone);

module.exports = customerCanceltrip;
