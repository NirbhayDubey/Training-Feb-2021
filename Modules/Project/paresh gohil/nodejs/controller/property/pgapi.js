const express = require("express")
const authenticate = require("../authentication/authentication")
const app = express()
const router = express.Router()
const {Pgapi} = require("../../model/pgapi")
const sellerimage = require("./images/sellerimage")
const sqftimage = require("./images/sqftimage")
const ratereview = require("./ratereview/ratereview")
const pgdetail = require("./pgdetail/pgdetail")
const pgoccuption = require("./pgoccupation/pgoccuption")

app.use(express.json())

router.use("/:city/:address/:propertyid/pgoccuption",pgoccuption)

router.use("/:city/:address/:propertyid/pgdetail",pgdetail)

router.use("/:city/:address/:propertyid/sellerimage",sellerimage)

router.use("/:city/:address/:propertyid/sqftimage",sqftimage)

router.use("/:city/:address/:propertyid/ratereview",ratereview)

class property1{
    static async all(req,res){
        const property = await Pgapi.find({Property_City : req.params.city})
        res.send(property)
    }
    static async one(req,res){
        const property = await Pgapi.find({Property_City : req.params.city, Property_Address : req.params.address})
        res.send(property)
    }
    static async posts(req,res){
        const property = new Pgapi(req.body)
        const result = await property.save()
        res.send(result)
    }
    static async puts(req,res){
        const property = Pgapi.find({Property_Type_id : req.params.propertyid})
        const property2 = await Pgapi.updateOne(property,req.body)
        res.send(property2)
    }
    static async deletes(req,res){
        const property = Pgapi.find({Property_Type_id : req.params.propertyid})
        const property2 = await Pgapi.deleteOne(property)
        res.send(property2)
    }
}

router.get("/:city",property1.all)

router.get("/:city/:address",property1.one)

router.post("/",authenticate,property1.posts)

router.put("/:propertyid",authenticate,property1.puts)

router.delete("/:propertyid",authenticate,property1.deletes)

module.exports = router
