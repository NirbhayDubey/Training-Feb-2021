const express = require("express")
const app = express()
const router = express.Router({mergeParams : true})
const {Pdetail} = require("../../../../../model/pdetail")

app.use(express.json())

class agreements{
    static async all(req,res){
        const rent1 = await Pdetail.find()
        res.send(rent1)
    }
    static async one(req,res){
        const rent1 = await Pdetail.find({Pd_ID : req.params.Pdid})
        res.send(rent1)
    }
    static async posts(req,res){
        const rent1 = new Pdetail(req.body)
        const result = await rent1.save()
        res.send(result)
    }
    static async puts(req,res){
        const rent1 = Pdetail.find({Pd_ID : req.params.Pdid})
        const rent2 = await Pdetail.updateOne(rent1,req.body)
        res.send(rent2)
    }
    static async deletes(req,res){
        const rent1 = Pdetail.find({Pd_ID : req.params.Pdid})
        const rent2 = await Pdetail.deleteOne(rent1)
        res.send(rent2)
    }
}

router.get("/",agreements.all)

router.get("/:Pdid",agreements.one)

router.post("/",agreements.posts)

router.put("/:Pdid",agreements.puts)

router.delete("/:Pdid",agreements.deletes)

module.exports = router
