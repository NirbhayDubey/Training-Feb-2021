const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

//connection string 
const database = "mongodb://localhost/StudentDbUseEffectDB"

//student router
const studentRouter = require('./Student/StudentController')
router.use("/students",studentRouter)

mongoose.connect(database,{
    useNewUrlParser:true,
    useUnifiedTopology:true,    
}).then(()=>{console.log(`Connected to ${database}...`);
});

module.exports = router