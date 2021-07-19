const mongoose = require("mongoose")
const Float = require("mongoose-float").loadType(mongoose)

const pdetailsSchema = new mongoose.Schema({
    Property_Type_id : String,
	bedrooms : Number,  
	bathrooms : Number,
	balcony : Number, 
    storerooms : Number,
	superarea : Number,
	carpetarea : Number,
	transaction_type : String, //resale
	floor : String,
	unit_on_floor : Number,
	car_parking : String,
	furnished_status : String, //semi-furnished
	lifts : Number, 
	type_of_ownership : String, //co-operative society
	facing : String, //east,south,north,west
	water_availability : String,
	status_of_electricity : String,
	overlooking : String, // garden etc.
	varified : String, // yes or no , varified by  magicbricks teams
	date : String, //property posted date
	developer : String,
	Property_Owner_Name : String,
	Property_Owner_Number : Number,
	dimensionsL : {type : Float},
	dimensionsB : {type : Float},
	corner_plot : String,
	floor_allowed_for_construction : Number,
	width_of_road_facing_the_plot : Number,
	Any_construction_done : String,
	Gated_colcony : String,
	boundary_wall : String,
	no_of_open_sides : Number
})

const Propertydetaill = mongoose.model("Propertydetaill",pdetailsSchema)

exports.Propertydetaill = Propertydetaill