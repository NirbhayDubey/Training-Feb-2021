const enquiryData = require("../../../models/driverEnquiry");
const express = require("express");
const enquiryRouter = express.Router();

class EnquiryData {
  static async InsertData(req, res) {
    const addData = req.body;
    const newData = new enquiryData(addData);
    try {
      const result = await newData.save();
      res.status(200).send(result);
    } catch (ex) {
      console.log(ex.message);
    }
  }
}

enquiryRouter.post("/", EnquiryData.InsertData);
module.exports = enquiryRouter;
