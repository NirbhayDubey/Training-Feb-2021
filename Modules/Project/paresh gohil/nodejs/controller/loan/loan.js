const authenticate = require("../authentication/authentication")
const express = require("express")
const app = express()
const router = express.Router()
const {Loan} = require("../../model/loan")

app.use(express.json())

router.use("/",authenticate)

class loans{
    static async all(req,res) {
        const loan1 = await Loan.find({UserID : req.params.UserID})
        res.send(loan1)
    }
    static async one(req,res){
        const loan1 = await Loan.find({UserID : req.params.UserID,Loan_ID : req.params.Loanid})
        res.send(loan1)
    }
    static async posts(req,res){
        const loan2 = new Loan(req.body)
        const result = await loan2.save()
        res.send(result)
    }
    static async puts(req,res){
        const loan3 = Loan.find({UserID : req.params.UserID,Loan_ID : req.params.Loanid})
        const loan4 = await Loan.updateOne(loan3,req.body)
        res.send(loan4)
    }
    // static async deletes(req,res){
    //     const loan5 = Loan.findById(req.params.Loanid)
    //     const loan6 = Loan.deleteOne(loan5)
    //     res.send(loan6)
    // }
}

router.get("/:UserID",loans.all)

router.get("/:UserID/:Loanid",loans.one)

router.post("/",loans.posts)

router.put("/:UserID/:Loanid",loans.puts)

module.exports = router
