var express = require('express');
//const { token } = require('morgan');
var router = express.Router()
const jwt = require('jsonwebtoken')


router.use(function(req,res,next){
    var token =req.headers['x-access-token']
    console.log(token);
    
    jwt.verify(token, global.config.secretKey,{
             algorithm: global.config.algorithm
         },
          function (err, decoded) {
             if (err) {
                 let errordata = {
                     message: err.message,
                     expiredAt: err.expiredAt
                 };
                 console.log(errordata);
                 return res.status(401).json({
                     message: 'Unauthorized Access'
                 });
             }  
             req.decoded = decoded;
             console.log(decoded);
             next();
             }
     )
}
); 

module.exports=router