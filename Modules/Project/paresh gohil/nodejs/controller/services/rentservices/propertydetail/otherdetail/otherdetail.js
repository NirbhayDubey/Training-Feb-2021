const express = require("express")
const app = express()
const router = express.Router({mergeParams : true})
const {Odetail} = require("../../../../../model/otherdetail")

app.use(express.json())

class agreements{
    static async all(req,res){
        const rent1 = await Odetail.find()
        res.send(rent1)
    }
    static async one(req,res){
        const rent1 = await Odetail.find({Od_ID : req.params.Odid})
        res.send(rent1)
    }
    static async posts(req,res){
        const rent1 = new Odetail(req.body)
        const result = await rent1.save()
        res.send(result)
    }
    static async puts(req,res){
        const rent1 = Odetail.find({Od_ID : req.params.Odid})
        const rent2 = await Odetail.updateOne(rent1,req.body)
        res.send(rent2)
    }
    static async deletes(req,res){
        const rent1 = Odetail.find({Od_ID : req.params.Odid})
        const rent2 = await Odetail.deleteOne(rent1)
        res.send(rent2)
    }
}

router.get("/",agreements.all)

router.get("/:Odid",agreements.one)

router.post("/",agreements.posts)

router.put("/:Odid",agreements.puts)

router.delete("/:Odid",agreements.deletes)

module.exports = router
