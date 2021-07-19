const mongoose = require("mongoose")

const ratereviewSchema = new mongoose.Schema({
    Property_Type_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Proprty"
    },
	Rating : Number,
	Review : String
})

const Ratereview = mongoose.model("Ratereview",ratereviewSchema)

exports.Ratereview = Ratereview
