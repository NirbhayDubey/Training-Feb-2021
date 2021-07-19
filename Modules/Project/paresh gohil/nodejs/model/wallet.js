const mongoose = require("mongoose")

const walletSchema = new mongoose.Schema({
    UserID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
	ServiceName : String,
	Options : String
})

const Wallet = mongoose.model("Wallet",walletSchema)

exports.Wallet = Wallet
