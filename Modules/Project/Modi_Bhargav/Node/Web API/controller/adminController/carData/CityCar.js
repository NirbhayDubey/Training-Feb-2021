const cityCar = require("../../../models/cityCar");
const express = require("express");
const citycarRouter = express.Router();

class CityCars {
  static async carList(req, res) {
    const cityCardata = await cityCar.find();
    res.send(cityCardata);
  }

  static async carFind(req, res) {
    const ID = parseInt(req.params.id);
    const specificData = await cityCar.find({ registrationNumber: ID });
    if (specificData.length == 0)
      return res.status(404).send("Your Data is Not Avilable");
    res.status(200).send(specificData);
  }

  static async InsertData(req, res) {
    const addData = req.body;
    const newData = new cityCar(addData);
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
    const dataUpdate = await cityCar.find({ registrationNumber: ID });
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

    const dataDelete = await cityCar.find({ registrationNumber: ID });

    if (dataDelete.length == 0)
      return res.status(404).send("Your Id Is Not Found");

    const remove = await cityCar.deleteOne({ registrationNumber: ID });

    res.send(dataDelete);
  }
}

citycarRouter.get("/", CityCars.carList);
citycarRouter.get("/:id", CityCars.carFind);
citycarRouter.post("/", CityCars.InsertData);
citycarRouter.put("/:id", CityCars.UpdateData);
citycarRouter.delete("/:id", CityCars.DeleteData);

module.exports = citycarRouter;
