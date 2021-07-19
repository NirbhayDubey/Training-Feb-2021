const mongoose = require("mongoose")

const rentagreementSchema = new mongoose.Schema({
    Rentid : Number,
    UserID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
	Bd_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Basicdetail"
    },
	Pd_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Propertydetail"
    },
	Ag_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "AgreementDetail"
    },
	Dates : Date 
})

const Rentagreement = mongoose.model("Rentagreement",rentagreementSchema)

exports.Rentagreement = Rentagreement
