const mongoose = require("mongoose")

const netbankingSchema = new mongoose.Schema({
	NetID : Number,
    UserID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
	ServiceName : String,
	Bank_Name : String,
	Account_No : Number,
	IFSC_Code : String,
	Landlord_pan : String
})

const Netbanking = mongoose.model("Netbanking",netbankingSchema)

exports.Netbanking = Netbanking
