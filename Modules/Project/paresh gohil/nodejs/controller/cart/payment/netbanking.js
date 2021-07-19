const express = require("express")
const app = express()
const router = express.Router({mergeParams : true})
const {Netbanking} = require("../../../model/netbanking")

app.use(express.json())

class netbankings{
    static async all(req,res){
        const net1 = await Netbanking.find({UserID : req.params.UserID})
        res.send(net1)
    }
    static async one(req,res){
        const net1 = await Netbanking.find({UserID : req.params.UserID, NetID : req.params.netid})
        res.send(net1)
    }
    static async posts(req,res){
        const net1 = new Netbanking(req.body)
        const result = await net1.save()
        res.send(result)
    }
    static async puts(req,res){
        const net1 = Netbanking.find({NetID : req.params.netid})
        const net2 = await Netbanking.updateOne(net1,req.body)
        res.send(net2)
    }
    static async deletes(req,res){
        const net1 = Netbanking.find({NetID :req.params.netid})
        const result = await Netbanking.deleteOne(net1)
        res.send(result)
    }
}

router.get("/",netbankings.all)

router.get("/:netid",netbankings.one)

router.post("/",netbankings.posts)

router.put("/:netid",netbankings.puts)

router.delete("/:netid",netbankings.deletes)

module.exports = router
