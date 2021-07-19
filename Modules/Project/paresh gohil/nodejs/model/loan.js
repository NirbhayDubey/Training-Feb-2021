const mongoose = require("mongoose")

const loanSchema = new mongoose.Schema({
    Loan_ID : Number,
	UserID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
	Property_Type_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Property"
    },
	Loan_Type : String,
	Bank_Partner : String,
	Customized_Loans : String,
	Loan_Amount : Number,
})

const Loan = mongoose.model("Loan",loanSchema)

exports.Loan = Loan
