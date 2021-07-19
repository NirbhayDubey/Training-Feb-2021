const express=require("express");
const router=express.Router();
const jwt = require('jsonwebtoken');
// const security = require("../../authenticate/security")
const customerdata = require('../../models/customer')
const decrypt = require('../../crypto/crypto')
global.config = require('../../config/config')
class Login 
{
    static async customerLogin(req,res)
    {
        const userdata = 
        {
            username : req.body.username,
            password : req.body.password
        }
        console.log(userdata.username, userdata.password)
        let token = jwt.sign(userdata, global.config.secretKey, 
            {
                algorithm : global.config.algorithm,
                expiresIn : '10m'
            });
        
        const customer = await customerdata.find().select('Customer_Name password');
        var flag = 0;
        for(var i of customer)
        {
            // console.log(i.Customer_Name, i.password)
            console.log(decrypt.decrypt(i.password));
            if(userdata.username == i.Customer_Name && userdata.password == decrypt.decrypt(i.password))
                {
                    flag = 1
                    break;
                }
            else
            {
                res.send('error');
                console.log('error');
            }
        }
        if(flag == 1)
        {
            res.status(200).send({
                message : 'Login Successful...',
                Token : token
            });
        }
        else
        {
            res.status(401).send({
                message : 'Login Failed...',
            });
        }
    }
}

router.post('/', Login.customerLogin)

module.exports = router