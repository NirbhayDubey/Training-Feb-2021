// import require modules
const {
  getpackerAndMovers,
  addNewData_Packers_ANd_Movers,
} = require("../../Controllers/packersMovers");
const express = require('express');
const router = express.Router();


//get request 
router.get('/', getpackerAndMovers);

//post request 
router.post("/", addNewData_Packers_ANd_Movers);

module.exports = router