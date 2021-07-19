const Trip = require('../../../models/trip_model')
const express = require("express");
const tripRouter = express.Router();

class Trips {
  static async tripList(req, res) {
    const tripData = await Trip.find()
      .populate("customerId", "-__v")
      .populate("carId", "-__v")
    res.send(tripData);
  }

  static async tripFind(req, res) {
    const ID = parseInt(req.params.id)
    const specificData = await Trip.find({ tripId: ID })
      .populate("customerId", "-__v")
      .populate("carId", "-__v")
    if (specificData.length == 0) return res.status(404).send("Your Trip Data is Not Avilable")
    res.status(200).send(specificData);
  }

  static async InsertData(req, res) {
    const addData = req.body
    const newData = new Trip(addData)
    try {
      const result = await newData.save()
      res.status(200).send(result)
    }
    catch (ex) {
      for (let field in ex.errors) {
        res.status(404).send(ex.errors[field].message)
      }
    }
  };

  static async UpdateData(req, res) {

    const ID = parseInt(req.params.id)
    const dataUpdate = await Trip.find({ tripId: ID })
    if (dataUpdate.length == 0) return res.status(404).send("Your Data Is Not Found")
    const newData = req.body
    for (let i in newData) {
      dataUpdate[0][i] = newData[i]
    }
    try {
      const result = await dataUpdate[0].save()
      res.send(result)
    }
    catch (ex) {
      for (let field in ex.errors) {
        res.status(404).send(ex.errors[field].message)
      }
    }

  }
  static async DeleteData(req, res) {
    const ID = parseInt(req.params.id)

    const dataDelete = await Trip.find({ tripId: ID })

    if (dataDelete.length == 0) return res.status(404).send("Your Id Is Not Found")

    const remove = await Trip.deleteOne({ tripId: ID })

    res.send(dataDelete)
  }
}
tripRouter.get('/all', Trips.tripList);
tripRouter.get('/:id', Trips.tripFind);
tripRouter.post('/all', Trips.InsertData);
tripRouter.put('/:id', Trips.UpdateData);
tripRouter.delete('/:id', Trips.DeleteData);

module.exports = tripRouter;