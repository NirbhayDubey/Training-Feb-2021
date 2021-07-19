const mongoose = require("mongoose")
const Float = require("mongoose-float").loadType(mongoose)

mongoose.connect("mongodb://localhost:27017/Magicbricks" , {useNewUrlParser : true ,  useUnifiedTopology: true })
        .then(() => console.log("connected to MongoDB.."))
        .catch(err => console.log("Could't connect to MongoDB..",err))

// const userSchema = new mongoose.Schema({
//     UserID : Number,
// 	User_Type : String,
// 	UserName : String,
// 	User_Mobile_No : Number,
// 	User_Email : String,
// 	User_Password : String
// })

// const User = mongoose.model('User',userSchema)

// async function post() {
//     const user = new User({
// 		UserID : 2,
// 		User_Type : "Buyer",
// 		UserName : "Kisahn",
// 		User_Mobile_No : 35357484,
// 		User_Email : "kd289@gmail.com",
// 		User_Password : "gdhdjeiei"
// 		})
//     const result = await user.save()
//     console.log(result)
//     //remain sqft and seller images
//     //uid:1:6099ff2954cef31648c27e1d
//     //uid:2:6099ff69bfbf7c3528f18740
//     //pid:1:6081800d82106d386c2a878f
//     //pid:2:608180627041583e5c8e8f9a
//     //bid:1:608252b49a47d10c3064206f
//     //bid:2:608253ad7f0510171c7fc596
//     //pdid:1:608259056ec64e1c50d523f1
//     //pdid:2:6082594e7c1aeb2630652b81
//     //agid:1:60825c7d7179503218a2aca4
//     //agid:2:60825d031257ea3cb4a604f5
// }

// post()

//-------------------------------------------------------
const addressSchema = new mongoose.Schema({
    UserID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
	Address_1_2 : String,
	Town : String,
	City : String,
	States : String,
	Pincode : Number
})

const Address = mongoose.model("Address",addressSchema)

// async function post() {
//     const user = new Address({
// 		UserID : "6099ff69bfbf7c3528f18740",
// 		Address_1_2 : "jaldippark",
// 		Town : "Khodiyarnagar",
// 		City : "Ahmedabad",
// 		States : "Gujarat",
// 		Pincode : 545454
// 	})
//     const result = await user.save()
//     console.log(result)
//     //remain sqft and seller images
//     //uid:1:6099ff2954cef31648c27e1d
//     //uid:2:6099ff69bfbf7c3528f18740
//     //pid:1:6081800d82106d386c2a878f
//     //pid:2:608180627041583e5c8e8f9a
//     //bid:1:608252b49a47d10c3064206f
//     //bid:2:608253ad7f0510171c7fc596
//     //pdid:1:608259056ec64e1c50d523f1
//     //pdid:2:6082594e7c1aeb2630652b81
//     //agid:1:60825c7d7179503218a2aca4
//     //agid:2:60825d031257ea3cb4a604f5
// }

// post()

