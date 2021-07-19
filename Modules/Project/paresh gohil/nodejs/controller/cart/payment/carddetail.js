const express = require("express")
const app = express()
const router = express.Router({mergeParams : true})
const {Carddetail} = require("../../../model/carddetail")

app.use(express.json())

class carddetails{
    static async all(req,res){
        const card1 = await Carddetail.find({UserID : req.params.UserID})
        res.send(card1)
    }
    static async one(req,res){
        const card1 = await Carddetail.find({UserID : req.params.UserID,CardID : req.params.cardid})
        res.send(card1)
    }
    static async posts(req,res){
        const card1 = new Carddetail(req.body)
        const result = await card1.save()
        res.send(result)
    }
    static async puts(req,res){
        const card1 = Carddetail.find({CardID : req.params.cardid})
        const card2 = await Carddetail.updateOne(card1,req.body)
        res.send(card2)
    }
    static async deletes(req,res){
        const card1 = Carddetail.find({CardID : req.params.cardid})
        const card2 = await Carddetail.deleteOne(card1)
        res.send(card2)
    }
}

router.get("/",carddetails.all)

router.get("/:cardid",carddetails.one)

router.post("/",carddetails.posts)

router.put("/:cardid",carddetails.puts)

router.delete("/:cardid",carddetails.deletes)

module.exports = router
