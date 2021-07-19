const mongoose = require("mongoose")
const Float = require("mongoose-float").loadType(mongoose)

const pdescriptionSchema = new mongoose.Schema({
    Property_Type_id : String,
	description : String,  
	booking_amount : {type : Float},
	facilities : Array, //[lift,gym]
    full_address : String,
	landmarks : String, //Vallab Park society
	flooring : String, //marble,Vitrified
	age_of_construction : String, //less than 5 years
	authority_approval : String, //Ahmedabad Urban Development Authority
	units_available : Number,
	amenities : Array, //[kids play area, reserved parking,lift,gym]
	Additional_features : String //in a gated colony,boundary walls made
})

const Pdescription = mongoose.model("Pdescription",pdescriptionSchema)

exports.Pdescription = Pdescription