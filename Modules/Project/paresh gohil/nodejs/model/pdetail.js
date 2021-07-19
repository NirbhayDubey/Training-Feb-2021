const mongoose = require("mongoose")

const pdetailSchema = new mongoose.Schema({
    Pd_ID : Number,
	P_Area : Number,
	P_Bedrooms : Number,
	P_Living_Rooms : Number,
	P_Bathrooms : Number,
	P_Parking : Number,
	P_Kitchen : Number,
	P_Servantrooms : Number
})

const Pdetail = mongoose.model("Pdetail",pdetailSchema)

exports.Pdetail = Pdetail
