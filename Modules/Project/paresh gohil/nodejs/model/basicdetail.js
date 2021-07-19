const mongoose = require("mongoose")

const basicdetailSchema = new mongoose.Schema({
    Bd_id : Number,
	L_Title : String,
	L_Name : String,
	L_Address : String,
	L_Address1 : String,
	L_Pincode : Number,
	L_City : String,
	L_State : String,
	T_Title : String,
	T_Name : String,
	T_Address : String,
	T_Address1 : String,
	T_Pincode : Number,
	T_City : String,
	T_State : String
})

const Basicdetail = mongoose.model("Basicdetail",basicdetailSchema)

exports.Basicdetail = Basicdetail
