const express = require("express");
const student = require("./students/students")
const router = express.Router();


/*router middleware*/
router.use("/student" , student);

//-----------export router--------------------
module.exports = router
