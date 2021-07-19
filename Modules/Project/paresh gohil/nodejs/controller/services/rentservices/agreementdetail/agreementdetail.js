const express = require("express")
const app = express()
const router = express.Router({mergeParams : true})
const {Agreementdetail} = require("../../../../model/agreementdetail")

app.use(express.json())

class agreements{
    static async all(req,res){
        const rent1 = await Agreementdetail.find()
        res.send(rent1)
    }
    static async one(req,res){
        const rent1 = await Agreementdetail.find({Ag_ID : req.params.Agid})
        res.send(rent1)
    }
    static async posts(req,res){
        const rent1 = new Agreementdetail(req.body)
        const result = await rent1.save()
        res.send(result)
    }
    static async puts(req,res){
        const rent1 = await Agreementdetail.find({Ag_ID : req.params.Agid})
        const rent2 = Agreementdetail.updateOne(rent1,req.body)
        res.send(rent2)
    }
    static async deletes(req,res){
        const rent1 = await Agreementdetail.find({Ag_ID : req.params.Agid})
        const rent2 = Agreementdetail.deleteOne(rent1)
        res.send(rent2)
    }
}

router.get("/",agreements.all)

router.get("/:Agid",agreements.one)

router.post("/",agreements.posts)

router.put("/:Agid",agreements.puts)

router.delete("/:Agid",agreements.deletes)

module.exports = router
