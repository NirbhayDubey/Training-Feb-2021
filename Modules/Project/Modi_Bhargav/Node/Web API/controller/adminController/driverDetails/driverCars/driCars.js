const Driver = require('../../../../models/Drivers_model')
const Car = require('../../../../models/cars_model')
const express = require("express");
const drivcarRouter = express.Router({mergeParams:true});
const drivertripsFile = require('../../../../domin/driversTrip')

class DriverCar{
static async drivercarFind(req, res) {

  const ID = parseInt(req.params.id)
  const selectData = await Driver.find({ driverId: ID }).select('-__v')
  if (selectData.length == 0) return res.status(404).send("Your Doctors Is Not Found")

  const carDetails = await Car.find()
    .populate("driverData")
  var carData = []
  for (var i of carDetails) {
    if (i.driverData.driverId == ID) {
      const cars = await Car.find({ carId: i.carId }).select("carId registrationNumber carType1 -_id")
      carData.push(cars)
    }
  }
  if (carData.length == 0) return res.status(404).send("Not a Any Fill car details by driver")

  res.send(carData)
}
}

drivcarRouter.get('/', DriverCar.drivercarFind)

drivcarRouter.use('/trip', drivertripsFile)

module.exports = drivcarRouter
