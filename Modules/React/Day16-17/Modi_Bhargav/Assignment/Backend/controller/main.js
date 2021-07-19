const express = require("express");
const router = express.Router();

const Student = require("./studentApi/Student");

router.use("/student", Student);

module.exports = router;
