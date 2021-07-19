// import require modules
const {
  getResponse,
  login,
  googleLogin,
} = require("../../Controllers/userController");
const express= require('express');
const router = express.Router();

//get request
router.get('/',getResponse)

//Post request
router.post('/login',login)



//export modules
module.exports = router