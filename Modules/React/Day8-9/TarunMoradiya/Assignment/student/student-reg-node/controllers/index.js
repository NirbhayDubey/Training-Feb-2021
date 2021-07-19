const router = require("express").Router();
const StudentDomain = require("../domains/studentDomain");
const upload = require("../middlewares/upload");
const debug = require("debug")("std:route");

//class
class StudentController {
  static async get(req, res) {
    debug("get");
    const studentDomain = new StudentDomain();
    await studentDomain.getStudents(req, res);
  }
  static async add(req, res) {
    debug("post");
    const studentDomain = new StudentDomain();
    await studentDomain.addStudent(req, res);
  }
  static async update(req, res) {
    debug("update");
    const studentDomain = new StudentDomain();
    await studentDomain.updateStudent(req, res);
  }
  static async delete(req, res) {
    debug("delete");
    const studentDomain = new StudentDomain();
    await studentDomain.deleteStudent(req, res);
  }
}

//routes

cpUpload = upload.fields([{ name: "img" }, { name: "collegeLogo" }]);

//get all students
//GET http://localhost:3000/students
router.get("/students", StudentController.get);

//get single students
//GET http://localhost:3000/students/:id
router.get("/students/:id", StudentController.get);

//add single student
//POST http://localhost:3000/students
router.post("/students", cpUpload, StudentController.add);

//update single student
//PUT http://localhost:3000/students/:id
router.put("/students/:id", cpUpload, StudentController.update);

//delete single student
//DELETE http://localhost:3000/students/:id
router.delete("/students/:id", StudentController.delete);

module.exports = router;
