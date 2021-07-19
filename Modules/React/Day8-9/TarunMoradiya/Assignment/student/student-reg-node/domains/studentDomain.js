const Student = require("../models/student");
const debug = require("debug")("std:std");
const path = require("path");
const fs = require("fs");
const imgKit = require("../helpers/imageKit");

class StudentDomain {
  async getStudents(req, res) {
    try {
      //check if id given in url
      if (req.params.id) {
        //get student
        const student = await Student.findById(req.params.id);

        //if student not found
        if (!student)
          return res.status(400).send("student with given id not found");

        //send response
        res.send(student);
      } else {
        //get all students
        const students = await Student.find().sort("firstName");

        //send response
        res.send(students);
      }
    } catch (err) {
      res.send(err);
    }
  }
  async addStudent(req, res) {
    try {
      debug(req.body);
      debug(req.files);
      const img = req.files["img"][0];
      const collegeLogo = req.files["collegeLogo"][0];

      debug(img, collegeLogo);

      let { fileId: imgId, url: imgPath } = await imgKit.uploadImg(
        img.path,
        img.originalname
      );
      let { fileId: logoId, url: logoPath } = await imgKit.uploadImg(
        collegeLogo.path,
        collegeLogo.originalname
      );

      // create new student
      const student = new Student({
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        email: req.body.email,
        dob: req.body.dob,
        birthPlace: req.body.birthPlace,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        pin: req.body.pin,
        lang: req.body.lang,
        img: imgPath,
        imgId: imgId,
        collegeName: req.body.collegeName,
        collegeLogo: logoPath,
        logoId: logoId,
        refDetail: req.body.referenceDetail,
        refThrough: req.body.referenceThrough,
        phone: req.body.phone,
        addr: req.body.addr,
        mother: {
          firstName: req.body.mFirstName,
          middleName: req.body.mMiddleName,
          lastName: req.body.mLastName,
          qualification: req.body.mQualification,
          profession: req.body.mProfession,
          designation: req.body.mDesignation,
          phone: req.body.mPhone,
          email: req.body.mEmail,
        },
        father: {
          firstName: req.body.fFirstName,
          middleName: req.body.fMiddleName,
          lastName: req.body.fLastName,
          qualification: req.body.fQualification,
          profession: req.body.fProfession,
          designation: req.body.fDesignation,
          phone: req.body.fPhone,
          email: req.body.fEmail,
        },
      });
      //save student
      await student.save();

      // send response
      res.send(student);
    } catch (err) {
      res.send(err);
    }
  }
  async updateStudent(req, res) {
    try {
      //get student
      let student = await Student.findById(req.params.id);

      //if student not found
      if (!student)
        return res.status(400).send("student with given id not found");

      if (req.files["collegeLogo"]) {
        debug("in");
        const collegeLogo = req.files["collegeLogo"][0];
        let { fileId: logoId, url: logoPath } = await imgKit.uploadImg(
          collegeLogo.path,
          collegeLogo.originalname
        );
        await imgKit.deleteImg(student.logoId);
        student.collegeLogo = logoPath;
        student.logoId = logoId;
      }

      if (req.files["img"]) {
        const img = req.files["img"][0];
        let { fileId: imgId, url: imgPath } = await imgKit.uploadImg(
          img.path,
          img.originalname
        );
        await imgKit.deleteImg(student.imgId);
        student.imgId = imgId;
        student.img = imgPath;
        debug(student.imgId, student.img);
      }

      debug(student);

      if (req.body.firstName) student.firstName = req.body.firstName;
      if (req.body.middleName) student.middleName = req.body.middleName;
      if (req.body.lastName) student.lastName = req.body.lastName;
      if (req.body.email) student.email = req.body.email;
      if (req.body.dob) student.dob = req.body.dob;
      if (req.body.birthPlace) student.birthPlace = req.body.birthPlace;
      if (req.body.city) student.city = req.body.city;
      if (req.body.state) student.state = req.body.state;
      if (req.body.country) student.country = req.body.country;
      if (req.body.pin) student.pin = req.body.pin;
      if (req.body.lang) student.lang = req.body.lang;
      if (req.body.collegeName) student.collegeName = req.body.collegeName;
      if (req.body.refDetail) student.refDetail = req.body.refDetail;
      if (req.body.refThrough) student.refThrough = req.body.refThrough;
      if (req.body.phone) student.phone = req.body.phone;
      if (req.body.addr) student.addr = req.body.addt;
      if (req.body.mFirstName) student.mother.firstName = req.body.mFirstName;
      if (req.body.mMiddleName)
        student.mother.middleName = req.body.mMiddleName;
      if (req.body.mLastName) student.mother.lastName = req.body.mLastName;
      if (req.body.mQualification)
        student.mother.qualification = req.body.mQualification;
      if (req.body.mProfession)
        student.mother.profession = req.body.mProfession;
      if (req.body.mDesignation)
        student.mother.designation = req.body.mDesignation;
      if (req.body.mPhone) student.mother.phone = req.body.mPhone;
      if (req.body.fFirstName) student.father.firstName = req.body.fFirstName;
      if (req.body.fMiddleName)
        student.father.middleName = req.body.fMiddleName;
      if (req.body.fLastName) student.father.lastName = req.body.fLastName;
      if (req.body.fQualification)
        student.father.qualification = req.body.fQualification;
      if (req.body.fProfession)
        student.father.profession = req.body.fProfession;
      if (req.body.fDesignation)
        student.father.designation = req.body.fDesignation;
      if (req.body.fPhone) student.father.phone = req.body.fPhone;

      student = await student.save();
      debug(student);
      //send response
      res.send(student);
    } catch (err) {
      debug("err:", err);
      res.send(`err ${err}`);
    }
  }
  async deleteStudent(req, res) {
    try {
      const student = await Student.findByIdAndRemove(req.params.id);
      debug(student);
      //if student not found
      if (!student)
        return res.status(400).send("student with given id not found");

      debug(student.imgId);
      debug(student.logoId);

      const response = await imgKit.bulkDeleteImg([
        student.imgId,
        student.logoId,
      ]);

      debug(response);

      //send response
      res.send(student);
    } catch (err) {
      res.send(err);
    }
  }
}

module.exports = StudentDomain;
