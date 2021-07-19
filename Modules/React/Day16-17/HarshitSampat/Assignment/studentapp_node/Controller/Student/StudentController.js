// import Require Modules
const express = require("express");
const router = express.Router();

//import student Domain
const StudentDomain = require("../../Domain/studentdomain");

class StudentsController {
  //add student
  static async addStudent(req, res) {
    const studentDomain = new StudentDomain();
    studentDomain.addStudent(req, res);
  }

  //get all student
  static async getAllStudent(req, res) {
    const studentDomain = new StudentDomain();
    studentDomain.getAllStudents(req, res);
  }

  //get student By id
  static async getStudentById(req, res) {
    const studentDomain = new StudentDomain();
    studentDomain.getStudentById(req, res);
  }

  //update student
  static async updateStudent(req, res) {
    const studentDomain = new StudentDomain();
    studentDomain.updateStudent(req, res);
  }

  //delete Student
  static async deleteStudent(req, res) {
    const studentDomain = new StudentDomain();
    studentDomain.deleteStudent(req, res);
  }
}

//add student
router.post("/", StudentsController.addStudent);

//Get all student
router.get("/", StudentsController.getAllStudent);

//Get student By ID
router.get("/:id", StudentsController.getStudentById);

//Update student
router.put("/:id", StudentsController.updateStudent);

//Delete Student
router.delete("/:id", StudentsController.deleteStudent);

module.exports = router;
