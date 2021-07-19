const mongoose = require("mongoose")

const rentalfurnitureSchema = new mongoose.Schema({
    UserID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
	R_Name : Boolean,
	F_Name : Boolean,
	C_Name : Boolean,
	Dates : Date
})

const Rentalfurniture = mongoose.model("Rentalfurniture",rentalfurnitureSchema)

exports.Rentalfurniture = Rentalfurniture
