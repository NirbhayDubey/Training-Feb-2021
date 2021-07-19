const authenticate = require("../authentication/authentication")
const express = require("express")
const app = express()
const router = express.Router()
const {Propertysold} = require("../../model/propertysold")

app.use(express.json())

class property1{
    static async all(req,res){
        const property = await Propertysold.find()
        res.send(property)
    }
    static async one(req,res){
        const property = await Propertysold.find({Propertyid : req.params.propertyid})
        res.send(property)
    }
    static async posts(req,res){
        const property = new Propertysold(req.body)
        const result = await property.save()
        res.send(result)
    }
    static async puts(req,res){
        const property = Propertysold.find({Propertyid : req.params.propertyid})
        const property2 = await Propertysold.updateOne(property,req.body)
        res.send(property2)
    }
}

router.get("/",property1.all)

router.get("/:propertyid",property1.one)

router.post("/",authenticate,property1.posts)

router.put("/:propertyid",authenticate,property1.puts)

module.exports = router
