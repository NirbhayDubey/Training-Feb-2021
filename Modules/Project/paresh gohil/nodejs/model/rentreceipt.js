const mongoose = require("mongoose")

const rentreceiptSchema = new mongoose.Schema({
    Rent_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Payrent"
    },
	UserID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
	Rent_Amount : Number,
	City : String,
	L_Name : String,
	L_Pan : String,
	Receipt_Start_date : Date,
	Receipt_End_date : Date,
	T_Name : String,
	T_Mobile_No : Number,
	T_Email : String
})

const Rentreceipt = mongoose.model("Rentreceipt",rentreceiptSchema)

exports.Rentreceipt = Rentreceipt
