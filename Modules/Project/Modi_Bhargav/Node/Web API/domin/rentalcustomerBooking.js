const rentalTrip = require("../models/rental_trip");
const rentalCar = require("../models/rentalCar");
const createOtp = require("../otpValidation/otpSend");
const express = require("express");
const rentalcustomerRouter = express.Router({ mergeParams: true });

class rentalcustomerBooking {
  static async cusbookingDone(req, res) {
    const ID = parseInt(req.params.id);

    const newTrip = {
      customerNumber: ID,
      customerEmail: req.body.customerEmail,
      ScheduleDate: req.body.ScheduleDate,
      Schedule: req.body.Schedule,
      pickUp: req.body.pickUp,
      Package: req.body.Package,
      driverEmail: req.body.driverEmail,
      driverNumber: req.body.driverNumber,
      registrationNumber: req.body.registrationNumber,
      carType: req.body.carType,
      fareAmount: req.body.distance * req.body.fareAmount,
    };
    const Number = newTrip.driverNumber;
    const sendOtp = createOtp.createOTP();
    const carDriverData = await rentalCar.find({ phoneNumber: Number });

    const addData = new rentalTrip(newTrip);
    try {
      const result = await addData.save();
      res.status(200).send({ carDriverData, result, sendOtp });
    } catch (ex) {
      console.log(ex.message);
    }
  }
}
rentalcustomerRouter.post("/", rentalcustomerBooking.cusbookingDone);

module.exports = rentalcustomerRouter;
