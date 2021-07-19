const mongoose = require("mongoose")

const upiSchema = new mongoose.Schema({
    upiid : Number,
    UserID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
	ServiceName : String,
	UPI_id : String,
	Landlord_pan : String
})

const Upi = mongoose.model("Upi",upiSchema)

exports.Upi = Upi
