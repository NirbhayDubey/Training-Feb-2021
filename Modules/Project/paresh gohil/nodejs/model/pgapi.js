const mongoose = require("mongoose")

const pgSchema = new mongoose.Schema({
    Property_Type_id : Number,
	Property_City : String,
	Property_Address : String,  
	gender : String,
	looking_for : String, //pg,rooms/bed
    explore : String, // student friendly, single room pg
})

const Pgapi = mongoose.model("Pgapi",pgSchema)

exports.Pgapi = Pgapi