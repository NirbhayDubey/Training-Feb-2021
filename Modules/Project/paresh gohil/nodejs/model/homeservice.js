const mongoose = require("mongoose")

const homeserviceSchema = new mongoose.Schema({
    UserID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
	ServiceID : Number,
	ServiceFor : String,
    BHK : Number,
	Servicess : String,
	ServiceName : String,
	Service_description : String,
	Service_Price : Number,
	Service_Partner : String,
	Datetime : Date,
	Payment_Option : String
})

const Homeservice = mongoose.model("Homeservice",homeserviceSchema)

exports.Homeservice = Homeservice
