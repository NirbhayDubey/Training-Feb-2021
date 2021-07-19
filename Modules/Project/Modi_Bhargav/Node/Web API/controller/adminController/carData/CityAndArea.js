const cityArea = require("../../../models/CityAndArea");
const express = require("express");
const cityareaRouter = express.Router();

class CityArea {
  static async AllData(req, res) {
    const cityAreadata = await cityArea.find();
    res.send(cityAreadata);
  }

  static async cityandareaFind(req, res) {
    const ID = req.params.id;
    const specificData = await cityArea.find({ _id: ID });
    if (specificData.length == 0)
      return res.status(404).send("Your Data is Not Avilable");
    res.status(200).send(specificData);
  }

  static async InsertData(req, res) {
    const addData = req.body;
    const newData = new cityArea(addData);
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
    const ID = req.params.id;
    const dataUpdate = await cityArea.find({ _id: ID });
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
    const ID = req.params.id;

    const dataDelete = await cityArea.find({ cityName: ID });

    if (dataDelete.length == 0)
      return res.status(404).send("Your Id Is Not Found");

    const remove = await cityArea.deleteOne({ cityName: ID });

    res.send(dataDelete);
  }
}

cityareaRouter.get("/", CityArea.AllData);
cityareaRouter.get("/:id", CityArea.cityandareaFind);
cityareaRouter.post("/", CityArea.InsertData);
cityareaRouter.put("/:id", CityArea.UpdateData);
cityareaRouter.delete("/:id", CityArea.DeleteData);

module.exports = cityareaRouter;
