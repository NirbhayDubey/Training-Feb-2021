var router = require("express").Router();
var Student = require("../Model/StudentModel");

//get all Student by id and all data too

exports.getAllStudents = async (req, res) => {
  if (req.params.id) {
    //get student By id

    const student = await Student.find({studentId:req.params.id});
    if (!req.params.id)
      res.send("Could not find student With this id Check ID again");

    //send response
    res.send(student);
  } else {
    //get all srtudents
    const students = await Student.find();


    //send response
    res.send(students);
  }
};

//add new student
exports.addNewStudent = async (req, res) => {
  const student = new Student({
    studentId: req.body.studentId,
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    lastName: req.body.lastName,
    DOB: req.body.DOB,
    birthPlace: req.body.birthPlace,
    firstLanguage: req.body.firstLanguage,
    city: req.body.city,
    State: req.body.State,
    pinCode: req.body.pinCode,
    fatherName: req.body.fatherName,
    fatherMiddleName: req.body.fatherMiddleName,
    fatherLastName: req.body.fatherLastName,
    fatherEmail: req.body.fatherEmail,
    fatherQulification: req.body.fatherQulification,
    fatherProfession: req.body.fatherProfession,
    fatherDesignation: req.body.fatherDesignation,
    fatherPhoneNo: req.body.fatherPhoneNo,
    motherName: req.body.motherName,
    motherMiddleName: req.body.motherMiddleName,
    motherLastName: req.body.motherLastName,
    motherEmail: req.body.motherEmail,
    motherQulification: req.body.motherQulification,
    motherProfession: req.body.motherProfession,
    motherDesignation: req.body.motherDesignation,
    motherPhoneNo: req.body.motherPhoneNo,
    EmergencyContact: req.body.EmergencyContact,
    relation: req.body.relation,
    referenceName: req.body.referenceName,
    gender: req.body.gender,
    Img: req.body.Img,
  });

  await student.save();

  //send response
  res.send(student);
};

//update student
exports.updateStudent = async (req, res) => {
  //check stundent by id  
  const student = await Student.find({studentId:req.params.id});
  

  //update student
  if (req.body.firstName) student.firstName = req.body.firstName;
  if (req.body.middleName) student.middleName = req.body.middleName;
  if (req.body.lastName) student.lastName = req.body.lastName;
  if (req.body.DOB) student.DOB = req.body.DOB;
  if (req.body.birthPlace) student.birthPlace = req.body.birthPlace;
  if (req.body.firstLanguage) student.firstLanguage = req.body.firstLanguage;
  if (req.body.city) student.city = req.body.city;
  if (req.body.State) student.State = req.body.State;
  if (req.body.pinCode) student.pinCode = req.body.pinCode;
  if (req.body.fatherName) student.fatherName = req.body.fatherName;
  if (req.body.fatherMiddleName)
    student.fatherMiddleName = req.body.fatherMiddleName;
  if (req.body.fatherLastName) student.fatherLastName = req.body.fatherLastName;
  if (req.body.fatherEmail) student.fatherEmail = req.body.fatherEmail;
  if (req.body.fatherQulification)
    student.fatherQulification = req.body.fatherQulification;
  if (req.body.fatherProfession)
    student.fatherProfession = req.body.fatherProfession;
  if (req.body.fatherDesignation)
    student.fatherDesignation = req.body.fatherDesignation;
  if (req.body.fatherPhoneNo) student.fatherPhoneNo = req.body.fatherPhoneNo;
  if (req.body.motherName) student.motherName = req.body.motherName;
  if (req.body.motherMiddleName)
    student.motherMiddleName = req.body.motherMiddleName;
  if (req.body.motherLastName) student.motherLastName = req.body.motherLastName;
  if (req.body.motherEmail) student.motherEmail = req.body.motherEmail;
  if (req.body.motherQulification)
    student.motherQulification = req.body.motherQulification;
  if (req.body.motherProfession)
    student.motherProfession = req.body.motherProfession;
  if (req.body.motherDesignation)
    student.motherDesignation = req.body.motherDesignation;
  if (req.body.motherPhoneNo) student.motherPhoneNo = req.body.motherPhoneNo;
  if (req.body.EmergencyContact)
    student.EmergencyContact = req.body.EmergencyContact;
  if (req.body.relation) student.relation = req.body.relation;
  if (req.body.referenceName) student.referenceName = req.body.referenceName;
  if (req.body.gender) student.gender = req.body.gender;
  if (req.body.Img) student.Img = req.body.Img;
  console.log(student)
  //save to database
  
 student.save()
  //send response
  res.send();
};

//delete student

exports.deleteStudent = async (req, res) => {
  //remove if student exist
  const student = await Student.findOneAndRemove({ studentId: req.params.id });
  

  //if not found
  if (!student)
    return res.status(401).send("Student with this id is not found");

  //send response
  res.send('Data Deleted');
};
