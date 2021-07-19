const express=require("express");
const router=express.Router({mergeParams:true});
router.use(express.json());
const security = require("../../authenticate/security");
const encrypt = require("../../crypto/crypto")
const loginUser = require("../login/login")

 const customerdata = require('../../models/customer')
 const orderdata = require('../../models/order')
 const mail = require('../../email/email')

var a;

class Customer
{
    static async allData(req,res )
    {
        const data = await customerdata.find()
        res.send(data);
       
    }
    static async getData(req,res )
    {
        const ID = parseInt(req.params.id)
        const data = await customerdata.find({Customer_ID : ID})
        
        if(data.length == 0)
            res.status(404).send("Record not found..")
        res.send(data);       
    }
    static async getOrderData(req,res)
    {
        const ID= parseInt(req.params.id)
        const custdata = await customerdata.find({Customer_ID : ID})
        if(custdata.length == 0 ) res.status(404).send("Record not found..")

        const orddata = await orderdata.find().populate("Customer")
        var data = []
        for(var i of orddata)
        {
            for(var j of i.Customer)
            {
                if(j.Customer_ID == ID)
                {
                    const patientt = await orderdata.find({Order_ID : i.Order_ID}).select('FoodItems')
                    data.push(patientt)
                }
            }
        }
        if(data.length == 0) res.status(404).send("Record not found")
        res.send(data)
    }
    static async putData(req,res)
    {
        const ID= parseInt(req.params.id)
        const data = await customerdata.find({Customer_ID : ID})
        if(data.length == 0) res.status(404).send("Record not found")

        const newdata = req.body
        for(let i in newdata)
        {
            data[0][i] = newdata[i]
        }
        try{
            const result = await data[0].save();
            res.send(result)
        }
        catch(ex){
            for(let field in ex.errors)
            console.log(ex.errors[field].message);
        }
    }
    static async postData(req,res )
    {
        const newdata = req.body
        const password = newdata.password
        console.log(password);

        a=newdata
        const c1 = newdata.email
        const sentOTP = mail.send(c1);

        const newpassword = encrypt.encrypt(password)
        console.log(newpassword);

        newdata.password = newpassword
        const data = new customerdata(newdata)
        try{
            const result = await data.save();
            res.send(result)
            res.send('Check your Email and Varify OTP...')
        }
        catch(ex){
            for(let field in ex.errors)
            console.log(ex.errors[field].message);
        }
    }
    static async deleteData(req,res )
    {
        const ID = parseInt(req.params.id)
        const data = await customerdata.find({Customer_ID : ID})
        const remove=await customerdata.remove({Customer_ID : ID})
       res.send(data)
    }
    static async verify(req,res)
    {
        const domain = new Customer();
        domain.verify(req,res);
    }
    async verify (req,res)
    {
        const otp = parseInt(req.params.id)
        var verify = mail.verifyOTP(otp)
        if (verify == true)
        {
            const data = new Customer(a)
            try
            {
                const result = await data.save();
                res.send('Data Inserted...')
                res.send(result);
                
            }
            catch(ex)
            {
                for(let field in ex.error)
                    console.log(ex.error[field].message)
            }
        }
        else
        {
            res.send("You have entered wrong OTP");
        }
    }
}
router.get("/", Customer.allData);
router.get("/:id", Customer.getData);
router.get("/:id/order", Customer.getOrderData);

router.get("/signup/verify/:id",Customer.verify)

router.put("/:id",Customer.putData)
router.post("/signup",Customer.postData)
router.delete("/:id",Customer.deleteData);

router.use('/signin', loginUser)
router.use(security);

module.exports=router;