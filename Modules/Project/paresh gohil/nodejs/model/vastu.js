const mongoose = require("mongoose")

const vastuSchema = new mongoose.Schema({
    UserID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    ServiceID : Number,
	ServiceName : String,
	Vastu_Consultants_Name : String,
    Description : String,
	Package : String,
	Price : Number,
	Payment_Option : String
})

const Vastu = mongoose.model("Vastu",vastuSchema)

exports.Vastu = Vastu
