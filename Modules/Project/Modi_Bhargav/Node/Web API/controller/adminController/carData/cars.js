const Car = require('../../../models/cars_model')
const express = require("express");
const carRouter = express.Router();

class Cars {
  static async carList(req, res) {
    const carData = await Car.find().populate("driverData")
    res.send(carData);
  }

  static async carFind(req, res) {
    const ID = parseInt(req.params.id)
    const specificData = await Car.find({ carId: ID })
    .populate("driverData")
    if (specificData.length == 0) return res.status(404).send("Your Data is Not Avilable")
    res.status(200).send(specificData);
  }

  static async InsertData(req, res) {
    const addData = req.body
    const newData = new Car(addData)
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
    const dataUpdate = await Car.find({ carId: ID })
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

    const dataDelete = await Car.find({ carId: ID })

    if (dataDelete.length == 0) return res.status(404).send("Your Id Is Not Found")

    const remove = await Car.deleteOne({ carId: ID })

    res.send(dataDelete)
  }
}

carRouter.get('/all', Cars.carList);
carRouter.get('/:id', Cars.carFind);
carRouter.post('/all', Cars.InsertData);
carRouter.put('/:id', Cars.UpdateData);
carRouter.delete('/:id', Cars.DeleteData);

module.exports = carRouter;