//------------------------------------------------------------
const propertySchema = new mongoose.Schema({
    Property_Type_id : Number,
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


//-----------------------------------------------------------
const pdeatilsSchema = new mongoose.Schema({
    Property_Type_id : Number,
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

const Propertydeatill = mongoose.model("Propertydetaill",pdeatilsSchema)

//------------------------------------------------------------
const pdescriptionSchema = new mongoose.Schema({
    Property_Type_id : Number,
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

//--------------------------------------------------------
const pgSchema = new mongoose.Schema({
    Property_Type_id : Number,
	address : String,  
	gender : String,
	looking_for : String, //pg,rooms/bed
    explore : String, // student friendly, single room pg
})

const Pgapi = mongoose.model("Pgapi",pgSchema)

//---------------------------------------------------------------

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


//------------------------------------------------

const pgoccupationSchema = new mongoose.Schema({
    Property_Type_id : Number,
	occupation_types : String,
	rent_amount : Number,
	rooms_available : Number,
	amenities : Array
})

const Pgoccupation = mongoose.model("Pgoccupation",pgoccupationSchema)


async function post() {
    const user = new Pgoccupation({
		Property_Type_id: 1,
		occupation_types : "four",
		rent_amount : 7500,
		rooms_available : 5,
		amenities : ["washroom","cot"]
		})
    const result = await user.save()
    console.log(result)
    //remain sqft and seller images
    //uid:1:6081792feb8794332c958a49
    //uid:2:6081797833520225d4e2f29f
    //pid:1:6081800d82106d386c2a878f
    //pid:2:608180627041583e5c8e8f9a
    //bid:1:608252b49a47d10c3064206f
    //bid:2:608253ad7f0510171c7fc596
    //pdid:1:608259056ec64e1c50d523f1
    //pdid:2:6082594e7c1aeb2630652b81
    //agid:1:60825c7d7179503218a2aca4
    //agid:2:60825d031257ea3cb4a604f5
}

post()

//--------------------------------------------------------------
const loanSchema = new mongoose.Schema({
    Loan_ID : Number,
	UserID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
	Property_Type_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Property"
    },
	Loan_Type : String,
	Bank_Partner : String,
	Customized_Loans : String,
	Loan_Amount : Number,
})

const Loan = mongoose.model("Loan",loanSchema)

// async function post() {
//     const user = new Loan({
// 		UserID : "6099ff69bfbf7c3528f18740",
// 		Property_Type_id : "6098fb8dc71ede42fce0faf0",
// 		Loan_Type : "Loan Against Property",
// 		Bank_Partner : "SBI",
// 		Customized_Loans : "Goverment Employee",
// 		Loan_Amount : 2000000,
// 	})
//     const result = await user.save()
//     console.log(result)
//     //remain sqft and seller images
//     //uid:1:6099ff2954cef31648c27e1d
//     //uid:2:6099ff69bfbf7c3528f18740
//     //pid:1:6098fb255fae6a32a0378113
//     //pid:2:6098fb8dc71ede42fce0faf0
//     //bid:1:608252b49a47d10c3064206f
//     //bid:2:608253ad7f0510171c7fc596
//     //pdid:1:608259056ec64e1c50d523f1
//     //pdid:2:6082594e7c1aeb2630652b81
//     //agid:1:60825c7d7179503218a2aca4
//     //agid:2:60825d031257ea3cb4a604f5
// }

// post()

//-------------------------------------------------------------
const propertysoldSchema = new mongoose.Schema({
    Property_Type_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Property"
    },
	UserID  : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
	UserID1  : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
	Property_Name : String,
	Property_Type : String
})

const Propertysold = mongoose.model("Propertysold",propertysoldSchema)

// async function post() {
//     const user = new Propertysold({
// 		Property_Type_id : "6098fb8dc71ede42fce0faf0",
// 		UserID : "6099ff2954cef31648c27e1d",
// 		UserID1 : "6099ff69bfbf7c3528f18740",
// 		Property_Name : "Imperial",
// 		Property_Type : "Residential Property"
// 	})
//     const result = await user.save()
//     console.log(result)
//     //remain sqft and seller images
//     //uid:1:6099ff2954cef31648c27e1d
//     //uid:2:6099ff69bfbf7c3528f18740
//     //pid:1:6098fb255fae6a32a0378113
//     //pid:2:6098fb8dc71ede42fce0faf0
//     //bid:1:608252b49a47d10c3064206f
//     //bid:2:608253ad7f0510171c7fc596
//     //pdid:1:608259056ec64e1c50d523f1
//     //pdid:2:6082594e7c1aeb2630652b81
//     //agid:1:60825c7d7179503218a2aca4
//     //agid:2:60825d031257ea3cb4a604f5
// }

// post()

//---------------------------------------------------------------------
const ratereviewSchema = new mongoose.Schema({
    Property_Type_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Proprty"
    },
	Rating : Number,
	Review : String
})

const Ratereview = mongoose.model("Ratereview",ratereviewSchema)

// async function post() {
//     const user = new Ratereview({
// 		Property_Type_id : "6098fb8dc71ede42fce0faf0",
// 		Rating : 4.7,
// 		Review : "Good Environment"
// 	})
//     const result = await user.save()
//     console.log(result)
//     //remain sqft and seller images
//     //uid:1:6099ff2954cef31648c27e1d
//     //uid:2:6099ff69bfbf7c3528f18740
//     //pid:1:6098fb255fae6a32a0378113
//     //pid:2:6098fb8dc71ede42fce0faf0
//     //bid:1:608252b49a47d10c3064206f
//     //bid:2:608253ad7f0510171c7fc596
//     //pdid:1:608259056ec64e1c50d523f1
//     //pdid:2:6082594e7c1aeb2630652b81
//     //agid:1:60825c7d7179503218a2aca4
//     //agid:2:60825d031257ea3cb4a604f5
// }

// post()

//----------------------------------------------------------------------
const sqftimageSchema = new mongoose.Schema({
    Property_Type_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Property"
    },
	BHK : Number,
	Area : Number,
	Images : {
        data : Buffer,
        contentType : String
    },
	Budget : Number
})

const Sqftimage = mongoose.model("Sgftimage",sqftimageSchema)

// async function post() {
//     const user = new Sqftimage({
// 		Property_Type_id : "6098fb255fae6a32a0378113",
// 		BHK : 4,
// 		Area : 989,
// 		Budget : 5000000
// 	})
//     const result = await user.save()
//     console.log(result)
//     //remain sqft and seller images
//     //uid:1:6099ff2954cef31648c27e1d
//     //uid:2:6099ff69bfbf7c3528f18740
//     //pid:1:6098fb255fae6a32a0378113
//     //pid:2:6098fb8dc71ede42fce0faf0
//     //bid:1:608252b49a47d10c3064206f
//     //bid:2:608253ad7f0510171c7fc596
//     //pdid:1:608259056ec64e1c50d523f1
//     //pdid:2:6082594e7c1aeb2630652b81
//     //agid:1:60825c7d7179503218a2aca4
//     //agid:2:60825d031257ea3cb4a604f5
// }

// post()

//---------------------------------------------------------------------
const sellerimageSchema = new mongoose.Schema({
    Property_Type_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Property"
    },
	Images : {
        data : Buffer,
        contentType : String
    }
})

const Sellerimage = mongoose.model("Sellerimage",sellerimageSchema)

// async function post() {
//     const user = new Sellerimage({
// 		Property_Type_id : "6098fb8dc71ede42fce0faf0"
// 	})
//     const result = await user.save()
//     console.log(result)
//     //remain sqft and seller images
//     //uid:1:6099ff2954cef31648c27e1d
//     //uid:2:6099ff69bfbf7c3528f18740
//     //pid:1:6098fb255fae6a32a0378113
//     //pid:2:6098fb8dc71ede42fce0faf0
//     //bid:1:608252b49a47d10c3064206f
//     //bid:2:608253ad7f0510171c7fc596
//     //pdid:1:608259056ec64e1c50d523f1
//     //pdid:2:6082594e7c1aeb2630652b81
//     //agid:1:60825c7d7179503218a2aca4
//     //agid:2:60825d031257ea3cb4a604f5
// }

// post()

//----------------------------------------------------------------------
const payrentSchema = new mongoose.Schema({
    Rent_id : Number,
	UserID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
	ServiceName : String,
	Months : Number,
	Rent_Amount : Number,
	City : String,
	Landlord_Name : String,
	Landlord_Use : String
})

const Payrent = mongoose.model("Payrent",payrentSchema)

// async function post() {
//     const user = new Payrent({
// 		Rent_id : 2,
// 		UserID : "6099ff69bfbf7c3528f18740",
// 		ServiceName : "Payrent",
// 		Months : 24,
// 		Rent_Amount : 120000,
// 		City : "Surat",
// 		Landlord_Name : "Roy",
// 		Landlord_Use : "UPI"
// 	})
//     const result = await user.save()
//     console.log(result)
//     //remain sqft and seller images
//     //uid:1:6099ff2954cef31648c27e1d
//     //uid:2:6099ff69bfbf7c3528f18740
//     //pid:1:6098fb255fae6a32a0378113
//     //pid:2:6098fb8dc71ede42fce0faf0
//     //bid:1:608252b49a47d10c3064206f
//     //bid:2:608253ad7f0510171c7fc596
//     //pdid:1:608259056ec64e1c50d523f1
//     //pdid:2:6082594e7c1aeb2630652b81
//     //agid:1:60825c7d7179503218a2aca4
//     //agid:2:60825d031257ea3cb4a604f5
// }

// post()

//------------------------------------------------------------------------
const rentagreementSchema = new mongoose.Schema({
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

// async function post() {
//     const user = new Rentagreement({
// 		UserID : "6099ff69bfbf7c3528f18740",
// 		Bd_id : "609a08ef95a0b0145861a0e8",
// 		Pd_id : "609a0b462cdc5026e8613eba",
// 		Ag_id : "609a0d3f245a633764fb1f28",
// 		Dates : "2021-11-11T00:00:00.000Z"
// 	})
//     const result = await user.save()
//     console.log(result)
//     //remain sqft and seller images
//     //uid:1:6099ff2954cef31648c27e1d
//     //uid:2:6099ff69bfbf7c3528f18740
//     //pid:1:6098fb255fae6a32a0378113
//     //pid:2:6098fb8dc71ede42fce0faf0
//     //bid:1:609a08bcc826564274f25430
//     //bid:2:609a08ef95a0b0145861a0e8
//     //pdid:1:608259056ec64e1c50d523f1
//     //pdid:2:6082594e7c1aeb2630652b81
//     //agid:1:609a0c75bb34423b70e14313
//     //agid:2:609a0d3f245a633764fb1f28
// }

// post()

//------------------------------------------------------------------------------
const basicdetailSchema = new mongoose.Schema({
    Bd_id : Number,
	L_Title : String,
	L_Name : String,
	L_Address : String,
	L_Address1 : String,
	L_Pincode : Number,
	L_City : String,
	L_State : String,
	T_Title : String,
	T_Name : String,
	T_Address : String,
	T_Address1 : String,
	T_Pincode : Number,
	T_City : String,
	T_State : String
})

const Basicdetail = mongoose.model("Basicdetail",basicdetailSchema)

// async function post() {
//     const user = new Basicdetail({
// 		Bd_id : 2,
// 		L_Title : "Mr",
// 		L_Name : "Mitesh",
// 		L_Address : "Nikol",
// 		L_Address1 : "Nikol",
// 		L_Pincode : 777777,
// 		L_City : "Ahmedabad",
// 		L_State : "Gujarat",
// 		T_Title : "Mr",
// 		T_Name : "Kishan",
// 		T_Address : "Aajwa",
// 		T_Address1 : "Aajwa",
// 		T_Pincode : 666666,
// 		T_City : "Baroda",
// 		T_State : "Gujarat"
// 	})
//     const result = await user.save()
//     console.log(result)
//     //remain sqft and seller images
//     //uid:1:6099ff2954cef31648c27e1d
//     //uid:2:6099ff69bfbf7c3528f18740
//     //pid:1:6098fb255fae6a32a0378113
//     //pid:2:6098fb8dc71ede42fce0faf0
//     //bid:1:609a08bcc826564274f25430
//     //bid:2:609a08ef95a0b0145861a0e8
//     //pdid:1:608259056ec64e1c50d523f1
//     //pdid:2:6082594e7c1aeb2630652b81
//     //agid:1:60825c7d7179503218a2aca4
//     //agid:2:60825d031257ea3cb4a604f5
// }

// post()

//--------------------------------------------------------------------
const propertydetailSchema = new mongoose.Schema({
    Pd_ID : Number,
	P_Address : String,
	P_Pincode : Number,
	P_City : String,
	P_State : String,
    P_detail : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Pdetail"
    },
    O_detail : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Odetail"
    }
})

const Propertydetail = mongoose.model("Propertydetail",propertydetailSchema)

// async function post() {
//     const user = new Propertydetail({
// 		Pd_ID : 1,
// 		P_Address : "Nikol",
// 		P_Pincode : 989898,
// 		P_City : "Ahmedabad",
// 		P_State : "Gujarat",
// 		P_detail : "609a09d6a2b3322878c9c9a3",
// 		O_detail : "609a0a6729e1060c9490d8b0"
// 	})
//     const result = await user.save()
//     console.log(result)
//     //remain sqft and seller images
//     //uid:1:6099ff2954cef31648c27e1d
//     //uid:2:6099ff69bfbf7c3528f18740
//     //pid:1:6098fb255fae6a32a0378113
//     //pid:2:6098fb8dc71ede42fce0faf0
//     //bid:1:609a08bcc826564274f25430
//     //bid:2:609a08ef95a0b0145861a0e8
//     //pdid:1:608259056ec64e1c50d523f1
//     //pdid:2:6082594e7c1aeb2630652b81
//     //agid:1:60825c7d7179503218a2aca4
//     //agid:2:60825d031257ea3cb4a604f5
// }

// post()

//---------------------------------------------------------------------------
const pdetailSchema = new mongoose.Schema({
    Pd_ID : Number,
	P_Area : Number,
	P_Bedrooms : Number,
	P_Living_Rooms : Number,
	P_Bathrooms : Number,
	P_Parking : Number,
	P_Kitchen : Number,
	P_Servantrooms : Number
})

const Pdetail = mongoose.model("Pdetail",pdetailSchema)

// async function post() {
//     const user = new Pdetail({
// 		Pd_ID : 2,
// 		P_Area : 456,
// 		P_Bedrooms : 3,
// 		P_Living_Rooms : 1,
// 		P_Bathrooms : 4,
// 		P_Parking : 1,
// 		P_Kitchen : 2,
// 		P_Servantrooms : 1
// 	})
//     const result = await user.save()
//     console.log(result)
//     //remain sqft and seller images
//     //uid:1:6099ff2954cef31648c27e1d
//     //uid:2:6099ff69bfbf7c3528f18740
//     //pid:1:6098fb255fae6a32a0378113
//     //pid:2:6098fb8dc71ede42fce0faf0
//     //bid:1:609a08bcc826564274f25430
//     //bid:2:609a08ef95a0b0145861a0e8
//     //pdid:1:608259056ec64e1c50d523f1
//     //pdid:2:6082594e7c1aeb2630652b81
//     //agid:1:60825c7d7179503218a2aca4
//     //agid:2:60825d031257ea3cb4a604f5
// }

// post()

//--------------------------------------------------------------------------
const otherdetailSchema = new mongoose.Schema({
    Od_ID : Number,
	P_Fan : Number,
	P_Tube : Number,
	P_Bed : Number,
	P_Sofa : Number,
	P_Table : Number,
	P_Chair : Number,
	P_AC : Number,
	P_Geyser : Number,
	P_Oven : Number,
	P_Fridge : Number,
	P_Washing_M : Number,
	P_Others : Number,
})

const Odetail = mongoose.model("Odetail",otherdetailSchema)

// async function post() {
//     const user = new Odetail({
// 		Od_ID : 2,
// 		P_Fan : 3,
// 		P_Tube : 2,
// 		P_Bed : 2,
// 		P_Sofa : 2,
// 		P_Table : 2,
// 		P_Chair : 3,
// 		P_AC : 2,
// 		P_Geyser : 1,
// 		P_Oven : 1,
// 		P_Fridge : 1,
// 		P_Washing_M : 1,
// 		P_Others : 2,
// 	})
//     const result = await user.save()
//     console.log(result)
//     //remain sqft and seller images
//     //uid:1:6099ff2954cef31648c27e1d
//     //uid:2:6099ff69bfbf7c3528f18740
//     //pid:1:6098fb255fae6a32a0378113
//     //pid:2:6098fb8dc71ede42fce0faf0
//     //bid:1:609a08bcc826564274f25430
//     //bid:2:609a08ef95a0b0145861a0e8
//     //pdid:1:608259056ec64e1c50d523f1
//     //pdid:2:6082594e7c1aeb2630652b81
//     //agid:1:60825c7d7179503218a2aca4
//     //agid:2:60825d031257ea3cb4a604f5
// }

// post()

//----------------------------------------------------------------------------
const agreementdetailSchema = new mongoose.Schema({
    Ag_ID : Number,
	Stamp : Number,
	A_Start_date : Date,
	A_duration : String,
	Rent_Paid : String,
	Rent_Amount : Number,
	Maintenance_Paid : String,
	Maintenance_Amount : Number,
	Security_Amount : Number,
	Security_Paid : String,
	Cheque_No : Number,
	Transaction_id : String,
	Notice_Period : Number,
	Lock_in_Period : Number,
	Appointed_By : String
})

const Agreementdetail = mongoose.model("AgreementDetail",agreementdetailSchema)

// async function post() {
//     const user = new Agreementdetail({
// 		Ag_ID : 2,
// 		Stamp : 500,
// 		A_Start_date : "2020-05-05T00:00:00.000Z",
// 		A_duration : "12",
// 		Rent_Paid : "Monthly",
// 		Rent_Amount : 34000,
// 		Maintenance_Paid : "Monthly",
// 		Maintenance_Amount : 7000,
// 		Security_Amount : 7878,
// 		Security_Paid : "Cash",
// 		Cheque_No : 78787,
// 		Transaction_id : "hruryyui5464",
// 		Notice_Period : 365,
// 		Lock_in_Period : 7,
// 		Appointed_By : "Landlord"
// 	})
//     const result = await user.save()
//     console.log(result)
//     //remain sqft and seller images
//     //uid:1:6099ff2954cef31648c27e1d
//     //uid:2:6099ff69bfbf7c3528f18740
//     //pid:1:6098fb255fae6a32a0378113
//     //pid:2:6098fb8dc71ede42fce0faf0
//     //bid:1:609a08bcc826564274f25430
//     //bid:2:609a08ef95a0b0145861a0e8
//     //pdid:1:608259056ec64e1c50d523f1
//     //pdid:2:6082594e7c1aeb2630652b81
//     //agid:1:609a0c75bb34423b70e14313
//     //agid:2:609a0d3f245a633764fb1f28
// }

// post()

//-----------------------------------------------------------------------------
const rentreceiptSchema = new mongoose.Schema({
    Rent_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Payrent"
    },
	UserID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
	Rent_Amount : Number,
	City : String,
	L_Name : String,
	L_Pan : String,
	Receipt_Start_date : Date,
	Receipt_End_date : Date,
	T_Name : String,
	T_Mobile_No : Number,
	T_Email : String
})

