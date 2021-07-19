const Customer = require('../models/customers_model')
const Trip = require('../models/trip_model')
const Car = require('../models/cars_model')
const express = require("express");
const cusbookingRouter = express.Router({ mergeParams: true });

class CustomerBooking {
  static async cusbookingDone(req, res) {
    const ID = parseInt(req.params.id)
    const newData = {
      customerId: ID,
      tripId: req.body.tripId,
      Source: req.body.Source,
      Destination: req.body.Destination,
      carType2: req.body.carType2,
      Distance: req.body.Distance,
      fareDetails: req.body.Distance * 10,
      paymentType: req.body.paymentType
    }
    
    const carDetails = await Car.find().populate("driverData")

    var customerTripData = []
    for (var i of carDetails) {
      if (i.carLocation == newData.Source && i.carType1 == newData.carType2) {
        const carData = await Car.find({ carId: i.carId }).populate("driverData")
        newData.carId = carData[0].carId
        customerTripData.push(carData,newData)
      }
    }
    if (customerTripData.length == 0) return res.status(404).send("Not a Any Car Avilable This Address")
    
    const addData = new Trip(newData)
    try {
      const result = await addData.save()
      res.send(customerTripData)
    }
    catch (ex) {
      for (let field in ex.errors) {
        res.status(404).send(ex.errors[field].message)
      }
    }
  };
};

cusbookingRouter.post('/', CustomerBooking.cusbookingDone)

module.exports = cusbookingRouter
