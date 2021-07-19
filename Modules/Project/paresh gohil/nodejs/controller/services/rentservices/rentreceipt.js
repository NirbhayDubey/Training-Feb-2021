const express = require("express")
const app = express()
const router = express.Router()
const {Rentreceipt} = require("../../../model/rentreceipt")
const authenticate = require("../../authentication/authentication")
const Email = require("../../../domain/emailsend")

app.use(express.json())

class rentals{
    static async all(req,res){
        const payrent1 = await Rentreceipt.find({UserID : req.params.UserID})
        res.send(payrent1)
    }
    static async one(req,res){
        const payrent1 = await Rentreceipt.find({UserID : req.params.UserID, Rent_id : req.params.Rentid})
        res.send(payrent1)
    }
    static async posts(req,res){
        const payrent1 = new Rentreceipt(req.body)
        const result = await payrent1.save()

        //receipt send via mail
        const email = await req.body.T_Email
        const otp = "receipt send"
        const email1 = await Email(email,otp)
        
        res.send(result)
    }
}

router.get("/:UserID",rentals.all)

router.get("/:UserID/:Rentid",rentals.one)

router.post("/",authenticate,rentals.posts)

module.exports = router