const Rentreceipt = mongoose.model("Rentreceipt",rentreceiptSchema)

// async function post() {
//     const user = new Rentreceipt({
// 		Rent_id : "609a075e342b7b2770a5a16d",
// 		UserID : "6099ff2954cef31648c27e1d",
// 		Rent_Amount : 72727,
// 		City : "Ahmedabad",
// 		L_Name : "Nayan",
// 		L_Pan : "geheg67363",
// 		Receipt_Start_date : "2020-11-11T00:00:00.000Z",
// 		Receipt_End_date : "2021-11-11T00:00:00.000Z",
// 		T_Name : "Vinay",
// 		T_Mobile_No : 74647647,
// 		T_Email : "jdi@gmail.com"
// 	})
//     const result = await user.save()
//     console.log(result)
//     //remain sqft and seller images
//     //uid:1:6099ff2954cef31648c27e1d
//     //uid:2:6099ff69bfbf7c3528f18740
//     //pid:1:6098fb255fae6a32a0378113
//     //pid:2:6098fb8dc71ede42fce0faf0
//     //bid:1:609a08bcc826564274f25430
//     //bid:2:609a08ef95a0b0145861a0e8
//     //pdid:1:608259056ec64e1c50d523f1
//     //pdid:2:6082594e7c1aeb2630652b81
//     //agid:1:609a0c75bb34423b70e14313
//     //agid:2:609a0d3f245a633764fb1f28
// }

