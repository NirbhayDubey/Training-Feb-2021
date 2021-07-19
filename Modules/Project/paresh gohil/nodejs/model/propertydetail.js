const mongoose = require("mongoose")

const propertydetailSchema = new mongoose.Schema({
    Pd_ID : Number,
	P_Address : String,
	P_Pincode : Number,
	P_City : String,
	P_State : String,
    P_detail : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Pdetail"
    },
    O_detail : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Odetail"
    }
})

const Propertydetail = mongoose.model("Propertydetail",propertydetailSchema)

exports.Propertydetail = Propertydetail
