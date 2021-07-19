//const _ = require("lodash")
const bcrypt = require("bcrypt")
const express = require("express")
const app = express()
const router = express.Router()
const {User} = require("../../model/user")
const {Email} = require("../../domain/emailsend")
const {verifyOTP} = require("../../domain/emailsend")

app.use(express.json())

var opt;
class users{
    static async all(req,res){
        const user1 = await User.find()
        res.send(user1)
    }
    static async one(req,res){
        const user1 = await User.find({UserID : req.params.UserID})
        //res.send(_.pick(user1, ['UserID','User_Type','UserName','User_Mobole_No','User_Email']))
        res.send(user1)
    }
    static async posts(req,res){
        let user = await User.findOne({User_Email : req.body.User_Email})
        if(user) return res.status(400).send("User already registered")

        //password encrypt
        const user1 = new User(req.body)
        const salt = await bcrypt.genSalt(10)
        user1.User_Password = await bcrypt.hash(user1.User_Password,salt)

        //otp send via mail
        const otp = await Email(req.body.User_Email)
        console.log(otp)

        const result = await user1.save()        
        res.send(otp)
    }
    static otps(req,res){
        
        const otp = verifyOTP(req.body.otp)
        res.send(otp)

    }
    static async puts(req,res){
        const user1 = User.find({UserID : req.params.UserID})
        const user2 = await User.updateOne(user1,req.body)
        res.send(user2)
    }
    static async deletes(req,res){
        const user1 = User.find({UserID : req.params.UserID})
        const user2 = await User.deleteOne(user1)
        res.send(user2)
    }
}

router.get("/",users.all)

router.get("/:UserID",users.one)

router.post("/",users.posts)

router.post("/otp",users.otps)

router.put("/:UserID",users.puts)

router.delete("/:UserID",users.deletes)

module.exports = router
