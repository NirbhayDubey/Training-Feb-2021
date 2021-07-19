var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

router.post('/login', (req,res) => {
    const userdata = {
        username : req.body.userId,
        password : req.body.password
    }
    let token = jwt.sign(userdata, global.config.secretKey , {
        algorithm : global.config.algorithm,
        expiresIn:'10m'
    });
    if(userdata.username == 'admin' && userdata.password == 'admin'){
        res.status(200).send('Login Successful ' +token)
    }
    else{
        res.status(401).send('Login Failed')
    }
})

module.exports=router;