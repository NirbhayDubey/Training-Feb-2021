const express = require("express")
const app = express()
const router = express.Router({mergeParams : true})
const {Upi} = require("../../../model/upi")

app.use(express.json())

class upis{
    static async all(req,res){
        const upi1 = await Upi.find({UserID : req.params.UserID})
        res.send(upi1)
    }
    static async one(req,res){
        const upi1 = await Upi.find({UserID : req.params.UserID, upiid : req.params.upiid})
        res.send(upi1)
    }
    static async posts(req,res){
        const upi1 = new Upi(req.body)
        const result = await upi1.save()
        res.send(result)
    }
    static async puts(req,res){
        const upi1 = Upi.find({upiid : req.params.upiid})
        const upi2 = await Upi.updateOne(upi1,req.body)
        res.send(upi2)
    }
    static async deletes(req,res){
        const upi1 = Upi.find({upiid : req.params.upiid})
        const result = await Upi.deleteOne(upi1)
        res.send(result)
    }
}

router.get("/",upis.all)

router.get("/:upiid",upis.one)

router.post("/",upis.posts)

router.put("/:upiid",upis.puts)

router.delete("/:upiid",upis.deletes)

module.exports = router
