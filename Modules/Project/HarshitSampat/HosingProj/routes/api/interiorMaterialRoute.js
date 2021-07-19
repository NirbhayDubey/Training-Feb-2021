// import require modules
const {getInterriorDetails,addNewInteriorDetails} = require('../../Controllers/interiorMatrial');
const express= require('express');
const router = express.Router();


//get request
router.get('/',getInterriorDetails)

//post request for interior
router.post('/',addNewInteriorDetails)
    
//exports modules
module.exports = router



