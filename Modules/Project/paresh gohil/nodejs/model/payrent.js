const mongoose = require("mongoose")

const payrentSchema = new mongoose.Schema({
    Rent_id : Number,
	UserID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
	ServiceName : String,
	Months : Number,
	Rent_Amount : Number,
	City : String,
	Landlord_Name : String,
	Landlord_Use : String
})

const Payrent = mongoose.model("Payrent",payrentSchema)

exports.Payrent = Payrent
