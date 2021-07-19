const express = require("express");
const mongoose = require("mongoose");
const studentRouter = express.Router();

const student2 = require("../../assignment/Model/student1");
const Student2 = mongoose.model("Student2", student2);
const axios = require("axios");

studentRouter.post("/getData", async (req, res) => {
  console.log(req.body.fname);
  const student = new Student2({
    Id: req.body.Id,
    fname: req.body.fname,
    mname: req.body.mname,
    lname: req.body.lname,
    ffname: req.body.ffname,
    fmname: req.body.fmname,
    flname: req.body.flname,
    collegeLogo: req.body.collegeLogo,
    studentImage: req.body.studentImage,
    selectedCountry: req.body.selectedCountry,
    selectedDegree: req.body.selectedDegree,
    selectedState: req.body.selectedState,
    DOB: req.body.DOB,
    collegeName: req.body.collegeName,
    email: req.body.email,
    selectedCity: req.body.selectedCity,
  });
  const newStudent = await student.save();
  res.json(newStudent);
});

studentRouter.get("/getData", async (req, res) => {
  const students = await Student2.find();
  res.json(students);
});

studentRouter.get("/getData/:id", async (req, res) => {
  const student = await Student2.find({ Id: req.params.id });
  res.json(student);
});

studentRouter.delete("/getData/:id", async (req, res) => {
  const student1 = await Student2.findOneAndDelete({ Id: req.params.id });
  res.json(student1);
});

studentRouter.put("/getData/:id", async (req, res) => {
  const student1 = await Student2.updateOne(
    { Id: req.params.id },
    {
      $set: {
        Id: req.body.Id,
        fname: req.body.fname,
        mname: req.body.mname,
        lname: req.body.lname,
        ffname: req.body.ffname,
        fmname: req.body.fmname,
        flname: req.body.flname,
        collegeLogo: req.body.collegeLogo,
        studentImage: req.body.studentImage,
        selectedCountry: req.body.selectedCountry,
        selectedDegree: req.body.selectedDegree,
        selectedState: req.body.selectedState,
        DOB: req.body.DOB,
        collegeName: req.body.collegeName,
        email: req.body.email,
        selectedCity: req.body.selectedCity,
      },
    }
  );
  res.json(student1);
});
module.exports = studentRouter;

