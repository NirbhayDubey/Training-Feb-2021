// import require modules
const {getProperty ,addNewProperty} = require('../../Controllers/property');
const express= require('express');
const router = express.Router();

//get payment
router.get('/',getProperty)

router.get("/:id", getProperty);

//add new payment deails
router.post('/',addNewProperty)


//export modules
module.exports = router