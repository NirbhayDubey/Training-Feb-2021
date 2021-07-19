const mongoose = require("mongoose")

const pgoccupationSchema = new mongoose.Schema({
    Property_Type_id : Number,
	occupation_types : String,
	rent_amount : Number,
	rooms_available : Number,
	amenities : Array
})

const Pgoccupation = mongoose.model("Pgoccupation",pgoccupationSchema)

exports.Pgoccupation = Pgoccupation