// post()

//--------------------------------------------------------------------
const tenantverificationSchema = new mongoose.Schema({
    UserID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
	ServiceName : String,
	Package : String,
	Identity_Verification : Boolean,
	Criminal_court_check : Boolean,
	Civil_litigation_check : Boolean,
	Permanent_Address : Boolean,
	Reference_check : Boolean,
	Price : Number,
	Payment_Option : String,
	GST_Number : String
})

const Tenantverification = mongoose.model("Tenantverification",tenantverificationSchema)

//-----------------------------------------------------------------------
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

//----------------------------------------------------------------------
const legalserviceSchema = new mongoose.Schema({
    UserID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
	ServiceName : String,
	Package_Name : String,
	Package_Description : String,
	Package_Price : Number,
	Service_Partner : String,
	Payment_Option : String
})

const Legalservice = mongoose.model("Legalservice",legalserviceSchema)

//-----------------------------------------------------------------------
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

//-----------------------------------------------------------------
const homeserviceSchema = new mongoose.Schema({
    UserID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
	ServiceFor : String,
    BHK : Number,
	Servicess : String,
	ServiceName : String,
	Service_description : String,
	Service_Price : Number,
	Service_Partner : String,
	Datetime : Date,
	Payment_Option : String
})

const Homeservice = mongoose.model("Homeservice",homeserviceSchema)

