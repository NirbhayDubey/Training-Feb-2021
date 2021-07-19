const mongoose = require("mongoose")

const sqftimageSchema = new mongoose.Schema({
    Property_Type_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Property"
    },
	BHK : Number,
	Area : Number,
	Images : {
        data : Buffer,
        contentType : String
    },
	Budget : Number
})

const Sqftimage = mongoose.model("Sgftimage",sqftimageSchema)

exports.Sqftimage = Sqftimage
