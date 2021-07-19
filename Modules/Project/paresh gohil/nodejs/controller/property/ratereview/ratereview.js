const express = require("express")
const app = express()
const router = express.Router({mergeParams : true})
const {Ratereview} = require("../../../model/ratereview")
const authenticate = require("../../authentication/authentication")

app.use(express.json())

class rate1{
    static async all(req,res){
        const rate = await Ratereview.find({Property_Type_id : req.params.propertyid})
        res.send(rate)
    }
    static async posts(req,res){
        const rate = new Ratereview(req.body)
        const result = await rate.save()
        res.send(result)
    }
    static async puts(req,res){
        const rate = Ratereview.find({Property_Type_id : req.params.propertyid})
        const review = await Ratereview.updateOne(rate)
        res.send(review)
    }
    static async deletes(req,res){
        const rate = Ratereview.find({Property_Type_id : req.params.propertyid})
        const review = await Ratereview.deleteOne(rate)
        res.send(review)
    }
}

router.get("/",rate1.all)

router.post("/",authenticate,rate1.posts)

router.put("/",authenticate,rate1.puts)

router.delete("/",authenticate,rate1.deletes)

module.exports = router
