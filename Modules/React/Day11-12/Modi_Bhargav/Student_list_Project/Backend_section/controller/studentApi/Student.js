const students = require("../../models/StudentData");
const express = require("express");
const studentRouter = express.Router();

class Student {
  static async studentList(req, res) {
    const studentData = await students.find();
    try {
      res.send(studentData);
    } catch (ex) {
      for (let field in ex.errors) {
        res.status(404).send(ex.errors[field].message);
      }
    }
  }

  static async studentFind(req, res) {
    const ID = parseInt(req.params.id);
    const selectData = await students.find({ enrollNumber: ID });
    if (selectData.length == 0) res.status(404).send("Your Id Is Not Found");
    try {
      res.status(200).send(selectData[0]);
    } catch (ex) {
      console.log(ex.message);
    }
  }

  static async InsertData(req, res) {
    const addData = req.body;
    const newData = new students(addData);
    try {
      const result = await newData.save();
      res.status(200).send(result);
    } catch (ex) {
      console.log(ex.message);
    }
  }

  static async UpdateData(req, res) {
    const ID = parseInt(req.params.id);
    const dataUpdate = await students.find({ enrollNumber: ID });
    if (dataUpdate.length == 0)
      return res.status(404).send("Your Id Is Not Found");
    const newData = req.body;
    for (let i in newData) {
      dataUpdate[0][i] = newData[i];
    }
    try {
      const result = await dataUpdate[0].save();
      res.send(result);
    } catch (ex) {
      // res.status(404).send(ex.message);
      console.log(ex.message);
    }
  }

  static async DeleteData(req, res) {
    const ID = parseInt(req.params.id);

    const dataDelete = await students.find({ enrollNumber: ID });

    if (dataDelete.length == 0) res.status(404).send("Your Id Is Not Found");

    const remove = await students.deleteOne({ enrollNumber: ID });

    res.send(dataDelete);
  }
}

studentRouter.get("/", Student.studentList);
studentRouter.get("/:id", Student.studentFind);
studentRouter.post("/", Student.InsertData);
studentRouter.put("/:id", Student.UpdateData);
studentRouter.delete("/:id", Student.DeleteData);

module.exports = studentRouter;
