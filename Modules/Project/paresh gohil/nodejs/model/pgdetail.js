const mongoose = require("mongoose")

const pgdetailSchema = new mongoose.Schema({
    Property_Type_id : Number,
	deposit_amount : Number,
	maintenance : String,
	notice_period : String,
	electricity_charges : Number,
	food_availability : String,
	ac_rooms : String,
	parking : String,
	power_backup : String,
	available_for : String,
	preferred_tenants : String,
	Total_no_of_beds : Number,
	operating_since : Number,
	amenities : Array,
	food_available : Array,
	meals_provided : String,
	fridge : String,
	laundry : String,
	gate_closing_time : String,
	visitor_entry : String,
	non_veg_food : String,
	opposite_gender : String,
	smoking : String,
	drinking : String,
	loud_music : String,
	party : String
})

const Pgdetail = mongoose.model("Pgdetail",pgdetailSchema)

exports.Pgdetail = Pgdetail