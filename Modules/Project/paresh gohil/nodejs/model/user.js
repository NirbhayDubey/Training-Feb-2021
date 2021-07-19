const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    UserID : String,
	User_Type : String,
	UserName : String,
	User_Mobile_No : {
		type : Number,
		unique : true
	},
	User_Email : {
		type : String,
		required : true,
		unique : true,
	},
	User_Password : {
		type : String,
		required : true
	}
})

const User = mongoose.model('User',userSchema)

exports.User = User
