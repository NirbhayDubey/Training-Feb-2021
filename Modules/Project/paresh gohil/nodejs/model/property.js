const mongoose = require("mongoose")

const propertySchema = new mongoose.Schema({
    Property_Type_id : String,
	Property_Types : String,  //rent,buy,plot
	Property_Type_Name : String, //flat,house,office space
    Property_BHK : Number,
	Property_Budget : Number,
	Property_City : String,
	Property_Address : String,
	Project_Name : String, //stanza
	Property_Explore : String, //choices:- ready to move,owner properties
	Property_Owner_Name : String,
	Property_Marketer : String 
})

const Property = mongoose.model("Property",propertySchema)

exports.Property = Property
