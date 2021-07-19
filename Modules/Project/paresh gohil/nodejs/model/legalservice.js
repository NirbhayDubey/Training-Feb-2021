const mongoose = require("mongoose")

const legalserviceSchema = new mongoose.Schema({
    UserID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
	ServiceID : Number,
	ServiceName : String,
	Package_Name : String,
	Package_Description : String,
	Package_Price : Number,
	Service_Partner : String,
	Payment_Option : String
})

const Legalservice = mongoose.model("Legalservice",legalserviceSchema)

exports.Legalservice = Legalservice
