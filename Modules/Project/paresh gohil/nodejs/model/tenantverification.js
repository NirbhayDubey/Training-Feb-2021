const mongoose = require("mongoose")

const tenantverificationSchema = new mongoose.Schema({
    UserID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
	Tvid : Number,
	ServiceName : String,
	Package : String,
	Identity_Verification : Boolean,
	Criminal_court_check : Boolean,
	Civil_litigation_check : Boolean,
	Permanent_Address : Boolean,
	Reference_check : Boolean,
	Price : Number,
	Payment_Option : String,
	GST_Number : String
})

const Tenantverification = mongoose.model("Tenantverification",tenantverificationSchema)

exports.Tenantverification = Tenantverification