//-----------------------------------------------------------
const vastuSchema = new mongoose.Schema({
    UserID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
	ServiceName : String,
	Vastu_Consultants_Name : String,
    Description : String,
	Package : String,
	Price : Number,
	Payment_Option : String
})

const Vastu = mongoose.model("Vastu",vastuSchema)

//-----------------------------------------------------------------
const carddetailSchema = new mongoose.Schema({
    UserID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
	ServiceName : String,
	Card_Number : Number,
	MONTHs : Number,
	Years : Number,
	CVV : Number,
	Card_HolderName : String
})

const Carddetail = mongoose.model("Carddetail",carddetailSchema)

//-----------------------------------------------------------------
const netbankingSchema = new mongoose.Schema({
    UserID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
	ServiceNmae : String,
	Bank_Name : String,
	Account_No : Number,
	IFSC_Code : String,
	Landlord_pan : String
})

const Netbanking = mongoose.model("Netbanking",netbankingSchema)

//------------------------------------------------------------
const walletSchema = new mongoose.Schema({
    UserID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
	ServiceName : String,
	Options : String
})

const Wallet = mongoose.model("Wallet",walletSchema)

//-------------------------------------------------------------
const upiSchema = new mongoose.Schema({
    UserID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
	ServiceName : String,
	UPI_id : String,
	Landlord_pan : String
})

const Upi = mongoose.model("Upi",upiSchema)

