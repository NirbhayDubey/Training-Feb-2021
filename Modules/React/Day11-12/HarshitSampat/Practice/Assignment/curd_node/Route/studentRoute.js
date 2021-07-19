const express = require("express");
const router = express.Router();

const {
  getAllStudents,
  addNewStudent,
  updateStudent,
  deleteStudent,
} = require("../Controllers/StudentController");

//get method route
router.get("/", getAllStudents);

// get element by id
router.get("/:id", getAllStudents);

//post methods route
router.post("/", addNewStudent);

// update student
router.put("/:id", updateStudent);

// delete student
router.delete("/:id", deleteStudent);

module.exports = router;
