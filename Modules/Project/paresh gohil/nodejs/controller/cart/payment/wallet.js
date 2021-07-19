const express = require("express")
const app = express()
const router = express.Router({mergeParams : true})
const {Wallet} = require("../../../model/wallet")

app.use(express.json())

class wallets{
    static async all(req,res){
        const wallet1 = await Wallet.find({UserID : req.params.UserID})
        res.send(wallet1)
    }
    static async posts(req,res){
        const wallet1 = new Wallet(req.body)
        const result = await wallet1.save()
        res.send(result)
    }
    static async puts(req,res){
        const wallet1 = Wallet.find({UserID : req.params.UserID, Options : "Paytm"})
        const wallet2 = await Wallet.updateOne(wallet1,req.body)
        res.send(wallet2)
    }
    static async deletes(req,res){
        const wallet1 = Wallet.find({UserID : req.params.UserID, Options : "Paytm"})
        const result = await Wallet.deleteOne(wallet1)
        res.send(result)
    }
}

router.get("/",wallets.all)

router.post("/",wallets.posts)

router.put("/",wallets.puts)

router.delete("/",wallets.deletes)

module.exports = router
