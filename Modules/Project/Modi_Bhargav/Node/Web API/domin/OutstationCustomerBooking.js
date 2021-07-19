const outstationTrip = require("../models/outstation_trip");
const outstationCar = require("../models/outstationCars");
const createOtp = require("../otpValidation/otpSend");
const express = require("express");
const outstationcustomerRouter = express.Router({ mergeParams: true });

class outstationcustomerBooking {
  static async cusbookingDone(req, res) {
    const ID = parseInt(req.params.id);
    const newTrip = {
      customerNumber: ID,
      Source: req.body.Source,
      Destination: req.body.Destination,
      ScheduleDepart: req.body.ScheduleDepart,
      dateTimeReturn: req.body.dateTimeReturn,
      Journey: req.body.Journey,
      driverEmail: req.body.driverEmail,
      driverNumber: req.body.driverNumber,
      registrationNumber: req.body.registrationNumber,
      carType: req.body.carType,
      fareAmount: req.body.distance * req.body.fareAmount,
    };
    const Number = newTrip.driverNumber;
    const sendOtp = createOtp.createOTP();

    const carDriverData = await outstationCar.find({ phoneNumber: Number });

    const addData = new outstationTrip(newTrip);
    try {
      const result = await addData.save();
      res.status(200).send({ carDriverData, result, sendOtp });
    } catch (ex) {
      console.log(ex.message);
    }
  }
}
outstationcustomerRouter.post("/", outstationcustomerBooking.cusbookingDone);

module.exports = outstationcustomerRouter;
