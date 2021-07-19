const Trip = require("../models/trip_model");
const cityCar = require("../models/cityCar");
const createOtp = require("../otpValidation/otpSend");
const express = require("express");
const cusbookingRouter = express.Router({ mergeParams: true });

class CustomerBooking {
  static async cusbookingDone(req, res) {
    const ID = parseInt(req.params.id);

    const newTrip = {
      customerNumber: ID,
      registrationNumber: req.body.registrationNumber,
      driverEmail: req.body.driverEmail,
      driverNumber: req.body.driverNumber,
      Source: req.body.Source,
      Destination: req.body.Destination,
      ScheduleDate: req.body.dateTime,
      carType: req.body.carType,
      carModel: req.body.carModel,
      carNumber: req.body.carNumber,
      fareDetails: req.body.fareDetails,
      Schedule: req.body.Schedule,
    };

    const carIds = newTrip.registrationNumber;
    const sendOtp = createOtp.createOTP();

    const carDriverData = await cityCar.find({
      registrationNumber: carIds,
    });
    const addData = new Trip(newTrip);
    try {
      const result = await addData.save();
      res.status(200).send({ carDriverData, result, sendOtp });
    } catch (ex) {
      console.log(ex.message);
    }
  }
}
cusbookingRouter.post("/", CustomerBooking.cusbookingDone);

module.exports = cusbookingRouter;
