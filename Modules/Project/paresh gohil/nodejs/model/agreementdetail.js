const mongoose = require("mongoose")

const agreementdetailSchema = new mongoose.Schema({
    Ag_ID : Number,
	Stamp : Number,
	A_Start_date : Date,
	A_duration : String,
	Rent_Paid : String,
	Rent_Amount : Number,
	Maintenance_Paid : String,
	Maintenance_Amount : Number,
	Security_Amount : Number,
	Security_Paid : String,
	Cheque_No : Number,
	Transaction_id : String,
	Notice_Period : Number,
	Lock_in_Period : Number,
	Appointed_By : String
})

const Agreementdetail = mongoose.model("AgreementDetail",agreementdetailSchema)

exports.Agreementdetail = Agreementdetail
