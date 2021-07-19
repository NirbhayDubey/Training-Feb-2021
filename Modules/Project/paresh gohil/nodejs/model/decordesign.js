const mongoose = require("mongoose")

const decordesignSchema = new mongoose.Schema({
    UserID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
	Livspace : Boolean,
	ST_Gloobain_glass : Boolean,
	Bonito_design : Boolean,
	Godrel_interior : Boolean,
	Homelane_interior : Boolean,
	Berger_painting : Boolean,
	Amplus_Solar : Boolean,
	Dates : Date
})

const Decordesign = mongoose.model("Decordesign",decordesignSchema)

exports.Decordesign = Decordesign
