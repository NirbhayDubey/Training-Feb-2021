const rentalCar = require("../../../models/rentalCar");
const express = require("express");
const encrypt = require("../../../crypto/crypto");
const carsRouter = express.Router();

class Cars {
  static async carList(req, res) {
    const rentalCardata = await rentalCar.find();
    res.send(rentalCardata);
  }

  static async carFind(req, res) {
    const ID = parseInt(req.params.id);
    const specificData = await rentalCar.find({ registrationNumber: ID });
    if (specificData.length == 0)
      return res.status(404).send("Your Data is Not Avilable");
    res.status(200).send(specificData);
  }

  static async InsertData(req, res) {
    const addData = req.body;
    const newData = new rentalCar(addData);
    try {
      const result = await newData.save();
      res.status(200).send(result);
    } catch (ex) {
      for (let field in ex.errors) {
        res.status(404).send(ex.errors[field].message);
      }
    }
  }

  static async UpdateData(req, res) {
    const ID = parseInt(req.params.id);
    const dataUpdate = await rentalCar.find({ registrationNumber: ID });
    if (dataUpdate.length == 0)
      return res.status(404).send("Your Data Is Not Found");
    const newData = req.body;
    for (let i in newData) {
      dataUpdate[0][i] = newData[i];
    }
    try {
      const result = await dataUpdate[0].save();
      res.send(result);
    } catch (ex) {
      for (let field in ex.errors) {
        res.status(404).send(ex.errors[field].message);
      }
    }
  }
  static async DeleteData(req, res) {
    const ID = parseInt(req.params.id);

    const dataDelete = await rentalCar.find({ registrationNumber: ID });

    if (dataDelete.length == 0)
      return res.status(404).send("Your Id Is Not Found");

    const remove = await rentalCar.delete({ registrationNumber: ID });
    // console.log(remove);
    res.send(dataDelete);
  }
}

carsRouter.get("/", Cars.carList);
carsRouter.get("/:id", Cars.carFind);
carsRouter.post("/", Cars.InsertData);
carsRouter.put("/:id", Cars.UpdateData);
carsRouter.delete("/:id", Cars.DeleteData);

module.exports = carsRouter;
