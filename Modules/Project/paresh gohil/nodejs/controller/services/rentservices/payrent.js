const express = require("express")
const app = express()
const router = express.Router()
const {Payrent} = require("../../../model/payrent")
const authenticate = require("../../authentication/authentication")

app.use(express.json())

class payrents{
    static async all(req,res){
        const payrent1 = await Payrent.find({UserID : req.params.UserID})
        res.send(payrent1)
    }
    static async one(req,res){
        const payrent1 = await Payrent.find({UserID : req.params.UserID, Rent_id : req.params.Rent_id})
        res.send(payrent1)
    }
    static async posts(req,res){
        const payrent1 = new Payrent(req.body)
        const result = await payrent1.save()
        res.send(result)
    }
    static async puts(req,res){
        const payrent1 = Payrent.find({UserID : req.params.UserID, Rent_id : req.params.Rent_id})
        const payrent2 = await Payrent.updateOne(payrent1,req.body)
        res.send(payrent2)
    }
    static async deletes(req,res){
        const payrent1 = Payrent.find({UserID : req.params.UserID, Rent_id : req.params.Rent_id})
        const payrent2 = await Payrent.deleteOne(payrent1)
        res.send(payrent2)
    }
}

router.get("/:UserID",payrents.all)

router.get("/:UserID/:Rent_id",payrents.one)

router.post("/",authenticate,payrents.posts)

router.put("/:UserID/:Rent_id",authenticate,payrents.puts)

router.delete("/:UserID/:Rent_id",authenticate,payrents.deletes)

module.exports = router
