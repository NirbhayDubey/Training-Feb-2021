const express = require("express")
const app = express()
const router = express.Router({mergeParams : true})
const {Basicdetail} = require("../../../../model/basicdetail")

app.use(express.json())

class agreements{
    static async all(req,res){
        const rent1 = await Basicdetail.find()
        res.send(rent1)
    }
    static async one(req,res){
        const rent1 = await Basicdetail.find({Bd_id : req.params.Bdid})
        res.send(rent1)
    }
    static async posts(req,res){
        const rent1 = new Basicdetail(req.body)
        const result = await rent1.save()
        res.send(result)
    }
    static async puts(req,res){
        const rent1 = Basicdetail.find({Bd_id : req.params.Bdid})
        const rent2 = await Basicdetail.updateOne(rent1,req.body)
        res.send(rent2)
    }
    static async deletes(req,res){
        const rent1 = Basicdetail.find({Bd_id : req.params.Bdid})
        const rent2 = await Basicdetail.deleteOne(rent1)
        res.send(rent2)
    }
}

router.get("/",agreements.all)

router.get("/:Bdid",agreements.one)

router.post("/",agreements.posts)

router.put("/:Bdid",agreements.puts)

router.delete("/:Bdid",agreements.deletes)

module.exports = router
