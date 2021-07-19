const express = require("express")
const authenticate = require("../../authentication/authentication")
const app = express()
const router = express.Router({mergeParams : true})
const {Pgoccupation} = require("../../../model/pgoccupation")

app.use(express.json())

class property1{
    static async one(req,res){
        const property = await Pgoccupation.find({Property_Type_id : req.params.propertyid})
        res.send(property)
    }
    static async posts(req,res){
        const property = new Pgoccupation(req.body)
        const result = await property.save()
        res.send(result)
    }
    static async puts(req,res){
        const property = Pgoccupation.find({Property_Type_id : req.params.propertyid})
        const property2 = await Pgoccupation.updateOne(property,req.body)
        res.send(property2)
    }
    static async deletes(req,res){
        const property = Pgoccupation.find({Property_Type_id : req.params.propertyid})
        const property2 = await Pgoccupation.deleteOne(property)
        res.send(property2)
    }
}


router.get("/",property1.one)

router.post("/",authenticate,property1.posts)

router.put("/",authenticate,property1.puts)

router.delete("/",authenticate,property1.deletes)

module.exports = router
