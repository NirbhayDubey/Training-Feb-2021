const mongoose = require("mongoose")

const propertysoldSchema = new mongoose.Schema({
    Propertyid : Number,
    Property_Type_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Property"
    },
	UserID  : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
	UserID1  : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
	Property_Name : String,
	Property_Type : String
})

const Propertysold = mongoose.model("Propertysold",propertysoldSchema)

exports.Propertysold = Propertysold
