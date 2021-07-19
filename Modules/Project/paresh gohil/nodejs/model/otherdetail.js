const mongoose = require("mongoose")

const otherdetailSchema = new mongoose.Schema({
    Od_ID : Number,
	P_Fan : Number,
	P_Tube : Number,
	P_Bed : Number,
	P_Sofa : Number,
	P_Table : Number,
	P_Chair : Number,
	P_AC : Number,
	P_Geyser : Number,
	P_Oven : Number,
	P_Fridge : Number,
	P_Washing_M : Number,
	P_Others : Number,
})

const Odetail = mongoose.model("Odetail",otherdetailSchema)

exports.Odetail = Odetail
