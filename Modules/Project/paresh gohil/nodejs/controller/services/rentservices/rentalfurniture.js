const express = require("express")
const app = express()
const router = express.Router()
const {Rentalfurniture} = require("../../../model/rentalfurniture")
const authenticate = require("../../authentication/authentication")

app.use(express.json())

class rentals{
    static async all(req,res){
        const payrent1 = await Rentalfurniture.find({UserID : req.params.UserID})
        res.send(payrent1)
    }
    static async posts(req,res){
        const payrent1 = new Rentalfurniture(req.body)
        const result = await payrent1.save()
        res.send(result)
    }
}

router.get("/:UserID",rentals.all)

router.post("/",authenticate,rentals.posts)

module.exports = router
