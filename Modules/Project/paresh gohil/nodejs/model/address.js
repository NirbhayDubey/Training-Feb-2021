const mongoose = require("mongoose")

const addressSchema = new mongoose.Schema({
    UserID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
	Address_1_2 : String,
	Town : String,
	City : String,
	States : String,
	Pincode : Number
})

const Address = mongoose.model("Address",addressSchema)

exports.Address = Address
