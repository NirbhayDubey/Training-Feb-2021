const mongoose = require("mongoose")

const carddetailSchema = new mongoose.Schema({
	CardID : Number,
    UserID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
	ServiceName : String,
	Card_Number : Number,
	MONTHs : Number,
	Years : Number,
	CVV : Number,
	Card_HolderName : String
})

const Carddetail = mongoose.model("Carddetail",carddetailSchema)

exports.Carddetail = Carddetail
