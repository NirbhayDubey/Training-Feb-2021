const express = require("express")
const app = express()
const router = express.Router()
const card = require("./payment/carddetail")
const netbanking = require("./payment/netbanking")
const wallet = require("./payment/wallet")
const upi = require("./payment/upi")
const {Address} = require("../../model/address")
const authenticate = require("../authentication/authentication")

app.use(express.json())

router.use("/",authenticate)

router.use("/:UserID/carddetail",card)

router.use("/:UserID/netbanking",netbanking)

router.use("/:UserID/wallet",wallet)

router.use("/:UserID/upi",upi)

class address {
    static async one(req,res){
        const address1 = await Address.find({UserID : req.params.UserID})
        res.send(address1)            
    }
    static async posts(req,res){
        const address1 = new Address(req.body)
        const result = await address1.save()
        res.send(result)
    }
    static async puts(req,res){
        const address1 =  Address.find({UserID : req.params.UserID, _id : "60817e6955f3c23f8862fc0e"})
        const address2 = await Address.updateOne(address1,req.body)
        res.send(address2)
    } 
    static async deletes(req,res){
        const address1 = Address.find({UserID : req.params.UserID, _id : "6087a576783d7e409c236ec5"})
        const address2 = await Address.deleteOne(address1)
        res.send(address2)
    }
}

router.get("/:UserID", address.one)

router.post("/",address.posts)

router.put("/:UserID", address.puts)

router.delete("/:UserID", address.deletes)

module.exports = router
