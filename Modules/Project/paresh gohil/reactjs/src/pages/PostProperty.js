import React,{useState} from 'react'
import "../css/PostProperty.scss"
import Property from "../services/Property"
import {v4 as uuidv4} from "uuid"
import {Link} from "react-router-dom"
import fs from "fs"
var FormData = require("form-data")


const PostProperty = () => {
	const [propertytype,setPropertytype] = useState("none")
	const [Property_Types,setPropertytypes] = useState("")
	const [Property_Type_Name,setPropertytypename] = useState("Select Property Type")
	const [Property_City,setCity] = useState("")
	const [Project_Name,setName] = useState("")
	const [full_address,setAddress] = useState("")
	const [bedrooms,setBedroom] = useState(0)
	const [bathrooms,setBathroom] = useState(0)
	const [balcony,setBalcony] = useState(0)
	const [unit_on_floor,setUnitonfloor] = useState("Lower Basement")
	const [floor,setFloor] = useState(0)
	const [furnished_status,setFurnished] = useState("")
	const [superarea,setSuperarea] = useState(0)
	const [carpetarea,setCarpetarea] = useState(0)
	const [transaction_type,setTransaction] = useState("")
	const [Property_Explore,setExplore] = useState("")
	const [Property_Budget,setBudget] = useState(0)
	const [seller,setSeller] = useState(null)
	// const [Property_Type_id,setId] = useState("")

	const [check1,setcheck1] = useState("")
	const [check2,setcheck2] = useState("")
	const [check3,setcheck3] = useState("")
	const [check4,setcheck4] = useState("")
	const [check5,setcheck5] = useState("")
	const [check6,setcheck6] = useState("")
	const [check7,setcheck7] = useState("")

	const [[select0,select1,select2,select3,select4,select5,select6,select7,select8,select9,select10,select11,select12,select13,select14,select15,select16,select17,select18],setSelect] = useState("selected","","","","","","","","","","","","","","","","","","")

	const handleImage = (e) => {
		console.log(e.target.id)
		console.log(e.target.files[0])
		const data = Buffer.from(e.target.files[0].toString()).toString('base64')
		// const data1 = btoa(Unit8ToString(data))
		// console.log(data)
		if(e.target.id === "fileupload"){
			setSeller(e.target.files[0])
			console.log(e.target.files[0])
		}
		else setSeller("")
	}
	// const data = URL.createObjectURL(seller)
	// console.log(Buffer.from(data))

	const handleBathroom = (e) => {
		if(e.target.id === "12000"){
			setBathroom(1)
		}
		else if(e.target.id === "12001"){
			setBathroom(2)
		}
		else if(e.target.id === "12002"){
			setBathroom(3)
		}
		else setBathroom(0)
	}

	const handleProperties = () => {
		const property = {
			Property_Type_id : uuidv4(),
			Property_Types : Property_Types,
			Property_Type_Name : Property_Type_Name,
			Property_Budget : Property_Budget,
			Property_City : Property_City,
			Property_Address : "Nikol",
			Project_Name : Project_Name,
			Property_Explore : Property_Explore
		}
		const propertydetails = {
			Property_Type_id : property.Property_Type_id,
			bedrooms: bedrooms,
			bathrooms : bathrooms,
			balcony : balcony,
			superarea : superarea,
			carpetarea : carpetarea,
			transaction_type : transaction_type,
			floor : floor,
			unit_on_floor : unit_on_floor,
			furnished_status : furnished_status,
		}
		const propertydescription = {
			Property_Type_id : property.Property_Type_id,
			full_address : full_address,			
		}
		const propertyimage = {
			Property_Type_id : property.Property_Type_id,
			// Images : seller
			// form,
			// headers : form.getHeaders
		}
		const form = new FormData()
		form.append("Images",seller)
		console.log(form)
		// Buffer.from(seller.toString("base64"),'base64')
		Property.createProperty(property).then((res) => {
			console.log("post property done")
		})
		Property.createPropertyDetails(Property_City,property.Property_Address,property.Property_Type_id,propertydetails).then((res) => {
			console.log("post property details done")
		})
		Property.createPropertyDescription(Property_City,property.Property_Address,property.Property_Type_id,propertydescription).then((res) => {
			console.log("post property description done")
		})
		// console.log(seller)
		Property.createPropertyImage(Property_City,property.Property_Address,property.Property_Type_id,form).then((res) => {
			console.log("post property image done",form)
		})
	}

	const handleProperty = (e) => {
		if(propertytype === "none"){
			setPropertytype("block")
		}
		else setPropertytype("none")
		console.log(e.target.value)

		if(e.target.value === 10002){
			setSelect("","selected","","","","","","","","","","","","","","","","","")
			setPropertytypename("Flat")
			console.log(e.target.value)
		}
		else if(e.target.value === 10001){
			setSelect("","","selected","","","","","","","","","","","","","","","","")
			setPropertytypename("Residential House")
		}
		else if(e.target.value === 10017){
			setSelect("","","","selected","","","","","","","","","","","","","","","")
			setPropertytypename("Villa")
						console.log(e.target.value)
		}
		else if(e.target.value === 10003){
			setSelect("","","","","selected","","","","","","","","","","","","","","")
			setPropertytypename("Builder Floor Apartment")
		}
		else if(e.target.value === 10000){
			setSelect("","","","","","selected","","","","","","","","","","","","","")
			setPropertytypename("Plot")
		}
		else if(e.target.value === 10021){
			setSelect("","","","","","","selected","","","","","","","","","","","","")
			setPropertytypename("Penthouse")
		}
		else if(e.target.value === 10022){
			setSelect("","","","","","","","selected","","","","","","","","","","","")
			setPropertytypename("Studio Apartment")
		}
		else if(e.target.value === 10007){
			setSelect("","","","","","","","","selected","","","","","","","","","","")
			setPropertytypename("Commercial Office Space")
		}
		else if(e.target.value === 10018){
			setSelect("","","","","","","","","","selected","","","","","","","","","")
			setPropertytypename("Office in IT Park")
		}
		else if(e.target.value === 10008){
			setSelect("","","","","","","","","","","selected","","","","","","","","")
			setPropertytypename("Commercial Shop")
		}
		else if(e.target.value === 10009){
			setSelect("","","","","","","","","","","","selected","","","","","","","")
			setPropertytypename("Commercial Showroom")
		}
		else if(e.target.value === 10006){
			setSelect("","","","","","","","","","","","","selected","","","","","","")
			setPropertytypename("Commercial Land")
		}
		else if(e.target.value === 10011){
			setSelect("","","","","","","","","","","","","","selected","","","","","")
			setPropertytypename("Warehouse")
		}
		else if(e.target.value === 10012){
			setSelect("","","","","","","","","","","","","","","selected","","","","")
			setPropertytypename("Industrial Land")
		}
		else if(e.target.value === 10013){
			setSelect("","","","","","","","","","","","","","","","selected","","","")
			setPropertytypename("Industrial Building")
		}
		else if(e.target.value === 10014){
			setSelect("","","","","","","","","","","","","","","","","selected","","")
			setPropertytypename("Industrial Shed")
		}
		else if(e.target.value === 10005){
			setSelect("","","","","","","","","","","","","","","","","","selected","")
			setPropertytypename("Agricultural Land")
		}
		else if(e.target.value === 10004){
			setSelect("","","","","","","","","","","","","","","","","","","selected")
			setPropertytypename("Farm House")
		}
		else {
			setSelect("selected","","","","","","","","","","","","","","","","","","")
			setPropertytypename("Select Property Type")
		}

	}

	const handlePropertytypes = (e) => {
		if(e.target.id === "propertyForS"){
			setcheck1("checked")
			setcheck2("")
			setcheck3("")
			setPropertytypes("buy")
		}
		else if(e.target.id === "propertyForR"){
			setcheck1("")
			setcheck2("checked")
			setcheck3("")
			setPropertytypes("Rent")
		}
		else{
			setcheck1("")
			setcheck2("")
			setcheck3("checked")
			setPropertytypes("PG")
		}
	}

	const handleCity = (e) => {
		setCity(e.target.value)
	}
	const handleProject = (e) => {
		setName(e.target.value)
	}
	const handleAddress = (e) => {
		setAddress(e.target.value)
	}
	const handleBedroom = (e) => {
		if(e.target.id === "11700"){
			setBedroom(1)
		}
		else if(e.target.id === "11701"){
			setBedroom(2)
		}
		else if(e.target.id === "11702"){
			setBedroom(3)
		}
		else if(e.target.id === "11703"){
			setBedroom(4)
		}
		else if(e.target.id === "11704"){
			setBedroom(5)
		}
		else setBedroom(0)
	}
	const handleBalcony = (e) => {
		console.log(e.target.id)
		if(e.target.id === "14200"){
			setBalcony(1)
		}
		else if(e.target.id === "14201"){
			setBalcony(2)
		}
		else if(e.target.id === "14202"){
			setBalcony(3)
		}
		else setBalcony(0)
	}
	const handleFloor = (e) => {
		console.log(e.target.id)
		if(e.target.id === "11200"){
			setUnitonfloor("Upper Basement")
		}
		else if(e.target.id === "11201"){
			setUnitonfloor("Ground")
		}
		else if(e.target.id === "11202"){
			setUnitonfloor("1")
		}
		else if(e.target.id === "11203"){
			setUnitonfloor("2")
		}
		else if(e.target.id === "11204"){
			setUnitonfloor("3")
		}
		else if(e.target.id === "11205"){
			setUnitonfloor("4")
		}
		else if(e.target.id === "11206"){
			setUnitonfloor("5")
		}
		else setUnitonfloor("Lower Basement")
	}
	const handleFloors = (e) => {
		console.log(e.target.id)
		if(e.target.id === "12050"){
			setFloor(1)
		}
		else if(e.target.id === "12051"){
			setFloor(2)
		}
		else if(e.target.id === "12052"){
			setFloor(3)
		}
		else if(e.target.id === "12053"){
			setFloor(4)
		}
		else if(e.target.id === "12054"){
			setFloor(5)
		}
		else if(e.target.id === "12055"){
			setFloor(6)
		}
		else if(e.target.id === "12056"){
			setFloor(7)
		}
		else if(e.target.id === "12057"){
			setFloor(8)
		}
		else if(e.target.id === "12058"){
			setFloor(9)
		}
		else if(e.target.id === "12059"){
			setFloor(10)
		}
		else if(e.target.id === "12060"){
			setFloor(11)
		}
		else if(e.target.id === "12061"){
			setFloor(12)
		}
		else if(e.target.id === "12062"){
			setFloor(13)
		}

		else setFloor(0)
	}
	const handleFurnished = (e) => {
		if(e.target.id === "11900"){
			setFurnished("Furnished")
		}
		else if(e.target.id === "11901"){
			setFurnished("Unfurnished")
		}
		else if(e.target.id === "11902"){
			setFurnished("Semi-Furnished")
		}
		else setFurnished("")
	}

	const handleSuperarea = (e) => {
		setSuperarea(e.target.value)
	}

	const handleCarpetarea = (e) => {
		setCarpetarea(e.target.value)
	}

	const handleTransaction = (e) => {
		if(e.target.value === "20501"){
			setcheck4("checked")
			setcheck5("")
			setTransaction("New Property")
		}
		else if(e.target.value === "20500"){
			setcheck4("")
			setcheck5("checked")
			setTransaction("Resale")
		}
		else{
			setcheck1("")
			setcheck2("")
			setTransaction("")
		}
	}

	const handleExplore = (e) => {
		if(e.target.value === "10080"){
			setcheck6("checked")
			setcheck7("")
			setExplore("Under Construction")
		}
		else if(e.target.value === "10081"){
			setcheck6("")
			setcheck7("checked")
			setExplore("ready to move")
		}
		else{
			setcheck6("")
			setcheck7("")
			setExplore("")
		}
	}

	const handleBudget = (e) => {
		setBudget(e.target.value)
	}


	console.log(Property_Budget)
    return (
        <div style={{background:"whitesmoke"}}>

<form id="postPropertyForm" name="postPropertyForm" action="/postproperty/post-property-for-sale-rent/residential-commercial" method="POST" encType="multipart/form-data">
<div style={{position: "fixed", left:"0", top: "0", display:  "none"}}>
	<span class="val1"></span> -<br/> <span class="val2"></span> - <br/><span class="val3"></span> - <br/><span class="val4"></span> 
</div>
<input type="hidden" id="errorHiod" value=""/>
<input type="hidden" id="requestparameter" value=""/>
<input type="hidden" id="postInterface" name="postInterface" value=""/>
<input type="hidden" id="exclusionPackageType" name="exclusionPackageType" value=""/>
<input type="hidden" name="requirementId" id="requirementId" value=""/>
<input type="hidden" name="showwhatsaapToagent" id="showwhatsaapToagent" value="Y"/>

<div class="ppSecBlockRWidth">

<div class="postingStep1__pointblock" style={{display: "block"}}>
	<div class="postingStep1__pointblock__data" style={{display: "block"}}>
	{/* <!-- right info step 1 start  --> */}
	<div class="postingStep1__pointblock__datatop  postingStep1__pointblock__datatopstep1" style={{display: "none"}}>
		<div class="postingStep1__pointblock__step1ico">
		</div>
		<div class="postingStep1__pointblock__step1heading">Introducing <span class="postingStep1__pointblock__step1headingsb">Magic Cash!</span></div>
		<div class="postingStep1__pointblock__step1subheading"><span class="postingStep1__pointblock__step1subheadingsb">Earn points</span> for every detail you enter.</div>
		<div class="postingStep1__pointblock__step1redemh"><span class="postingStep1__pointblock__step1redemhsb">Redeem</span> your Magic Cash to:</div>
		<div class="postingStep1__pointblock__step1li"><span class="postingStep1__pointblock__step1lisb">Buy Paid Ad</span> Packages</div>
		<div class="postingStep1__pointblock__step1li"><span class="postingStep1__pointblock__step1lisb">'Send Interest'</span> to buyers/tenants</div>
		<div class="postingStep1__pointblock__step1li"><span class="postingStep1__pointblock__step1lisb">See Buyer Profile</span> instantly</div>
		<div class="postingStep1__pointblock__step1li"><span class="postingStep1__pointblock__step1lisb">Refresh</span> your property</div>
		
		
		
	</div>
	{/* <!-- right info step 1 end  -->
	<!-- right info step 2 for photshoot start  --> */}
	<div class="photoshoot-block" id="photoshoot-block" style={{display: "none"}}>
			<div id="optOutPhotoshoot">
			<div class="photoshoot-block__head"><span class="icon-Av"></span>You have successfully purchased Titanium Package Plus Mailer</div> 
			<div class="photoshoot-block__title">Property Photoshoot</div>
			<div class="photoshoot-block__con">You're eligible for the Photoshoot service! If you're not interested, you can easily opt-out.</div>
			<div class="photoshoot-block__cta"><a href="#!" onClick="optOutPhotoshoot();">I'm Not Interested</a></div>
			</div>
			<div class="photoshoot-block__thankyou" id="thankyou-opt" style={{display: "none"}}><span class="icon-thankyou"></span>You've successfully opted out from service!</div>
	</div>
	{/* <!-- right info step 2  for photshoot end  -->
	<!-- right info step 2 start  --> */}
	<div class="postingStep1__pointblock__datatopstep2" style={{display: "none"}}>
		<div class="postingStep1__pointblock__datatop" style={{padding: "20px"}}>
			<div class="postingStep1__pointblock__datatopinfo">
				<div class="postingStep1__pointblock__datatopinfoimg"></div>
				<div class="postingStep1__pointblock__datatopinfotxt">
					<div class="postingStep1__pointblock__mcashtxt">Your Balance</div>
					<div class="postingStep1__pointblock__points"><span class="postingStep1__pointblock__pointsno" id="postingStep1pointblockpointsno">0</span> <span class="postingStep1__pointblock__pointsnolabel">Magic Cash</span></div>
				</div>
			</div>
		</div>
		<div class="tenX-resonses-banner" id="tenX-resonse-banner">
		<div class="tenX-resonses">
			<div class="tenX-resonses__head">Get <span>10X more</span> Responses by just</div>
		   <div class="tenX-resonses__content">
			   <div class="tenX-resonses__item">
				   <div class="tenX-resonses__item__icon">
					   <div class="icons-update-loc icons-update-loc--photo"></div>
				   </div>
				   <div class="tenX-resonses__item__head">Uploading Property Photos</div>
				   <div class="tenX-resonses__item__content">
					<span class="text-co-blue">85% of Buyers</span> prefer Properties with Photos  
				   </div>
			   </div>
			   <div class="tenX-resonses__item">
				<div class="tenX-resonses__item__icon">
					<div class="icons-update-loc icons-update-loc--buyer"></div>
				</div>
				<div class="tenX-resonses__item__head">Contacting Interested Buyers</div>
				<div class="tenX-resonses__item__content">Owners log in to <span>view interest</span> expressed by Buyers &amp; Contact them</div>
			</div>
			   <div class="tenX-resonses__item">
				   <div class="tenX-resonses__item__icon">
					   <div class="icons-update-loc icons-update-loc--app"></div>
				   </div>
				   <div class="tenX-resonses__item__head">Benefits of Downloading the App</div>
				   <div class="tenX-resonses__item__content">Owners get <span>real time updates</span> &amp; are able to <span>connect with Buyers instantly</span></div>
			   </div>
		   </div>
		</div>
	
		</div>
		{/* <!-- <div class="postingStep1__pointblock__databottominfo"> -->
			<!--<div class="postingStep1__pointblock__databottomtxt"><span class="postingStep1__pointblock__comvview">Complete</span> your property information to get more buyers to <span class="postingStep1__pointblock__comvview">view</span> your property!</div>
			<div class="postingStep1__pointblock__dataprogressblock">
				<div class="postingStep1__pointblock__dataprogressicon"></div>
				<div class="postingStep1__pointblock__dataprogressinf">
					<div class="postingStep1__pointblock__dataprogressinfoheading">Visibility to buyers</div>
					<div class="postingStep1__pointblock__dataprogressno" id="postingStep1Visibility">0%</div>
					<div class="postingStep1__pointblock__dataprogressgraphbg">
						<div class="postingStep1__pointblock__dataprogressgraph" style="width: 20%;"></div>
					</div>
				</div>
			</div>-->
		<!-- </div> --> */}
		
		{/* <!-- <div class="postingStep1__pointblock__missedblock" style="display:none;" id="extraPointblock">
			<div class="postingStep1__pointblock__localtxt">Oh, No. You have missed some <span class="postingStep1__pointblock__localtxtbold">Magic Cash</span>, while filling details.</div>
			<div class="postingStep1__pointblock__ul">
				<div class="postingStep1__pointblock__li" id="postingStep1__pointblock__furnished_missedblock" style="display:none;">
					<div class="postingStep1__pointblock__label">Furnishing Status</div>
					<div class="postingStep1__pointblock__value" >50 Magic Cash</div>
					<div class="clearAll"></div>
				</div>
				<div class="postingStep1__pointblock__li" id="postingStep1__pointblock__maintenance_missedblock" style="display:none;">
					<div class="postingStep1__pointblock__label">Maintenance Charges </div>
					<div class="postingStep1__pointblock__value">80 Magic Cash</div>
					<div class="clearAll"></div>
				</div>
				<div class="postingStep1__pointblock__li" id="postingStep1__pointblock__booking_missedblock" style="display:none;">
					<div class="postingStep1__pointblock__label">Booking/Security Amount</div>
					<div class="postingStep1__pointblock__value">100 Magic Cash</div>
					<div class="clearAll"></div>
				</div>
			</div>
			
		</div> --> */}
		
	</div>
	{/* <!-- right info step 2 end  -->
	
	<!-- right info step 3 start  --> */}
	
	
	<div class="postingStep1__pointblock__box postingStep1__pointblock__box__mt12" style={{display: "block",background:"whitesmoke"}} id="extraScoreblock">
	<div class="postingStep1__pointblock__missedblock postingStep1__pointblock__missedblock3">
	
			<div class="postingStep1__pointblock__localtxt" id="extraScoreId">Don't miss out on this extra 26% . <span class="postingStep1__pointblock__localtxtbold">Add &amp; get 5 times</span> more responses</div>
			<div class="postingStep1__pointblock__ul">
           		<div class="numBlock" id="photoId" rel="photoLink">
               	   <div class="postingStep1__pointblock__label">Photos</div>
                   <div class="postingStep1__pointblock__value">20%</div> 
                   <div class="clearAll"></div>
               </div>
               <div class="postingStep1__pointblock__li" id="bedRoomSizesId" rel="bedroomSize">
               		<div class="postingStep1__pointblock__label">Bedroom sizes</div>
                   	<div class="postingStep1__pointblock__value" id="bedRoomSizesScore">2%</div>
                   	<div class="clearAll"></div>
               </div>
                <div class="numBlock" id="bookingId" rel="bookingAmt">
               		<div class="postingStep1__pointblock__label" id="bookingIdText">Booking/Security Amount</div>
                   	<div class="postingStep1__pointblock__value" id="bookingIdscore">2%</div>
                   	<div class="clearAll"></div>
               </div>
               <div class="numBlock" id="MaintenanceChargesId" rel="mainCharges">
               		<div class="postingStep1__pointblock__label">Maintenance Charges</div>
                   	<div class="postingStep1__pointblock__value" id="MaintenanceChargesScoreId">2%</div>
                   	<div class="clearAll"></div>
               </div>
               <div class="numBlock" id="additionalFeaturesId" rel="addFeatures" style={{display: "none"}}>
               		<div class="postingStep1__pointblock__label">Additional Features</div>
                   	<div class="postingStep1__pointblock__value" id="additionalFeaturesScoreId">5%</div>
                   	<div class="clearAll"></div>
               </div>
               <div class="numBlock" id="WidthoffacingroadId" rel="facingCharges" style={{display: "none"}}>
               		<div class="postingStep1__pointblock__label">Width of facing road</div>
                   	<div class="postingStep1__pointblock__value" id="WidthoffacingroadScoreId">5%</div>
                   	<div class="clearAll"></div>
               </div>
           </div>
			
		</div>
		</div>
	{/* <!-- right info step 3 end  --> */}
	
</div>
</div>

<div class="step1MainCont" id="postProperty" >
  




<div class="postPropHeader" style={{width:"672px",background:"white"}}>
	
    	<div class="mHeader1">
		<span><h1 class="highLight">Sell or Rent your Property</h1>  We've over <span class="highLight___semibold">15 Lac buyers and tenants</span> for you!</span>
    </div>
    
    {/* <!-- <div class="mHeader2">
		It's Easy...It's Simple.. & Yes It's <span class="free">FREE<sup>*</sup></span>
    </div> --> */}
</div>

{/* <!-- <div class="stepStrip">
	<div class="container">
    	<div class="step1">
        	<div class="rStep1Act"></div>
            <div class="rStep1ActData">
            	Step 1
                <span class="step1ActSubH">Basic Details</span>
            </div>
        </div>
        <div class="step1Dev"></div>
        <div class="step2">
        	<div class="rStep2Act"></div>
            <div class="rStep2ActData">
            	Step 2
                <span class="step2ActSubH">Additional Details</span>
            </div>
        </div>
        <div class="step2Dev"></div>
        <div class="clearAll"></div>
    </div>
</div> --> */}



	
	<div class="postingStep1__offer__block" style={{width:"672px",background:"white"}}>	
	  	<div class="postingStep1__offer">
	  		<div class="postingStep1__offer__heading">You are posting this property for <span class="postingStep1__offer__amt">₹5000</span> <span class="postingStep1__offer__free">FREE!</span></div>
	  		<div class="postingStep1__offer__list">
	  			<div class="postingStep1__offer__listitems"><span class="postingStep1__offer__bold">Free</span> Professional Photoshoot</div>
	  			<div class="postingStep1__offer__listitems">Get Contact Details of upto <span class="postingStep1__offer__bold">5</span> Responses</div>
	  			<div class="postingStep1__offer__listitems">Access to <span class="postingStep1__offer__bold">15 Lac</span> Buyers &amp; Tenants</div>
	  		</div>
	  	</div>
	</div>
	
	<div class="ppSecBlock">
		<div class="dataBlock">
			<div class="secHeading">Personal Details</div>
				<div class="formEle">
            		<div class="formLabel">I am</div>
	                <div class="formValue">
	                	<div class="radioBlock">
	                		<ul>
									<li>
			                   			<span class="customRadioButton">
			                   				<input id="iamO" name="iAmType" style={{opacity: "0"}} onClick="customRadioButtonNew(this, 'iAmType');ga('send','event','PostPropertyWeb','Step1OwnerSelect','Step1OwnerSelect');" value="o" type="radio"/> 
			                   			</span> 
			                   			<label class="curPoint" for="iamO" id="iam_O">Owner</label>
									</li>
									<li>
			                   			<span class="customRadioButton checked">
			                   				<input id="iamA" name="iAmType" style={{opacity: "0"}} onClick="customRadioButtonNew(this, 'iAmType');" value="a" type="radio"/> 
			                   			</span> 
			                   			<label class="curPoint" for="iamA" id="iam_A">Agent</label>
									</li>
									<li>
			                   			<span class="customRadioButton">
			                   				<input id="iamB" name="iAmType" style={{opacity: "0"}} onClick="customRadioButtonNew(this, 'iAmType');" value="b" type="radio"/> 
			                   			</span> 
			                   			<label class="curPoint" for="iamB" id="iam_B">Builder</label>
									</li>
	                        </ul>
	                        
	                        <div class="clearAll"></div>
		                    <div id="iamError" class="formErr" style={{top: "25px", display: "none"}}>
		                        <span class="formErrArrow"></span>
		                        <span>Error message goes here</span>
		                    </div> 
	                    </div>
	                </div>
	                <div class="valiDated" id="iamTick"></div>
	            	<div class="clearAll"></div>
            </div>
            <div class="clearAll"></div>
            
             <div class="formEle v--display" id="userNameBlock" style={{display: "none"}}>
                    <div class="formLabel inputDrop" id="">Name</div>
                    <div class="formValue">
                        <div class="formCom">
                            <span class="inputContainer">
                            	<input id="name" name="name" class="ciDrop inputText" placeholder="Enter Your Name" value="" maxlength="30" type="text" onchange="if(!validateOwnerName(this.form)){ return false; } else { validateOwnerField(this, 'nameErrorDiv', 'valiDatedname');updateName();}"/>
                            </span>
                        </div>
                        <div class="valiDated" id="valiDatedname"></div>
                        <div class="clearAll"></div>
                        <div style={{display: "none"}} id="nameErrorDiv" class="formErr">
                            <span class="formErrArrow"></span>
                            <span>Error message goes here</span>
                        </div>
                </div>
            	<div class="clearAll"></div>
            </div>
            <div class="clearAll"></div>
            
            <div class="formEle v--display" id="userMobileBlock" style={{display: "none"}}>
                    <div class="formLabel inputDrop" id="">Mobile</div>
                    <div class="formValue">
                    	<div class="formCom" style={{marginRight: "10px"}}>
							<input type="button" class="ciDrop btnInput" value="IND +91" name="isdVal1" id="isdVal1" style={{width: "105px"}}/>
							<select onchange="javascript:getIsdSelectVal(this, isdVal1);updateIsd();" class="areaList" name="isd1" id="isd1" style={{position: "absolute", height: "34px", left: "0", position: "absolute", width: "92px", opacity: "0", top: "0", filter: "alpha(opacity=0)"}}>
							
								<option value="50" selected="selected">IND +91</option>
							
								<option value="51">USA +1</option>
							
								{/* <option value="53">ARE +971</option>
							
								<option value="227">SGP +65</option>
							
								<option value="57">SAU +966</option>
							
								<option value="54">CAN +1</option>
							
								<option value="55">AUS +61</option>
							
								<option value="215">QAT +974</option>
							
								<option value="205">OMN +968</option>
							
								<option value="144">HKG +852</option>
							
								<option value="60">AFG +93</option>
							
								<option value="65">AGO +244</option>
							
								<option value="66">AIA +264</option>
							
								<option value="61">ALB +355</option>
							
								<option value="64">AND +376</option>
							
								<option value="194">ANT +599</option>
							
								<option value="68">ARG +54</option>
							
								<option value="69">ARM +374</option>
							
								<option value="63">ASM +684</option>
							
								<option value="67">ATG +268</option>
							
								<option value="71">AZE +994</option>
							
								<option value="88">BDI +257</option>
							
								<option value="87">BFA +226</option>
							
								<option value="74">BGD +880</option>
							
								<option value="73">BHR +973</option>
							
								<option value="72">BHS +1242</option>
							
								<option value="82">BIH +387</option>
							
								<option value="76">BLR +375</option>
							
								<option value="78">BLZ +501</option>
							
								<option value="79">BMU +1441</option>
							
								<option value="81">BOL +591</option>
							
								<option value="84">BRA +55</option>
							
								<option value="75">BRB +1246</option>
							
								<option value="85">BRN +673</option>
							
								<option value="80">BTN +975</option>
							
								<option value="83">BWA +267</option>
							
								<option value="93">CAF +236</option>
							
								<option value="243">CHE +41</option>
							
								<option value="95">CHL +56</option>
							
								<option value="96">CHN +86</option>
							
								<option value="103">CIV +225</option>
							
								<option value="90">CMR +237</option>
							
								<option value="99">COD +243</option>
							
								<option value="100">COG +242</option>
							
								<option value="101">COK +682</option>
							
								<option value="97">COL +57</option>
							
								<option value="98">COM +269</option>
							
								<option value="91">CPV +238</option>
							
								<option value="102">CRI +506</option>
							
								<option value="105">CUB +53</option>
							
								<option value="92">CYM +345</option>
							
								<option value="109">DJI +253</option>
							
								<option value="110">DMA +767</option>
							
								<option value="111">DOM +1</option>
							
								<option value="62">DZA +213</option>
							
								<option value="113">ECU +593</option>
							
								<option value="114">EGY +20</option>
							
								<option value="117">ERI +291</option>
							
								<option value="119">ETH +251</option>
							
								<option value="122">FJI +679</option>
							
								<option value="120">FLK +500</option>
							
								<option value="121">FRO +298</option>
							
								<option value="183">FSM +691</option>
							
								<option value="127">GAB +241</option>
							
								<option value="129">GEO +995</option>
							
								<option value="131">GHA +233</option>
							
								<option value="132">GIB +350</option>
							
								<option value="139">GIN +224</option>
							
								<option value="136">GLP +590</option>
							
								<option value="128">GMB +220</option>
							
								<option value="140">GNB +245</option>
							
								<option value="116">GNQ +240</option>
							
								<option value="135">GRD +473</option>
							
								<option value="134">GRL +299</option>
							
								<option value="138">GTM +502</option>
							
								<option value="125">GUF +594</option>
							
								<option value="137">GUM +671</option>
							
								<option value="141">GUY +592</option>
							
								<option value="143">HND +504</option>
							
								<option value="142">HTI +509</option>
							
								<option value="147">IDN +62</option>
							
								<option value="148">IRN +98</option>
							
								<option value="149">IRQ +964</option>
							
								<option value="146">ISL +354</option>
							
								<option value="151">ISR +972</option>
							
								<option value="153">JAM +1</option>
							
								<option value="155">JOR +962</option>
							
								<option value="154">JPN +81</option>
							
								<option value="156">KAZ +7</option>
							
								<option value="157">KEN +254</option>
							
								<option value="160">KGZ +996</option>
							
								<option value="89">KHM +855</option>
							
								<option value="158">KIR +686</option>
							
								<option value="235">KNA +869</option>
							
								<option value="184">KOR +373</option>
							
								<option value="58">KWT +965</option>
							
								<option value="161">LAO +856</option>
							
								<option value="163">LBN +961</option>
							
								<option value="165">LBR +231</option>
							
								<option value="166">LBY +218</option>
							
								<option value="236">LCA +758</option>
							
								<option value="167">LIE +423</option>
							
								<option value="233">LKA +94</option>
							
								<option value="164">LSO +266</option>
							
								<option value="170">MAC +853</option>
							
								<option value="188">MAR +212</option>
							
								<option value="185">MCO +377</option>
							
								<option value="159">MDA +82</option>
							
								<option value="172">MDG +261</option>
							
								<option value="175">MDV +960</option>
							
								<option value="182">MEX +52</option>
							
								<option value="171">MKD +389</option>
							
								<option value="176">MLI +223</option>
							
								<option value="190">MMR +95</option>
							
								<option value="186">MNG +976</option>
							
								<option value="189">MOZ +258</option>
							
								<option value="179">MRT +222</option>
							
								<option value="187">MSR +664</option>
							
								<option value="178">MTQ +596</option>
							
								<option value="180">MUS +230</option>
							
								<option value="173">MWI +265</option>
							
								<option value="174">MYS +60</option>
							
								<option value="181">MYT +269</option>
							
								<option value="191">NAM +264</option>
							
								<option value="196">NCL +687</option>
							
								<option value="199">NER +227</option>
							
								<option value="202">NFK +672</option>
							
								<option value="200">NGA +234</option>
							
								<option value="198">NIC +505</option>
							
								<option value="201">NIU +683</option>
							
								<option value="204">NOR +47</option>
							
								<option value="193">NPL +977</option>
							
								<option value="192">NRU +674</option>
							
								<option value="197">NZL +64</option>
							
								<option value="56">PAK +92</option>
							
								<option value="206">PAN +507</option>
							
								<option value="211">PCN +649</option>
							
								<option value="209">PER +51</option>
							
								<option value="210">PHL +63</option>
							
								<option value="207">PNG +675</option>
							
								<option value="214">PRI +939</option>
							
								<option value="203">PRK +850</option>
							
								<option value="208">PRY +595</option>
							
								<option value="126">PYF +689</option>
							
								<option value="216">REU +262</option>
							
								<option value="270">RNR +260</option>
							
								<option value="218">RUS +7</option>
							
								<option value="219">RWA +250</option>
							
								<option value="224">SCG +381</option>
							
								<option value="239">SDN +249</option>
							
								<option value="223">SEN +221</option>
							
								<option value="234">SHN +290</option>
							
								<option value="230">SLB +677</option>
							
								<option value="226">SLE +232</option>
							
								<option value="115">SLV +503</option>
							
								<option value="221">SMR +378</option>
							
								<option value="231">SOM +252</option>
							
								<option value="237">SPM +508</option>
							
								<option value="222">STP +239</option>
							
								<option value="240">SUR +597</option>
							
								<option value="241">SWZ +268</option>
							
								<option value="225">SYC +248</option>
							
								<option value="244">SYR +963</option>
							
								<option value="256">TCA +649</option>
							
								<option value="94">TCD +235</option>
							
								<option value="249">TGO +228</option>
							
								<option value="248">THA +66</option>
							
								<option value="246">TJK +992</option>
							
								<option value="250">TKL +690</option>
							
								<option value="255">TKM +993</option>
							
								<option value="112">TLS +670</option>
							
								<option value="251">TON +676</option>
							
								<option value="252">TTO +868</option>
							
								<option value="253">TUN +216</option>
							
								<option value="254">TUR +90</option>
							
								<option value="257">TUV +688</option>
							
								<option value="245">TWN +886</option>
							
								<option value="247">TZA +255</option>
							
								<option value="258">UGA +256</option>
							
								<option value="259">UKR +380</option>
							
								<option value="260">URY +598</option>
							
								<option value="261">UZB +998</option>
							
								<option value="238">VCT +784</option>
							
								<option value="263">VEN +58</option>
							
								<option value="265">VGB +284</option>
							
								<option value="266">VIR +340</option>
							
								<option value="264">VNM +84</option>
							
								<option value="262">VUT +678</option>
							
								<option value="267">WLF +681</option>
							
								<option value="220">WSM +685</option>
							
								<option value="268">YEM +967</option>
							
								<option value="269">YUG +381</option>
							
								<option value="59">ZAF +27</option>
							
								<option value="271">ZWE +263</option> */}
							
							</select>
							</div>
                        <div class="formCom">
                            <span class="inputContainer">
                            	<input id="mobileNo" name="mobileNo" class="ciDrop inputText" placeholder="Enter Your Mobile" value="" maxlength="14" type="text" style={{width: "165px"}} onchange="if(!validateOwnerMobile(this.form)){return false;} else { validateOwnerField(this, 'mobileNoErrorDiv', 'valiDatedmobileNo');updateMobile();}"/>
                            </span>
                        </div>
                        <div class="valiDated" id="valiDatedmobileNo"></div>
                        <div class="clearAll"></div>
                        <div style={{display: "none"}} id="mobileNoErrorDiv" class="formErr">
                            <span class="formErrArrow"></span>
                            <span>Error message goes here</span>
                        </div>
                </div>
            	<div class="clearAll"></div>
            </div>
            <div class="clearAll"></div>
            
            <div class="formEle v--display" id="userEmailBlock" style={{display: "none"}}>
                    <div class="formLabel inputDrop" id="">Email</div>
                    <div class="formValue">
                        <div class="formCom">
                            <span class="inputContainer">
                            	<input id="email" name="email" class="ciDrop inputText" placeholder="Enter Your Email" value="" maxlength="100" type="text" onchange="if(!validateOwnerEmail(this.form)){ return false; } else { validateOwnerField(this, 'mailIdErrorDiv', 'valiDatedmailId'); isEmailIdExist();}"/>
                            </span>
                        </div>
                        <div class="valiDated" id="valiDatedmailId"></div>
                        <div class="clearAll"></div>
                        <div style={{display: "none"}} id="mailIdErrorDiv" class="formErr">
                            <span class="formErrArrow"></span>
                            <span>Error message goes here</span>
                        </div>
                </div>
            	<div class="clearAll"></div>
            </div>
            <div class="clearAll"></div>
		</div>
	</div>
	
	<input type="hidden" id="useremailexists" name="useremailexists" value="N"/>
	<input id="pmttempid" name="pmttempid" type="hidden" value=""/>
	<input id="fceusername" name="fceusername" type="hidden" value=""/>
	<input id="fcemobile" name="fcemobile" type="hidden" value=""/>
	<input type="hidden" id="loggedIn" name="loggedIn" value="false"/>
	<input type="hidden" id="utyp" name="utyp" value=""/>
	<input type="hidden" id="tpptrfnum" name="tpptrfnum" value=""/>
	<input id="fcemail" name="fcemail" type="hidden" value=""/>

	<input id="b2ctrackValue" name="b2ctrackValue" type="hidden" value="no"/>
	{/* <!-- listing and message  Start --> */}
	
  
  <div class="b2c-popup-full" id="b2c-popup-full">
    <div class="b2c-popup-full__close"><a href="#!" onClick="b2cFullPopupClose('b2c-popup-full');"></a></div>
	    <div class="b2c-popup-full__inner" id="b2c_pkg_popup__new">
	      
	    
	    </div>
    </div>
  <div class="transpant_overlay"></div>
  <div class="b2c_pkg_popup" id="b2c_pkg_popup"><a href="#!" class="b2c-close-popup" onClick="b2cPopClose('b2c_pkg_popup');"></a> 
   
  






{/* <script>
	var context_url = '/postproperty/';
	var GOOGLE_MAP_KEY_API_V3 = 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places,geometry&types=atm&sensor=false&key=AIzaSyC_YU1YQKR4YoafqUTg2vsoPS1JHqW-pto';
	var MB_SCRIPT_URL = 'https://www.magicbricks.com/scripts/';
	var POSTPROPERTY_SCRIPT_URL = '/static/scripts/'; 
	var globalFocusFlag = true;
	var postPropertyImagePath = '/static/images/';
	var SIBLING_DOMAIN_URL = 'https://www.magicbricks.com';
	var GLOBALASSETURL = 'https://cdn.staticmb.com/';
	var mbpg_context_url = 'https://www.magicbricks.com/pg-home/';
</script> */}








{/* <script>
	var context_url = '/postproperty/';
	var GOOGLE_MAP_KEY_API_V3 = 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places,geometry&types=atm&sensor=false&key=AIzaSyC_YU1YQKR4YoafqUTg2vsoPS1JHqW-pto';
	var MB_SCRIPT_URL = 'https://www.magicbricks.com/scripts/';
	var POSTPROPERTY_SCRIPT_URL = '/static/scripts/'; 
	var globalFocusFlag = true;
	var postPropertyImagePath = '/static/images/';
	var SIBLING_DOMAIN_URL = 'https://www.magicbricks.com';
	var GLOBALASSETURL = 'https://cdn.staticmb.com/';
	var mbpg_context_url = 'https://www.magicbricks.com/pg-home/';
</script> */}

{/* <link rel="preload" as="font" crossorigin="crossorigin" type="font/woff2" href="https://cdn.staticmb.com/font/open-sans/Regular/OpenSans-Regular.woff2">
<link rel="preload" as="font" crossorigin="crossorigin" type="font/woff2" href="https://cdn.staticmb.com/font/open-sans/Semibold/OpenSans-Semibold.woff2">
<link rel="preload" as="font" crossorigin="crossorigin" type="font/woff2" href="https://cdn.staticmb.com/font/open-sans/Bold/OpenSans-Bold.woff2">
<style type="text/css">
	@font-face {
	  font-family: 'Open Sans';
	  src: url("https://cdn.staticmb.com/font/open-sans/Regular/OpenSans-Regular.eot");
	  src: url("https://cdn.staticmb.com/font/open-sans/Regular/OpenSans-Regular.eot?#iefix&v=1.1.0") format("embedded-opentype"), url("https://cdn.staticmb.com/font/open-sans/Regular/OpenSans-Regular.woff2") format("woff2"), url("https://cdn.staticmb.com/font/open-sans/Regular/OpenSans-Regular.woff") format("woff"), url("https://cdn.staticmb.com/font/open-sans/Regular/OpenSans-Regular.ttf") format("truetype"), url("https://cdn.staticmb.com/font/open-sans/Regular/OpenSans-Regular.svg#Regular") format("svg");
	  font-display: swap;
	  font-weight: 400;
	  font-style: normal;
	}
	@font-face {
	  font-family: 'Open Sans';
	  src: url("https://cdn.staticmb.com/font/open-sans/Semibold/OpenSans-Semibold.eot");
	  src: url("https://cdn.staticmb.com/font/open-sans/Semibold/OpenSans-Semibold.eot?#iefix&v=1.1.0") format("embedded-opentype"), url("https://cdn.staticmb.com/font/open-sans/Semibold/OpenSans-Semibold.woff2") format("woff2"), url("https://cdn.staticmb.com/font/open-sans/Semibold/OpenSans-Semibold.woff") format("woff"), url("https://cdn.staticmb.com/font/open-sans/Semibold/OpenSans-Semibold.ttf") format("truetype"), url("https://cdn.staticmb.com/font/open-sans/Semibold/OpenSans-Semibold.svg#Semibold") format("svg");
	  font-display: swap;
	  font-weight: 600;
	  font-style: normal;
	}
	@font-face {
	  font-family: 'Open Sans';
	  src: url("https://cdn.staticmb.com/font/open-sans/Bold/OpenSans-Bold.eot");
	  src: url("https://cdn.staticmb.com/font/open-sans/Bold/OpenSans-Bold.eot?#iefix&v=1.1.0") format("embedded-opentype"), url("https://cdn.staticmb.com/font/open-sans/Bold/OpenSans-Bold.woff2") format("woff2"), url("https://cdn.staticmb.com/font/open-sans/Bold/OpenSans-Bold.woff") format("woff"), url("https://cdn.staticmb.com/font/open-sans/Bold/OpenSans-Bold.ttf") format("truetype"), url("https://cdn.staticmb.com/font/open-sans/Bold/OpenSans-Bold.svg#Bold") format("svg");
	  font-display: swap;
	  font-weight: 700;
	  font-style: normal;
	}
	

@font-face {
    font-family: 'open_sanslight';
    src: url('https://cdn.staticmb.com/font/opensans-light-webfont.eot');
    src: url('https://cdn.staticmb.com/font/opensans-light-webfont.eot?#iefix') format('embedded-opentype'),
         url('https://cdn.staticmb.com/font/opensans-light-webfont.woff2') format('woff2'),
         url('https://cdn.staticmb.com/font/opensans-light-webfont.woff') format('woff'),
         url('https://cdn.staticmb.com/font/opensans-light-webfont.ttf') format('truetype'),
         url('https://cdn.staticmb.com/font/opensans-light-webfont.svg#open_sanslight') format('svg');
    font-weight: normal;
    font-style: normal;

}

@media only screen and (max-width:480px){ 
	.all_sub_section .sm_sub_section{width:33%;}
	.all_sub_section .lg_sub_section{width:65%;}
	.all_sub_section .md_sub_section{width:48.5%;}	
	.packageExp{width:86% !important;  padding:5px !important; box-sizing:border-box; top:30%; margin:auto; box-shadow:0 2px 3px #999;}
}
</style>
<!-- <link rel="stylesheet" href="/static/css/b2cpromotion_revamp.css?ver=05272021.045934" type="text/css" />	
<link rel="stylesheet" href="/static/css/premiumPkgMob_revmap.css?ver=05272021.045934" type="text/css" />-->
<link rel="stylesheet" href="/static/css/b2cPackagesGroup.css?ver=05272021.045934" type="text/css">
<script type="text/javascript" src="/static/scripts/b2cpromotionRevamp.js?ver=05272021.045934"></script> 

<script type="text/javascript">

</script> */}



        


<div class="pkg-container" id="pkgcontainerstep1Id" style={{position: "relative",display:"none"}}>
	
        
	  
	  	  <div id="freeAvailablePgRediectionLink" style={{position: "absolute", top: "12px", right: "0", height: "28px", fontSize: "14px", lineHeight: "28px",
		    minWidth: "421px", background: "#fbe9e9", borderRadius: "20px 0 0 20px", boxSizing:"border-box", padding:"0 10px 0 28px"}}>
			<span style={{position: "absolute", left: "13px", top: "9px"}}>
			<svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11">
		   	<g fill="none" fill-rule="evenodd">
		        <path stroke="#D8232A" stroke-width=".75" d="M6 .783L.632 10.625h10.736L6 .783z"></path>
		       <path fill="#303030" fill-rule="nonzero" d="M6.14 4.48c.298 0 .512-.207.512-.488 0-.285-.215-.492-.511-.492-.282 0-.496.207-.496.492 0 .281.214.488.496.488zm.36 4.887v-4.11h-.707v4.11H6.5z"></path>
		    </g>
			</svg>
			</span>
			<span style={{fontStyle: "italic", fontWeight: "600", fontSize: "12px", color: "#303030"}}>These Packages are not valid for PGs.</span>
			<a href="https://www.magicbricks.com/pg-home/home" style={{fontSize: "12px", color: "#303030", textDecoration: "underline"}}>Click here to post a PG property.</a>
		  </div>
	  
  
  <div class="pkg-container-layout">
	<div class="b2c-heading" id="b2cheadingid">
		
        
        
        
        
        
        	<h3>Select your Ad Package</h3>
        
        
		<ul class="">
			<li>Reach out to More Buyers</li>
			<li>Get Better Visibility of Your Property</li>
			<li>Sell Your Property Faster</li>
		 </ul>
		 
		 
	</div>
	<input type="hidden" id="loginfromwhere" value=""/>
	<div class="packageOfferCont">
		<div class="premiumPackagesWrap">
			<div class="premium-table freeVsPremiumTable">
				<div class="postproperty_pkgcont">
						
					<input type="hidden" id="listType" name="listType" value=""/> 
					
						
							
							
							
						
						
					
				
					   
						
					   <input type="hidden" id="disid" value=""/>

<div class="text-center m-b-20" id="b2cDynamicPackages">
	<div class="mbPkgTableWrap mbPkgTableColm5 " id="b2c_packages">
	    
	    
	    
	    
	    
		
	    
	    
	</div>
	
    <input type="hidden" id="b2ctype" value=""/>
</div>
<div class="clear"></div>
<div class="b2c-info fo_11px ">
	* Property Photoshoot service is available in select cities only- Delhi NCR, Mumbai, Navi Mumbai, Thane, Pune, Bangalore, Hyderabad, Chennai, Kolkata, &amp; Ahmedabad. <br/>
	* Property Photoshoot service is applicable on all Ready-to-move Residential Properties &amp; specific Commercial Properties like Office Spaces, Showroom, Shop, Office in IT Park/SEZ &amp; Co-working Space.
	
</div>

{/* <script type="text/javascript">
var gaB2cAction='';
var gaB2cLabel='';
var gaB2cCategory='';

</script> */}
					    
				</div>
			</div>
		</div>
	</div>
  </div>
</div>
 

{/* <script>

$( document ).ready(function() {
	var val=$('#loginfromwhere').val();
	if(val!=null && val!=undefined && val=="Y"){
		$(".b2c-popup-full__close").hide();
	}else{
		$(".b2c-popup-full__close").show();
	}
});
</script> */}

  
  </div>
	            <div class="b2c_pkg_popup_layer"></div>
	<div class="clearAll"></div>
	
	
	   
	
	<div class="clearAll"></div>
	<div class="ppSecBlock">
    	<div class="dataBlock">
        	<div class="secHeading">Property Details</div>
            <div class="formEle" style={{width: "360px"}}>
            	<div class="formLabel">For</div>
                <div class="formValue">
                	<div class="radioBlock">
                		<ul>
                    		
								<li>
		                   			<span class={`customRadioButton ${check1}`}>
		                   				<input id="propertyForS" name="propertyFor" style={{opacity: "0"}} onClick={handlePropertytypes} type="radio" value="S" checked={check1}/> 
		                   			</span> 
		                   			<label class="curPoint" for="propertyForS" id="propertyFor_S">Sale</label>
								</li>
		                   	
								<li>
		                   			<span class={`customRadioButton ${check2}`}>
		                   				<input id="propertyForR" name="propertyFor" style={{opacity: "0"}} onClick={handlePropertytypes} type="radio" value="R" checked={check2}/> 
		                   			</span> 
		                   			<label class="curPoint" for="propertyForR" id="propertyFor_R">Rent/ Lease</label>
								</li>
		                   	
								<li>
		                   			<span class={`customRadioButton ${check3}`}>
		                   				<input id="propertyForP" name="propertyFor" style={{opacity: "0"}} onClick={handlePropertytypes} type="radio" value="P" checked={check3}/> 
		                   			</span> 
		                   			<label class="curPoint" for="propertyForP" id="propertyFor_P">PG/Hostel</label>
								</li>
		                   	
                        </ul>
                        
                        <div class="clearAll"></div>
	                    <div id="propertyForError" class="formErr" style={{top: "25px", display: "none"}}>
	                        <span class="formErrArrow"></span>
	                        <span>Error message goes here</span>
	                    </div> 
                    </div>
                </div>
                <div class="valiDated" id="propertyForTick"></div>
            	<div class="clearAll"></div>
            </div>
            <div class="clearAll"></div>
            
            
            
            	
            	
            		 
            	
            
            <div class="formEle v--display" id="pTypSectionDivId">
            	<div class="formLabel inputDrop">Property Type</div>
                <div class="formValue posRel">
                	<div class="formCom">
                    
                    <span class="inputContainer">
                    <input type="button" id="propertyTypeVal" name="propertyTypeVal" value={Property_Type_Name} class="ciDrop btnInput" onClick={handleProperty} /></span>
                        
	                	 
                     <select id="propertyType" name="propertyType" class="areaList" onChange={handleProperty}><option value="-1" selected={select0}>Select Property Type</option><optgroup label="ALL RESIDENTIAL"></optgroup><option value="10002" selected={select1}>Flat/ Apartment</option><option value="10001" selected={select2}>Residential House</option><option value="10017" selected={select3}>Villa</option><option value="10003" selected={select4}>Builder Floor Apartment</option><option value="10000" selected={select5}>Residential Land/ Plot</option><option value="10021" selected={select6}>Penthouse</option><option value="10022" selected={select7}>Studio Apartment</option><optgroup label="ALL COMMERCIAL"></optgroup><option value="10007" selected={select8}>Commercial Office Space</option><option value="10018" selected={select9}>Office in IT Park/ SEZ</option><option value="10008" selected={select10}>Commercial Shop</option><option value="10009" selected={select11}>Commercial Showroom</option><option value="10006" selected={select12}>Commercial Land</option><option value="10011" selected={select13}>Warehouse/ Godown</option><option value="10012" selected={select14}>Industrial Land</option><option value="10013" selected={select15}>Industrial Building</option><option value="10014" selected={select16}>Industrial Shed</option><optgroup label="ALL AGRICULTURAL"></optgroup><option value="10005" selected={select17}>Agricultural Land</option><option value="10004" selected={select18}>Farm House</option></select>
                    <div class="unitBlockAreaDropDown mt-2" style={{display: propertytype}}>
                    	<ul><li onClick={handleProperty} value="-1">Select Property Type</li><li class="optGroup">ALL RESIDENTIAL</li><li onClick={handleProperty} value="10002">Flat/ Apartment</li><li onClick={handleProperty} value="10001">Residential House</li><li onClick={handleProperty} value="10017">Villa</li><li onClick={handleProperty} value="10003">Builder Floor Apartment</li><li onClick={handleProperty} value="10000">Residential Land/ Plot</li><li onClick={handleProperty} value="10021">Penthouse</li><li onClick={handleProperty} value="10022">Studio Apartment</li><li class="optGroup">ALL COMMERCIAL</li><li onClick={handleProperty} value="10007">Commercial Office Space</li><li onClick={handleProperty} value="10018">Office in IT Park/ SEZ</li><li onClick={handleProperty} value="10008">Commercial Shop</li><li onClick={handleProperty} value="10009">Commercial Showroom</li><li onClick={handleProperty} value="10006">Commercial Land</li><li onClick={handleProperty} value="10011">Warehouse/ Godown</li><li onClick={handleProperty} value="10012">Industrial Land</li><li onClick={handleProperty} value="10013">Industrial Building</li><li onClick={handleProperty} value="10014">Industrial Shed</li><li class="optGroup">ALL AGRICULTURAL</li><li onClick={handleProperty} value="10005">Agricultural Land</li><li onClick={handleProperty} value="10004">Farm House</li></ul>
                    </div>
                    </div>
                    <div class="valiDated" id="propertyTypeTick" style={{display: "none"}}></div>
                    <div class="clearAll"></div>
                    <div id="propertyTypeError" class="formErr" style={{display: "none"}}>
                        <span class="formErrArrow"></span>
                        <span></span>
                    </div>
                    
                    <div class="hint-coworking" id="hintcoworking" style={{display: "none"}}>
                       Rent out seats in a shared office space. Get paid per seat basis.
                    </div>
                    
                </div>
            	<div class="clearAll"></div>
            </div>
            <div class="clearAll"></div>
            
            <div class="formEle v--display" id="postingAsSectionDivId" style={{display: "none"}}>
	            <div class="formEle" style={{width: "400px"}}>
	            	<div class="formLabel">You are posting as </div>
	                <div class="formValue">
	                	<div class="radioBlock">
	                		<ul>
								<li>
		                   			<span class="customRadioButton checked">
		                   				<input type="radio" name="postingAs" checked="checked" style={{opacity: "0"}} id="postingAsfh" value="F" onClick="customRadioButtonNew(this, 'postingAs'),renderFormAttributesfm(), showHideDropDown();"/> 
		                   			</span> 
		                   			<label class="curPoint" for="postingAsfh" id="postingAs_fh">Full House</label>
								</li>
								<li>
		                   			<span class="customRadioButton">
		                   				<input type="radio" name="postingAs" style={{opacity: "0"}} id="postingAsosb" value="O" onClick="customRadioButtonNew(this, 'postingAs'),renderFormAttributesfm(), showHideDropDown();"/> 
		                   			</span> 
		                   			<label class="curPoint" for="postingAsosb" id="postingAs_osb">On sharing basis</label>
								</li>
	                        </ul>
	                        
	                        <div class="clearAll"></div>
		                    <div id="propertyForError" class="formErr" style={{top: "25px", display: "none"}}>
		                        <span class="formErrArrow"></span>
		                        <span>Please select only property type as residential</span>
		                    </div> 
	                    </div>
	                </div>
	                <div class="valiDated" id="postingAsTick"></div>
	            	<div class="clearAll"></div>
	            </div>
            </div>
            <br/>
            
        </div>
    </div>
   
   <div id="pgSpecificRedirectDiv" style={{display: "none"}}> 
	   <div class="post-pg-info">
		    <div class="post-pg-info__head">Now post your PG in just a few minutes!</div>
		    <div class="post-pg-info__con">Get started with our new listing form - it's super quick and simple.</div>
	   </div>
		
		<div class="form_element_group">
			<span class="pg__redirect__loader"></span> <span class="pg__redirect__label">Starting in <span id="pgcountdown">5</span> seconds, please wait.</span>
			<div class="clearAll"></div>
			<a href="#!" onClick="redirectPgUrl();" class="btn_pg-continue">Continue</a>
		</div>
	</div>

   <div id="pgfmSpecificRedirectDiv" style={{marginTop: "40px", display: "none"}}> 
	   <div class="post-pg-info">
		    <div class="post-pg-info__head">Now post your Property in just a few minutes!</div>
		    <div class="post-pg-info__con">Get started with our new listing form - it's super quick and simple.</div>
	   </div>
		
		<div class="form_element_group">
			<span class="pg__redirect__loader"></span> <span class="pg__redirect__label">Starting in <span id="pgfmcountdown">5</span> seconds, please wait.</span>
			<div class="clearAll"></div>
			<a href="#!" onClick="redirectPgfmUrl();" class="btn_pg-continue">Continue</a>
		</div>
	</div>
	<div id="pgfmSpecificDiv" style={{padding: "1px 1px",marginTop: "40px", display: "none"}}></div>
    
   	






{/* <script>
	var context_url = '/postproperty/';
	var GOOGLE_MAP_KEY_API_V3 = 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places,geometry&types=atm&sensor=false&key=AIzaSyC_YU1YQKR4YoafqUTg2vsoPS1JHqW-pto';
	var MB_SCRIPT_URL = 'https://www.magicbricks.com/scripts/';
	var POSTPROPERTY_SCRIPT_URL = '/static/scripts/'; 
	var globalFocusFlag = true;
	var postPropertyImagePath = '/static/images/';
	var SIBLING_DOMAIN_URL = 'https://www.magicbricks.com';
	var GLOBALASSETURL = 'https://cdn.staticmb.com/';
	var mbpg_context_url = 'https://www.magicbricks.com/pg-home/';
</script> */}

	<div id="largeMapContainer" style={{display: "none"}}>
		<div class="popupCont mapCont">
	    	<div class="closePopoup" onClick="$('#largeMapContainer, #grayOverLay').hide(); mapInfoBoxLarge.setVisible(false); isMarkerMoved = false;"></div>
	        <div class="popupHeading" id="popEditH">Mark Property on Map</div>
	        	<div class="nearestPoiCont" style={{display: "none"}}>
					<div class="nearestHeading">
						<div class="within">Within</div>
						<div class="nearestDistance">
							<span class="mapMoreArrow"></span>
							<span id="nearestDisValue">3 Km</span>
							
							<ul id="distanceBox">
								<li onClick="loadDefaultDataOnMap(this.value); setNearestValue(this);" value="1000">1 Km</li>
								<li onClick="loadDefaultDataOnMap(this.value); setNearestValue(this);" value="2000">2 Km</li>
								<li onClick="loadDefaultDataOnMap(this.value); setNearestValue(this);" value="3000">3 Km</li>
								<li onClick="loadDefaultDataOnMap(this.value); setNearestValue(this);" value="4000">4 Km</li>
								<li onClick="loadDefaultDataOnMap(this.value); setNearestValue(this);" value="5000">5 Km</li>
							</ul>
							
							<ul id="distanceBoxCat"></ul>
							
						</div>
						<div class="showHidePOI"></div>
						<div class="clear"></div>
					</div>
					
					<div class="nearestPoiScroll nano has-scrollbar" id="nanoScrollerId" style={{display: "none", height: "0px"}}>
						<div class="content" id="nearestInnerSection" tabindex="0" style={{right: "-17px"}}>
							<div class="nearestPoi" id="nearestPoiSection">
								<ul id="CatagorySec"></ul>
							</div>
						</div>
					<div class="pane" style={{display: "none"}}><div class="slider" style={{height: "20px", transform: "translate(0px, 0px)"}}></div></div></div>
				</div>
	
	        	<div class="editContiner">
	        		<div class="mapPosRel">
	        			<div style={{display: "none"}} id="mapErrorMsg"></div>
	        		</div>
	        		<div id="mapCanvasLarge" style={{width: "100%", height: "460px"}}></div>
	        		<div class="formEle">
                        <div class="formLabel">&nbsp;</div>
                        <div class="actionBlock forLogin locationMap">
                        	<div id="mapSubmit" class="doneLink" onClick="mapValidation();">Done</div>
                        	<div id="mapClose" class="cancleLink" onClick="$('#grayOverLay, #largeMapContainer, #formDiv').hide(); mapInfoBoxLarge.setVisible(false);">Cancel</div>
                        </div>
                        <div class="clearAll"></div>
                    </div>
	        	</div>
	    </div>
    </div>
    
    
    
    <div class="ppSecBlock" id="propertyLocation">
    	<div class="dataBlock">
        	<div class="secHeading bedBlock">Property Location     		
        	</div>
        		<div class="mapContainer">
                	<div class="mapBlock curPointer" id="mapCanvas" style={{display: "none"}}></div>
                	<div id="mapTagShow" style={{display: "none", width: "auto", position: "absolute", left: "-304px", top: "150px", cursor: "default"}} class="mapInfoBoxClass">Tag your property on the map &amp; make it easily searchable</div>
                	<div id="noLocalityMapDiv" style={{display: "none"}}>
                		<span></span>
                		Please fill in the address before marking exact location on map. 
                		Filling the address fields will help us suggest accurate location of the property
                	</div>
                	<div id="psmMapTag" style={{display: "none"}}>
                		We've tagged the property on map basis the Lat-Long info in Magicbricks Database.
                	</div>
                	<div id="mapTaggingThresholdError" class="formErr" style={{display: "none"}}>
                        <span class="formErrArrow"></span>
                        <span style={{position: "relative", width: "auto", height: "auto", padding: "2px", background: "none", left: "0", margin: "0", bottom: "0", top: "0"}}>Error message goes here</span>
                    </div>
                </div>
                <input id="mapLat" name="mapLat" type="hidden" value="0"/>
				<input id="maplong" name="maplong" type="hidden" value="0"/>
				<input id="zoomLevel" name="zoomLevel" type="hidden" value=""/>
                
	            <div class="formEle v--display" id="quick_location_div">
                    <div class="formLabel inputDrop">City</div>
                    <div class="formValue">
                        <div class="formCom">
                            <span class="inputContainer ftlt">
                            	<input id="quickCity" name="quickCity" class="ciDrop inputText mt-2" onClick="$('#otherError').hide()" onkeypress="return spacificChar(this, event, 'P');" onkeyup="loadCityAutoSuggest('quickCity','citySuggest');" placeholder="Enter City" onChange={handleCity} type="text" value={Property_City} maxlength="30" autocomplete="off"/> 
                            </span>
                            
                            {/* <!-- div id="addLocality">Add</div --> */}
                            <div class="valiDated" id="quickCityTick"></div>
                            <input id="city" name="city" type="hidden" value=""/>
                            <input id="state" name="state" type="hidden" value=""/>
                            <input type="hidden" name="cityName" id="cityName" value=""/>
                            <div class="clearAll"></div>
		                 	{/* <!-- div id="localityModMsg" style="display:none;" ></div -->  */}
                            
		                 	<img src="/static/images/loader.gif" alt="imagess" style={{display: "none", position: "absolute", top: "3px", left: "278px"}} id="localityLoader"/>
		                 	<div class="autoSuggestPos ppAutoSuggest">
								<div id="citySuggest" class="border3Side" style={{visibility: "hidden", position: "absolute", zIndex: "10", width: "280px", background: "rgb(255, 255, 255)", lineHeight: "18px", marginTop: "34px", display: "none"}}></div>
                   			</div>
                   			
                       		<div class="clearAll"></div>
	                        <div id="quickCityError" class="formErr" style={{display: "none"}}>
	                            <span class="formErrArrow"></span>
	                            <span>Error message goes here</span>
	                        </div>
	                        
	                        
                </div>
            	<div class="clearAll"></div>
            </div>
            <div class="clearAll"></div>
            </div>
	            <div class="clearAll"></div>
	            
            	
            
            <div class="formEle v--display" id="projectSocietyForMADiv" style={{}}>
                    <div class="formLabel mt-3">Name of Project/Society</div>
                    <div class="formValue">
                        <div class="formCom">
                            <span class="inputContainer">
                            	<input id="projectSocietySelectForMA" name="projectSocietyForMA" class="ciDrop inputText recentProject mt-1" onkeypress="return spacificChar(this, event, 'P');" onkeyup="if(this.value.length > 1){ new autoKeywordComplete(this, $('#projectSocietyForMASuggest')[0], 10, 10, city, 'projectSocietyForMA', 18, true, $('#FrameKeywordAutoSuggestList')[0], 'notRequired'); }" placeholder="Name Of Project/Society" onChange={handleProject} type="text" value={Project_Name} maxlength="50" autocomplete="off"/>
                            </span>
                            <div id="addProject">Add</div>
                        </div>
                        <div class="valiDated" id="projectSocietyForMATick"></div>
                        <div class="clearAll"></div>
                        <div class="autoSuggestPos ppAutoSuggest">
							<div id="projectSocietyForMASuggest" class="border3Side" style={{visibility: "hidden", position: "absolute", zIndex: "10", width: "280px", background: "rgb(255, 255, 255)", lineHeight: "18px", top: "32px", display: "none"}}></div>
                  		</div>
                  		<div class="autoSuggestPos ppAutoSuggest">
							<div id="recentProjectSuggest" class="border3Side" style={{visibility: "hidden", position: "absolute", zIndex: "10", width: "280px", background: "rgb(255, 255, 255)", lineHeight: "18px", top: "34px", maxHeight: "300px", display: "none"}}></div>
                  		</div>
                  		<div id="projectSocietyForMARestrictedMessage" class="formErr" style={{display: "none"}}></div>
                        <div id="projectSocietyForMAError" class="formErr" style={{display: "none"}}>
                            <span class="formErrArrow"></span>
                            <span>Error message goes here</span>
                        </div>
                        <div class="selectFrmList">
	                        <div id="developerDiv" style={{display:"none"}}>
	                        	<span class="customCheckBox"><input id="displayDeveloper" name="displayDeveloper" class="chBox" style={{opacity: "0"}} onClick="customCheckBox(this, 'displayDeveloper');" type="checkbox" value="Y"/><input type="hidden" name="_displayDeveloper" value="on"/></span>
		                        <label for="displayDeveloper">Developer: <span id="devNameId"></span><br/>
		                        Please uncheck, if you don't want to display the developer name
		                        </label>
	                        </div>
                        </div>
                        <div id="displayProjectName1" class="radioBlock selectFrmList" style={{display:"none"}}>
                        	<span class="customCheckBox"><input id="toDiaplayprj1" name="displayProjectName" style={{opacity: "0"}} onClick="customCheckBox(this, 'toDiaplayprj1');" type="checkbox" value="N"/><input type="hidden" name="_displayProjectName" value="on"/></span> <label for="toDiaplayprj1">Don't display the Project Name</label>
                        </div>
                </div>
            	<div class="clearAll"></div>
            </div>
            
            <div class="clearAll"></div>
            
            <div class="formEle v--display _localityDiv" style={{display: "none"}}>
             <input type="hidden" value="" id="locSugg1"/>
             <input type="hidden" value="" id="locSugg2"/>
             <input type="hidden" value="" id="locSugg3"/>
                    <div class="formLabel inputDrop">Locality</div>
                    <div class="formValue">
                        <div class="formCom">
                            <span class="inputContainer ftlt">
                            	<input id="locality" name="locality" class="ciDrop inputText recentLocality" onClick="$('#otherError').hide()" onkeypress="showToolTipLoc();return spacificChar(this, event, 'P');" onkeyup="loadLocalityAutoSuggest('locality','city','city','localitySuggest');" placeholder="Enter Locality" onblur="trackLocalityGa(this);checkOtherLocality();" onchange="loadChildData('locality');showHidePhotoShootService(); " type="text" value="" maxlength="30" autocomplete="off" style={{background: "transparent"}}/> 
                            </span>
                            
                            {/* <!-- div id="addLocality">Add</div --> */}
                            
                            <div class="clearAll"></div>
		                 	{/* <!-- div id="localityModMsg" style="display:none;" ></div -->  */}
                            
		                 	<img src="/static/images/loader.gif" alt="imagess" style={{display: "none", position: "absolute", top: "3px", left: "278px"}} id="localityLoader"/>
		                 	<div class="autoSuggestPos ppAutoSuggest">
								<div id="localitySuggest" class="border3Side" style={{visibility: "hidden", position: "absolute", zIndex: "10", width: "280px", background: "rgb(255, 255, 255)", lineHeight: "18px", marginTop: "34px", display: "none"}}></div>
                   			</div>
                   			<div class="autoSuggestPos ppAutoSuggest">
								<div id="recentLocalitySuggest" class="border3Side" style={{visibility: "hidden", position: "absolute", zIndex: "10", width: "280px", background: "rgb(255, 255, 255)", lineHeight: "18px", top: "34px", maxHeight: "300px", display: "none"}}></div>
                  			</div>
                   			
                       		<div class="clearAll"></div>
                       		
	                        
	                         <div class="formErr errOtherLocality" id="otherError" style={{display: "none"}}>
	                            <span class="formErrArrow"></span>
	                            <span>Error message goes here</span>
	                        </div>
	                        
                </div>
            	<div class="clearAll"></div>
            </div>
            <div class="clearAll"></div>
            <div class="formEle" id="updateLocalityDiv" style={{display: "none"}}>
            	 <div class="newPropHelp"></div>
            </div>
            <div class="formEle" id="updateSubLocalityDiv" style={{display: "none"}}>
            	 <div class="newPropHelp"></div>
            </div>
            {/* <!-- locality suggest start--> */}
									<div class="enter-loc-suggest" id="errorLoc" style={{display: "none", zIndex: "99"}}>
										<div class="enter-loc-suggest__icon"></div>
										Enter <span>Right Locality</span> and get genuine Responses
									</div>

									<div class="tag-loc-suggest p-16" id="loc-did-you-mean" style={{display: "none", zIndex: "99", position: "relative", top: "15px"}}>
										<div class="tag-loc-suggest__similar" id="did-you-mean">
											<div class="tag-loc-suggest__similar__head">Did you mean?</div>
											<div class="tag-loc-suggest__similar__list">
												<div class="tag-loc-suggest__similar__item" id="locSugg1Val" style={{display: "none"}} onClick="populateLoc('locSugg1Val');"></div>
												<div class="tag-loc-suggest__similar__item" id="locSugg2Val" style={{display: "none"}} onClick="populateLoc('locSugg2Val');"></div>

												<div class="tag-loc-suggest__similar__item" id="locSugg3Val" style={{display: "none"}} onClick="populateLoc('locSugg3Val');"></div>
											</div>
										</div>
										<div class="tag-loc-suggest__content">
										<div class="tag-loc-suggest__icon"></div>
										Tag the right name to get <span>genuine responses</span>
										</div>
									</div>
									{/* <!-- locality suggest end--> */}
            
            </div>
            <div class="clearAll"></div>
                        
            <div class="formEle v--display" id="sublocalityOneDiv" style={{display: "none"}}>
                    <div class="formLabel inputDrop" id="sublocalityOneLabel">Sub Locality 1</div>
                    <div class="formValue">
                        <div class="formCom">
                            <span class="inputContainer">
                            	<input id="sublocalityOne" name="sublocalityOne" class="ciDrop inputText" onkeypress="return spacificChar(this, event, 'P');" placeholder="Enter Sub Locality" onchange="loadChildData('sublocalityOne')" type="text" value="" maxlength="30" autocomplete="off"/>
                            </span>
                        </div>
                        <div class="valiDated" id="sublocalityOneTick"></div>
                        <div class="autoSuggestPos ppAutoSuggest">
							<div id="sublocalityOneSuggest" class="border3Side" style={{visibility: "hidden", position: "absolute", zIndex: "10", width: "280px", background: "rgb(255, 255, 255)", lineHeight: "18px", top: "34px", maxHeight: "300px", display: "none"}}></div></div>
                  		</div>
                        <div class="clearAll" id="sublocalityOneTick"></div>
                        <div id="sublocalityOneError" class="formErr" style={{display: "none"}}>
                            <span class="formErrArrow"></span>
                            <span>Error message goes here</span>
                        </div>
                </div>
            	<div class="clearAll"></div>
            </div>
            
            <div class="formEle v--display" id="sublocalityTwoDiv" style={{display: "none"}}>
                    <div class="formLabel" id="sublocalityTwoLabel">Sub Locality 2</div>
                    <div class="formValue">
                        <div class="formCom">
                            <span class="inputContainer">
                            	<input id="sublocalityTwo" name="sublocalityTwo" class="ciDrop inputText" onkeypress="return spacificChar(this, event, 'P');" placeholder="Enter Sub Locality" onchange="loadChildData('sublocalityTwo')" type="text" value="" maxlength="30" autocomplete="off"/>
                            </span>
                        </div>
                        <div class="valiDated" id="sublocalityTwoTick"></div>
                        <div class="autoSuggestPos ppAutoSuggest">
							<div id="sublocalityTwoSuggest" class="border3Side" style={{visibility: "hidden", position: "absolute", zIndex: "10", width: "280px", top: "33px", background: "rgb(255, 255, 255)", lineHeight: "18px", maxHeight: "300p", display: "none"}}></div>
                  		</div>
                        <div class="clearAll"></div>
                        <div id="sublocalityTwoError" class="formErr" style={{display: "none"}}>
                            <span class="formErrArrow"></span>
                            <span>Error message goes here</span>
                        </div>
                </div>
            	<div class="clearAll"></div>
            </div>
            
            <div class="formEle  v--display" id="sublocalityThreeDiv" style={{display: "none"}}>
                    <div class="formLabel inputDrop" id="sublocalityThreeLabel">Sub Locality 3</div>
                    <div class="formValue">
                        <div class="formCom">
                            <span class="inputContainer">
                            	<input id="sublocalityThree" name="sublocalityThree" class="ciDrop inputText" onkeypress="return spacificChar(this, event, 'P');" placeholder="Enter Sub Locality" type="text" value="" maxlength="30" autocomplete="off"/>
                            </span>
                        </div>
                        <div class="valiDated" id="sublocalityThreeTick"></div>
                        <div class="autoSuggestPos ppAutoSuggest">
							<div id="sublocalityThreeSuggest" class="border3Side" style={{visibility: "hidden", position: "absolute", zIndex: "10", width: "280px", background: "rgb(255, 255, 255)", lineHeight: "18px", maxHeight: "300px", display: "none"}}></div>
                  		</div>
                        <div class="clearAll"></div>
                        <div id="sublocalityThreeError" class="formErr" style={{display: "none"}}>
                            <span class="formErrArrow"></span>
                            <span>Error message goes here</span>
                        </div>
                </div>
            	<div class="clearAll"></div>
            </div>
            
            <div class="formEle v--display" id="projectSocietyDiv" style={{display: "none"}}>
                    <div class="formLabel inputDrop">Name of Project/Society</div>
                    <div class="formValue">
                        <div class="formCom">
                            <span class="inputContainer">
                            	<input id="projectSocietySelect" name="projectSociety" class="ciDrop inputText" onkeypress="return spacificChar(this, event, 'P');" onkeyup="if(this.value.length > 1){ new autoKeywordComplete(this, $('#projectSocietySuggest')[0], 10, 10, city, 'projectSociety', 18, true, $('#FrameKeywordAutoSuggestList')[0], 'notRequired'); }" placeholder="Name Of Project/Society" onchange="loadChildData('projectSociety');showHidePhotoShootService();" type="text" value="" maxlength="50" autocomplete="off"/>
                            </span>
                            <div id="addProject">Add</div>
                        </div>
                        <div class="valiDated" id="projectSocietyTick"></div>
                        <div class="clearAll"></div>
                        <div class="autoSuggestPos ppAutoSuggest">
							<div id="projectSocietySuggest" class="border3Side" style={{visibility: "hidden", position: "absolute", zIndex: "10", width: "280px", background: "rgb(255, 255, 255)", lineHeight: "18px", top: "32px", display: "none"}}></div>
                  		</div>
                  		<div id="projectSocietyRestrictedMessage" class="formErr" style={{display: "none"}}></div>
                        <div id="projectSocietyError" class="formErr" style={{display: "none"}}>
                            <span class="formErrArrow"></span>
                            <span>Error message goes here</span>
                        </div>
                        <div class="selectFrmList">
	                        <div id="developerDiv" style={{display: "none"}}>
	                        	<span class="customCheckBox"><input id="displayDeveloper" name="displayDeveloper" class="chBox" style={{opacity: "0"}} onClick="customCheckBox(this, 'displayDeveloper');" type="checkbox" value="Y"/><input type="hidden" name="_displayDeveloper" value="on"/></span>
		                        <label for="displayDeveloper">Developer: <span id="devNameId"></span><br/>
		                        Please uncheck, if you don't want to display the developer name
		                        </label>
	                        </div>
                        </div>
                         <div id="displayProjectName" class="radioBlock selectFrmList" style={{display: "none"}}>
                        	<span class="customCheckBox"><input id="toDiaplayprj" name="displayProjectName" style={{opacity: "0"}} onClick="customCheckBox(this, 'toDiaplayprj');" type="checkbox" value="N"/><input type="hidden" name="_displayProjectName" value="on"/></span> <label for="toDiaplayprj">Don't display the project Name</label>
                        </div>
                        {/* <!-- html for BAN-2258 --> */}
                        <div class="enter-loc-suggest" id="promptName" style={{width: "auto", top: "0px", whiteSpace: "nowrap", display: "none"}}>
								<div class="enter-loc-suggest__icon"></div>
							    Offices in <span>Projects/Office Complexes</span> get upto 3X more responses
							</div>
						 {/* <!-- html for BAN-2258 --> */}
                </div>
                 <div class="clearAll"></div>
            </div> 
           
            	<div id="projectBuilding" class="formEle v--display" style={{display: "none"}}>
            	 <div class="formLabel inputDrop">Building Name</div>
                         <div class="formValue">
                        <div class="formCom">
                                    <span class="inputContainer">
				                           <input id="buildingName" name="buildingName" placeholder="Enter Building Name" class="ciDrop inputText" type="text" value="" maxlength="50"/>
                                        <div class="clearAll"></div>
                                        <div id="buildingNameError" class="formErr" style={{display: "none"}}>
				                            <span class="formErrArrow"></span>
				                            <span>Error message goes here</span>
				                        </div>
				                    </span>
				                  </div>
				                  </div>
				                    <div class="clearAll"></div>
				                  </div>
				   
            <div style={{display: "none"}} id="rerasection">
	            <div class="formEle v--display" id="reraIdDiv" style={{display: "none"}}>
	                    <div class="formLabel inputDrop">RERA Id</div>
	                    <div class="formValue">
	                        <div class="formCom">
	                            <span class="inputContainer">
	                            	<input id="reraId" name="reraId" class="ciDrop inputText" style={{resize: "none", overflow: "hidden"}} placeholder="Enter Rera Id" type="text" value="" maxlength="50"/>
	                            </span>
	                        </div>
	                        <div class="valiDated" id="reraIdTick"></div>
	                        <div class="clearAll"></div>
	                        <div id="reraIdError" class="formErr" style={{display: "none"}}>
	                            <span class="formErrArrow"></span>
	                            <span>Error message goes here</span>
	                        </div>
	                </div>
	            	<div class="clearAll"></div>
	            </div>
	            <div class="clearAll"></div>
	            <div class="formEle" id="israraproject" style={{display: "none"}}>
	            		<div class="formLabel">Is Project RERA Registered</div>
		                <div class="formValue">
		                	<div class="radioBlock">
		                		<ul>
										<li>
				                   			<span class="customRadioButton">
				                   				<input id="rera1" name="rera" style={{opacity: "0"}} onClick="customRadioButtonNew(this, 'rera');" value="Y" type="radio"/> 
				                   			</span> 
				                   			<label class="curPoint" for="rera1" id="rera1_O">YES</label>
										</li>
										<li>
				                   			<span class="customRadioButton">
				                   				<input id="rer2" name="rera" style={{opacity: "0"}} onClick="customRadioButtonNew(this, 'rera');" value="N" type="radio"/> 
				                   			</span> 
				                   			<label class="curPoint" for="rera2" id="rera_A">No</label>
										</li>
										
		                        </ul>
		                        
		                        <div class="clearAll"></div>
			                    <div id="iamError" class="formErr" style={{top: "25px", display: "none"}}>
			                        <span class="formErrArrow"></span>
			                        <span>Error message goes here</span>
			                    </div> 
		                    </div>
		                </div>
		                <div class="valiDated" id="iamTick"></div>
		            	<div class="clearAll"></div>
		            	<div id="rera-default-info" class="rera-info-box" style={{display: "none"}}>Please share all RERA details of this project/property with relevant links and supporting documents to care@magicbricks.com for quick verification.</div>
	            </div>
	            <div class="clearAll"></div>
	            <div class="formEle v--display" id="reraphase" style={{display: "none"}}>
			                    <div class="formLabel inputDrop">Select Phase</div>
			                    <div class="formValue">
			                        <div class="formCom">
			                    
			                            <span class="inputContainer"><input type="button" id="reraPhaseDropDownVal" name="reraPhaseVal" value="---Select Phase---" class="ciDrop btnInput" onClick="getCustomAreaOptionsCovered(event, this, '.formValue', 'reraPhaseDropDown')"/></span>
			                           <select id="reraPhaseDropDown" name="reraPhase" class="areaList jq-custom-select">
											
										</select>
			                    	</div>
			                        <div class="valiDated" id="reraPhaseTick"></div>
			                        <div class="clearAll"></div>
			                        <div id="reraPhaseError" class="formErr" style={{display: "none"}}>
			                            <span class="formErrArrow"></span>
			                            <span>Error message goes here</span>
			                        </div>
			                </div>
			                
			            	<div class="clearAll"></div>
			            	
			            	<div id="select-phase-other" class="rera-info-box" style={{display: "none"}}>If the RERA id is not in the list above, please share all RERA details of this project/property with relevant links and supporting documents to care@magicbricks.com for quick verification.</div>
			            	
		               </div>
	             </div>
	             <div class="clearAll"></div>
            <div class="formEle v--display mb-3" id="addressDiv" style={{width:"672px",background:"white"}}>
                    <div class="formLabel inputDrop">Address<span class="pp__magiccasn__int" id="propAddress_cash" style={{display: "none"}}><span class="pp__magiccasn__coins"></span><span class="pp__magiccasn__intbold">50</span> Magic Cash</span></div>
                    <div class="formValue" style={{background:"white"}}>
                        <div class="formCom">
                            <span class="inputContainer">
                            	<input id="propAddress" name="address" class="ciDrop inputText" style={{resize: "none", overflow: "hidden",background:"white"}} placeholder="Full Address" onChange={handleAddress} type="text" value={full_address}/>
                            </span>
                        </div>
                        <div class="valiDated" id="addressTick"></div>
                        <div class="clearAll"></div>
                        <div id="addressError" class="formErr" style={{display: "none"}}>
                            <span class="formErrArrow"></span>
                            <span>Error message goes here</span>
                        </div>
                        <div id="addressDisplayDiv" class="radioBlock selectFrmList" style={{display: "none"}}>
                        	<span class="customCheckBox"><input id="toDiaplay" name="addressDisplay" style={{opacity: "0"}} onClick="customCheckBox(this, 'toDiaplay');" type="checkbox" value="Y"/><input type="hidden" name="_addressDisplay" value="on"/></span> <label for="toDiaplay">Don't display the address</label>
                        </div>
                        
                </div>
            	<div class="clearAll"></div>
            </div>
            <div class="clearAll"></div>
            <div class="formEle v--display" id="landZoneDiv" style={{display:"none"}}>
	                    <div class="formLabel inputDrop">Land Zone</div>
	                    <div class="formValue">
	                        <div class="formCom">
	                        <span class="inputContainer"><input type="button" id="landZoneVal" value="Select Land Zone" class="ciDrop" onClick="getCustomAreaOptionsCovered(event, this, '.formCom', 'landZone')"/></span>
	                            <select id="landZone" name="landZone" class="areaList jq-custom-select">
	                                        	<option value="">Select Land Zone</option>
												
								                     <option value="36100">Industrial</option>
							                  
								                     <option value="36101">Commercial</option>
							                  
								                     <option value="36102">Residential</option>
							                  
								                     <option value="36108">Transport and Communication</option>
							                  
								                     <option value="36109">Public Utilities</option>
							                  
								                     <option value="36110">Public and Semi Public Use</option>
							                  
								                     <option value="36111">Open Spaces</option>
							                  
								                     <option value="36112">Agricultural Zone</option>
							                  
								                     <option value="36113">Special Economic Zone</option>
							                  
								                     <option value="36114">Natural Conservation Zone</option>
							                  
								                     <option value="36115">Government Use</option>
							                  
			                  </select>
	                            <div class="unitBlockAreaDropDown" style={{display: "none"}}>
	                                            <ul></ul>
	                             </div>
	                    	</div>
	                        
	                </div>
	                <div class="coveredHelpCont" style={{marginTop: "10px", marginLeft: "10px"}} id="11111111">
                        	<div class="helpTextContaint">
                            	<span class="arrow"></span>
                            	<div style={{display:"none"}}>Classification of land on the basis of its use like Residential, Commercial, Industrial, Mixed Use Zone &amp; more. To know your land zone, refer the Master Plan/Development Plan of your city.  </div>
                            </div>
                        </div>
	            	<div class="clearAll"></div>
	            </div>
	            <div class="clearAll"></div>
                <div style={{position: "relative"}}>
	            <div id="landZoneError" class="formErr" style={{display: "none", top: "-15px"}}>
                            <span class="formErrArrow"></span>
                            <span>Error message goes here</span>
                        </div>
	            </div>
        </div>
    </div>
    {/*// <!-- landmark Section start -->*/}
    <div class="clearAll"></div>
    <div class="ppSecBlock formEle fullwidth row__landmarks" id="landmarks__container" style={{display: "none"}}>
          <div class="dataBlock" style={{paddingBottom: "0"}}>
            <div class="secHeading">Popular Landmarks Nearby</div>
            <div class="landmark__tabs clearfix">
            	<ul>
            		<li><a href="#!" class="current" id="link__metro" onClick="jqTabOpen('landmark__metro','link__metro');">Metro/Railway</a></li>
                	<li><a href="#!" id="link__bus" onClick="jqTabOpen('landmark__bus','link__bus');">Bus stops</a></li>
               		<li><a href="#!" id="link__airport" onClick="jqTabOpen('landmark__airport','link__airport');">Airports</a></li>
                	<li><a href="#!" id="link__malls" onClick="jqTabOpen('landmark__malls','link__malls');">Shopping Malls</a></li>
                	<li><a href="#!" id="link__complex" onClick="jqTabOpen('landmark__complex','link__complex');">Office Complex</a></li>
                 </ul>
            </div>
    {/* // <!-- for metro station autosuggest:- --> */}
     <div class="landmark__container clearfix" id="landmark__metro" style={{display: "block"}}>
     <div id="metroStationDiv">
    	<div class="formEle">
                    <div class="formLabel inputDrop">Metro/Railway</div>
                    <div class="formValue">
                        <div class="formCom">
                            <span class="inputContainer">
                            	<input id="metroStationSelect" name="metroStation" class="ciDrop inputText" onkeypress="getNearByPlacesAutoSuggest('metroStation');" placeholder="Name of metro station" type="text" value="" maxlength="20"/>
                            </span>
                            <input type="hidden" id="metroStationHidden" value=""/>
                        </div>
                        <div class="valiDated" id="metroStationTick"></div>
                        <div class="clearAll"></div>
                        
                     <div id="metroDistanceError_notMatch" class="formErr" style={{display: "none"}}>
						<span class="formErrArrow"></span>
						<span>Did't match any item</span>
					</div>
                </div>
                 <div class="clearAll"></div>
            </div>
            <div class="formEle" style={{paddingBottom: "0"}}>
	                    <div class="formLabel inputDrop">Distance From Property</div>
	                    <div class="formValue">
	                        <div class="formCom">
	                        <span class="inputContainer"><input type="button" id="metroDistanceVal" value="Select" class="ciDrop" onClick="getCustomAreaOptionsCovered(event, this, '.formCom', 'metroDistance')"/></span>
	                            <select id="metroDistance" name="metroDistance" class="areaList jq-custom-select">
	                                        	<option value="">Select</option>
												
								                     <option value="36103">0.5 Km</option>
							                  
								                     <option value="36104">1 Km</option>
							                  
								                     <option value="36105">2 Km</option>
							                  
								                     <option value="36106">3 Km</option>
							                  
								                     <option value="36107">More than 3Kms</option>
							                  
			                  </select>
	                            <div class="unitBlockAreaDropDown" style={{display: "none"}}>
	                                            <ul></ul>
	                             </div>
	                    	</div>
	                  <div class="clearAll"></div>
		            <div id="metroDistanceError" class="formErr" style={{display: "none"}}>
						<span class="formErrArrow"></span>
						<span>Error message goes here</span>
					</div>      
	                </div>
				<div class="clearAll"></div>
	            </div>
	            <div class="clearAll"></div>
	           	</div> 
            </div>
            {/* <!-- end of mero station -->
            <!-- start of bus station --> */}
       <div class="landmark__container clearfix" id="landmark__bus">
       <div id="busStationDiv">
       	<div class="formEle">
                    <div class="formLabel inputDrop">Bus Stops</div>
                    <div class="formValue">
                        <div class="formCom">
                            <span class="inputContainer">
                            	<input id="busStationSelect" name="busStaion" class="ciDrop inputText" onkeypress="getNearByPlacesAutoSuggest('busStation');" placeholder="Name of bus station" type="text" value="" maxlength="20"/>
                            </span>
                            <input type="hidden" id="busStationHidden" value=""/>
                        </div>
                        <div class="valiDated" id="busStationTick"></div>
                        <div class="clearAll"></div>
                       
                     <div id="busStationError_notMatch" class="formErr" style={{display: "none"}}>
						<span class="formErrArrow"></span>
						<span>Did't match any item</span>
					</div>   
                </div>
              </div> 
                 <div class="formEle" style={{paddingBottom: "0"}}>
	                    <div class="formLabel inputDrop">Distance From Property</div>
	                    <div class="formValue">
	                        <div class="formCom">
	                        <span class="inputContainer"><input type="button" id="busDistanceVal" value="Select" class="ciDrop" onClick="getCustomAreaOptionsCovered(event, this, '.formCom', 'busDistance')"/></span>
	                            <select id="busDistance" name="busDistance" class="areaList jq-custom-select">
	                                        	<option value="">Select</option>
												
								                     <option value="36103">0.5 Km</option>
							                  
								                     <option value="36104">1 Km</option>
							                  
								                     <option value="36105">2 Km</option>
							                  
								                     <option value="36106">3 Km</option>
							                  
								                     <option value="36107">More than 3Kms</option>
							                  
			                  </select>
	                            <div class="unitBlockAreaDropDown" style={{display: "none"}}>
	                                            <ul></ul>
	                             </div>
	                    	</div>
	                        <div id="busDistanceError" class="formErr" style={{display: "none"}}>
								<span class="formErrArrow"></span>
								<span>Error message goes here</span>
							</div> 
	                </div>
	                
	            	<div class="clearAll"></div>
	            </div>
	            <div class="clearAll"></div>
	          </div>
				
            
           {/* <!--  end of bus station --> */}
           <div class="clearAll"></div>
            
            </div>
           
           {/* <!-- start of airport --> */}
           <div class="landmark__container clearfix" id="landmark__airport">
           <div id="airportDiv">
            <div class="formEle">
                    <div class="formLabel inputDrop">Airport</div>
                    <div class="formValue">
                        <div class="formCom">
                            <span class="inputContainer">
                            	<input id="airportSelect" name="airport" class="ciDrop inputText" onkeypress="getNearByPlacesAutoSuggest('airport');" placeholder="Name of airport" type="text" value="" maxlength="20"/>
                            </span>
                            <input type="hidden" id="airportHidden" value=""/>
                        </div>
                        <div class="valiDated" id="airportTick"></div>
                        <div class="clearAll"></div>
                        
                    <div id="airportError_notMatch" class="formErr" style={{display: "none"}}>
						<span class="formErrArrow"></span>
						<span>Did't match any item</span>
					</div> 
                </div>
                </div> 
                 <div class="formEle" style={{paddingBottom: "0"}}>
	                    <div class="formLabel inputDrop">Distance From Property</div>
	                    <div class="formValue">
	                        <div class="formCom">
	                        <span class="inputContainer"><input type="button" id="airportDistanceVal" value="Select" class="ciDrop" onClick="getCustomAreaOptionsCovered(event, this, '.formCom', 'airportDistance')"/></span>
	                            <select id="airportDistance" name="airportDistance" class="areaList jq-custom-select">
	                                        	<option value="">Select</option>
												
								                     <option value="36103">0.5 Km</option>
							                  
								                     <option value="36104">1 Km</option>
							                  
								                     <option value="36105">2 Km</option>
							                  
								                     <option value="36106">3 Km</option>
							                  
								                     <option value="36107">More than 3Kms</option>
							                  
			                  </select>
	                            <div class="unitBlockAreaDropDown" style={{display: "none"}}>
	                                            <ul></ul>
	                             </div>
	                             
	                              <div id="airportDistanceError" class="formErr" style={{display: "none"}}>
									<span class="formErrArrow"></span>
									<span>Error message goes here</span>
								</div>
	                    	</div>
	                        
	                </div>
	                
	            	<div class="clearAll"></div>
	            </div>
	           
            
            </div>
          {/* <!--  end of airport  --> */}
    <div class="clearAll"></div>
    
            </div>
    {/* <!-- start of shopping mall --> */}
    <div class="landmark__container clearfix" id="landmark__malls">
    <div id="shoppingMallDiv">
     <div class="formEle">
                    <div class="formLabel inputDrop">Shopping Malls</div>
                    <div class="formValue">
                        <div class="formCom">
                            <span class="inputContainer">
                            	<input id="shoppingMallSelect" name="shoppingMall" class="ciDrop inputText" onkeypress="getNearByPlacesAutoSuggest('shoppingMall');" placeholder="Name of shopping mall" type="text" value="" maxlength="20"/>
                            </span>
                            <input type="hidden" id="shoppingMallHidden" value=""/>
                        </div>
                        <div class="valiDated" id="shoppingMallTick"></div>
                        <div class="clearAll"></div>
                       
                      <div id="shoppingMallError_notMatch" class="formErr" style={{display: "none"}}>
						<span class="formErrArrow"></span>
						<span>Did't match any item</span>
					</div>   
                </div>
                </div>
                 <div class="formEle" style={{paddingBottom: "0"}}>
	                    <div class="formLabel inputDrop">Distance From Property</div>
	                    <div class="formValue">
	                        <div class="formCom">
	                        <span class="inputContainer"><input type="button" id="shoppingMallDistanceVal" value="Select" class="ciDrop" onClick="getCustomAreaOptionsCovered(event, this, '.formCom', 'shoppingMallDistance')"/></span>
	                            <select id="shoppingMallDistance" name="shoppingMallDistance" class="areaList jq-custom-select">
	                                        	<option value="">Select</option>
												
								                     <option value="36103">0.5 Km</option>
							                  
								                     <option value="36104">1 Km</option>
							                  
								                     <option value="36105">2 Km</option>
							                  
								                     <option value="36106">3 Km</option>
							                  
								                     <option value="36107">More than 3Kms</option>
							                  
			                  </select>
	                            <div class="unitBlockAreaDropDown" style={{display: "none"}}>
	                                            <ul></ul>
	                             </div>
	                    	</div>
	                    	
	                    	 <div id="shoppingMallDistanceError" class="formErr" style={{display: "none"}}>
								<span class="formErrArrow"></span>
								<span>Error message goes here</span>
							</div>
				                        
	                </div>
	                
	            	<div class="clearAll"></div>
	            </div>
	          <div class="clearAll"></div>
	       </div>    
            
          {/* <!-- end of shopping mall -->  */}
          <div class="clearAll"></div> 
            
            </div>
          
          {/* <!-- start of office complex --> */}
            <div class="landmark__container clearfix" id="landmark__complex">
            <div id="officeComplexDiv">
           <div class="formEle">
                    <div class="formLabel inputDrop">Office Complex</div>
                    <div class="formValue">
                        <div class="formCom">
                            <span class="inputContainer">
                            	<input id="officeComplexSelect" name="officeComplex" class="ciDrop inputText" onkeypress="getNearByPlacesAutoSuggest('officeComplex');" placeholder="Name of office complex" type="text" value="" maxlength="20"/>
                            </span>
                            <input type="hidden" id="officeComplexHidden" value=""/>
                        </div>
                        <div class="valiDated" id="officeComplexTick"></div>
                        <div class="clearAll"></div>
                        
                        <div id="officeComplexError_notMatch" class="formErr" style={{display: "none"}}>
						<span class="formErrArrow"></span>
						<span>Did't match any item</span>
					</div>
                </div>
              </div>
                 <div class="formEle" style={{paddingBottom: "0"}}>
	                    <div class="formLabel inputDrop">Distance From Property</div>
	                    <div class="formValue">
	                        <div class="formCom">
	                        <span class="inputContainer"><input type="button" id="officeDistanceVal" value="Select" class="ciDrop" onClick="getCustomAreaOptionsCovered(event, this, '.formCom', 'officeDistance')"/></span>
	                            <select id="officeDistance" name="officeDistance" class="areaList jq-custom-select">
	                                        	<option value="">Select</option>
												
								                     <option value="36103">0.5 Km</option>
							                  
								                     <option value="36104">1 Km</option>
							                  
								                     <option value="36105">2 Km</option>
							                  
								                     <option value="36106">3 Km</option>
							                  
								                     <option value="36107">More than 3Kms</option>
							                  
			                  </select>
	                            <div class="unitBlockAreaDropDown" style={{display: "none"}}>
	                                            <ul></ul>
	                             </div>
	                    	</div>
	                         <div id="officeComplexDistanceError" class="formErr" style={{display: "none"}}>
								<span class="formErrArrow"></span>
								<span>Error message goes here</span>
							</div>
	                </div>
	                
	            	<div class="clearAll"></div>
	            </div>
	            <div class="clearAll"></div>
	        </div>   
            
            
            <div class="clearAll"></div> 
            
            </div>
            {/* <!-- end of office complex --> */}
            </div>
            
            
            <div class="landmark__info">
	            70% Tenants/Buyers contact property with more info.<br/>
	            Enter popular landmarks nearby &amp; see how your listing appears. <a href="#!" class="link__red coveredHelpCont custToolTip">View Here
	            <div class="helpTextContaint">
                            	<span class="arrow"></span>
                            	<div id=""><img class="lazyload" alt="imagess" data-src="/static/images/Commercial_Card.png" src=""/></div>
                            </div>
	            </a>
	            </div>
            
            
            
            
            </div>
            {/*<!-- landmark Section end -->*/}
            
            <div class="clearAll"></div>
            
            {/*<!-- start of near by businesses -->*/}
             <div id="nearByBusinessParent" style={{display: "none"}}>
		        <div id="nearByBusiness" style={{display: "none"}}>
		             
		         </div>
           	</div>
           {/*<!-- end of near by businesses -->*/}
           <div class="clearAll"></div>
     
    <div class="clearAll"></div>
   	<div id="unitSelectionInfoBox" style={{display: "none"}}>
   		<div class="grayBox" id="planAvailableMessageBox"></div>
		<div class="flatSizeSelection">
			<div class="flatSizeSelectionInner">
				<div class="nano">
	                <div class="nano-content" id="unitSelectionDiv"></div>
				</div>
			</div>
		</div>
		<div class="yellowBox" id="acknowledgmentBox" style={{display: "none"}}></div>
	</div>
    <div class="clearAll"></div>
    <div class="ppSecBlock" id="propertyFeaturesDiv" style={{}}>
   		
    
    	<div class="dataBlock pl-3" style={{width:"692px"}}>
    		<div id="bedroomSize"></div>
        	<div class="secHeading bedBlock">Property Features</div>
           <div class="formLabel inputDrop" style={{height: "0px", paddingTop: "1px", overflow: "hidden"}}>&nbsp;</div>
           	<div class="formValue">
           		<div id="bathroomsErrorWarDiv" class="formWarning" style={{display: "none"}}></div>
           	</div>
           	<div class="clearAll"></div>
            <div class="formEle newBedRoomStruc" style={{paddingBottom: "12px"}}>
            	<div class="formLabel">&nbsp;</div>
                <div class="formValue">
                	<div class="ftlt propFeatures">
                            <ul class="pFeatureSel">
                            	<li id="bedroomsDiv">
                                	<div class="priceHeader ftltN">Bedrooms <span class="pp__magiccasn__int" id="bedrooms_cash" style={{display: "none"}}><span class="pp__magiccasn__coins"></span><span class="pp__magiccasn__intbold">200</span> Magic Cash</span></div>
                                	
                                	<span class="inputContainer ftltN">
                                    	<div class="formCom">
                                    		<div class="bedRooms listForSelect">   
		                                      <ul>
											    	<li class="csF bdOption" id="11700" onClick={handleBedroom}>1</li>
											        <li class="csF bdOption" id="11701" onClick={handleBedroom}>2</li>
											        <li class="csF bdOption" id="11702" onClick={handleBedroom}>3</li>
											        <li class="csF bdOption" id="11703" onClick={handleBedroom}>4</li>
											        <li class="csFN csfDD" id="11704" onClick={handleBedroom}>5+</li>
											        <li class="csB" style={{display: "none"}}>
											        	<ol className="csBV bdOption" onClick="selectList('5','bedrooms');">5</ol>
											        	<ol className="csBV bdOption" onClick="selectList('6','bedrooms');">6</ol>
											            <ol className="csBV bdOption" onClick="selectList('7','bedrooms');">7</ol>
											            <ol className="csBV bdOption" onClick="selectList('8','bedrooms');">8</ol>
											            <ol className="csBV bdOption" onClick="selectList('9','bedrooms');">9</ol>
											            <ol className="csBV bdOption" onClick="selectList('10','bedrooms');">10</ol>
											            <ol className="csBV bdOption" onClick="selectList('> 10','bedrooms');">&gt; 10</ol>
											        </li>
											    </ul>
											  </div>
	                                        
	                                        <select id="bedrooms" name="bedrooms" class="areaList" onChange={handleBedroom} size="1">
	                                        	<option value="-1">Select</option>
												<option value="11700">1</option><option value="11701">2</option><option value="11702">3</option><option value="11703">4</option><option value="11704">5</option><option value="11705">6</option><option value="11706">7</option><option value="11707">8</option><option value="11708">9</option><option value="11709">10</option><option value="11710">&gt; 10</option>
			                                </select>
	                                        
	                                        <div class="unitBlockAreaDropDown" style={{display: "none"}}>
	                                            <ul></ul>
	                                        </div>
                                        </div>
                                        <div class="donePlaceHolder">
                                        	<div class="valiDated lessSpace" id="bedroomsTick"></div>
                                       </div>
				                        <div class="clearAll"></div>
				                        <div id="bedroomsError" class="formErr" style={{display: "none"}}>
				                            <span class="formErrArrow"></span>
				                            <span>Error message goes here</span>
				                        </div>
				                        <div class="clearAll"></div>
				                        <div class="inputContainer ftltN _hallavailablecheckbox bhk1Case" style={{display: "none"}}>
						                        <span class="customCheckBox">
		                        					<input id="isHallAvailable" name="isHallAvailable" style={{opacity: "0"}} onClick="customCheckBox(this, 'isHallAvailable');" type="checkbox" value="N"/><input type="hidden" name="_isHallAvailable" value="on"/> 
		                        				</span> 
		                        				<label class="curPoint" for="isHallAvailable" style={{color: "#666666"}}>Without Hall</label>
	                        				</div>
				                        </span>
				                        <div class="clearAll"></div>
                                </li>
                                
                                	
	<div class="bedRoomSpecBlock" id="bedRoomDimentionDiv" style={{display: "none"}}>
	<div class="clearAll"></div>      
		<span id="bhkOptional" style={{display: "none"}}>(optional)</span>
	    <div class="header">Specify bedroom sizes. - For example: 12 x 10 ft <span class="showHideDetail"></span></div>
	    <div class="showBedCont">
	    <div class="bedRoomspecData">
	    	<div class="bedroomHeading">Length <span class="multi">X</span> Breadth</div>
	        <div class="clearAll"></div>
	        <div class="bedScroller">
	        	<ul class="bedUl" id="bedRoomUl">
	            	<li id="bedRoomLi#" style={{display: "none"}}>
	                	<div class="labelVal ftlt" id="bedRoomLabel#">Bedroom 1</div>
	                    <div class="firstInp ftlt posRel">
	                    	<input type="text" id="length#" onkeypress="return(ForceNumbersOnly(this, event, 'D'));" maxlength="4" onblur="validateBedrooms(this, 'length'); bedRoomSizeScore();"/>
	                    	<div class="clearAll"></div>
		                    <div class="formErr" id="bedroomError#" style={{display: "none"}}>
			                    <span class="formErrArrow"></span>
			                    <span>Error message goes here</span>
			                </div>
	                    </div>
	                    <div class="secondInp ftlt">
	                    	<input type="text" id="breadth#" onkeypress="return(ForceNumbersOnly(this, event, 'D'));" maxlength="4" onblur="validateBedrooms(this, 'breadth'); bedRoomSizeScore();"/>
	                    	
	                    </div>
	                    <div class="unit ftlt">ft</div>
	                    <div class="clearAll"></div>
	                </li>
	                
	            </ul>
	        </div>
	    </div>
	    <div class="clearAll"></div>
	    </div>
	    <div class="clearAll"></div>      
	</div>
                                
                                 <li id="balconiesDiv">
                                	<div class="priceHeader ftltN">Balconies<span class="pp__magiccasn__int" id="balconies_cash" style={{display: "none"}}><span class="pp__magiccasn__coins"></span><span class="pp__magiccasn__intbold">50</span> Magic Cash</span></div>
                                    <span class="inputContainer ftltN">
                                    	<div class="formCom">   
                                        	<div class="bedRooms listForSelect">   
		                                      <ul>
		                                      		<li class="csF blOption" id="14211" onClick={handleBalcony}>0</li>
											    	<li class="csF blOption" id="14200" onClick={handleBalcony}>1</li>
											        <li class="csF blOption" id="14201" onClick={handleBalcony}>2</li>
											        <li class="csF blOption" id="14202" onClick={handleBalcony}>3</li>
											        <li class="csFN csfDD" id="balconyLast">3+</li>
											        <li class="csB" style={{display: "none"}}>
											        	<ol class="csBV blOption" onClick="selectList('4','balconies');">4</ol>
											        	<ol class="csBV blOption" onClick="selectList('5','balconies');">5</ol>
											        	<ol class="csBV blOption" onClick="selectList('6','balconies');">6</ol>
											            <ol class="csBV blOption" onClick="selectList('7','balconies');">7</ol>
											            <ol class="csBV blOption" onClick="selectList('8','balconies');">8</ol>
											            <ol class="csBV blOption" onClick="selectList('9','balconies');">9</ol>
											            <ol class="csBV blOption" onClick="selectList('10','balconies');">10</ol>
											            <ol class="csBV blOption" onClick="selectList('> 10','balconies');">&gt; 10</ol>
											        </li>
											        
											    </ul>
											  </div>
			                                <select id="balconies" name="balconies" class="areaList" onchange="showScore('balconies',this.value);">
			                                   	<option value="-1">Select</option>
												<option value="14211">None</option><option value="14200">1</option><option value="14201">2</option><option value="14202">3</option><option value="14203">4</option><option value="14204">5</option><option value="14205">6</option><option value="14206">7</option><option value="14207">8</option><option value="14208">9</option><option value="14209">10</option><option value="14210">&gt; 10</option>
											</select>
	                                        <div class="unitBlockAreaDropDown" style={{display: "none"}}>
	                                            <ul></ul>
	                                        </div>
                                        </div>
                                        <div class="donePlaceHolder">
                                    		<div class="valiDated" id="balconiesTick"></div>
                                    	</div>
				                        <div class="clearAll"></div>
				                        <div id="balconiesError" class="formErr" style={{display: "none"}}>
				                            <span class="formErrArrow"></span>
				                            <span>Error message goes here</span>
				                        </div>
                                    </span>
                                </li>

                                <li id="FloorNoDiv">
                                	<div class="priceHeader">Floor No.<span class="pp__magiccasn__int" id="floorNumber_cash" style={{display: "none"}}><span class="pp__magiccasn__coins"></span><span class="pp__magiccasn__intbold">50</span> Magic Cash</span></div>
                                    <span class="inputContainer">
                                    	<div class="formCom"> 
                                    	<div class="bedRooms listForSelect listForSelectFloorNo">   
		                                      <ul>
		                                      		<li class="csF blOption blOptionNowr" id="11199" onClick={handleFloor}>Lower Basement</li>
		                                      		<li class="csF blOption blOptionNowr" id="11200" onClick={handleFloor}>Upper Basement</li>
		                                      		<li class="csF blOption blOptionNowr" id="11201" onClick={handleFloor}>Ground</li>
											    	<li class="csF blOption blOptionNowr" id="11202" onClick={handleFloor}>1</li>
											    	<li class="csF blOption blOptionNowr" id="11203" onClick={handleFloor}>2</li>
											    	<li class="csF blOption blOptionNowr" id="11204" onClick={handleFloor}>3</li>
											        <li class="csF blOption blOptionNowr" id="11205" onClick={handleFloor}>4</li>
											        <li class="csF blOption blOptionNowr" id="11206" onClick={handleFloor}>5</li>
											        <li class="csFN csfDD" id="floorNumberLast">5+</li>
											        <li class="csB" style={{display: "none"}}>
											          
											        	<ol class="csBV blOption" onClick="selectList('6','floorNumber');">6</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('7','floorNumber');">7</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('8','floorNumber');">8</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('9','floorNumber');">9</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('10','floorNumber');">10</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('11','floorNumber');">11</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('12','floorNumber');">12</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('13','floorNumber');">13</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('14','floorNumber');">14</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('15','floorNumber');">15</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('16','floorNumber');">16</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('17','floorNumber');">17</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('18','floorNumber');">18</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('19','floorNumber');">19</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('20','floorNumber');">20</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('21','floorNumber');">21</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('22','floorNumber');">22</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('23','floorNumber');">23</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('24','floorNumber');">24</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('25','floorNumber');">25</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('26','floorNumber');">26</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('27','floorNumber');">27</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('28','floorNumber');">28</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('29','floorNumber');">29</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('30','floorNumber');">30</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('31','floorNumber');">31</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('32','floorNumber');">32</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('33','floorNumber');">33</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('34','floorNumber');">34</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('35','floorNumber');">35</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('36','floorNumber');">36</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('37','floorNumber');">37</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('38','floorNumber');">38</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('39','floorNumber');">39</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('40','floorNumber');">40</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('41','floorNumber');">41</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('42','floorNumber');">42</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('43','floorNumber');">43</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('44','floorNumber');">44</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('45','floorNumber');">45</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('46','floorNumber');">46</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('47','floorNumber');">47</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('48','floorNumber');">48</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('49','floorNumber');">49</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('50','floorNumber');">50</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('51','floorNumber');">51</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('52','floorNumber');">52</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('53','floorNumber');">53</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('54','floorNumber');">54</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('55','floorNumber');">55</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('56','floorNumber');">56</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('57','floorNumber');">57</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('58','floorNumber');">58</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('59','floorNumber');">59</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('60','floorNumber');">60</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('61','floorNumber');">61</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('62','floorNumber');">62</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('63','floorNumber');">63</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('64','floorNumber');">64</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('65','floorNumber');">65</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('66','floorNumber');">66</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('67','floorNumber');">67</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('68','floorNumber');">68</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('69','floorNumber');">69</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('70','floorNumber');">70</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('71','floorNumber');">71</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('72','floorNumber');">72</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('73','floorNumber');">73</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('74','floorNumber');">74</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('75','floorNumber');">75</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('76','floorNumber');">76</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('77','floorNumber');">77</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('78','floorNumber');">78</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('79','floorNumber');">79</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('80','floorNumber');">80</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('81','floorNumber');">81</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('82','floorNumber');">82</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('83','floorNumber');">83</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('84','floorNumber');">84</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('85','floorNumber');">85</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('86','floorNumber');">86</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('87','floorNumber');">87</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('88','floorNumber');">88</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('89','floorNumber');">89</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('90','floorNumber');">90</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('91','floorNumber');">91</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('92','floorNumber');">92</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('93','floorNumber');">93</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('94','floorNumber');">94</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('95','floorNumber');">95</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('96','floorNumber');">96</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('97','floorNumber');">97</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('98','floorNumber');">98</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('99','floorNumber');">99</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('100','floorNumber');">100</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('101','floorNumber');">101</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('102','floorNumber');">102</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('103','floorNumber');">103</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('104','floorNumber');">104</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('105','floorNumber');">105</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('106','floorNumber');">106</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('107','floorNumber');">107</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('108','floorNumber');">108</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('109','floorNumber');">109</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('110','floorNumber');">110</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('111','floorNumber');">111</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('112','floorNumber');">112</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('113','floorNumber');">113</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('114','floorNumber');">114</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('115','floorNumber');">115</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('116','floorNumber');">116</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('117','floorNumber');">117</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('118','floorNumber');">118</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('119','floorNumber');">119</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('120','floorNumber');">120</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('121','floorNumber');">121</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('122','floorNumber');">122</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('123','floorNumber');">123</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('124','floorNumber');">124</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('125','floorNumber');">125</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('126','floorNumber');">126</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('127','floorNumber');">127</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('128','floorNumber');">128</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('129','floorNumber');">129</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('130','floorNumber');">130</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('131','floorNumber');">131</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('132','floorNumber');">132</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('133','floorNumber');">133</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('134','floorNumber');">134</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('135','floorNumber');">135</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('136','floorNumber');">136</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('137','floorNumber');">137</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('138','floorNumber');">138</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('139','floorNumber');">139</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('140','floorNumber');">140</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('141','floorNumber');">141</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('142','floorNumber');">142</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('143','floorNumber');">143</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('144','floorNumber');">144</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('145','floorNumber');">145</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('146','floorNumber');">146</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('147','floorNumber');">147</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('148','floorNumber');">148</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('149','floorNumber');">149</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('150','floorNumber');">150</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('151','floorNumber');">151</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('152','floorNumber');">152</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('153','floorNumber');">153</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('154','floorNumber');">154</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('155','floorNumber');">155</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('156','floorNumber');">156</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('157','floorNumber');">157</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('158','floorNumber');">158</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('159','floorNumber');">159</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('160','floorNumber');">160</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('161','floorNumber');">161</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('162','floorNumber');">162</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('163','floorNumber');">163</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('164','floorNumber');">164</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('165','floorNumber');">165</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('166','floorNumber');">166</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('167','floorNumber');">167</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('168','floorNumber');">168</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('169','floorNumber');">169</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('170','floorNumber');">170</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('171','floorNumber');">171</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('172','floorNumber');">172</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('173','floorNumber');">173</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('174','floorNumber');">174</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('175','floorNumber');">175</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('176','floorNumber');">176</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('177','floorNumber');">177</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('178','floorNumber');">178</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('179','floorNumber');">179</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('180','floorNumber');">180</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('181','floorNumber');">181</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('182','floorNumber');">182</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('183','floorNumber');">183</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('184','floorNumber');">184</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('185','floorNumber');">185</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('186','floorNumber');">186</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('187','floorNumber');">187</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('188','floorNumber');">188</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('189','floorNumber');">189</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('190','floorNumber');">190</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('191','floorNumber');">191</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('192','floorNumber');">192</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('193','floorNumber');">193</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('194','floorNumber');">194</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('195','floorNumber');">195</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('196','floorNumber');">196</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('197','floorNumber');">197</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('198','floorNumber');">198</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('199','floorNumber');">199</ol>
											        
											        	<ol class="csBV blOption" onClick="selectList('200','floorNumber');">200</ol>
											        
											           
											        </li>
											        
											    </ul>
											  </div>  
	                                         <select id="floorNumber" name="floorNumber" class="areaList" onchange="showScore('floorNumber',this.value);" size="1">
	                                         		<option value="-1">Select</option>
													<option value="11199">Lower Basement</option><option value="11200">Upper Basement</option><option value="11201">Ground</option><option value="11202">1</option><option value="11203">2</option><option value="11204">3</option><option value="11205">4</option><option value="11206">5</option><option value="11207">6</option><option value="11208">7</option><option value="11209">8</option><option value="11210">9</option><option value="11211">10</option><option value="11212">11</option><option value="11213">12</option><option value="11214">13</option><option value="11215">14</option><option value="11216">15</option><option value="11217">16</option><option value="11218">17</option><option value="11219">18</option><option value="11220">19</option><option value="11221">20</option><option value="11222">21</option><option value="11223">22</option><option value="11224">23</option><option value="11225">24</option><option value="11226">25</option><option value="11227">26</option><option value="11228">27</option><option value="11229">28</option><option value="11230">29</option><option value="11231">30</option><option value="11232">31</option><option value="11233">32</option><option value="11234">33</option><option value="11235">34</option><option value="11236">35</option><option value="11237">36</option><option value="11238">37</option><option value="11239">38</option><option value="11240">39</option><option value="11241">40</option><option value="11242">41</option><option value="11243">42</option><option value="11244">43</option><option value="11245">44</option><option value="11246">45</option><option value="11247">46</option><option value="11248">47</option><option value="11249">48</option><option value="11250">49</option><option value="11251">50</option><option value="11252">51</option><option value="11253">52</option><option value="11254">53</option><option value="11255">54</option><option value="11256">55</option><option value="11257">56</option><option value="11258">57</option><option value="11259">58</option><option value="11260">59</option><option value="11261">60</option><option value="11262">61</option><option value="11263">62</option><option value="11264">63</option><option value="11265">64</option><option value="11266">65</option><option value="11267">66</option><option value="11268">67</option><option value="11269">68</option><option value="11270">69</option><option value="11271">70</option><option value="11272">71</option><option value="11273">72</option><option value="11274">73</option><option value="11275">74</option><option value="11276">75</option><option value="11277">76</option><option value="11278">77</option><option value="11279">78</option><option value="11280">79</option><option value="11281">80</option><option value="11282">81</option><option value="11283">82</option><option value="11284">83</option><option value="11285">84</option><option value="11286">85</option><option value="11287">86</option><option value="11288">87</option><option value="11289">88</option><option value="11290">89</option><option value="11291">90</option><option value="11292">91</option><option value="11293">92</option><option value="11294">93</option><option value="11295">94</option><option value="11296">95</option><option value="11297">96</option><option value="11298">97</option><option value="11299">98</option><option value="11300">99</option><option value="1002009">100</option><option value="1002010">101</option><option value="1002011">102</option><option value="1002012">103</option><option value="1002013">104</option><option value="1002014">105</option><option value="1002015">106</option><option value="1002016">107</option><option value="1002017">108</option><option value="1002018">109</option><option value="1002019">110</option><option value="1002020">111</option><option value="1002021">112</option><option value="1002022">113</option><option value="1002023">114</option><option value="1002024">115</option><option value="1002025">116</option><option value="1002026">117</option><option value="1002027">118</option><option value="1002028">119</option><option value="1002029">120</option><option value="1002030">121</option><option value="1002031">122</option><option value="1002032">123</option><option value="1002033">124</option><option value="1002034">125</option><option value="1002035">126</option><option value="1002036">127</option><option value="1002037">128</option><option value="1002038">129</option><option value="1002039">130</option><option value="1002040">131</option><option value="1002041">132</option><option value="1002042">133</option><option value="1002043">134</option><option value="1002044">135</option><option value="1002045">136</option><option value="1002046">137</option><option value="1002047">138</option><option value="1002048">139</option><option value="1002049">140</option><option value="1002050">141</option><option value="1002051">142</option><option value="1002052">143</option><option value="1002053">144</option><option value="1002054">145</option><option value="1002055">146</option><option value="1002056">147</option><option value="1002057">148</option><option value="1002058">149</option><option value="1002059">150</option><option value="1002161">151</option><option value="1002162">152</option><option value="1002163">153</option><option value="1002164">154</option><option value="1002165">155</option><option value="1002166">156</option><option value="1002167">157</option><option value="1002168">158</option><option value="1002169">159</option><option value="1002170">160</option><option value="1002171">161</option><option value="1002172">162</option><option value="1002173">163</option><option value="1002174">164</option><option value="1002175">165</option><option value="1002176">166</option><option value="1002177">167</option><option value="1002178">168</option><option value="1002179">169</option><option value="1002180">170</option><option value="1002181">171</option><option value="1002182">172</option><option value="1002183">173</option><option value="1002184">174</option><option value="1002185">175</option><option value="1002186">176</option><option value="1002187">177</option><option value="1002188">178</option><option value="1002189">179</option><option value="1002190">180</option><option value="1002191">181</option><option value="1002192">182</option><option value="1002193">183</option><option value="1002194">184</option><option value="1002195">185</option><option value="1002196">186</option><option value="1002197">187</option><option value="1002198">188</option><option value="1002199">189</option><option value="1002200">190</option><option value="1002201">191</option><option value="1002202">192</option><option value="1002203">193</option><option value="1002204">194</option><option value="1002205">195</option><option value="1002206">196</option><option value="1002207">197</option><option value="1002208">198</option><option value="1002209">199</option><option value="1002210">200</option>
				                             </select>
	                                        <div class="unitBlockAreaDropDown" style={{display: "none"}}>
	                                            <ul></ul>
	                                        </div>
                                        </div>
                                        	<div class="valiDated" id="floorNumberTick" style={{float: "left", position: "absolute", top: "5px", left: "280px"}}></div>
				                        <div class="clearAll"></div>
				                        <div id="floorNumberError" class="formErr" style={{display: "none"}}>
				                            <span class="formErrArrow"></span>
				                            <span>Error message goes here</span>
				                        </div>
				                         <div id="floorOptionvisible" class="radioBlock selectFrmList" style={{display: "none"}}>
                        	       			<span class="customCheckBox"><input id="tofloorOptionvisible" name="floorOptionvisible" style={{opacity: "0"}} onClick="customCheckBox(this, 'tofloorOptionvisible');" type="checkbox" value="N"/><input type="hidden" name="_floorOptionvisible" value="on"/></span> <label for="tofloorOptionvisible">Hide Floor</label>
                              			 </div>
                                    </span>
                                </li>
                                <li id="totalFloor">
                                	<div class="priceHeader">Total Floors <span class="pp__magiccasn__int" id="totalFloorNumber_cash" style={{display: "none"}}><span class="pp__magiccasn__coins"></span><span class="pp__magiccasn__intbold">20</span> Magic Cash</span></div>
                                    <span class="inputContainer">
                                    	<div class="formCom">   
                                        	<div class="bedRooms listForSelect">   
		                                      <ul>
											    	
											        
											        	<li class="csF blOption" id="12050" onClick={handleFloors}>1</li>
											         
											        	<li class="csF blOption" id="12051" onClick={handleFloors}>2</li>
											         
											        	<li class="csF blOption" id="12052" onClick={handleFloors}>3</li>
											         
											        	<li class="csF blOption" id="12053" onClick={handleFloors}>4</li>
											         
											        	<li class="csF blOption" id="12054" onClick={handleFloors}>5</li>
											         
											        	<li class="csF blOption" id="12055" onClick={handleFloors}>6</li>
											         
											        	<li class="csF blOption" id="12056" onClick={handleFloors}>7</li>
											         
											        	<li class="csF blOption" id="12057" onClick={handleFloors}>8</li>
											         
											        	<li class="csF blOption" id="12058" onClick={handleFloors}>9</li>
											         
											        	<li class="csF blOption" id="12059" onClick={handleFloors}>10</li>
											         
											        	<li class="csF blOption" id="12060" onClick={handleFloors}>11</li>
											         
											        	<li class="csF blOption" id="12061" onClick={handleFloors}>12</li>
											         
											        	<li class="csF blOption" id="12062" onClick={handleFloors}>13</li>
											         
											        <li class="csFN csfDD" id="totalFloorNumberLast">13+</li>
											        <li class="csB" style={{display: "none"}}>
											         
											        	<ol class="csBV blOption" onClick="selectList('14','totalFloorNumber');">14</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('15','totalFloorNumber');">15</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('16','totalFloorNumber');">16</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('17','totalFloorNumber');">17</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('18','totalFloorNumber');">18</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('19','totalFloorNumber');">19</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('20','totalFloorNumber');">20</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('21','totalFloorNumber');">21</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('22','totalFloorNumber');">22</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('23','totalFloorNumber');">23</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('24','totalFloorNumber');">24</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('25','totalFloorNumber');">25</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('26','totalFloorNumber');">26</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('27','totalFloorNumber');">27</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('28','totalFloorNumber');">28</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('29','totalFloorNumber');">29</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('30','totalFloorNumber');">30</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('31','totalFloorNumber');">31</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('32','totalFloorNumber');">32</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('33','totalFloorNumber');">33</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('34','totalFloorNumber');">34</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('35','totalFloorNumber');">35</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('36','totalFloorNumber');">36</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('37','totalFloorNumber');">37</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('38','totalFloorNumber');">38</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('39','totalFloorNumber');">39</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('40','totalFloorNumber');">40</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('41','totalFloorNumber');">41</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('42','totalFloorNumber');">42</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('43','totalFloorNumber');">43</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('44','totalFloorNumber');">44</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('45','totalFloorNumber');">45</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('46','totalFloorNumber');">46</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('47','totalFloorNumber');">47</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('48','totalFloorNumber');">48</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('49','totalFloorNumber');">49</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('50','totalFloorNumber');">50</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('51','totalFloorNumber');">51</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('52','totalFloorNumber');">52</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('53','totalFloorNumber');">53</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('54','totalFloorNumber');">54</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('55','totalFloorNumber');">55</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('56','totalFloorNumber');">56</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('57','totalFloorNumber');">57</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('58','totalFloorNumber');">58</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('59','totalFloorNumber');">59</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('60','totalFloorNumber');">60</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('61','totalFloorNumber');">61</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('62','totalFloorNumber');">62</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('63','totalFloorNumber');">63</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('64','totalFloorNumber');">64</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('65','totalFloorNumber');">65</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('66','totalFloorNumber');">66</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('67','totalFloorNumber');">67</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('68','totalFloorNumber');">68</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('69','totalFloorNumber');">69</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('70','totalFloorNumber');">70</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('71','totalFloorNumber');">71</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('72','totalFloorNumber');">72</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('73','totalFloorNumber');">73</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('74','totalFloorNumber');">74</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('75','totalFloorNumber');">75</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('76','totalFloorNumber');">76</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('77','totalFloorNumber');">77</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('78','totalFloorNumber');">78</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('79','totalFloorNumber');">79</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('80','totalFloorNumber');">80</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('81','totalFloorNumber');">81</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('82','totalFloorNumber');">82</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('83','totalFloorNumber');">83</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('84','totalFloorNumber');">84</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('85','totalFloorNumber');">85</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('86','totalFloorNumber');">86</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('87','totalFloorNumber');">87</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('88','totalFloorNumber');">88</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('89','totalFloorNumber');">89</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('90','totalFloorNumber');">90</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('91','totalFloorNumber');">91</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('92','totalFloorNumber');">92</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('93','totalFloorNumber');">93</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('94','totalFloorNumber');">94</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('95','totalFloorNumber');">95</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('96','totalFloorNumber');">96</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('97','totalFloorNumber');">97</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('98','totalFloorNumber');">98</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('99','totalFloorNumber');">99</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('100','totalFloorNumber');">100</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('101','totalFloorNumber');">101</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('102','totalFloorNumber');">102</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('103','totalFloorNumber');">103</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('104','totalFloorNumber');">104</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('105','totalFloorNumber');">105</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('106','totalFloorNumber');">106</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('107','totalFloorNumber');">107</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('108','totalFloorNumber');">108</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('109','totalFloorNumber');">109</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('110','totalFloorNumber');">110</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('111','totalFloorNumber');">111</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('112','totalFloorNumber');">112</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('113','totalFloorNumber');">113</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('114','totalFloorNumber');">114</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('115','totalFloorNumber');">115</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('116','totalFloorNumber');">116</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('117','totalFloorNumber');">117</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('118','totalFloorNumber');">118</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('119','totalFloorNumber');">119</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('120','totalFloorNumber');">120</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('121','totalFloorNumber');">121</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('122','totalFloorNumber');">122</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('123','totalFloorNumber');">123</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('124','totalFloorNumber');">124</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('125','totalFloorNumber');">125</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('126','totalFloorNumber');">126</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('127','totalFloorNumber');">127</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('128','totalFloorNumber');">128</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('129','totalFloorNumber');">129</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('130','totalFloorNumber');">130</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('131','totalFloorNumber');">131</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('132','totalFloorNumber');">132</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('133','totalFloorNumber');">133</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('134','totalFloorNumber');">134</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('135','totalFloorNumber');">135</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('136','totalFloorNumber');">136</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('137','totalFloorNumber');">137</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('138','totalFloorNumber');">138</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('139','totalFloorNumber');">139</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('140','totalFloorNumber');">140</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('141','totalFloorNumber');">141</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('142','totalFloorNumber');">142</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('143','totalFloorNumber');">143</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('144','totalFloorNumber');">144</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('145','totalFloorNumber');">145</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('146','totalFloorNumber');">146</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('147','totalFloorNumber');">147</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('148','totalFloorNumber');">148</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('149','totalFloorNumber');">149</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('150','totalFloorNumber');">150</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('151','totalFloorNumber');">151</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('152','totalFloorNumber');">152</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('153','totalFloorNumber');">153</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('154','totalFloorNumber');">154</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('155','totalFloorNumber');">155</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('156','totalFloorNumber');">156</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('157','totalFloorNumber');">157</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('158','totalFloorNumber');">158</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('159','totalFloorNumber');">159</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('160','totalFloorNumber');">160</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('161','totalFloorNumber');">161</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('162','totalFloorNumber');">162</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('163','totalFloorNumber');">163</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('164','totalFloorNumber');">164</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('165','totalFloorNumber');">165</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('166','totalFloorNumber');">166</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('167','totalFloorNumber');">167</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('168','totalFloorNumber');">168</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('169','totalFloorNumber');">169</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('170','totalFloorNumber');">170</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('171','totalFloorNumber');">171</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('172','totalFloorNumber');">172</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('173','totalFloorNumber');">173</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('174','totalFloorNumber');">174</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('175','totalFloorNumber');">175</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('176','totalFloorNumber');">176</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('177','totalFloorNumber');">177</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('178','totalFloorNumber');">178</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('179','totalFloorNumber');">179</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('180','totalFloorNumber');">180</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('181','totalFloorNumber');">181</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('182','totalFloorNumber');">182</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('183','totalFloorNumber');">183</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('184','totalFloorNumber');">184</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('185','totalFloorNumber');">185</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('186','totalFloorNumber');">186</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('187','totalFloorNumber');">187</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('188','totalFloorNumber');">188</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('189','totalFloorNumber');">189</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('190','totalFloorNumber');">190</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('191','totalFloorNumber');">191</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('192','totalFloorNumber');">192</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('193','totalFloorNumber');">193</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('194','totalFloorNumber');">194</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('195','totalFloorNumber');">195</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('196','totalFloorNumber');">196</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('197','totalFloorNumber');">197</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('198','totalFloorNumber');">198</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('199','totalFloorNumber');">199</ol>
											         
											        	<ol class="csBV blOption" onClick="selectList('200','totalFloorNumber');">200</ol>
											         
											        </li>
											        
											    </ul>
											  </div>
	                                        <select id="totalFloorNumber" name="totalFloorNumber" class="areaList" onchange="showScore('totalFloorNumber',this.value);" size="1">
	                                        	<option value="-1">Select</option>
												<option value="12050">1</option><option value="12051">2</option><option value="12052">3</option><option value="12053">4</option><option value="12054">5</option><option value="12055">6</option><option value="12056">7</option><option value="12057">8</option><option value="12058">9</option><option value="12059">10</option><option value="12060">11</option><option value="12061">12</option><option value="12062">13</option><option value="12063">14</option><option value="12064">15</option><option value="12065">16</option><option value="12066">17</option><option value="12067">18</option><option value="12068">19</option><option value="12069">20</option><option value="12070">21</option><option value="12071">22</option><option value="12072">23</option><option value="12073">24</option><option value="12074">25</option><option value="12075">26</option><option value="12076">27</option><option value="12077">28</option><option value="12078">29</option><option value="12079">30</option><option value="12080">31</option><option value="12081">32</option><option value="12082">33</option><option value="12083">34</option><option value="12084">35</option><option value="12085">36</option><option value="12086">37</option><option value="12087">38</option><option value="12088">39</option><option value="12089">40</option><option value="12090">41</option><option value="12091">42</option><option value="12092">43</option><option value="12093">44</option><option value="12094">45</option><option value="12095">46</option><option value="12096">47</option><option value="12097">48</option><option value="12098">49</option><option value="12099">50</option><option value="12100">51</option><option value="12101">52</option><option value="12102">53</option><option value="12103">54</option><option value="12104">55</option><option value="12105">56</option><option value="12106">57</option><option value="12107">58</option><option value="12108">59</option><option value="12109">60</option><option value="12110">61</option><option value="12111">62</option><option value="12112">63</option><option value="12113">64</option><option value="12114">65</option><option value="12115">66</option><option value="12116">67</option><option value="12117">68</option><option value="12118">69</option><option value="12119">70</option><option value="12120">71</option><option value="12121">72</option><option value="12122">73</option><option value="12123">74</option><option value="12124">75</option><option value="12125">76</option><option value="12126">77</option><option value="12127">78</option><option value="12128">79</option><option value="12129">80</option><option value="12130">81</option><option value="12131">82</option><option value="12132">83</option><option value="12133">84</option><option value="12134">85</option><option value="12135">86</option><option value="12136">87</option><option value="12137">88</option><option value="12138">89</option><option value="12139">90</option><option value="12140">91</option><option value="12141">92</option><option value="12142">93</option><option value="12143">94</option><option value="12144">95</option><option value="12145">96</option><option value="12146">97</option><option value="12147">98</option><option value="12148">99</option><option value="1002060">100</option><option value="1002061">101</option><option value="1002062">102</option><option value="1002063">103</option><option value="1002064">104</option><option value="1002065">105</option><option value="1002066">106</option><option value="1002067">107</option><option value="1002068">108</option><option value="1002069">109</option><option value="1002070">110</option><option value="1002071">111</option><option value="1002072">112</option><option value="1002073">113</option><option value="1002074">114</option><option value="1002075">115</option><option value="1002076">116</option><option value="1002077">117</option><option value="1002078">118</option><option value="1002079">119</option><option value="1002080">120</option><option value="1002081">121</option><option value="1002082">122</option><option value="1002083">123</option><option value="1002084">124</option><option value="1002085">125</option><option value="1002086">126</option><option value="1002087">127</option><option value="1002088">128</option><option value="1002089">129</option><option value="1002090">130</option><option value="1002091">131</option><option value="1002092">132</option><option value="1002093">133</option><option value="1002094">134</option><option value="1002095">135</option><option value="1002096">136</option><option value="1002097">137</option><option value="1002098">138</option><option value="1002099">139</option><option value="1002100">140</option><option value="1002101">141</option><option value="1002102">142</option><option value="1002103">143</option><option value="1002104">144</option><option value="1002105">145</option><option value="1002106">146</option><option value="1002107">147</option><option value="1002108">148</option><option value="1002109">149</option><option value="1002110">150</option><option value="1002111">151</option><option value="1002112">152</option><option value="1002113">153</option><option value="1002114">154</option><option value="1002115">155</option><option value="1002116">156</option><option value="1002117">157</option><option value="1002118">158</option><option value="1002119">159</option><option value="1002120">160</option><option value="1002121">161</option><option value="1002122">162</option><option value="1002123">163</option><option value="1002124">164</option><option value="1002125">165</option><option value="1002126">166</option><option value="1002127">167</option><option value="1002128">168</option><option value="1002129">169</option><option value="1002130">170</option><option value="1002131">171</option><option value="1002132">172</option><option value="1002133">173</option><option value="1002134">174</option><option value="1002135">175</option><option value="1002136">176</option><option value="1002137">177</option><option value="1002138">178</option><option value="1002139">179</option><option value="1002140">180</option><option value="1002141">181</option><option value="1002142">182</option><option value="1002143">183</option><option value="1002144">184</option><option value="1002145">185</option><option value="1002146">186</option><option value="1002147">187</option><option value="1002148">188</option><option value="1002149">189</option><option value="1002150">190</option><option value="1002151">191</option><option value="1002152">192</option><option value="1002153">193</option><option value="1002154">194</option><option value="1002155">195</option><option value="1002156">196</option><option value="1002157">197</option><option value="1002158">198</option><option value="1002159">199</option><option value="1002160">200</option>
			                                </select>
	                                        <div class="unitBlockAreaDropDown" style={{display: "none"}}>
	                                            <ul></ul>
	                                        </div>
                                        </div>
                                        <div class="donePlaceHolder">
                                        	<div class="valiDated" id="totalFloorNumberTick"></div>
                                        </div>
				                        <div class="clearAll"></div>
				                        <div id="totalFloorNumberError" class="formErr" style={{display: "none"}}>
				                            <span class="formErrArrow"></span>
				                            <span>Error message goes here</span>
				                        </div>
                                    </span>
                                </li>
                                <li id="furnishedDiv">
                                	<div class="priceHeader">Furnished Status <span class="pp__magiccasn__int" id="furnished_cash" style={{display: "none"}}><span class="pp__magiccasn__coins"></span><span class="pp__magiccasn__intbold">50</span> Magic Cash</span></div>
                                    <span class="inputContainer">
                                    	<div class="formCom">   
                                        	<div class="bedRooms listForSelect">   
		                                      <ul>
											    	<li class="csF blOption" id="11900" onClick={handleFurnished}>Furnished</li>
											        <li class="csF blOption" id="11901" onClick={handleFurnished}>Unfurnished</li>
											        <li class="csF blOption" id="11902"  onClick={handleFurnished}>Semi-Furnished</li>
											        {/* id="semiFurnHide" */}
											        
											    </ul>
											  </div>
		                                     <select id="furnished" name="furnished" class="areaList" onchange="showScore('furnished',this.value);" size="1"><option value="-1">Select</option><option value="11900">Furnished</option><option value="11901">Unfurnished</option><option value="11902">Semi-Furnished</option></select>
	                                        <div class="unitBlockAreaDropDown" style={{display: "none"}}>
	                                            <ul></ul>
	                                        </div>
                                        </div>
                                        <div class="donePlaceHolder">
                                        	<div class="valiDated" id="furnishedTick" style={{position: "absolute", left: "280px", top: "10px"}}></div>
                                        </div>
				                        <div class="clearAll"></div>
				                        <div id="furnishedError" class="formErr" style={{display: "none"}}>
				                            <span class="formErrArrow"></span>
				                            <span>Error message goes here</span>
				                        </div>
				                    </span>
                                </li>
                                <li id="bathroomsDiv" style={{marginLeft:"-658px",marginTop:"80px"}}>
                                	<div class="priceHeader ftltN"><span id="bathroomTitle">Bathrooms</span><span class="pp__magiccasn__int" id="bathrooms_cash" style={{display: "none"}}><span class="pp__magiccasn__coins"></span><span class="pp__magiccasn__intbold">50</span> Magic Cash</span></div>
                                    <span class="inputContainer ftltN" style={{float: "left"}}>
                                    	<div class="formCom">   
                                        	<div class="bedRooms listForSelect">   
		                                      <ul>
		                                            <li class="csF btOption" onClick="selectList('None','bathrooms');" style={{display: "none"}}>0</li>
											    	<li class="csF btOption" id="12000" onClick={handleBathroom}>1</li>
											        <li class="csF btOption" id="12001" onClick={handleBathroom}>2</li>
											        <li class="csF btOption" id="12002" onClick={handleBathroom}>3</li>
											        <li class="csFN csfDD" id="bathroomsLast">3+</li>
											        <li class="csB" style={{display: "none"}}>
											        	<ol class="csBV btOption" onClick="selectList('4','bathrooms');">4</ol>
											        	<ol class="csBV btOption" onClick="selectList('5','bathrooms');">5</ol>
											        	<ol class="csBV btOption" onClick="selectList('6','bathrooms');">6</ol>
											            <ol class="csBV btOption" onClick="selectList('7','bathrooms');">7</ol>
											            <ol class="csBV btOption" onClick="selectList('8','bathrooms');">8</ol>
											            <ol class="csBV btOption" onClick="selectList('9','bathrooms');">9</ol>
											            <ol class="csBV btOption" onClick="selectList('10','bathrooms');">10</ol>
											            <ol class="csBV btOption" onClick="selectList('> 10','bathrooms');">&gt; 10</ol>
											        </li>
											        
											    </ul>
											  </div>
	                                         <select id="bathrooms" name="bathrooms" class="areaList" onchange="showScore('bathrooms',this.value);checkPropBq(2,'bathroomsError');" size="1">
	                                         	<option value="-1">Select</option>
												<option value="12011">None</option><option value="12000">1</option><option value="12001">2</option><option value="12002">3</option><option value="12003">4</option><option value="12004">5</option><option value="12005">6</option><option value="12006">7</option><option value="12007">8</option><option value="12008">9</option><option value="12009">10</option><option value="12010">&gt; 10</option>
			                                </select>
	                                        <div class="unitBlockAreaDropDown" style={{display: "none"}}>
	                                            <ul></ul>
	                                        </div>
                                        </div>
                                        <div class="donePlaceHolder">
                                        	<div class="valiDated" id="bathroomsTick"></div>
                                        </div>
				                        <div class="clearAll"></div>
				                        <div id="bathroomsError" class="formErr" style={{display: "none"}}>
				                            <span class="formErrArrow"></span>
				                            <span>Error message goes here</span>
				                        </div>
                                    </span>
                                    
                                </li>
                               
                                 <li id="noOfSeatsLi" class="" style={{display: "none"}}>
                                	<div class="priceHeader ftltN">Number of Seats</div>
                                    <span class="inputContainer pull_left">
                                    	<div class="formCom">   
                                        	<span class=" pull_left">
				                            	<input id="noOfSeats" name="noOfSeats" onkeypress="return(ForceNumbersOnly(this, event, 'P'));" onkeyup="onKeyUpDown(this); currencyFormatOnUpDown(this);" onkeydown="onKeyUpDown(this);" placeholder="Enter Number" class="ciDrop inputText" type="text" value="" maxlength="3"/>
				                            </span>
	                                    </div>
                                        <div class="clearAll"></div>
										<div id="noOfSeatsError" class="formErr" style={{display: "none"}}>
										    <span class="formErrArrow"></span>
										    <span>Error message goes here</span>
										</div>
				                    </span>
                                </li>
                               <li id="cabinsLi" style={{display: "none"}}>
							   <div class="priceHeader ftltN" style={{whiteSpace: "nowrap"}}>Cabin/Meeting Rooms</div>
							   <span class="inputContainer">
								 	<div class="formCom">   
                                        	<span class="inputContainer">
                                        		<input type="button" id="cabinsVal" value="Select" class="ciDrop furSta" onClick="getCustomAreaOptionsCovered(event, this, '.formCom', 'cabins')"/>
                                        	</span>
		                                     <select id="cabins" name="cabins" class="areaList" size="1">
		                                     	<option value="-1">Select</option>
		                                     	<option value="0">0</option>
												
												<option value="1">1</option>
												
												<option value="2">2</option>
												
												<option value="3">3</option>
												
												<option value="4">4</option>
												
												<option value="5">5</option>
												
												<option value="6">6</option>
												
												<option value="7">7</option>
												
												<option value="8">8</option>
												
												<option value="9">9</option>
												
												<option value="10">10</option>
												
												<option value="11">11</option>
												
												<option value="12">12</option>
												
												<option value="13">13</option>
												
												<option value="14">14</option>
												
												<option value="15">15</option>
												
												<option value="16">16</option>
												
												<option value="17">17</option>
												
												<option value="18">18</option>
												
												<option value="19">19</option>
												
												<option value="20">20</option>
												
												<option value="21">21</option>
												
												<option value="22">22</option>
												
												<option value="23">23</option>
												
												<option value="24">24</option>
												
												<option value="25">25</option>
												
												<option value="26">26</option>
												
												<option value="27">27</option>
												
												<option value="28">28</option>
												
												<option value="29">29</option>
												
												<option value="30">30</option>
												
												</select>
	                                        <div class="unitBlockAreaDropDown" style={{display: "none"}}>
	                                            <ul></ul>
	                                        </div>
                                        </div>
					            <div class="donePlaceHolder">
					            	<div class="valiDated" id="bathroomsTick"></div>
					            </div>
								<div class="clearAll"></div>
								<div id="cabinsError" class="formErr" style={{display: "none"}}>
								    <span class="formErrArrow"></span>
								    <span>Error message goes here</span>
								</div>
							 </span>
                           </li>
                               
                         <li id="openHours" class="openHours" style={{display: "none"}}>
                                <div class="priceHeader ftltN">Open Hours</div>
                                <span class="inputContainer">
								 	<div class="formCom">   
                                        	<span class="inputContainer">
                                        		<input type="button" id="openHoursVal" value="Select Day &amp; Time" class="ciDrop" onClick="showHideOpenHrs();"/>
                                        	</span>
         							<div class="openHourPopBox" style={{display: "none", left: "-58px"}}> 
                            <div class="dt-row dt-row-head clearfix">
                                <div class="dt-cl dt-cl1">Day</div>
                                <div class="dt-cl dt-cl2">AM</div>
                                <div class="dt-cl dt-cl3">&nbsp;</div>
                                <div class="dt-cl dt-cl4">PM</div>
                             </div>
                             
                              <div class="dt-row clearfix">
                                <div class="dt-cl dt-cl1"><span class="chk-input"><input type="checkbox" name="inpDay" id="inpDay1" value="" class="inpDay"/><label for="inpDay1">Mon</label></span></div>
                                <div class="dt-cl dt-cl2"><input type="text" id="startMon" value="09:00" name="" class="input-time" readonly="readonly" onkeypress="return onlyNumbersWithColon(event);"/></div>
                                <div class="dt-cl dt-cl3">to</div>
                                <div class="dt-cl dt-cl4"><input type="text" id="endMon" value="06:00" name="" class="input-time" readonly="readonly" onkeypress="return onlyNumbersWithColon(event);"/></div>
                             </div>
                             
                             <div class="dt-row clearfix">
                                <div class="dt-cl dt-cl1"><span class="chk-input"><input type="checkbox" name="inpDay" id="inpDay2" value=" " class="inpDay"/><label for="inpDay2">Tue</label></span></div>
                                <div class="dt-cl dt-cl2"><input type="text" id="startTue" value="09:00" name="" class="input-time" readonly="readonly" onkeypress="return onlyNumbersWithColon(event);"/></div>
                                <div class="dt-cl dt-cl3">to</div>
                                <div class="dt-cl dt-cl4"><input type="text" id="endTue" value="06:00" name="" class="input-time" readonly="readonly" onkeypress="return onlyNumbersWithColon(event);"/></div>
                             </div>
                             
                             <div class="dt-row clearfix">
                                <div class="dt-cl dt-cl1"><span class="chk-input"><input type="checkbox" name="inpDay" id="inpDay3" value="" class="inpDay"/><label for="inpDay3">Wed</label></span></div>
                                <div class="dt-cl dt-cl2"><input type="text" id="startWed" value="09:00" name="" class="input-time" readonly="readonly" onkeypress="return onlyNumbersWithColon(event);"/></div>
                                <div class="dt-cl dt-cl3">to</div>
                                <div class="dt-cl dt-cl4"><input type="text" id="endWed" value="06:00" name="" class="input-time" readonly="readonly" onkeypress="return onlyNumbersWithColon(event);"/></div>
                             </div>
                             
                             <div class="dt-row clearfix">
                                <div class="dt-cl dt-cl1"><span class="chk-input"><input type="checkbox" name="inpDay" id="inpDay4" value="" class="inpDay"/><label for="inpDay4">Thu</label></span></div>
                                <div class="dt-cl dt-cl2"><input type="text" id="startThu" value="09:00" name="" class="input-time" readonly="readonly" onkeypress="return onlyNumbersWithColon(event);"/></div>
                                <div class="dt-cl dt-cl3">to</div>
                                <div class="dt-cl dt-cl4"><input type="text" id="endThu" value="06:00" name="" class="input-time" readonly="readonly" onkeypress="return onlyNumbersWithColon(event);"/></div>
                             </div>
                             
                             <div class="dt-row clearfix">
                                <div class="dt-cl dt-cl1"><span class="chk-input"><input type="checkbox" name="inpDay" id="inpDay5" value="" class="inpDay"/><label for="inpDay5">Fri</label></span></div>
                                <div class="dt-cl dt-cl2"><input type="text" id="startFri" value="09:00" name="" class="input-time" readonly="readonly" onkeypress="return onlyNumbersWithColon(event);"/></div>
                                <div class="dt-cl dt-cl3">to</div>
                                <div class="dt-cl dt-cl4"><input type="text" id="endFri" value="06:00" name="" class="input-time" readonly="readonly" onkeypress="return onlyNumbersWithColon(event);"/></div>
                             </div>
                             
                             <div class="dt-row clearfix">
                                <div class="dt-cl dt-cl1"><span class="chk-input"><input type="checkbox" name="inpDay" id="inpDay6" value="" class="inpDay"/><label for="inpDay6">Sat</label></span></div>
                                <div class="dt-cl dt-cl2"><input type="text" id="startSat" value="09:00" name="" class="input-time" readonly="readonly" onkeypress="return onlyNumbersWithColon(event);"/></div>
                                <div class="dt-cl dt-cl3">to</div>
                                <div class="dt-cl dt-cl4"><input type="text" id="endSat" value="06:00" name="" class="input-time" readonly="readonly" onkeypress="return onlyNumbersWithColon(event);"/></div>
                             </div>
                             
                             <div class="dt-row clearfix">
                                <div class="dt-cl dt-cl1"><span class="chk-input"><input type="checkbox" name="inpDay" id="inpDay7" value="" class="inpDay"/><label for="inpDay7">Sun</label></span></div>
                                <div class="dt-cl dt-cl2"><input type="text" id="startSun" value="09:00" name="" class="input-time" readonly="readonly" onkeypress="return onlyNumbersWithColon(event);"/></div>
                                <div class="dt-cl dt-cl3">to</div>
                                <div class="dt-cl dt-cl4"><input type="text" id="endSun" value="06:00" name="" class="input-time" readonly="readonly" onkeypress="return onlyNumbersWithColon(event);"/></div>
                             </div>
                             
                             <div class="dt-row clearfix dt-row-allDay">
                                <div class="dt-cl dt-cl1"><span class="chk-input"><input type="checkbox" name="inpDayAllDay" id="inpDayAllDay" value="" onClick="jqChkAllDay('inpDayAllDay');"/><label for="inpDayAllDay">Open on all days</label></span></div>
                             </div>
                             <div class="dt-row clearfix">
                                <a href="#!" class="btnSelectTime" onClick="submitOpenHrs('intermediary');">Done</a>
                             </div>
                             
                      </div>
                                                 	
                                    </div>
								<div class="valiDated" id="openHoursValTick"></div>
								<div class="clearAll"></div>
								<div id="openHoursError" class="formErr" style={{display: "none"}}>
								    <span class="formErrArrow"></span>
								    <span>Error message goes here</span>
								</div>
							 </span>
							 
                         </li>
                         
                           <li id="willingToModifyLi" style={{display: "none"}}>
                                	<div class="priceHeader">Willing to modify interiors</div>
                                    <span class="inputContainer">
                                    	<div class="formCom">   
                                        	<div class="radioBlock comBSpace">
						                    	<ul>
						                        	<li class="comFirst">
						                        		<span class="customRadioButton"> 
						                        			<input id="willingToModifyY" name="willingToModify" style={{opacity: "0"}} onClick="customRadioButtonNew(this, 'willingToModify');" type="radio" value="Y"/>
						                        		</span> 
						                        		<label class="curPoint" for="willingToModifyY">Yes</label>
						                        	</li>
						                        	<li>
						                        		<span class="customRadioButton">
						                        			<input id="willingToModifyN" name="willingToModify" style={{opacity: "0"}} onClick="customRadioButtonNew(this, 'willingToModify');" type="radio" value="N"/>
						                        		</span> 
						                        		<label class="curPoint" for="willingToModifyN">No</label>
						                        	</li>
						                        </ul>
						                    </div>	
                                        </div>
                                        <div class="clearAll"></div>
										<div id="willingToModifyError" class="formErr" style={{display: "none"}}>
										    <span class="formErrArrow"></span>
										    <span>Error message goes here</span>
										</div>
				                    </span>
                                </li> 
                                 
                                <li id="lockinPeriodLi" class="clrDivRow" style={{display: "none"}}>
                                	<div class="priceHeader ftltN with_cap_text" id="">Lock-in Period <span class="sub_cap_text">(In Years)</span></div>
                                    <span class="inputContainer pull_left">
                                    	<div class="formCom">   
                                        	<span class=" pull_left">
				                            	<input id="lockinPeriod" name="lockinPeriod" onkeypress="return(ForceNumbersOnly(this, event, 'P'));" onkeyup="onKeyUpDown(this); currencyFormatOnUpDown(this);" onkeydown="onKeyUpDown(this);" placeholder="Enter Number" class="ciDrop inputText" type="text" value="" maxlength="2"/>
				                            </span>
	                                    </div>
                                        <div class="clearAll"></div>
                                        <div id="lockinPeriodError" class="formErr" style={{display: "none"}}>
										    <span class="formErrArrow"></span>
										    <span>Error message goes here</span>
										</div>
				                    </span>
                                </li>  
                                
                            	
                                
                                                            <li id="cornerShopLi" class="clrRadioBtn" style={{display: "none"}}>
                                	<div class="priceHeader">Corner Shop</div>
                                    <span class="inputContainer">
                                    	<div class="formCom">   
                                        	<div class="radioBlock comBSpace">
						                    	<ul>
						                        	<li class="comFirst">
						                        		<span class="customRadioButton"> 
						                        			<input id="cornerShopY" name="cornerShop" style={{opacity: "0"}} onClick="customRadioButtonNew(this, 'cornerShop');" type="radio" value="Y"/>
						                        		</span> 
						                        		<label class="curPoint" for="cornerShopY">Yes</label>
						                        	</li>
						                        	<li>
						                        		<span class="customRadioButton">
						                        			<input id="cornerShopN" name="cornerShop" style={{opacity: "0"}} onClick="customRadioButtonNew(this, 'cornerShop');" type="radio" value="N"/>
						                        		</span> 
						                        		<label class="curPoint" for="cornerShopN">No</label>
						                        	</li>
						                        </ul>
						                    </div>	
                                        </div>
                                        <div class="clearAll"></div>
										<div id="cornerShopError" class="formErr" style={{top: "30px", display: "none"}}>
										    <span class="formErrArrow"></span>
										    <span>Error message goes here</span>
										</div>
				                    </span>
                                </li> 
                                
                                 <li id="mainRoadFacingLi" style={{display: "none"}}>
                                	<div class="priceHeader">Is Main Road Facing</div>
                                    <span class="inputContainer">
                                    	<div class="formCom">   
                                        	<div class="radioBlock comBSpace" onClick="showOtherField(this);">
						                    	<ul>
						                        	<li class="comFirst">
						                        		<span class="customRadioButton"> 
						                        			<input id="amenityfacing1Y" name="amenityfacing1" style={{opacity: "0"}} onClick="customRadioButtonNew(this, 'amenityfacing1');" type="radio" value="10087"/>
						                        		</span> 
						                        		<label class="curPoint" for="amenityfacing1Y">Yes</label>
						                        	</li>
						                        	<li>
						                        		<span class="customRadioButton">
						                        			<input id="amenityfacing1N" name="amenityfacing1" style={{opacity: "0"}} onClick="customRadioButtonNew(this, 'amenityfacing1');" type="radio" value="10088"/>
						                        		</span> 
						                        		<label class="curPoint" for="amenityfacing1N">No</label>
						                        	</li>
						                        </ul>
						                    </div>	
                                        </div>
                                         <div class="clearAll"></div>
										<div id="amenityfacing1Error" class="formErr" style={{top: "30px", display: "none"}}>
										    <span class="formErrArrow"></span>
										    <span>Error message goes here</span>
										</div>
				                    </span>
                                </li> 
                                
                                <li id="availForDiv" style={{display: "none"}}>
                                	<div class="priceHeader">Available For</div>
                                    <span class="inputContainer">
                                    	<div class="formCom">   
                                        	<span class="inputContainer">
                                        		<input type="button" id="availForVal" value="Select" class="ciDrop furSta" onClick="getCustomAreaOptionsCovered(event, this, '.formCom', 'availFor')"/>
                                        	</span>
		                                     <select id="availFor" name="pgAvailFor" class="areaList" size="1">
		                                     	<option value="-1">Select</option>
												<option value="16001">Male</option><option value="16002">Female</option><option value="16003">Both</option>
			                                </select>
	                                        <div class="unitBlockAreaDropDown" style={{display: "none"}}>
	                                            <ul></ul>
	                                        </div>
                                        </div>
				                        <div class="clearAll"></div>
				                        <div id="availForError" class="formErr" style={{display: "none"}}>
				                            <span class="formErrArrow"></span>
				                            <span>Error message goes here</span>
				                        </div>
				                    </span>
                                </li>
                                
                                <li id="occupacyNoDiv" style={{display: "none"}}>
                                	<div class="priceHeader">Occupancy</div>
                                    <span class="inputContainer">
                                    	<div class="formCom">   
                                        	<span class="inputContainer">
                                        		<input type="button" id="occupacyNoVal" value="Select" class="ciDrop furSta" onClick="getCustomAreaOptionsCovered(event, this, '.formCom', 'occupacyNo')"/>
                                        	</span>
		                                     <select id="occupacyNo" name="pgOccupacy" class="areaList" size="1">
		                                     	<option value="-1">Select</option>
												<option value="16011">Single</option><option value="16014">Double</option><option value="16015">Triple</option><option value="16016">Four</option><option value="16017">Dormitory</option><option value="16018">Other</option>
			                                </select>
	                                        <div class="unitBlockAreaDropDown" style={{display: "none"}}>
	                                            <ul></ul>
	                                        </div>
                                        </div>
				                        <div class="clearAll"></div>
				                        <div id="occupacyNoError" class="formErr" style={{display: "none"}}>
				                            <span class="formErrArrow"></span>
				                            <span>Error message goes here</span>
				                        </div>
				                    </span>
                                </li>
                                
                                
                               
                               
                                
                                
                               
                                
                                
                           <li id="isSharedOfficeSpaceLi" class="clrRadioBtn" style={{display: "none"}}>
                                	<div class="priceHeader">Shared Office Space</div>
                                    <span class="inputContainer">
                                    	<div class="formCom">   
                                        	<div class="radioBlock comBSpace" id="">
						                    	<ul>
						                        	<li class="comFirst">
						                        		<span class="customRadioButton"> 
						                        			<input id="officeSpaceY" name="isSharedOfficeSpace" style={{opacity: "0"}} onClick="customRadioButtonNew(this, 'isSharedOfficeSpace');" type="radio" value="Y"/>
						                        		</span> 
						                        		<label class="curPoint" for="isSharedOfficeSpaceY">Yes</label>
						                        	</li>
						                        	<li>
						                        		<span class="customRadioButton">
						                        			<input id="officeSpaceN" name="isSharedOfficeSpace" style={{opacity: "0"}} onClick="customRadioButtonNew(this, 'isSharedOfficeSpace');" type="radio" value="N"/>
						                        		</span> 
						                        		<label class="curPoint" for="isSharedOfficeSpaceN">No</label>
						                        	</li>
						                        </ul>
						                    </div>	
                                        </div>
                                        <div class="clearAll"></div>
										<div id="isSharedOfficeSpaceError" class="formErr" style={{top: "30px", display: "none"}}>
										    <span class="formErrArrow"></span>
										    <span>Error message goes here</span>
										</div>
				                    </span>
                                </li> 
                       {/* <!--  LI end    -->      */}
                           
                                
                                






{/* <script>
	var context_url = '/postproperty/';
	var GOOGLE_MAP_KEY_API_V3 = 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places,geometry&types=atm&sensor=false&key=AIzaSyC_YU1YQKR4YoafqUTg2vsoPS1JHqW-pto';
	var MB_SCRIPT_URL = 'https://www.magicbricks.com/scripts/';
	var POSTPROPERTY_SCRIPT_URL = '/static/scripts/'; 
	var globalFocusFlag = true;
	var postPropertyImagePath = '/static/images/';
	var SIBLING_DOMAIN_URL = 'https://www.magicbricks.com';
	var GLOBALASSETURL = 'https://cdn.staticmb.com/';
	var mbpg_context_url = 'https://www.magicbricks.com/pg-home/';
</script> */}

{/* <!--  Section added for PG Start --> */}




<li id="ageOfPgLi" style={{display: "none"}}>
	<div class="priceHeader">How old is the PG</div> <span class="inputContainer">
		<div class="formCom">
			<span class="inputContainer"><input type="button" id="ageOfPgVal" value="Select" class="ciDrop" onClick="getCustomAreaOptionsCovered(event, this, '.formCom', 'ageOfPg')"/></span>
			 <select id="ageOfPg" name="ageOfPg" class="areaList" size="1">
	                                         		<option value="-1">Select</option>
													<option value="17011">1 Year</option><option value="17012">2 Years</option><option value="17013">3 Years</option><option value="17014">4 Years</option><option value="17015">+4 Years</option>
				                             </select> 
			<div class="unitBlockAreaDropDown" style={{display: "none"}}>
				<ul></ul>
			</div>
		</div>
		<div class="donePlaceHolder">
			<div class="valiDated" id="occupancyTick"></div>
		</div>
		<div class="clearAll"></div>
		<div id="ageOfPgError" class="formErr" style={{display: "none"}}>
			<span class="formErrArrow"></span> <span>Error message goes
				here</span>
		</div> </span></li>
	<li id="preferredGuestLi" style={{display: "none"}}>
		<div class="priceHeader">Tenants You Prefer</div> <span class="inputContainer">
			<div class="formCom">
				<span class="inputContainer"><input type="button" id="preferredGuestVal" value="Select" class="ciDrop" onClick="getCustomAreaOptionsCovered(event, this, '.formCom', 'preferredGuest')"/>
				</span>
				<select id="preferredGuest" name="preferredGuest" class="areaList" size="1">
		                                         		<option value="-1">Select</option>
														<option value="17021">Professionals</option><option value="17022">Student</option><option value="17023">Both</option>
					                             </select> 
				<div class="unitBlockAreaDropDown" style={{display: "none"}}>
					<ul></ul>
				</div>
			</div>
			<div class="donePlaceHolder">
				<div class="valiDated" id="preferredGuestTick"></div>
			</div>
			<div class="clearAll"></div>
			<div id="preferredGuestError" class="formErr" style={{display: "none"}}>
				<span class="formErrArrow"></span> <span>Error message goes
					here</span>
			</div> </span>
		</li>
<li id="roomsInPgLi" style={{display: "none"}}>
	<div class="priceHeader">No. of Rooms in PG </div> <span class="inputContainer">
		<div class="formCom">
			<span class="inputContainer"><input type="button" id="roomsInPgVal" value="Select" class="ciDrop" onClick="getCustomAreaOptionsCovered(event, this, '.formCom', 'roomsInPg')"/>
			</span>
			 <select id="roomsInPg" name="roomsInPg" class="areaList" size="1">
                               		<option value="-1">Select</option>
                               		
	                              <option value="1">1</option>
	                              
	                              <option value="2">2</option>
	                              
	                              <option value="3">3</option>
	                              
	                              <option value="4">4</option>
	                              
	                              <option value="5">5</option>
	                              
	                              <option value="6">6</option>
	                              
	                              <option value="7">7</option>
	                              
	                              <option value="8">8</option>
	                              
	                              <option value="9">9</option>
	                              
	                              <option value="10">10</option>
	                              
	                              <option value="11">11</option>
	                              
	                              <option value="12">12</option>
	                              
	                              <option value="13">13</option>
	                              
	                              <option value="14">14</option>
	                              
	                              <option value="15">15</option>
	                              
	                              <option value="16">16</option>
	                              
	                              <option value="17">17</option>
	                              
	                              <option value="18">18</option>
	                              
	                              <option value="19">19</option>
	                              
	                              <option value="20">20</option>
	                              
	                              <option value="21">21</option>
	                              
	                              <option value="22">22</option>
	                              
	                              <option value="23">23</option>
	                              
	                              <option value="24">24</option>
	                              
	                              <option value="25">25</option>
	                              
	                              <option value="26">26</option>
	                              
	                              <option value="27">27</option>
	                              
	                              <option value="28">28</option>
	                              
	                              <option value="29">29</option>
	                              
	                              <option value="30">30</option>
	                              
												
				 </select> 
			<div class="unitBlockAreaDropDown" style={{display: "none"}}>
				<ul></ul>
			</div>
		</div>
		<div class="donePlaceHolder">
			<div class="valiDated" id="roomsInPgTick"></div>
		</div>
		<div class="clearAll"></div>
		<div id="roomsInPgError" class="formErr" style={{display: "none"}}>
			<span class="formErrArrow"></span> <span>Error message goes
				here</span>
		</div> </span></li>

{/* <!--  Section added for PG End --> */}
<div class="clearAll"></div>
<div class="formEle attachedSec" id="attachedBathroomdiv" style={{display: "none"}}>
	<div class="formLabel">Attached Bathroom</div>
	<div class="formValue">
		<div class="radioBlock">
			<ul>
				<li class="comFirst">
               		<span class="customRadioButton">
               			<input id="attachedBathroomY" name="attachedBathroom" style={{opacity: "0"}} onClick="customRadioButtonNew(this, 'attachedBathroom');showScore('personalPantry',this.value);changeScoreClass('additionalFeaturesId',this.value);" type="radio" value="11932"/>
               		</span> 
               		<label class="curPoint" for="attachedBathroomY">Yes</label>
                      </li>
                     <li>
                  		<span class="customRadioButton">
                  			<input id="attachedBathroomN" name="attachedBathroom" style={{opacity: "0"}} onClick="customRadioButtonNew(this, 'attachedBathroom');showScore('personalPantry','11');changeScoreClass('additionalFeaturesId',this.value);" type="radio" value="11934"/>
                  		</span> 
                  		<label class="curPoint" for="attachedBathroomN">No</label>
                   </li>
			</ul>
		</div>
		<div class="clearAll"></div>
		<div id="attachedBathroomError" class="formErr" style={{top: "25px", display: "none"}}>
			<span class="formErrArrow"></span> <span>Error message goes
				here</span>
		</div>
	</div>
	<div class="clearAll"></div>
</div>

<div class="formEle attachedSec" id="attachedBalconydiv" style={{display: "none"}}>
	<div class="formLabel">Attached Balcony</div>
	<div class="formValue">
		<div class="radioBlock">
			<ul>
				<li class="comFirst">
               		<span class="customRadioButton">
               			<input id="attachedBalconyY" name="attachedBalcony" style={{opacity: "0"}} onClick="customRadioButtonNew(this, 'attachedBalcony');showScore('balconies','11');" type="radio" value="14200"/>
               		</span> 
               		<label class="curPoint" for="attachedBalconyY">Yes</label>
                      </li>
                     <li>
                  		<span class="customRadioButton">
                  			<input id="attachedBalconyN" name="attachedBalcony" style={{opacity: "0"}} onClick="customRadioButtonNew(this, 'attachedBalcony');showScore('balconies','11');" type="radio" value="14211"/>
                  		</span> 
                  		<label class="curPoint" for="attachedBalconyN">No</label>
                   </li>
			</ul>
		</div>
		<div class="clearAll"></div>
		<div id="attachedBalconyError" class="formErr" style={{top: "25px", display: "none"}}>
			<span class="formErrArrow"></span> <span>Error message goes
				here</span>
		</div>
	</div>
	<div class="clearAll"></div>
</div>
<div class="formEle attachedSec" id="pgcommonAreadiv" style={{display: "none"}}>
	<div class="formLabel">Common Area</div>
	<div class="formValue">
		<div class="radioBlock">
			<ul>
				<li class="comFirst">
               		<span class="customRadioButton">
               			<input id="commonAreaY" name="commonArea" style={{opacity: "0"}} onClick="customRadioButtonNew(this, 'commonArea');" type="radio" value="Y"/>
               		</span> 
               		<label class="curPoint" for="commonAreaY">Yes</label>
                      </li>
                     <li>
                  		<span class="customRadioButton">
                  			<input id="commonAreaN" name="commonArea" style={{opacity: "0"}} onClick="customRadioButtonNew(this, 'commonArea');" type="radio" value="N"/>
                  		</span> 
                  		<label class="curPoint" for="commonAreaN">No</label>
                   </li>
			</ul>
		</div>
		<div class="clearAll"></div>
		<div id="commonAreaError" class="formErr" style={{top: "25px", display: "none"}}>
			<span class="formErrArrow"></span> <span>Error message goes
				here</span>
		</div>
	</div>
	<div class="clearAll"></div>
</div>
                                
                            </ul>
                           
                            <div class="clearAll"></div>
                        <div class="clearAll"></div>
                </div>
                






{/* <script>
	var context_url = '/postproperty/';
	var GOOGLE_MAP_KEY_API_V3 = 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places,geometry&types=atm&sensor=false&key=AIzaSyC_YU1YQKR4YoafqUTg2vsoPS1JHqW-pto';
	var MB_SCRIPT_URL = 'https://www.magicbricks.com/scripts/';
	var POSTPROPERTY_SCRIPT_URL = '/static/scripts/'; 
	var globalFocusFlag = true;
	var postPropertyImagePath = '/static/images/';
	var SIBLING_DOMAIN_URL = 'https://www.magicbricks.com';
	var GLOBALASSETURL = 'https://cdn.staticmb.com/';
	var mbpg_context_url = 'https://www.magicbricks.com/pg-home/';
</script> */}

<div class="propertyStatus" id="furnishedStatus1" cssstyle={{display: "none"}} style={{display: "none"}}>
                	<div class="ftlt propFeatures">
                            <ul class="pFeatureSel">
                            	<li id="acCountLi">
                                	<div class="priceHeader">AC</div>
                                    <span class="inputContainer">
                                    	<div class="formCom">   
                                        	<span class="inputContainer">
                                        		<input type="button" id="acCountVal" name="acCountVal" value="Select" class="ciDrop furSta" onClick="getCustomAreaOptionsCovered(event, this, '.formCom', 'acCount')"/>
                                        	</span>
		                                     <select id="acCount" name="acCount" style={{display: "none"}} class="areaList" size="1">
		                                     	<option value="-1">Select</option>
												<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">3+</option>
			                                </select>
	                                        <div class="unitBlockAreaDropDown" style={{display: "none"}}>
	                                            <ul></ul>
	                                        </div>
                                        </div>
                                        <div class="donePlaceHolder">
                                        	<div class="valiDated" id="acCountTick"></div>
                                        </div>
				                        <div class="clearAll"></div>
				                        <div id="acCountError" class="formErr" style={{display: "none"}}>
				                            <span class="formErrArrow"></span>
				                            <span>Error message goes here</span>
				                        </div>
				                    </span>
                                </li>
                                <li id="bedCountLi">
                                	<div class="priceHeader">Bed</div>
                                    <span class="inputContainer">
                                    	<div class="formCom">   
                                        	<span class="inputContainer"><input type="button" id="bedCountVal" name="bedCountVal" style={{width: "81px"}} value="Select" class="ciDrop" onClick="getCustomAreaOptionsCovered(event, this, '.formCom', 'bedCount')"/></span>
	                                         <select id="bedCount" name="bedCount" style={{display: "none"}} class="areaList" size="1">
	                                         		<option value="-1">Select</option>
													<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">3+</option>
				                             </select>
	                                        <div class="unitBlockAreaDropDown" style={{display: "none"}}>
	                                            <ul></ul>
	                                        </div>
                                        </div>
                                        <div class="donePlaceHolder">
                                        	<div class="valiDated" id="bedCountTick"></div>
                                        </div>
				                        <div class="clearAll"></div>
				                        <div id="bedCountError" class="formErr" style={{display: "none"}}>
				                            <span class="formErrArrow"></span>
				                            <span>Error message goes here</span>
				                        </div>
                                    </span>
                                </li>
                                <li id="wardrobeCountLi">
                                	<div class="priceHeader">Wardrobe</div>
                                    <span class="inputContainer">
                                    	<div class="formCom">   
                                        	<span class="inputContainer"><input type="button" id="wardrobeCountVal" name="wardrobeCountVal" style={{width: "81px"}} value="Select" class="ciDrop" onClick="getCustomAreaOptionsCovered(event, this, '.formCom', 'wardrobeCount')"/></span>
	                                        <select id="wardrobeCount" name="wardrobeCount" class="areaList" style={{display: "none"}} size="1">
	                                        	<option value="-1">Select</option>
												<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">3+</option>
			                                </select>
	                                        <div class="unitBlockAreaDropDown" style={{display: "none"}}>
	                                            <ul></ul>
	                                        </div>
                                        </div>
                                        <div class="donePlaceHolder">
                                        	<div class="valiDated" id="wardrobeCountTick"></div>
                                        </div>
				                        <div class="clearAll"></div>
				                        <div id="wardrobeCountError" class="formErr" style={{display: "none"}}>
				                            <span class="formErrArrow"></span>
				                            <span>Error message goes here</span>
				                        </div>
                                    </span>
                                </li>
                                
                                <li id="tvCountLi">
                                	<div class="priceHeader">TV</div>
                                    <span class="inputContainer">
                                    	<div class="formCom">   
                                        	<span class="inputContainer">
                                        		<input type="button" id="tvCountVal" name="tvCountVal" style={{width: "81px"}} value="Select" class="ciDrop" onClick="getCustomAreaOptionsCovered(event, this, '.formCom', 'tvCount')"/>
                                        	</span>
	                                        <select id="tvCount" name="tvCount" class="areaList" style={{display: "none"}} size="1">
	                                        	<option value="-1">Select</option>
												<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">3+</option>
			                                </select>
	                                        <div class="unitBlockAreaDropDown" style={{display: "none"}}>
	                                            <ul></ul>
	                                        </div>
                                        </div>
                                        <div class="donePlaceHolder">
                                        	<div class="valiDated" id="tvCountTick"></div>
                                        </div>
				                        <div class="clearAll"></div>
				                        <div id="tvCountError" class="formErr" style={{display: "none"}}>
				                            <span class="formErrArrow"></span>
				                            <span>Error message goes here</span>
				                        </div>
                                    </span>
                                </li>
                               
                            </ul>
                            <div class="clearAll"></div>
                        </div>
                        <div class="clearAll"></div>
                	</div>
                
                	<div class="radioBlock myPropFeature" id="furnishedStatus2" cssstyle={{display: "none"}} style={{display: "none"}}>
                    	<ul>
                        	<li><span class="customCheckBox"><input type="checkbox" style={{opacity: "0"}} id="specialF1" name="specialF1" onClick="customCheckBox(this, 'specialF1');" value="Y"/></span> <label class="curPoint" for="specialF1">Fridge</label></li>
                        	<li><span class="customCheckBox"><input type="checkbox" style={{opacity: "0"}} id="specialF2" name="specialF2" onClick="customCheckBox(this, 'specialF2');" value="Y"/></span> <label class="curPoint" for="specialF2">Sofa</label></li>
                            <li><span class="customCheckBox"><input type="checkbox" style={{opacity: "0"}} id="specialF3" name="specialF3" onClick="customCheckBox(this, 'specialF3');" value="Y"/></span> <label class="curPoint" for="specialF3">Washing Machine</label></li>
                            <li><span class="customCheckBox"><input type="checkbox" style={{opacity: "0"}} id="specialF4" name="specialF4" onClick="customCheckBox(this, 'specialF4');" value="Y"/></span> <label class="curPoint" for="specialF4">Dining Table</label></li>
                            <li><span class="customCheckBox"><input type="checkbox" style={{opacity: "0"}} id="specialF5" name="specialF5" onClick="customCheckBox(this, 'specialF5');" value="Y"/></span> <label class="curPoint" for="specialF5">Microwave</label></li>
                            <li><span class="customCheckBox"><input type="checkbox" style={{opacity: "0"}} id="specialF6" name="specialF6" onClick="customCheckBox(this, 'specialF6');" value="Y"/></span> <label class="curPoint" for="specialF6">Gas Connection</label></li>
                        </ul>
                    </div>
                
                	<div class="clearAll"></div>
                	
                
                </div>
            	<div class="clearAll"></div>
            </div>
            <div class="clearAll"></div>
            
            
            <div id="addFeatures"></div>
            <div class="formEle" id="additinalFeature1" style={{marginLeft: "2px", display: "none"}}>
            <div class="formValue posRel">
            	<div class="radioBlock" id="personalWashroomDiv" style={{minHeight: "35px",  width: "400px"}}>
                    	<ul>
                        	<li class="comLabel">Personal Washroom</li>
                        	<li class="comFirst">
                        		<span class="customRadioButton">
                        			<input id="pWashY" name="personalWashroom" style={{opacity: "0"}} onClick="customRadioButtonNew(this, 'personalWashroom');showScore('personalPantry',this.value);changeScoreClass('additionalFeaturesId',this.value);" type="radio" value="11932"/>
                        		</span> 
                        		<label class="curPoint" for="pWashY">Yes</label>
                        	</li>
                        	<li>
                        		<span class="customRadioButton">
                        			<input id="pWashN" name="personalWashroom" style={{opacity: "0"}} onClick="customRadioButtonNew(this, 'personalWashroom');showScore('personalPantry','11');changeScoreClass('additionalFeaturesId',this.value);" type="radio" value="11934"/>
                        		</span> 
                        		<label class="curPoint" for="pWashN">No</label>
                        	</li>
                        </ul>
                        
                    </div>
                    <div class="clearAll"></div>
                    <div class="valiDated" id="personalWashroomTick"></div>
                    <div class="clearAll"></div>
                    <div id="personalWashroomError" class="formErr" style={{top: "25px", left: "175px", display: "none"}}>
                        <span class="formErrArrow"></span>
                        <span>Error message goes here</span>
                    </div>
                    
                    </div>
                    <div class="clearAll"></div>
                    <div class="formLabel"></div>
                    <div class="formValue posRel">
                	<div class="radioBlock comBSpace" id="personalPantryDiv" style={{width: "480px"}}>
                    	<ul>
                        	<li class="comLabel">Pantry/Cafeteria</li>
                        	<li class="comFirst">
                        		<span class="customRadioButton"> 
                        			<input id="pantryY" name="personalPantry" style={{opacity: "0"}} onClick="customRadioButtonNew(this, 'personalPantry');showScore('personalPantry',this.value);changeScoreClass('additionalFeaturesId',this.value);" type="radio" value="11935"/>
                        		</span> 
                        		<label class="curPoint" for="pantryY">Dry</label>
                        	</li>
                        	<li>
                        		<span class="customRadioButton"> 
                        			<input id="pantryW" name="personalPantry" style={{opacity: "0"}} onClick="customRadioButtonNew(this, 'personalPantry');showScore('personalPantry',this.value);changeScoreClass('additionalFeaturesId',this.value);" type="radio" value="11936"/>
                        		</span> 
                        		<label class="curPoint" for="pantryW">Wet</label>
                        	</li>
                        	<li>
                        		<span class="customRadioButton">
                        			<input id="pantryN" name="personalPantry" style={{opacity: "0"}} onClick="customRadioButtonNew(this, 'personalPantry');showScore('personalPantry','11');changeScoreClass('additionalFeaturesId','11');" type="radio" value="11933"/>
                        		</span> 
                        		<label class="curPoint" for="pantryN">Not Available</label>
                        	</li>
                        </ul>
                        <div class="coveredHelpCont" style={{marginTop: "3px", marginLeft: "20px", display: "none"}} id="pantryToolTip">
                        	<div class="helpTextContaint">
                            	<span class="arrow"></span>
                            	<div>Dry Pantry - Area for light cooking. Eg: Snacks, Tea, Coffee etc.<br/>
                            	 Wet Pantry - Area for regular cooking &amp; dishwashing.</div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="valiDated" id="personalPantryTick"></div>
                    <div class="clearAll"></div>
                    <div id="personalPantryError" class="formErr" style={{left: "175px", top: "30px", display: "none"}}>
                        <span class="formErrArrow"></span>
                        <span>Error message goes here</span>
                    </div>
                    
                    <div class="clearAll"></div>
                    
                
            </div>
            <div class="clearAll"></div>
                </div>
            	<div class="clearAll"></div>
            	
            	
                
            
            <div class="formEle v--display propFeatures" id="floorsAllowedForConst" style={{display: "none"}}>
                    <div class="formLabel">Floors Allowed for construction<span class="pp__magiccasn__int" id="floorAllow_cash" style={{display: "none"}}><span class="pp__magiccasn__coins"></span><span class="pp__magiccasn__intbold">20</span> Magic Cash</span></div>
                    <span class="inputContainer">
                        <div class="formCom ftlt">   
	                        <span class="inputContainer"><input type="button" onClick="getCustomAreaOptionsCovered(event, this, '.formCom', 'floorAllow')" class="ciDrop furSta" value="Total Floor" id="floorAllowVal"/></span>
	                         <select id="floorAllow" name="floorsAllowedForConst" class="areaList" onchange="showScore('floorsAllowedForConst',this.value);">
	                           
		                          
	                        <option value="12050">1</option><option value="12051">2</option><option value="12052">3</option><option value="12053">4</option><option value="12054">5</option><option value="12055">6</option><option value="12056">7</option><option value="12057">8</option><option value="12058">9</option><option value="12059">10</option><option value="12060">11</option><option value="12061">12</option><option value="12062">13</option><option value="12063">14</option><option value="12064">15</option><option value="12065">16</option><option value="12066">17</option><option value="12067">18</option><option value="12068">19</option><option value="12069">20</option><option value="-1">Total Floor</option></select>
	                        <div class="unitBlockAreaDropDown" style={{display: "none"}}>
	                            <ul id="floorAllowUL"></ul>
                        	</div>
                        </div>
                    	<div class="valiDated" id="floorsAllowedForConstTick"></div>
                        <div class="clearAll"></div>
                        <div id="floorsAllowedForConstError" class="formErr" style={{display: "none"}}>
                            <span class="formErrArrow"></span>
                            <span>Error message goes here</span>
                        </div>
                </span>
            	<div class="clearAll"></div>
            </div>
            <div class="clearAll"></div>
            
            <div class="formEle v--display propFeatures" id="noOfOpenSides" style={{display: "none"}}>
                    <div class="formLabel inputDrop">No of open sides<span class="pp__magiccasn__int" id="openSides_cash" style={{display: "none"}}><span class="pp__magiccasn__coins"></span><span class="pp__magiccasn__intbold">50</span> Magic Cash</span></div>
                    <span class="inputContainer">
                        <div class="formCom ftlt">   
	                        <span class="inputContainer"><input type="button" id="openSidesVal" value="Select" class="ciDrop furSta" onClick="getCustomAreaOptionsCovered(event, this, '.formCom', 'openSides')"/></span>
	                       	 <select id="openSides" name="noOfOpenSides" class="areaList" onchange="showScore('openSides',this.value);">
	                       	 	  <option value="-1">Select</option>
		                          <option value="1">1</option>
		                          <option value="2">2</option>
		                          <option value="3">3</option>
		                          <option value="4">4</option>
	                       	 </select>
	                        
	                        <div class="unitBlockAreaDropDown" style={{display: "none"}}>
	                            <ul></ul>
	                        </div>
                        </div>
                    	<div class="valiDated" id="noOfOpenSidesTick"></div>
                        <div class="clearAll"></div>
                        <div id="noOfOpenSidesError" class="formErr" style={{display: "none"}}>
                            <span class="formErrArrow"></span>
                            <span>Error message goes here</span>
                        </div>
                </span>
            	<div class="clearAll"></div>
            </div>
            <div class="clearAll"></div>
            
            <div id="facingCharges"></div>
            <div class="formEle v--display propFeatures" id="roadWidthFacingPlotDiv" style={{display: "none"}}>
                    <div class="formLabel">Width of road facing the plot<span class="pp__magiccasn__int" id="roadWidthFacingPlot_cash" style={{display: "none"}}><span class="pp__magiccasn__coins"></span><span class="pp__magiccasn__intbold">20</span> Magic Cash</span></div>
                    <span class="inputContainer ftlt">
                        <div class="formCom">   
                        	<span class="inputContainer">
                        		<input id="roadWidthFacingPlot" name="roadWidthFacingPlot" class="ciDrop inputText roadFacing" onkeypress="return(ForceNumbersOnly(this, event, 'P'));" onkeyup="onKeyUpDown(this);" onkeydown="onKeyUpDown(this);" placeholder="Road width" onchange="showScore('roadWidthFacingPlot',this.value);changeScoreClass('WidthoffacingroadId',this.value);" type="text" value="" maxlength="4"/>
                        	</span> <span class="unitCont">Meters</span>
                        </div>
                        <div class="clearAll"></div>
		                <div id="roadWidthFacingPlotError" class="formErr" style={{display: "none"}}>
		                    <span class="formErrArrow"></span>
		                    <span>Error message goes here</span>
		                </div>
                </span>
            	
            	<div class="valiDated" id="roadWidthFacingPlotTick"></div>
                <div class="clearAll"></div>
            </div>
            <div class="clearAll"></div>
            
            <div class="formEle v--display" id="additinalFeature2" style={{display: "none"}}>
            	<div class="formLabel" style={{paddingTop: "2px"}}>Additional Features</div>
                <div class="formValue posRel">
                	<div class="radioBlock comBSpace posRel" id="anyConstructionDoneDiv" style={{display: "none"}}>
                    	<ul>
                        	<li class="comLabel more">Any Construction done</li>
                        	<li class="comFirst">
                        		<span class="customRadioButton">
                        			<input id="cDoneY" name="anyConstructionDone" style={{opacity: "0"}} onClick="customRadioButtonNew(this, 'anyConstructionDone');showScore('anyConstructionDone',this.value);changeScoreClass('additionalFeaturesId',this.value);" type="radio" value="11921"/>
                        		</span> 
                        		<label class="curPoint" for="cDoneY">Yes</label>
                        	</li>
                        	<li>
                        		<span class="customRadioButton">
                        			<input id="cDoneN" name="anyConstructionDone" style={{opacity: "0"}} onClick="customRadioButtonNew(this, 'anyConstructionDone');showScore('anyConstructionDone','111');changeScoreClass('additionalFeaturesId',this.value);" type="radio" value="11924"/>
                        		</span> 
                        		<label class="curPoint" for="cDoneN">No</label>
                        	</li>
                        </ul>
                        <div class="clearAll"></div>
	                    <div class="valiDated" id="anyConstructionDoneTick"></div>
	                    <div id="anyConstructionDoneError" class="formErr" style={{top: "25px", display: "none"}}>
	                        <span class="formErrArrow"></span>
	                        <span>Error message goes here</span>
	                    </div>
                    </div>
                    <div class="clearAll"></div>
                    <div class="radioBlock comBSpace posRel" id="boundryWallMadeDiv" style={{display: "none"}}>
                    	<ul>
                        	<li class="comLabel more">Boundary wall made</li>
                        	<li class="comFirst">
                        		<span class="customRadioButton">
                        			<input id="boundryY" name="boundryWallMade" style={{opacity: "0"}} onClick="customRadioButtonNew(this, 'boundryWallMade');showScore('anyConstructionDone',this.value);changeScoreClass('additionalFeaturesId',this.value);" type="radio" value="11922"/>
                        		</span> 
                        		<label class="curPoint" for="boundryY">Yes</label>
                        	</li>
                        	<li>
                        		<span class="customRadioButton">
                        			<input id="boundryN" name="boundryWallMade" style={{opacity: "0"}} onClick="customRadioButtonNew(this, 'boundryWallMade');showScore('anyConstructionDone','11');changeScoreClass('additionalFeaturesId',this.value);" type="radio" value="11925"/>
                        		</span> 
                        		<label class="curPoint" for="boundryN">No</label>
                        	</li>
                        </ul>
                        <div class="clearAll"></div>
	                    <div class="valiDated" id="boundryWallMadeTick"></div>
	                    <div id="boundryWallMadeError" class="formErr" style={{top: "25px", display: "none"}}>
	                        <span class="formErrArrow"></span>
	                        <span>Error message goes here</span>
	                    </div>
                    </div>
                    <div class="clearAll"></div>
                    <div class="radioBlock comBSpace posRel" id="isInAGatedColonyDiv" style={{display: "none"}}>
                    	<ul>
                        	<li class="comLabel more">Is in a gated colony</li>
                        	<li class="comFirst">
                        		<span class="customRadioButton">
                        			<input id="gatedY" name="isInAGatedColony" style={{opacity: "0"}} onClick="customRadioButtonNew(this, 'isInAGatedColony');showScore('anyConstructionDone',this.value);changeScoreClass('additionalFeaturesId',this.value);" type="radio" value="11923"/>
                        		</span> 
                        		<label class="curPoint" for="gatedY">Yes</label>
                        	</li>
                        	<li>
                        		<span class="customRadioButton">
                        			<input id="gatedN" name="isInAGatedColony" style={{opacity: "0"}} onClick="customRadioButtonNew(this, 'isInAGatedColony');showScore('anyConstructionDone','11');changeScoreClass('additionalFeaturesId',this.value);" type="radio" value="11926"/>
                        		</span> 
                        		<label class="curPoint" for="gatedN">No</label>
                        	</li>
                        </ul>
                        <div class="clearAll"></div>
	                    <div class="valiDated" id="isInAGatedColonyTick"></div>
	                    <div id="isInAGatedColonyError" class="formErr" style={{top: "25px", display: "none"}}>
	                        <span class="formErrArrow"></span>
	                        <span>Error message goes here</span>
	                    </div>
                    </div>
                </div>
            	<div class="clearAll"></div>
                
                
                
            </div>
            <div class="clearAll"></div>
        </div>
        <div class="clearAll"></div>
        
        
    </div>
    
    






{/* <script>
	var context_url = '/postproperty/';
	var GOOGLE_MAP_KEY_API_V3 = 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places,geometry&types=atm&sensor=false&key=AIzaSyC_YU1YQKR4YoafqUTg2vsoPS1JHqW-pto';
	var MB_SCRIPT_URL = 'https://www.magicbricks.com/scripts/';
	var POSTPROPERTY_SCRIPT_URL = '/static/scripts/'; 
	var globalFocusFlag = true;
	var postPropertyImagePath = '/static/images/';
	var SIBLING_DOMAIN_URL = 'https://www.magicbricks.com';
	var GLOBALASSETURL = 'https://cdn.staticmb.com/';
	var mbpg_context_url = 'https://www.magicbricks.com/pg-home/';
</script> */}

<div class="ppSecBlock" id="pgFurnishingDetails" style={{display: "none"}}>
	<div class="dataBlock">
		<div class="secHeading">Furnishing Details</div>
		<div class="formEle">

			<div class="radioBlock" id="">
				<ul>
					<li>
					 <span class="customCheckBox"> 
					  <input id="cupboards" name="cupboards" onClick="customCheckBox(this, 'cupboards');" style={{opacity: "0"}} type="checkbox" value="Y"/><input type="hidden" name="_cupboards" value="on"/>
					 </span> 
					 <label class="curPoint" for="cupboards">Cupboards</label>
					</li>
					
					<li>
						<span class="customCheckBox"> 
						  <input id="studyTable" name="studyTable" onClick="customCheckBox(this, 'studyTable');" style={{opacity: "0"}} type="checkbox" value="Y"/><input type="hidden" name="_studyTable" value="on"/>
						 </span> 
						 <label class="curPoint" for="studyTable">Study Table</label>
					</li>
					<li>
					    <span class="customCheckBox"> 
						  <input id="acInPg" name="acInPg" onClick="customCheckBox(this, 'acInPg');" style={{opacity: "0"}} type="checkbox" value="Y"/><input type="hidden" name="_acInPg" value="on"/>
						 </span> 
						 <label class="curPoint" for="acInPg">AC</label>
					</li>
					<li>
					<span class="customCheckBox"> 
						  <input id="geyser" name="geyser" onClick="customCheckBox(this, 'geyser');" style={{opacity: "0"}} type="checkbox" value="Y"/><input type="hidden" name="_geyser" value="on"/>
						 </span> 
						 <label class="curPoint" for="geyser">Geyser</label>
					</li>
					<li>
					   <span class="customCheckBox"> 
						  <input id="pgwashingMachine" name="pgwashingMachine" onClick="customCheckBox(this, 'pgwashingMachine');" style={{opacity: "0"}} type="checkbox" value="Y"/><input type="hidden" name="_pgwashingMachine" value="on"/>
						 </span> 
						 <label class="curPoint" for="pgwashingMachine">Washing Machine</label>
					</li>
					<li>
					<span class="customCheckBox"> 
						  <input id="wifi" name="wifi" onClick="customCheckBox(this, 'wifi');" style={{opacity: "0"}} type="checkbox" value="Y"/><input type="hidden" name="_wifi" value="on"/>
						 </span> 
						 <label class="curPoint" for="wifi">Wifi</label>
					</li>
					<li>
					<span class="customCheckBox"> 
						  <input id="pgfridge" name="pgfridge" onClick="customCheckBox(this, 'pgfridge');" style={{opacity: "0"}} type="checkbox" value="Y"/><input type="hidden" name="_pgfridge" value="on"/>
						 </span> 
						 <label class="curPoint" for="pgfridge">Fridge</label>
					</li>
					<li>
					<span class="customCheckBox"> 
						  <input id="cooler" name="cooler" onClick="customCheckBox(this, 'cooler');" style={{opacity: "0"}} type="checkbox" value="Y"/><input type="hidden" name="_cooler" value="on"/>
						 </span> 
						 <label class="curPoint" for="cooler">Cooler</label>
						</li>
					<li>
					<span class="customCheckBox"> 
						  <input id="pgTv" name="pgTv" onClick="customCheckBox(this, 'pgTv');" style={{opacity: "0"}} type="checkbox" value="Y"/><input type="hidden" name="_pgTv" value="on"/>
						 </span> 
						 <label class="curPoint" for="pgTv">TV</label>
					</li>
				</ul>
				<div class="clearAll"></div>
			</div>

		</div>
		<div class="clearAll"></div>
	</div>
</div>
    
    <div class="clearAll"></div>
    <div class="ppSecBlock" id="propertyArea" style={{}}> 
    	<div class="dataBlock pl-3" id="propertyAreaSub" style={{width:"692px"}}>
        	<div class="secHeading bedBlock">Area</div>
            <div class="secHeading__subhead" id="areaSubHead" style={{display: "none"}}>Provide either Carpet Area or Super Area</div>
            <div class="formEle v--display" id="coverAreaDiv">
            	{/* <!-- <div class="formLabel inputDrop" style={{height: "0px", paddingTop: "1px", overflow: "hidden"}} >&nbsp;</div>  --> */}
            	<div class="formLabel inputDrop _multiStoreyHide" style={{display: "none"}}><span id="coverAreaLabel">Covered Area</span><span class="pp__magiccasn__int" id="coveredArea_cash1" style={{display: "none"}}><span class="pp__magiccasn__coins"></span><span class="pp__magiccasn__intbold">30</span> Magic Cash</span></div>
            	<div class="formLabel inputDrop _multiStoreyShow" style={{}}>Super Area<span class="pp__magiccasn__int" id="coveredArea_cash2" style={{display: "none"}}><span class="pp__magiccasn__coins"></span><span class="pp__magiccasn__intbold">30</span> Magic Cash</span></div>
                <div class="formValue">
                        <div class="formCom">
                            <span class="inputContainer ftlt">
                           		<input id="coveredArea" name="coveredArea" class="ciDrop inputText covered" onkeypress="return(ForceNumbersOnly(this, event, 'P'));" onkeyup="onKeyUpDown(this);" onkeydown="onKeyUpDown(this);" rel="Super area is the total area of your property under the roof, including corridors &amp; balconies." placeholder="Super Area" onblur="convertToSqFeet(this,'coveredAreaType','coveredAreaSqFt');showScore('coveredArea',this.value);PriceBifurcation.calculateListPriceForCPD();checkPropBq(0,'coveredAreaError');" onChange={handleSuperarea} type="number" value={superarea} maxlength="6"/>
                           		<div class="posRel">
                           		<div id="coveredAreaDropDown" style={{width: "160px", position: "absolute", top: "-1px", display: "none"}}>
                                    <ul></ul>
                                </div>
                                </div>
                            </span>
                            {/* <!-- <span class="inputContainer inputAreaType"> --> */}
                            	<div class="formCom jska formComPosAbsTR">   
                                   <span class="inputContainer">
                                   		<input type="button" value="Sq-ft" id="coveredAreaTypeVal" class="ciDrop coveredDD" onClick="getCustomAreaOptionsCovered(event, this, '.jska', 'coveredAreaType');"/>
                                   </span>
                                   <select id="coveredAreaType" name="coveredAreaType" onChange="convertToSqFeet(document.getElementById('coveredArea'),'coveredAreaType','coveredAreaSqFt');changePriceSqFeetText();checkPropBq(0,'coveredAreaError');PriceBifurcation.updatePriceBifurcationUnit();" size="1">
										<option value="12800">Sq-ft</option><option value="12803">Sq-yrd</option><option value="12801">Sq-m</option><option value="12804">Acre</option><option value="12805">Bigha</option><option value="12806">Hectare</option><option value="12807">Marla</option><option value="12808">Kanal</option><option value="12809">Biswa1</option><option value="12810">Biswa2</option><option value="12811">Ground</option><option value="12812">Aankadam</option><option value="12813">Rood</option><option value="12814">Chatak</option><option value="12815">Kottah</option><option value="12816">Marla</option><option value="12817">Cent</option><option value="12818">Perch</option><option value="12819">Guntha</option><option value="12820">Are</option>
	                                </select>
                                    <div class="unitBlockAreaDropDown" style={{width: "100px", display: "none"}}>
                                        <ul></ul>
                                    </div>
                                    <div class="amtInWord" id="coveredAreaSqFt"></div>
                                </div>
                             {/* <!-- </span> --> */}
                        </div>
                        
                        <div class="coveredHelpCont">
                        
                        	<div class="helpTextContaint">
                            	<span class="arrow"></span>
                            	<div class="_multiStoreyHide" style={{display: "none"}}><img width="100%" alt="imagess" height="" class="lazyload" data-src="/static/images/covered_area.jpg" src=""/></div>
                            	<div class="_multiStoreyShow" style={{}}><img class="lazyload" alt="imagess" width="100%" height="" data-src="/static/images/superBuiltUp_area.jpg" src=""/></div>
                            </div>
                        </div>
                        
                        <div class="valiDated" id="coveredAreaTick"></div>
                        <div class="clearAll"></div>
                        <div id="coveredAreaError" class="formErr" style={{display: "none"}}>
                            <span class="formErrArrow"></span>
                            <span>Error message goes here</span>
                        </div>
                        <div class="clearAll"></div>
                </div>
                <div class="clearAll"></div>
                <div class="formValue">
            		<div id="coveredAreaErrorWarDiv" class="formWarning" style={{marginBottom: "20px", display: "none"}}></div>
            		<div class="clearAll"></div>
            	</div>
            	<div class="clearAll"></div>
            	 	<div class="newPropHelp  formEle" id="covered_area_PrefilledInfo" style={{display: "none", position: "relative", marginBottom: "0"}}></div>
            		<div class="clearAll"></div>
            </div>
            <div class="clearAll"></div>
           
            <div class="formEle hiddenElem" id="anchorToPlotAreaDiv" style={{display: "none"}}>
                <div class="formValue">
                        <div class="formCom">
                        	<div class="addPPS areaBlock"><a href="#!" id="plotAreaAnchor"><span></span>Plot Area</a></div>
                        </div>
                </div>
                <div class="clearAll"></div>
            </div> 
            <div class="clearAll"></div>
            <div style={{display: "none"}} id="plotAreaDiv">
            		<div class="formLabel inputDrop" style={{height: "0px", paddingTop: "1px", overflow: "hidden"}}>&nbsp;</div>
	            	<div class="formValue">
	            		<div id="plotAreaErrorWarDiv" class="formWarning" style={{display: "none"}}></div>
	            	</div>
	            	<div class="clearAll"></div>
            
	            <div class="formEle v--display">
	            	<div class="formLabel inputDrop">Plot Area<span class="pp__magiccasn__int" id="plotArea_cash" style={{display: "none"}}><span class="pp__magiccasn__coins"></span><span class="pp__magiccasn__intbold">50</span> Magic Cash</span></div>
	                <div class="formValue">
	                        <div class="formCom">
	                            <span class="inputContainer ftlt">
	                           		<input id="plotArea" name="plotArea" class="ciDrop inputText covered" onkeypress="return(ForceNumbersOnly(this, event, 'P'));" onkeyup="onKeyUpDown(this);" onkeydown="onKeyUpDown(this);" rel="Plot area is the total area of your property." placeholder="Plot Area" onBlur="convertToSqFeet(this,'landAreaType','landAreaSqFt');showScore('plotArea',this.value);checkPropBq(0,'plotAreaError');resetField(this);" type="text" value="" maxlength="6"/>
	                            </span>
	                            
	                            	<div class="formCom formComPosAbsTR">   
	                                   <span class="inputContainer">
	                                   		<input type="button" value="Sq-ft" id="landAreaTypeVal" class="ciDrop coveredDD" onClick="getCustomAreaOptionsCovered(event, this, '.formCom', 'landAreaType');tracking(this)"/>
	                                   </span>
	                                   <select id="landAreaType" name="landAreaType" onChange="convertToSqFeet(document.getElementById('plotArea'),'landAreaType','landAreaSqFt');changePriceSqFeetText();checkPropBq(0,'plotAreaError');resetFieldOnChange(this);" size="1">
											<option value="12850">Sq-ft</option><option value="12851" selected="selected">Sq-yrd</option><option value="12852">Sq-m</option><option value="12853">Acre</option><option value="12854">Bigha</option><option value="12855">Hectare</option><option value="12856">Marla</option><option value="12857">Kanal</option><option value="12588">Biswa1</option><option value="12589">Biswa2</option><option value="12590">Ground</option><option value="12591">Aankadam</option><option value="12592">Rood</option><option value="12593">Chatak</option><option value="12594">Kottah</option><option value="12595">Marla</option><option value="12596">Cent</option><option value="12597">Perch</option><option value="12598">Guntha</option><option value="12599">Are</option><option value="12858">Kuncham</option><option value="12860">Katha</option><option value="12859">Gaj</option><option value="12861">Killa</option>
		                                </select>
	                                    <div class="unitBlockAreaDropDown" style={{width: "100px", display: "none"}}>
	                                        <ul></ul>
	                                    </div>
	                                    <div class="amtInWord" id="landAreaSqFt"></div>
	                                </div>
	                               
	                        </div>
	                        
	                        <div class="coveredHelpCont">
	                        	<div class="helpTextContaint">
	                            	<span class="arrow"></span>
	                            	<div><img class="lazyload" alt="imagess" width="100%" height="" data-src="/static/images/plot_area.jpg" src=""/></div>
	                            </div>
                        	</div>
                        
	                        <div class="valiDated" id="plotAreaTick"></div>
	                        <div class="clearAll"></div>
	                        <div id="plotAreaError" class="formErr" style={{display: "none"}}>
	                            <span class="formErrArrow"></span>
	                            <span>Error message goes here</span>
	                        </div>
	                        <div class="clearAll"></div>
	                   </div>
		               <div class="clearAll"></div> 
	            </div>
	            
	            <div class="clearAll"></div> 
	            <div id="lengthXBreadthDiv" style={{display: "none"}}>
		            <div class="formEle v--display">
		            	<div class="formLabel inputDrop">Plot Length<span id="plotLengthLabel"></span></div>
		                <div class="formValue">
		                        <div class="formCom">
		                        	<div class="addPPS areaBlock">
		                        		<input id="plotLength" name="plotLength" class="ciDrop inputText covered" onkeypress="return(ForceNumbersOnly(this, event, 'D'));" onkeyup="onKeyUpDown(this, true);" onkeydown="onKeyUpDown(this, true);" placeholder="Plot Length" type="text" value="" maxlength="5"/> 
		                        	</div>
		                        </div>
		                        
		                        <span id="plotLengthUnit" class="frlt">ft</span>
		                        <div class="valiDated" id="plotLengthTick"></div>
		                        <div class="clearAll"></div>
		                        <div id="plotLengthError" class="formErr" style={{display: "none"}}>
		                            <span class="formErrArrow"></span>
		                            <span>Error message goes here</span>
		                        </div>
		                        <div class="clearAll"></div>
		                   </div>
		                   <div class="clearAll"></div>
		            </div>
	
		            <div class="formEle formEleWithCorner v--display">
		            	<div class="formLabel inputDrop">Plot Breadth<span id="plotWidthLabel"></span></div>
		                <div class="formValue">
		                        <div class="formCom">
		                        	<div class="addPPS areaBlock">
		                        		<input id="plotBreadth" name="plotBreadth" class="ciDrop inputText covered" onkeypress="return(ForceNumbersOnly(this, event, 'D'));" onkeyup="onKeyUpDown(this, true);" onkeydown="onKeyUpDown(this, true);" placeholder="Plot Breadth" type="text" value="" maxlength="5"/> 
		                        	</div>
		                        </div>
		                        
		                        <span id="plotBreadthUnit" class="frlt">ft</span>
		                        <div class="valiDated" id="plotBreadthTick"></div>
		                        <div class="clearAll"></div>
		                        <div id="plotBreadthError" class="formErr" style={{display: "none"}}>
		                            <span class="formErrArrow"></span>
		                            <span>Error message goes here</span>
		                        </div>
		                        <div class="cornerConfimation">
		                        	<span class="pp__magiccasn__int" id="cornerPlot_cash" style={{display: "none"}}><span class="pp__magiccasn__coins"></span><span class="pp__magiccasn__intbold">50</span> Magic Cash</span>
		                        	<div class="clearAll"></div>
		                        	<label>
	                        			<span class="customCheckBox" style={{verticalAlign: "top"}}><input id="cornerPlot1" name="cornerPlot" class="ppRadio" style={{opacity: "0"}} onClick="customCheckBox(this, 'cornerPlot');showScore('bookingAmount',$('#bookingAmount').val()); " type="checkbox" value="Y"/><input type="hidden" name="_cornerPlot" value="on"/></span>
	                        	 		<label id="propertyTypeDescCornerPlot" for="cornerPlot" style={{display: "inline-block", width: "250px"}}>This is a corner plot </label>
	                        	 	</label>
	                        	</div>
		                        <div class="clearAll"></div>
		                   </div>
		                   <div class="clearAll"></div>
		            </div>
	            </div>
	            <div class="clearAll"></div> 
	        </div>
            <div class="clearAllNone"></div>
            
            <div class="formEle hiddenElem" id="anchorToBuiltUpAreaDiv" style={{}}>
                <div class="formValue">
                        <div class="formCom">
                        	<div class="addPPS areaBlock"><a href="#!" id="builtUpAreaAnchor"><span></span>Built Up Area</a></div>
                        </div>
                </div>
                <div class="clearAll"></div>
            </div>
            
            <div class="formEle v--display" style={{display: "none"}} id="builtUpAreaDiv">
            	<div class="formLabel inputDrop">Built-up Area<span class="pp__magiccasn__int" id="builtUpArea_cash" style={{display: "none"}}><span class="pp__magiccasn__coins"></span><span class="pp__magiccasn__intbold">30</span> Magic Cash</span></div>
                <div class="formValue">
                        <div class="formCom">
                            <span class="inputContainer ftlt">
                            <input id="builtUpArea" name="builtUpArea" class="ciDrop inputText covered" onkeypress="return(ForceNumbersOnly(this, event, 'P'));" onkeyup="onKeyUpDown(this);" onkeydown="onKeyUpDown(this);" rel="BuiltUp area is the total useable area of your property within the walls." placeholder="BuiltUp Area" onBlur="convertToSqFeet(this,'builtUpAreaType','builtUpAreaSqFt');showScore('builtUpArea',this.value);" type="text" value="" maxlength="6"/></span>
                            <span class="inputContainer ftlt">
                           		<div class="formCom formComPosAbsTR">   
	                                <span class="inputContainer">
	                                     <input type="button" value="Sq-ft" id="builtUpAreaTypeVal" onClick="getCustomAreaOptionsCovered(event, this, '.formCom', 'builtUpAreaType')" class="ciDrop coveredDD"/>
	                                </span>
	                                <select id="builtUpAreaType" name="builtUpAreaType" class="areaList" onChange="convertToSqFeet(document.getElementById('builtUpArea'),'builtUpAreaType','builtUpAreaSqFt');" size="1">
	                                    <option value="12800">Sq-ft</option><option value="12803">Sq-yrd</option><option value="12801">Sq-m</option><option value="12804">Acre</option><option value="12805">Bigha</option><option value="12806">Hectare</option><option value="12807">Marla</option><option value="12808">Kanal</option><option value="12809">Biswa1</option><option value="12810">Biswa2</option><option value="12811">Ground</option><option value="12812">Aankadam</option><option value="12813">Rood</option><option value="12814">Chatak</option><option value="12815">Kottah</option><option value="12816">Marla</option><option value="12817">Cent</option><option value="12818">Perch</option><option value="12819">Guntha</option><option value="12820">Are</option>
	                                </select>
	                                
                                    <div class="unitBlockAreaDropDown" style={{width: "100px", display: "none"}}>
                                        <ul></ul>
                                    </div>
                                    <div class="amtInWord" id="builtUpAreaSqFt"></div>
                                 </div>
                            </span>
                        </div>
                        
                        <div class="coveredHelpCont">
                        	<div class="helpTextContaint">
                            	<span class="arrow"></span>
                            	<div><img class="lazyload" alt="imagess" width="271" height="242" data-src="/static/images/builtUp_area.jpg" src=""/></div>
                            </div>
                        </div>
                        
                        <div class="valiDated" id="builtUpAreaTick"></div>
                        <div class="clearAll"></div>
                        <div id="builtUpAreaError" class="formErr" style={{display: "none"}}>
                            <span class="formErrArrow"></span>
                            <span>Error message goes here</span>
                        </div>
                        <div class="clearAll"></div>
                </div>
                <div class="clearAll"></div>
            </div>
            <div class="clearAll"></div>
         
            
            <div class="formEle v--display" style={{}} id="carpetAreaDiv">
            	<div class="formLabel inputDrop">Carpet Area</div>
                <div class="formValue">
                        <div class="formCom">
                            <span class="inputContainer ftlt" >
                            <input id="carpetArea" name="carpetArea" class="ciDrop inputText covered" onkeypress="return(ForceNumbersOnly(this, event, 'P'));" onkeyup="onKeyUpDown(this);" onkeydown="onKeyUpDown(this);" rel="Carpet area is the total useable area of your property within the walls." placeholder="Carpet Area" onBlur="convertToSqFeet(this,'coveredAreaType','coveredAreaSqFt');showScore('coveredArea',this.value);PriceBifurcation.calculateListPriceForCPD();checkPropBq(0,'coveredAreaError');" onChange={handleCarpetarea} type="number" value={carpetarea} maxlength="6"/></span>
                            {/* <span class="inputContainer"> */}
                           		<div class="formCom formComPosAbsTR">   
	                                <span class="inputContainer">
	                                     <input type="button" value="Sq-ft" id="carpetAreaTypeVal" onClick="getCustomAreaOptionsCovered(event, this, '.formCom', 'carpetAreaType')" class="ciDrop coveredDD"/>
	                                </span>
	                                <select id="carpetAreaType" name="carpetAreaType" class="areaList" onchange="convertToSqFeet(document.getElementById('carpetArea'),'carpetAreaType','carpetAreaSqFt');" size="1">
	                                    <option value="12800">Sq-ft</option><option value="12803">Sq-yrd</option><option value="12801">Sq-m</option><option value="12804">Acre</option><option value="12805">Bigha</option><option value="12806">Hectare</option><option value="12807">Marla</option><option value="12808">Kanal</option><option value="12809">Biswa1</option><option value="12810">Biswa2</option><option value="12811">Ground</option><option value="12812">Aankadam</option><option value="12813">Rood</option><option value="12814">Chatak</option><option value="12815">Kottah</option><option value="12816">Marla</option><option value="12817">Cent</option><option value="12818">Perch</option><option value="12819">Guntha</option><option value="12820">Are</option>
	                                </select>
	                                
                                    <div class="unitBlockAreaDropDown" style={{width: "100px", display: "none"}}>
                                        <ul></ul>
                                    </div>
                                    <div class="amtInWord" id="carpetAreaSqFt"></div>
                                 </div>
                            {/* </span> */}
                        </div>
                        
                        <div class="coveredHelpCont">
                        	<div class="helpTextContaint">
                            	<span class="arrow"></span>
                            	<div><img class="lazyload d-none" alt="carpetareaimage" width="271" height="242" data-src="/static/images/carpet_area.jpg" src="https://post.magicbricks.com/static/images/carpet_area.jpg"/></div>
                            </div>
                        </div>
                        <div class="valiDated" id="carpetAreaTick"></div>
                        <div class="clearAll"></div>
                        <div id="carpetAreaError" class="formErr" style={{display: "none"}}>
                        	<span class="formErrArrow"></span>
                            <span>Error message goes here</span>
                        </div>
                        <div class="clearAll"></div>
                </div>
                <div class="clearAll"></div>
            </div>
            <div class="clearAll"></div>
            
          
        </div>
        <div class="clearAll"></div>
        {/* <!-- start of entrance width --> */}
        <div class="formEle v--display" id="widthOfEntranceDiv" style={{display: "none"}}>
	         <div class="formLabel inputDrop">Width Of Entrance</div>
	         <div class="formValue posRel">
               	<input id="widthOfEntrance" name="widthOfEntrance" class="ciDrop inputText covered" onkeypress="return(ForceNumbersOnly(this, event, 'P'));" placeholder="E.X:- 4000" type="text" value="" maxlength="5"/>
               	<div class="clearAll"></div>
               	<div id="widthOfEntranceError" class="formErr" style={{display: "none"}}>
					<span class="formErrArrow"></span>
					<span>Error message goes here</span>
				</div>
             </div>
                   <div class="formValue">
                       <div class="formCom formComPosAbsTR">
                       <span class="inputContainer"><input type="button" id="widthOfEntranceUnitVal" value="meters" class="ciDrop coveredDD" onClick="getCustomAreaOptionsCovered(event, this, '.formCom', 'widthOfEntranceUnit')"/></span>
                           <select id="widthOfEntranceUnit" name="widthOfEntranceUnit" class="areaList jq-custom-select">
										
						                     <option value="38700">meters</option>
					                  
						                     <option value="38701">ft</option>
					                  
	                  </select>
                           <div class="unitBlockAreaDropDown" style={{width: "100px", display: "none"}}>
                                           <ul></ul>
                            </div>
                   	</div>
                       
               </div>
           	<div class="clearAll"></div>
        </div>
        
        <div class="clearAll"></div>
          {/* <!-- start of facing road width --> */}
        <div class="formEle v--display" id="widthOfFacingRoadDiv" style={{display: "none"}}>
	         <div class="formLabel inputDrop">Width Of Facing Road</div>
	         <div class="formValue posRel">
               	<input id="widthOfFacingRoad" name="widthOfFacingRoad" class="ciDrop inputText covered" onkeypress="return(ForceNumbersOnly(this, event, 'P'));" placeholder="E.X:- 4000" type="text" value="" maxlength="5"/>
               	<div class="clearAll"></div>
               	<div id="widthOfFacingRoadError" class="formErr" style={{display: "none"}}>
					<span class="formErrArrow"></span>
					<span>Error message goes here</span>
				</div>
             </div>
                   <div class="formValue">
                       <div class="formCom formComPosAbsTR">
                       <span class="inputContainer"><input type="button" id="widthOfFacingRoadUnitVal" value="meters" class="ciDrop coveredDD" onClick="getCustomAreaOptionsCovered(event, this, '.formCom', 'widthOfEntranceUnit')"/></span>
                           <select id="widthOfFacingRoadUnit" name="widthOfFacingRoadUnit" class="areaList jq-custom-select">
										
						                     <option value="38700">meters</option>
					                  
						                     <option value="38701">ft</option>
					                  
	                  </select>
                           <div class="unitBlockAreaDropDown" style={{width: "100px", display: "none"}}>
                                           <ul></ul>
                            </div>
                   	</div>
                       
               </div>
           	<div class="clearAll"></div>
        </div>
    </div>
    
       {/* <!-- Property Area Start Here --> */}
    
    <div class="clearAll"></div> 
    <div class="ppSecBlock" id="propertyTransationType" style={{}}>
    	<div class="dataBlock pl-3" style={{width:"692px"}}>
        	<div class="secHeading">Transaction Type, Property Availability</div>
            <div class="formEle ttypefld" id="transactionTypeLi" style={{}}>
            	<div class="formLabel">Transaction Type</div>
                <div class="formValue">
                	<div class="radioBlock">
                    	<ul>
                        	
								<li>
	                   				<span class={`customRadioButton ${check4}`}><input id="transactionType1" name="transactionType" class="ppRadio _transactionType" style={{opacity: "0"}} onClick={handleTransaction} type="radio" value="20501" checked={check4}/> </span>  
	                   				<label class="curPoint" for="transactionType1">New Property</label>
								</li>
	                   		
								<li>
	                   				<span class={`customRadioButton ${check5}`}><input id="transactionType2" name="transactionType" class="ppRadio _transactionType" style={{opacity: "0"}} onClick={handleTransaction} type="radio" value="20500" checked={check5}/> </span>  
	                   				<label class="curPoint" for="transactionType2">Resale</label>
								</li>
	                   		
                        </ul>
                    </div>
                    <div class="clearAll"></div>
	            	<div id="transactionTypeError" class="formErr" style={{top: "25px", display: "none"}}>
	                    <span class="formErrArrow"></span>
	                    <span>Error message goes here</span>
	                </div>
                </div>
                <div class="clearAll"></div>
                <span class="pp__magiccasn__int pp__magiccasn__int__rdo" id="transactionType_cash" style={{display: "none"}}><span class="pp__magiccasn__coins"></span><span class="pp__magiccasn__intbold">50</span> Magic Cash</span>
            </div>
            <div class="clearAll"></div>
           
            <div class="clearAll"></div>
	       <div id="PossessionLi" class="ttypefld" style={{}}>
	        <div class="formEle" id="prefilledInfo" style={{display: "none"}}>
            	 <div class="newPropHelp">We've pre-filled the <span id="possAvalProjectText">'Possession Status' &amp; 'Available From'</span> <span id="devloperName"></span> basis the info in Magicbricks Database. You may however edit these details.</div>
            </div>
	            <div class="formEle">
	            	<div class="formLabel">Possession Status</div>
	                <div class="formValue posRel">
	                	<div class="radioBlock">
	                    	<ul>
	                        	
									<li>
										<span class={`customRadioButton ${check6}`}>
										<input id="possessionStatus1" name="possessionStatus" style={{opacity: "0"}} onClick={handleExplore} type="radio" value="10080" checked={check6}/>
										</span> 
										<label class="curPoint" for="possessionStatus1">Under Construction</label>
									</li>
								
									<li>
										<span class={`customRadioButton ${check7}`}>
										<input id="possessionStatus2" name="possessionStatus" style={{opacity: "0"}} onClick={handleExplore} type="radio" value="10081" checked={check7}/>
										</span> 
										<label class="curPoint" for="possessionStatus2">Ready to Move</label>
									</li>
								
	                        </ul>
	                    </div>
	                    <div class="clearAll"></div>
	                    <div id="possessionStatusError" class="formErr" style={{top: "25px", display: "none"}}>
	                        <span class="formErrArrow"></span>
	                        <span>Error message goes here</span>
	                    </div>
	                </div>
	            	<div class="clearAll"></div>
	            	<span class="pp__magiccasn__int pp__magiccasn__int__rdo" id="possessionStatus_cash" style={{display: "none"}}><span class="pp__magiccasn__coins"></span><span class="pp__magiccasn__intbold">40</span> Magic Cash</span>
	            	<div class="clearAll"></div>
	            </div>
	            <div class="formEle v--display" id="availfromDiv">
	            	<div class="formLabel inputDrop">Available From<span class="pp__magiccasn__int" id="availFroms_cash" style={{display: "none"}}><span class="pp__magiccasn__coins"></span><span class="pp__magiccasn__intbold">50</span> Magic Cash</span></div>
	                <div class="formValue">
	                        <div class="ftlt">
	                            <span class="inputContainer ftlt">
	                            	<div class="formCom">   
	                                        <span class="inputContainer">
	                                        <input type="button" id="availFromMonthVal" value="Month" class="ciDrop avbF avbFfirst _removeErrorOnFocus" onClick="getCustomAreaOptionsCovered(event, this, '.formCom', 'availFromMonth')"/></span>
	                                        
	                                         <select id="availFromMonth" name="availFromMonth" class="areaList" style={{display: "none"}} onchange="setDateString('availFromMonth','availFromYear','availDateStr','availDate');handlePossesionStatusAndDependentFields();" size="1">
			                                    <option value="-1">Month</option>
												<option value="1">January</option><option value="2">February</option><option value="3">March</option><option value="4">April</option><option value="5">May</option><option value="6" selected="selected">June</option><option value="7">July</option><option value="8">August</option><option value="9">September</option><option value="10">October</option><option value="11">November</option><option value="12">December</option>
		                                    </select> 
	                                        <div class="unitBlockAreaDropDown" style={{width: "135px", display: "none"}}>
	                                            <ul></ul>
	                                        </div>
	                                        </div>
	                            </span>
	                            <span class="inputContainer ftlt">
	                            	<div class="formCom">   
	                                        <span class="inputContainer"><input type="button" id="availFromYearVal" value="Year" class="ciDrop avbF _removeErrorOnFocus" onClick="getCustomAreaOptionsCovered(event, this, '.formCom', 'availFromYear')"/></span>
	                                        
	                                         <select id="availFromYear" name="availFromYear" class="areaList" style={{display: "none"}} onchange="setDateString('availFromMonth','availFromYear','availDateStr','availDate');handlePossesionStatusAndDependentFields();" size="1">
			                                    <option value="-1">Year</option>
												<option value="2021" selected="selected">2021</option><option value="2022">2022</option><option value="2023">2023</option><option value="2024">2024</option><option value="2025">2025</option><option value="2026">2026</option><option value="2027">2027</option><option value="2028">2028</option><option value="2029">2029</option><option value="2030">2030</option><option value="2031">2031</option>
		                                    </select>  
		                                    <input id="availDateStr" name="availDateStr" type="hidden" value=""/>
		                             		<input id="availDate" name="availDate" type="hidden" value=""/>
	                                        
	                                        <div class="unitBlockAreaDropDown" style={{width: "135px", display: "none"}}>
	                                            <ul></ul>
	                                        </div>
	                                  </div>
	                            </span>
	                        </div>
	                        <div class="valiDated"></div>
	                         <div class="clearAll"></div>
	                        <div id="availDateError" class="formErr" style={{display: "none"}}>
	                            <span class="formErrArrow"></span>
	                            <span>Error message goes here</span>
	                        </div>
	                </div>
	                <div class="clearAll"></div>
	            </div>
	         </div>
            <div class="clearAll"></div>
            
              <div id="AvailableFromLi" class="formEle ttypefld" style={{display: "none"}}>
                    <div class="formList">
                    	<div class="formLabel optional">Available From<span class="pp__magiccasn__int" id="availFromr_cash" style={{display: "none"}}><span class="pp__magiccasn__coins"></span><span class="pp__magiccasn__intbold">50</span> Magic Cash</span></div>
                        <div class="formValue posRel ">
	                        <div class="radioBlock radioBlock-available">
								<ul>
									
										<li>
											<span class="customRadioButton"><input id="10101" name="availableFromStatus" class="ppRadio" style={{opacity: "0"}} onClick="showHideAvailableFrom(this.value,'availablefromDiv');showScore('availableFromStatus',this.value);customRadioButtonNew(this, 'availableFromStatus');" type="radio" value="10101"/></span>
											<label class="iwantTo curPoint" for="10101">
				                   				Select Date
											</label>
										</li>
			                   		
										<li>
											<span class="customRadioButton"><input id="10102" name="availableFromStatus" class="ppRadio" style={{opacity: "0"}} onClick="showHideAvailableFrom(this.value,'availablefromDiv');showScore('availableFromStatus',this.value);customRadioButtonNew(this, 'availableFromStatus');" type="radio" value="10102"/></span>
											<label class="iwantTo curPoint" for="10102">
				                   				Immediately
											</label>
										</li>
			                   		
		                   		</ul>
		                   		
		                   		<div class="valiDated"></div>
		                        <div class="clearAll"></div>
		                        <div id="availableFromStatusError" class="formErr" style={{display: "none"}}>
		                            <span class="formErrArrow"></span>
		                            <span>Error message goes here</span>
		                        </div>
		                         <div class="formList" id="availablefromDiv" style={{display: "none", position: "absolute",  left: "109px",  top: "-8px"}}>
					                    <div class="formEle">
					                        <div class="formField posRel">
					                        	<div class="dateFields">
					                        	<input id="availableDateStr" name="availableDateStr" class="ciDrop hasDatepicker" style={{float: "left", width: "105px"}} placeholder="DD/MM/YYYY" readonly="readonly" type="text" value=""/></div>
												<input id="availableDate" name="availableDate" type="hidden" value=""/>
												<div class="valiDated"></div>
						                        <div class="clearAll"></div>
						                        <div id="availableDateStrError" class="formErr" style={{display: "none"}}>
						                            <span class="formErrArrow"></span>
						                            <span>Error message goes here</span>
						                        </div>
											</div>
					                        <div class="clearAll"></div> 
					                        </div>
					                    </div>
		                        
							</div>
						</div>
                        <div class="clearAll"></div>
                    </div>                   
             </div>
            
            <div class="formEle v--display ttypefld" id="ageofconsDiv" style={{display: "none"}}>
                    <div class="formLabel inputDrop">Age of Construction<span class="pp__magiccasn__int" id="ageofcons_cash" style={{display: "none"}}><span class="pp__magiccasn__coins"></span><span class="pp__magiccasn__intbold">30</span> Magic Cash</span></div>
                    <div class="formValue">
                        <div class="formCom">
                            <span class="inputContainer"><input type="button" onClick="getCustomAreaOptionsCovered(event, this, '.formValue', 'ageofcons')" class="ciDrop btnInput ageOfCons" value="Age of Construction" id="ageofconsVal"/></span>
                            <select id="ageofcons" name="ageofcons" size="1">
									<option value="-1">Age of Construction</option>
									<option value="11651">New Construction</option><option value="11652">Less than 5 years</option><option value="11653">5 to 10 years</option><option value="11654">10 to 15 years</option><option value="11655">15 to 20 years</option><option value="11656">Above 20 years</option>
								</select>
                            
                            <div class="unitBlockAreaDropDown" style={{display: "none"}}>
                                <ul></ul>
                            </div>
                    	</div>
                        <div class="valiDated"></div>
                        <div class="clearAll"></div>
                        <div class="formErr" id="ageofconsError" style={{display: "none"}}>
                            <span class="formErrArrow"></span>
                            <span>Error message goes here</span>
                        </div>
                </div>
            	<div class="clearAll"></div>
            </div>
            <div class="clearAll"></div>
            
            <div class="formEle fullwidth ttypefld" id="leasedorRentout" style={{display: "none"}}>
            	<div class="formLabel">Currently <span id="currentlyleaseorrent">Leased</span> out</div>
                <div class="formValue posRel">
                	<div class="radioBlock">
                    	<ul>
                        	<li>
                        		<span class="customRadioButton">
                        			<input type="radio" style={{opacity: "0"}} id="leaseY" name="leaseStatus" onClick="customRadioButtonNew(this, 'leaseStatus');$('#leasedDescDiv').show();showScore('leaseStatus','11');" value="Y"/> 
                        		</span> 
                        		<label class="curPoint" for="leaseY">Yes</label>
                        	</li>
                            <li>
                            	<span class="customRadioButton">
                            		<input type="radio" style={{opacity: "0"}} id="leaseN" name="leaseStatus" onClick="customRadioButtonNew(this, 'leaseStatus');$('#leasedDescDiv').hide();showScore('leaseStatus','11');$('#leaseDateStrDiv').hide();$('#businessSectorDiv').hide();$('#inBusinessSinceDiv').hide();" value="N"/> 
                            	</span> 
                            	<label class="curPoint" for="leaseN">No</label>
                            </li>
                        </ul>
                    </div>
                    <div class="clearAll"></div>
	                </div>
            	<div class="clearAll"></div>
            	<div id="leasedDescDiv" style={{display: "none", paddingTop: "20px"}}>
            		<div class="formEle v--display toWhomeFUll">
            			<div class="formLabel">To whom has the property been <span id="towhomeleaseorrent">leased</span></div>
            			<div class="formValue">
            				<textarea id="currentyLeaseDescription" name="currentyLeaseDescription" class="offerTextArea" maxlength="1024" placeholder="Please specify whether your property has  be leased to a company or an individual"></textarea>
            				<div class="valiDated"></div>
            				<div class="clearAll"></div>
		                     <div class="formErr" id="currentyLeaseDescriptionError" style={{display: "none"}}>
		                         <span class="formErrArrow"></span>
		                         <span>Error message goes here</span>
		                     </div>
            			</div>
            		</div>
            		<div class="clearAll"></div>
	                 
	                <div class="formEle v--display">
	                	<div class="formLabel">Monthly Rent<span class="pp__magiccasn__int" id="currentyLeaseRent_cash" style={{display: "none"}}><span class="pp__magiccasn__coins"></span><span class="pp__magiccasn__intbold">50</span> Magic Cash</span></div>
	                	<div class="formValue">
	                		<div class="formValue monRent">
		                        <div class="priceIcon"></div>
		                            <span class="inputContainer">
		                            	<input id="currentyLeaseRent" name="currentyLeaseRent" class="ciDrop inputText totalPrice" onkeypress="return(ForceNumbersOnly(this, event, 'P'));" onkeyup="onKeyUpDown(this); currencyFormatOnUpDown(this);" onkeydown="onKeyUpDown(this); currencyFormatOnUpDown(this);" onblur="fromNumberToWords(this,'price_in_rs');updatePrice('field');" type="text" value="" maxlength="12"/>
		                            </span>
		                        <div class="valiDated"></div>
		                        <div class="clearAll"></div>
		                        <div class="formErr" id="currentyLeaseRentError" style={{display: "none"}}>
		                            <span class="formErrArrow"></span>
		                            <span>Error message goes here</span>
		                        </div>
		                	</div>
	                	</div>
	                </div>
	                
	                <div class="formEle v--display" id="leaseDateStrDiv" style={{display: "none"}}>
	                	<div class="formLabel">Leased On</div>
	                	<div class="formValue">
	                		{/* <!-- <div class="formField posRel"> 
	                        	<div class="dateFields">  --> */}
	                        	<input id="leaseDateStr" name="leaseDateStr" class="ciDrop hasDatepicker" style={{float: "left"}} placeholder="DD/MM/YYYY" readonly="readonly" type="text" value=""/> 
								<input id="leaseDate" name="leaseDate" type="hidden" value=""/>
								<div class="valiDated"></div>
		                        <div class="clearAll"></div>
		                        <div id="leaseDateStrError" class="formErr" style={{left: "195px", display: "none"}}>
		                            <span class="formErrArrow"></span>
		                            <span>Error message goes here</span>
		                        </div>
							{/* <!-- </div> --> */}
	                	</div>
	                </div>
					<div class="clearAll"></div>		                    
		                    	
                    
                    <div class="formEle v--display" id="businessSectorDiv" style={{display: "none"}}>
	                    <div class="formLabel">Current Business Sector</div>
	                    <div class="formValue">
	                    	<div class="formCom">   
		                        <span class="inputContainer"><input type="button" value="--Select--" id="businessSectorVal" name="businessSectorVal" class="ciDrop listingType" onClick="getCustomAreaOptionsCovered(event, this, '.formCom', 'businessSector')"/></span>
		                        
		                        <select id="businessSector" name="businessSector" class="areaList" style={{display: "none"}}>
					            	
					            		<option value="-1">--Select--</option>
					            	
					            	
												<option value="20451">Agro/Flowers/Agriculture/Seeds/Nursery</option>
									
												<option value="20452">Airport/Aviation/Aerospace and Related</option>
									
												<option value="20453">Four Wheelers/Two Wheelers/Automotive Components/Repair/Auto and Related</option>
									
												<option value="20454">Animation &amp; Gaming</option>
									
												<option value="20455">Pets and Related</option>
									
												<option value="20456">Hospital, Clinics, Biotechnology</option>
									
												<option value="20457">Construction Related Products – Cement etc. /Equipments/Ceramic/Cement/Glass</option>
									
												<option value="20458">Consumer Durables/Electronic products- TV/Fridge/Camera/Laptops/Computer Hardware</option>
									
												<option value="20459">Wood/Furniture and Related</option>
									
												<option value="20460">Kitchen Goods and Related</option>
									
												<option value="20461">Footwear/Leather</option>
									
												<option value="20462">Food And Related – Restaurants, Sweet Shops etc</option>
									
												<option value="20463">Gems and Jewellery</option>
									
												<option value="20464">Handicrafts &amp; Carpets</option>
									
												<option value="20465">IT/ITES/Call Centers/Consulting/Ecommerce etc.</option>
									
												<option value="20466">Construction Related Services – Architecture Design, Planning, Contractor etc</option>
									
												<option value="20467">Industrial Supplies and Related</option>
									
												<option value="20468">Plastic processing</option>
									
												<option value="20469">Petrochemicals &amp; petroleum products/oil and gas</option>
									
												<option value="20470">Pharmaceuticals/Chemists/Chemicals</option>
									
												<option value="20471">Power/alternate energy/solar</option>
									
												<option value="20472">Garments/Textiles/Apparel/Wool/Fashion Labels</option>
									
												<option value="20473">Writing and printing/ Stationary/Books/Gifts/Cards/Art and Craft etc.</option>
									
												<option value="20474">Metals, Nails, Hammer, Paints Hardware Related</option>
									
												<option value="20476">Shipping, Transportation, Courier and Logistics</option>
									
												<option value="20477">Educational/Coaching Institutes and Related</option>
									
												<option value="20478">Real Estate Agency – Brokers, Builder Office etc.</option>
									
												<option value="20479">Fitness Centers/Gym etc</option>
									
												<option value="20480">Electronics -  Mobile and related</option>
									
												<option value="20481">Tours, Travels and Related</option>
									
												<option value="20482">Financial, Insurance, Legal and Related Services</option>
									
												<option value="20483">Media, Advertising and Related</option>
									
												<option value="20484">Baby Products, Toys and Related</option>
									
												<option value="20485">Religious Products – Idols, Temples, Incense Sticks and Related</option>
									
												<option value="20486">Internet/Cable Providers and Related</option>
									
												<option value="20487">NGOs/Charitable Trusts and Related</option>
									
												<option value="20488">Beauty Spa and Saloon</option>
									
												<option value="20489">Photo Studio and Related</option>
									
												<option value="20475">Other</option>
									
				               </select>
		                        <div class="unitBlockAreaDropDown" style={{display: "none"}}>
		                            <ul></ul>
		                        </div>
	                        </div>
	                        <div class="clearAll"></div>  
	                	</div>
	                	<div class="clearAll"></div>
	            	</div>
	            
	                <div id="businessSectorOtherDiv" class="formEle v--display" style={{display: "none"}}>
	                	<div class="formLabel">Other Sector</div>
	                	<div class="formValue">
			            	<span class="inputContainer">
	                           	<input id="businessSectorOther" name="businessSectorOther" class="ciDrop inputText recentProject" placeholder="Enter Business Sector" type="text" value="" maxlength="50" autocomplete="off"/>
	                        </span>
	                	</div>
			        </div>                       
	            	
	            
	            	<div class="formEle v--display" id="inBusinessSinceDiv" style={{display: "none"}}>
	                    <div class="formLabel">In Business Since</div>
	                    <div class="formValue">
	                    	<div class="formCom">   
	                        <span class="inputContainer"><input type="button" value="--Select--" id="inBusinessSinceVal" name="inBusinessSinceVal" class="ciDrop listingType" onClick="getCustomAreaOptionsCovered(event, this, '.formCom', 'inBusinessSince')"/></span>
	                        
	                        <select id="inBusinessSince" name="inBusinessSince" class="areaList" style={{display: "none"}}>
				            	
				            		<option value="-1">--Select--</option>
				            	
				            	
											<option value="11005">1910</option>
								
											<option value="11006">1911</option>
								
											<option value="11007">1912</option>
								
											<option value="11008">1913</option>
								
											<option value="11009">1914</option>
								
											<option value="11010">1915</option>
								
											<option value="11011">1916</option>
								
											<option value="11012">1917</option>
								
											<option value="11013">1918</option>
								
											<option value="11014">1919</option>
								
											<option value="11015">1920</option>
								
											<option value="11016">1921</option>
								
											<option value="11017">1922</option>
								
											<option value="11018">1923</option>
								
											<option value="11019">1924</option>
								
											<option value="11020">1925</option>
								
											<option value="11021">1926</option>
								
											<option value="11022">1927</option>
								
											<option value="11023">1928</option>
								
											<option value="11024">1929</option>
								
											<option value="11025">1930</option>
								
											<option value="11026">1931</option>
								
											<option value="11027">1932</option>
								
											<option value="11028">1933</option>
								
											<option value="11029">1934</option>
								
											<option value="11030">1935</option>
								
											<option value="11031">1936</option>
								
											<option value="11032">1937</option>
								
											<option value="11033">1938</option>
								
											<option value="11034">1939</option>
								
											<option value="11035">1940</option>
								
											<option value="11036">1941</option>
								
											<option value="11037">1942</option>
								
											<option value="11038">1943</option>
								
											<option value="11039">1944</option>
								
											<option value="11040">1945</option>
								
											<option value="11041">1946</option>
								
											<option value="11042">1947</option>
								
											<option value="11043">1948</option>
								
											<option value="11044">1949</option>
								
											<option value="11045">1950</option>
								
											<option value="11046">1951</option>
								
											<option value="11047">1952</option>
								
											<option value="11048">1953</option>
								
											<option value="11049">1954</option>
								
											<option value="11050">1955</option>
								
											<option value="11051">1956</option>
								
											<option value="11052">1957</option>
								
											<option value="11053">1958</option>
								
											<option value="11054">1959</option>
								
											<option value="11055">1960</option>
								
											<option value="11056">1961</option>
								
											<option value="11057">1962</option>
								
											<option value="11058">1963</option>
								
											<option value="11059">1964</option>
								
											<option value="11060">1965</option>
								
											<option value="11061">1966</option>
								
											<option value="11062">1967</option>
								
											<option value="11063">1968</option>
								
											<option value="11064">1969</option>
								
											<option value="11065">1970</option>
								
											<option value="11066">1971</option>
								
											<option value="11067">1972</option>
								
											<option value="11068">1973</option>
								
											<option value="11069">1974</option>
								
											<option value="11070">1975</option>
								
											<option value="11071">1976</option>
								
											<option value="11072">1977</option>
								
											<option value="11073">1978</option>
								
											<option value="11074">1979</option>
								
											<option value="11075">1980</option>
								
											<option value="11076">1981</option>
								
											<option value="11077">1982</option>
								
											<option value="11078">1983</option>
								
											<option value="11079">1984</option>
								
											<option value="11080">1985</option>
								
											<option value="11081">1986</option>
								
											<option value="11082">1987</option>
								
											<option value="11083">1988</option>
								
											<option value="11084">1989</option>
								
											<option value="11085">1990</option>
								
											<option value="11086">1991</option>
								
											<option value="11087">1992</option>
								
											<option value="11088">1993</option>
								
											<option value="11089">1994</option>
								
											<option value="11090">1995</option>
								
											<option value="11091">1996</option>
								
											<option value="11092">1997</option>
								
											<option value="11093">1998</option>
								
											<option value="11094">1999</option>
								
											<option value="11095">2000</option>
								
											<option value="11096">2001</option>
								
											<option value="11097">2002</option>
								
											<option value="11098">2003</option>
								
											<option value="11099">2004</option>
								
											<option value="11100">2005</option>
								
											<option value="11101">2006</option>
								
											<option value="11102">2007</option>
								
											<option value="11103">2008</option>
								
											<option value="11104">2009</option>
								
											<option value="11105">2010</option>
								
											<option value="11106">2011</option>
								
											<option value="11107">2012</option>
								
											<option value="11108">2013</option>
								
											<option value="11109">2014</option>
								
											<option value="11110">2015</option>
								
											<option value="111111">2016</option>
								
											<option value="10980">2017</option>
								
											<option value="10981">2018</option>
								
											<option value="10982">2019</option>
								
			               </select>
	                        
	                        <div class="unitBlockAreaDropDown" style={{display: "none"}}>
	                            <ul></ul>
	                        </div>
	                        </div>
	                        <div class="clearAll"></div>  
	                	</div>
	            		<div class="clearAll"></div>
	            	</div>
	            </div>
	            <div class="clearAll"></div>
            </div>
             {/* <!-- insert in business since ,current business sector -->
	            <!-- end of in business since --> */}
	             <div class="clearAll"></div>
                 <div class="formEle fullwidth ttypefld" id="assuredReturnsDiv" style={{display: "none"}}>
                 <div class="formLabel">Assured Returns</div>
                 <div class="formValue posRel">
                    <div class="radioBlock">
                    	<ul>
                        	<li>
                        		<span class="customRadioButton">
                        			<input id="returnsY" name="assuredReturn" style={{opacity: "0"}} onClick="customRadioButtonNew(this, 'assuredReturn');" type="radio" value="Y"/>
                        		</span> 
                        		<label class="curPoint" for="returnsY">Yes</label>
                        	</li>
                            <li>
                            	<span class="customRadioButton">
                            		<input id="returnsN" name="assuredReturn" style={{opacity: "0"}} onClick="customRadioButtonNew(this, 'assuredReturn');" type="radio" value="N"/> 
                            	</span> 
                            	<label class="curPoint" for="returnsN">No</label>
                            </li>
                        </ul>
                 </div>
                 </div>
                 	
                 	<div class="coveredHelpCont" style={{marginTop: "3px", marginLeft: "30px", display: "none"}} id="assuredReturnToolTip">
                    	<div class="helpTextContaint" style={{width: "210px", left: "-115px", paddingRight: "13px"}}>
                        	<span class="arrow" style={{left: "115px"}}></span>
                        	<div>Enter annual percentage return</div>
                        </div>
                    </div>
                 	
                  <div class="clearAll"></div>
	         </div>
	         
	        
	         <div class="formEle ttypefld" id="rateOfReturnDiv" style={{display: "none"}}>
	         <div class="formLabel inputDrop">Rate Of Return</div>
	         <div class="formValue posRel">
               	<input id="rateOfReturn" name="rateOfReturn" class="ciDrop inputText covered" onkeypress="return isNumberKey(event)" placeholder="E.X:- 5%" type="text" value=""/>
               	<div class="clearAll"></div>
				 <div id="rateOfReturnError" class="formErr" style={{display: "none"}}>
					<span class="formErrArrow"></span>
					<span>Error message goes here</span>
				</div>
              </div>
              <div class="clearAll"></div>
           </div>
            
        </div>
        <div class="clearAll"></div>
    </div>
    
    {/* <!-- Property Sales Price Start --> */}
    <div class="ppSecBlock">
    	<div id="bookingAmt"></div>
    	<div class="dataBlock pl-3" id="propertyPrice" style={{width:"692px"}}>
        	<div class="secHeading" id="salePriceHeading">Price Details</div>
        	<div class="secHeading" id="rentPriceHeading" style={{display: "none"}}>Rent/ Lease Details</div>
        	
        	{/* <!--  Option for on/off block start --> */}
        	<div class="formEle _multiStoreyPrice hide _priceTypeSelection" style={{display: "none"}}>
        		<div class="formLabel semiBold">You wish to enter</div>
        		<div class="formValue">
        			<div class="radioBlock" style={{paddingLeft: "19px"}}>
	        			<ul>
	        				<li class="optPrice1">
	        					<span class="customRadioButton checked _cpdspan">
	        						<input id="cpd" name="priceType" class="_priceType" style={{opacity: "0"}} onClick="customRadioButton(this, 'priceType');" checked="checked" type="radio" value="C"/> 
	        					</span> 
	        					<label class="curPoint" for="cpd">Complete Price Details</label></li>
                            <li class="optPrice2">
                            	<span class="customRadioButton _tpspan">
                            		<input id="tpo" name="priceType" class="_priceType" style={{opacity: "0"}} onClick="customRadioButton(this, 'priceType');" type="radio" value="T"/> 
                            	</span> 
                            	<label class="curPoint" for="tpo">Total Price Only</label></li>
	        			</ul>
        			</div>
        			<div class="clearAll"></div>
        		</div>
        		<div class="clearAll"></div>
        	</div>
        	{/* <!--  Option for on/off block end /--> */}
        	
        	{/* <!-- checkBox Devider Start  --> */}
        	<div class="clearAll"></div>
        	<div class="checkBoxSeperator _multiStoreyPrice hide _priceTypeSelection" style={{display: "none"}}>
        		<img data-src="/static/images/radioButtonSeperator.png" alt="imagess" class="pos1 _priceTypeArrow lazy" src=""/>
        	</div>
        	<div class="clearAll"></div>
        	{/* <!-- checkBox Devider End  /--> */}
        	
        	<div id="cpdBlock" class="hide _multiStoreyPrice" style={{display: "none"}}>
        	<div class="newPropHelp" style={{marginBottom: "20px"}}>If Super Area is entered, all price calculations will be done on the Super Area.If Only Carpet Area is entered, all price calculations will be done on the Carpet Area.</div>
        		
        			
        					<div class="formEle v--display " id="cpdPricecomponentId_1006471">
							  <div class="formLabel inputDrop">Basic Price</div>
							  <div class="formValue">
							    <div class="priceIcon"></div>
							    
							    <div class="formCom">
							    	<span class="inputContainer">
							    		
									    	
									    		<input id="componentPrice_1006471" name="postPropertyPriceBreakUpList[0].componentPrice" class="ciDrop inputText basicInput _resetPriceOnTxnChange" onkeypress="return(ForceNumbersOnly(this, event, 'P'));" onkeyup="onKeyUpDown(this); currencyFormatOnUpDown(this);" onkeydown="onKeyUpDown(this); currencyFormatOnUpDown(this);" placeholder="Enter Basic Price" onblur="PriceBifurcation.displaySinglePriceBreakUp(this,'Basic Price','1006471');PriceBifurcation.calculateListPriceForCPD();" type="text" value="" maxlength="12"/>
									    	
									    	
									    
										<input type="hidden" value="1006471" name="postPropertyPriceBreakUpList[0].priceComponentId" id="priceComponentId_1006471"/>
							    	</span>
							    	
							    	 <div class="posRel">
									 	<div class="fieldValueCont _fieldValueCont1006471">
									 		<span class="helpArrow"></span>
									 		<div class="helpValue" id="helpValue">Basic Price <span class="priceIconToolTip"></span> <span class="_amount1006471"></span></div>
									 	</div>
									 </div>
 
							    </div>
							    
									
								    		<div class="formCom perWidth">Per Sqft</div>
								    		{/* <!-- <div class="formCom perWidth">   
						                        	<span class="priceBifurcationUnits">Sqft</span>
						                        <div class="unitBlockAreaDropDown">
						                            <ul></ul>
						                        </div>
						                     </div>  --> */}
						                     <div class="valiDated"></div>
											 <div class="clearAll"></div>
											 <div id="componentPrice_1006471Error" class="formErr" style={{display: "none"}}> 
											 	<span class="formErrArrow"></span>
											 	<span></span>
											 </div>
										 </div>
										 <div class="clearAll"></div>
										</div>
							    	
									
									
									
									
							    
        		
        			
        					<div class="formEle v--display " id="cpdPricecomponentId_1006472">
							  <div class="formLabel inputDrop">Floor PLC</div>
							  <div class="formValue">
							    <div class="priceIcon"></div>
							    
							    <div class="formCom">
							    	<span class="inputContainer">
							    		
									    	
									    		<input id="componentPrice_1006472" name="postPropertyPriceBreakUpList[1].componentPrice" class="ciDrop inputText basicInput _resetPriceOnTxnChange" onkeypress="return(ForceNumbersOnly(this, event, 'P'));" onkeyup="onKeyUpDown(this); currencyFormatOnUpDown(this);" onkeydown="onKeyUpDown(this); currencyFormatOnUpDown(this);" placeholder="Enter Floor PLC" onblur="PriceBifurcation.displaySinglePriceBreakUp(this,'Floor PLC','1006472');PriceBifurcation.calculateListPriceForCPD();" type="text" value="" maxlength="12"/>
									    	
									    	
									    
										<input type="hidden" value="1006472" name="postPropertyPriceBreakUpList[1].priceComponentId" id="priceComponentId_1006472"/>
							    	</span>
							    	
							    	 <div class="posRel">
									 	<div class="fieldValueCont _fieldValueCont1006472">
									 		<span class="helpArrow"></span>
									 		<div class="helpValue" id="helpValue">Floor PLC <span class="priceIconToolTip"></span> <span class="_amount1006472"></span></div>
									 	</div>
									 </div>
 
							    </div>
							    
									
								    		<div class="formCom perWidth">Per Sqft</div>
								    		{/* <!-- <div class="formCom perWidth">   
						                        	<span class="priceBifurcationUnits">Sqft</span>
						                        <div class="unitBlockAreaDropDown">
						                            <ul></ul>
						                        </div>
						                     </div>  --> */}
						                     <div class="valiDated"></div>
											 <div class="clearAll"></div>
											 <div id="componentPrice_1006472Error" class="formErr" style={{display: "none"}}> 
											 	<span class="formErrArrow"></span>
											 	<span></span>
											 </div>
										 </div>
										 <div class="clearAll"></div>
										</div>
							    	
									
									
									
									
							    
        		
        			
        					<div class="formEle v--display " id="cpdPricecomponentId_1006473">
							  <div class="formLabel inputDrop">Facing PLC</div>
							  <div class="formValue">
							    <div class="priceIcon"></div>
							    
							    <div class="formCom">
							    	<span class="inputContainer">
							    		
									    	
									    		<input id="componentPrice_1006473" name="postPropertyPriceBreakUpList[2].componentPrice" class="ciDrop inputText basicInput _resetPriceOnTxnChange" onkeypress="return(ForceNumbersOnly(this, event, 'P'));" onkeyup="onKeyUpDown(this); currencyFormatOnUpDown(this);" onkeydown="onKeyUpDown(this); currencyFormatOnUpDown(this);" placeholder="Enter Facing PLC" onblur="PriceBifurcation.displaySinglePriceBreakUp(this,'Facing PLC','1006473');PriceBifurcation.calculateListPriceForCPD();" type="text" value="" maxlength="12"/>
									    	
									    	
									    
										<input type="hidden" value="1006473" name="postPropertyPriceBreakUpList[2].priceComponentId" id="priceComponentId_1006473"/>
							    	</span>
							    	
							    	 <div class="posRel">
									 	<div class="fieldValueCont _fieldValueCont1006473">
									 		<span class="helpArrow"></span>
									 		<div class="helpValue" id="helpValue">Facing PLC <span class="priceIconToolTip"></span> <span class="_amount1006473"></span></div>
									 	</div>
									 </div>
 
							    </div>
							    
									
								    		<div class="formCom perWidth">Per Sqft</div>
								    		{/* <!-- <div class="formCom perWidth">   
						                        	<span class="priceBifurcationUnits">Sqft</span>
						                        <div class="unitBlockAreaDropDown">
						                            <ul></ul>
						                        </div>
						                     </div>  --> */}
						                     <div class="valiDated"></div>
											 <div class="clearAll"></div>
											 <div id="componentPrice_1006473Error" class="formErr" style={{display: "none"}}> 
											 	<span class="formErrArrow"></span>
											 	<span></span>
											 </div>
										 </div>
										 <div class="clearAll"></div>
										</div>
							    	
									
									
									
									
							    
        		
        			
        					<div class="formEle v--display " id="cpdPricecomponentId_1006474">
							  <div class="formLabel inputDrop">Open Car Parking</div>
							  <div class="formValue">
							    <div class="priceIcon"></div>
							    
							    <div class="formCom">
							    	<span class="inputContainer">
							    		
									    	
									    	
									    		<input id="componentPrice_1006474" name="postPropertyPriceBreakUpList[3].componentPrice" class="ciDrop inputText basicInput _resetPriceOnTxnChange" onkeypress="return(ForceNumbersOnly(this, event, 'P'));" onkeyup="onKeyUpDown(this); currencyFormatOnUpDown(this);" onkeydown="onKeyUpDown(this); currencyFormatOnUpDown(this);" placeholder="Enter Charges" onblur="PriceBifurcation.displaySinglePriceBreakUp(this,'Open Car Parking','1006474');PriceBifurcation.calculateListPriceForCPD();" type="text" value="" maxlength="12"/>
									    	
									    
										<input type="hidden" value="1006474" name="postPropertyPriceBreakUpList[3].priceComponentId" id="priceComponentId_1006474"/>
							    	</span>
							    	
							    	 <div class="posRel">
									 	<div class="fieldValueCont _fieldValueCont1006474">
									 		<span class="helpArrow"></span>
									 		<div class="helpValue" id="helpValue">Open Car Parking <span class="priceIconToolTip"></span> <span class="_amount1006474"></span></div>
									 	</div>
									 </div>
 
							    </div>
							    
									
									
							    		<div class="formCom perWidth">for</div>
							    		<div class="formCom formComPosAbsTR">   
					                        <span class="inputContainer">
					                        	<input type="button" id="convertPriceComponentArea_1006474" value="1 Unit" class="ciDrop basePriceDD" onClick="getCustomAreaOptionsCovered(event, this, '.formCom', 'componentUnitId_1006474')"/>
					                        </span>
					                        
					                        <select id="componentUnitId_1006474" name="postPropertyPriceBreakUpList[3].componentUnitId" class="_displaySelect" onChange="convertToSqFeet(document.getElementById('coveredArea'),'coveredAreaType','coveredAreaSqFt');changePriceSqFeetText();" size="1">
												<option value="1006411">1 Unit</option><option value="1006412">2 Unit</option><option value="1006413">3 Unit</option>
			                                </select>
					                         
					                        <div class="unitBlockAreaDropDown" style={{width: "81px", display: "none"}}>
					                            <ul></ul>
					                        </div>
					                     </div>
					                     <div class="formCom markFree">
							    				<span class="customCheckBox _span_maf1006474">
							    					<input id="markFree_1006474" name="postPropertyPriceBreakUpList[3].markFree" class="_markAsFree" style={{opacity: "0"}} onClick="customCheckBox(this, 'priceComponentMarkFree_1006474');" type="checkbox" value="Y"/><input type="hidden" name="_postPropertyPriceBreakUpList[3].markFree" value="on"/>
							    				</span> 
							    				<label for="markFree_1006474" class="curPoint">Mark as Free</label>
							    			</div>
										    <div id="" class="formErr"> <span class="formErrArrow"></span> Error message goes here </div>
					                     <div class="valiDated"></div>
										    <div class="clearAll"></div>
										  </div>
										  <div class="clearAll"></div>
										</div>
							    	
									
									
									
							    
        		
        			
        					<div class="formEle v--display " id="cpdPricecomponentId_1006475">
							  <div class="formLabel inputDrop">Covered Car Parking</div>
							  <div class="formValue">
							    <div class="priceIcon"></div>
							    
							    <div class="formCom">
							    	<span class="inputContainer">
							    		
									    	
									    	
									    		<input id="componentPrice_1006475" name="postPropertyPriceBreakUpList[4].componentPrice" class="ciDrop inputText basicInput _resetPriceOnTxnChange" onkeypress="return(ForceNumbersOnly(this, event, 'P'));" onkeyup="onKeyUpDown(this); currencyFormatOnUpDown(this);" onkeydown="onKeyUpDown(this); currencyFormatOnUpDown(this);" placeholder="Enter Charges" onblur="PriceBifurcation.displaySinglePriceBreakUp(this,'Covered Car Parking','1006475');PriceBifurcation.calculateListPriceForCPD();" type="text" value="" maxlength="12"/>
									    	
									    
										<input type="hidden" value="1006475" name="postPropertyPriceBreakUpList[4].priceComponentId" id="priceComponentId_1006475"/>
							    	</span>
							    	
							    	 <div class="posRel">
									 	<div class="fieldValueCont _fieldValueCont1006475">
									 		<span class="helpArrow"></span>
									 		<div class="helpValue" id="helpValue">Covered Car Parking <span class="priceIconToolTip"></span> <span class="_amount1006475"></span></div>
									 	</div>
									 </div>
 
							    </div>
							    
									
									
							    		<div class="formCom perWidth">for</div>
							    		<div class="formCom formComPosAbsTR">   
					                        <span class="inputContainer">
					                        	<input type="button" id="convertPriceComponentArea_1006475" value="1 Unit" class="ciDrop basePriceDD" onClick="getCustomAreaOptionsCovered(event, this, '.formCom', 'componentUnitId_1006475')"/>
					                        </span>
					                        
					                        <select id="componentUnitId_1006475" name="postPropertyPriceBreakUpList[4].componentUnitId" class="_displaySelect" onChange="convertToSqFeet(document.getElementById('coveredArea'),'coveredAreaType','coveredAreaSqFt');changePriceSqFeetText();" size="1">
												<option value="1006411">1 Unit</option><option value="1006412">2 Unit</option><option value="1006413">3 Unit</option>
			                                </select>
					                         
					                        <div class="unitBlockAreaDropDown" style={{width: "81px", display: "none"}}>
					                            <ul></ul>
					                        </div>
					                     </div>
					                     <div class="formCom markFree">
							    				<span class="customCheckBox _span_maf1006475">
							    					<input id="markFree_1006475" name="postPropertyPriceBreakUpList[4].markFree" class="_markAsFree" style={{opacity: "0"}} onClick="customCheckBox(this, 'priceComponentMarkFree_1006475');" type="checkbox" value="Y"/><input type="hidden" name="_postPropertyPriceBreakUpList[4].markFree" value="on"/>
							    				</span> 
							    				<label for="markFree_1006475" class="curPoint">Mark as Free</label>
							    			</div>
										    <div id="" class="formErr"> <span class="formErrArrow"></span> Error message goes here </div>
					                     <div class="valiDated"></div>
										    <div class="clearAll"></div>
										  </div>
										  <div class="clearAll"></div>
										</div>
							    	
									
									
									
							    
        		
        			
        					<div class="formEle v--display hide" id="cpdPricecomponentId_1006476">
							  <div class="formLabel inputDrop">Club Membership</div>
							  <div class="formValue">
							    <div class="priceIcon"></div>
							    
							    <div class="formCom">
							    	<span class="inputContainer">
							    		
									    	
									    	
									    		<input id="componentPrice_1006476" name="postPropertyPriceBreakUpList[5].componentPrice" class="ciDrop inputText basicInput _resetPriceOnTxnChange" onkeypress="return(ForceNumbersOnly(this, event, 'P'));" onkeyup="onKeyUpDown(this); currencyFormatOnUpDown(this);" onkeydown="onKeyUpDown(this); currencyFormatOnUpDown(this);" placeholder="Enter Charges" onblur="PriceBifurcation.displaySinglePriceBreakUp(this,'Club Membership','1006476');PriceBifurcation.calculateListPriceForCPD();" type="text" value="" maxlength="12"/>
									    	
									    
										<input type="hidden" value="1006476" name="postPropertyPriceBreakUpList[5].priceComponentId" id="priceComponentId_1006476"/>
							    	</span>
							    	
							    	 <div class="posRel">
									 	<div class="fieldValueCont _fieldValueCont1006476">
									 		<span class="helpArrow"></span>
									 		<div class="helpValue" id="helpValue">Club Membership <span class="priceIconToolTip"></span> <span class="_amount1006476"></span></div>
									 	</div>
									 </div>
 
							    </div>
							    
									
									
									
									
					                     <div class="formCom markFree">
							    				<span class="customCheckBox _span_maf1006476">
							    					<input id="markFree_1006476" name="postPropertyPriceBreakUpList[5].markFree" class="_markAsFree" style={{opacity: "0"}} onClick="customCheckBox(this, 'priceComponentMarkFree_1006476');" type="checkbox" value="Y"/><input type="hidden" name="_postPropertyPriceBreakUpList[5].markFree" value="on"/>
							    				</span> 
							    				<label for="markFree_1006476" class="curPoint">Mark as Free</label>
							    			</div>
										    <div id="" class="formErr"> <span class="formErrArrow"></span> Error message goes here </div>
					                     <div class="valiDated"></div>
										    <div class="clearAll"></div>
										  </div>
										  <div class="clearAll"></div>
										</div>
							    	
									
							    
        		
        			
        					<div class="formEle v--display hide" id="cpdPricecomponentId_1006477">
							  <div class="formLabel inputDrop">Power Backup</div>
							  <div class="formValue">
							    <div class="priceIcon"></div>
							    
							    <div class="formCom">
							    	<span class="inputContainer">
							    		
									    	
									    	
									    		<input id="componentPrice_1006477" name="postPropertyPriceBreakUpList[6].componentPrice" class="ciDrop inputText basicInput _resetPriceOnTxnChange" onkeypress="return(ForceNumbersOnly(this, event, 'P'));" onkeyup="onKeyUpDown(this); currencyFormatOnUpDown(this);" onkeydown="onKeyUpDown(this); currencyFormatOnUpDown(this);" placeholder="Enter Charges" onblur="PriceBifurcation.displaySinglePriceBreakUp(this,'Power Backup','1006477');PriceBifurcation.calculateListPriceForCPD();" type="text" value="" maxlength="12"/>
									    	
									    
										<input type="hidden" value="1006477" name="postPropertyPriceBreakUpList[6].priceComponentId" id="priceComponentId_1006477"/>
							    	</span>
							    	
							    	 <div class="posRel">
									 	<div class="fieldValueCont _fieldValueCont1006477">
									 		<span class="helpArrow"></span>
									 		<div class="helpValue" id="helpValue">Power Backup <span class="priceIconToolTip"></span> <span class="_amount1006477"></span></div>
									 	</div>
									 </div>
 
							    </div>
							    
									
									
									
							    		<div class="formCom perWidth">for</div>
							    		<div class="formCom formComPosAbsTR">   
					                        <span class="inputContainer">
					                        	<input type="button" id="convertPriceComponentArea_1006477" value="1 KVA" class="ciDrop basePriceDD" onClick="getCustomAreaOptionsCovered(event, this, '.formCom', 'componentUnitId_1006477')"/>
					                        </span>
					                        
					                        <select id="componentUnitId_1006477" name="postPropertyPriceBreakUpList[6].componentUnitId" class="_displaySelect" onChange="convertToSqFeet(document.getElementById('coveredArea'),'coveredAreaType','coveredAreaSqFt');changePriceSqFeetText();" size="1">
												<option value="1006421">1 KVA</option><option value="1006422">2 KVA</option><option value="1006423">3 KVA</option><option value="1006424">4 KVA</option><option value="1006425">5 KVA</option>
			                                </select>
					                         
					                        <div class="unitBlockAreaDropDown" style={{display: "none"}}>
					                            <ul></ul>
					                        </div>
					                     </div>
					                     <div class="formCom markFree">
							    				<span class="customCheckBox _span_maf1006477">
							    					<input id="markFree_1006477" name="postPropertyPriceBreakUpList[6].markFree" class="_markAsFree" style={{opacity: "0"}} onClick="customCheckBox(this, 'priceComponentMarkFree_1006477');" type="checkbox" value="Y"/><input type="hidden" name="_postPropertyPriceBreakUpList[6].markFree" value="on"/>
							    				</span> 
							    				<label for="markFree_1006477" class="curPoint">Mark as Free</label>
							    			</div>
										    <div id="" class="formErr"> <span class="formErrArrow"></span> Error message goes here </div>
					                     <div class="valiDated"></div>
										    <div class="clearAll"></div>
										  </div>
										  <div class="clearAll"></div>
										</div>
							    	
									
									
							    
        		
        			
        					<div class="formEle v--display hide" id="cpdPricecomponentId_1006478">
							  <div class="formLabel inputDrop">Electricity/Water Charges</div>
							  <div class="formValue">
							    <div class="priceIcon"></div>
							    
							    <div class="formCom">
							    	<span class="inputContainer">
							    		
									    	
									    	
									    		<input id="componentPrice_1006478" name="postPropertyPriceBreakUpList[7].componentPrice" class="ciDrop inputText basicInput _resetPriceOnTxnChange" onkeypress="return(ForceNumbersOnly(this, event, 'P'));" onkeyup="onKeyUpDown(this); currencyFormatOnUpDown(this);" onkeydown="onKeyUpDown(this); currencyFormatOnUpDown(this);" placeholder="Enter Charges" onblur="PriceBifurcation.displaySinglePriceBreakUp(this,'Electricity/Water Charges','1006478');PriceBifurcation.calculateListPriceForCPD();" type="text" value="" maxlength="12"/>
									    	
									    
										<input type="hidden" value="1006478" name="postPropertyPriceBreakUpList[7].priceComponentId" id="priceComponentId_1006478"/>
							    	</span>
							    	
							    	 <div class="posRel">
									 	<div class="fieldValueCont _fieldValueCont1006478">
									 		<span class="helpArrow"></span>
									 		<div class="helpValue" id="helpValue">Electricity/Water Charges <span class="priceIconToolTip"></span> <span class="_amount1006478"></span></div>
									 	</div>
									 </div>
 
							    </div>
							    
									
									
									
									
					                     <div class="formCom markFree">
							    				<span class="customCheckBox _span_maf1006478">
							    					<input id="markFree_1006478" name="postPropertyPriceBreakUpList[7].markFree" class="_markAsFree" style={{opacity: "0"}} onClick="customCheckBox(this, 'priceComponentMarkFree_1006478');" type="checkbox" value="Y"/><input type="hidden" name="_postPropertyPriceBreakUpList[7].markFree" value="on"/>
							    				</span> 
							    				<label for="markFree_1006478" class="curPoint">Mark as Free</label>
							    			</div>
										    <div id="" class="formErr"> <span class="formErrArrow"></span> Error message goes here </div>
					                     <div class="valiDated"></div>
										    <div class="clearAll"></div>
										  </div>
										  <div class="clearAll"></div>
										</div>
							    	
									
							    
        		
        			
        					<div class="formEle v--display hide" id="cpdPricecomponentId_1006479">
							  <div class="formLabel inputDrop">Lease Rent</div>
							  <div class="formValue">
							    <div class="priceIcon"></div>
							    
							    <div class="formCom">
							    	<span class="inputContainer">
							    		
									    	
									    	
									    		<input id="componentPrice_1006479" name="postPropertyPriceBreakUpList[8].componentPrice" class="ciDrop inputText basicInput _resetPriceOnTxnChange" onkeypress="return(ForceNumbersOnly(this, event, 'P'));" onkeyup="onKeyUpDown(this); currencyFormatOnUpDown(this);" onkeydown="onKeyUpDown(this); currencyFormatOnUpDown(this);" placeholder="Enter Charges" onblur="PriceBifurcation.displaySinglePriceBreakUp(this,'Lease Rent','1006479');PriceBifurcation.calculateListPriceForCPD();" type="text" value="" maxlength="12"/>
									    	
									    
										<input type="hidden" value="1006479" name="postPropertyPriceBreakUpList[8].priceComponentId" id="priceComponentId_1006479"/>
							    	</span>
							    	
							    	 <div class="posRel">
									 	<div class="fieldValueCont _fieldValueCont1006479">
									 		<span class="helpArrow"></span>
									 		<div class="helpValue" id="helpValue">Lease Rent <span class="priceIconToolTip"></span> <span class="_amount1006479"></span></div>
									 	</div>
									 </div>
 
							    </div>
							    
									
									
									
									
									
							    		<div class="formCom perWidth"></div>
							    		<div class="valiDated"></div>
										    <div class="clearAll"></div>
										    <div id="" class="formErr"> <span class="formErrArrow"></span> Error message goes here </div>
										  </div>
										  <div class="clearAll"></div>
										</div>
							    	
							    
        		
        			
        					<div class="formEle v--display hide" id="cpdPricecomponentId_1006480">
							  <div class="formLabel inputDrop">IFMS</div>
							  <div class="formValue">
							    <div class="priceIcon"></div>
							    
							    <div class="formCom">
							    	<span class="inputContainer">
							    		
									    	
									    	
									    		<input id="componentPrice_1006480" name="postPropertyPriceBreakUpList[9].componentPrice" class="ciDrop inputText basicInput _resetPriceOnTxnChange" onkeypress="return(ForceNumbersOnly(this, event, 'P'));" onkeyup="onKeyUpDown(this); currencyFormatOnUpDown(this);" onkeydown="onKeyUpDown(this); currencyFormatOnUpDown(this);" placeholder="Enter Charges" onblur="PriceBifurcation.displaySinglePriceBreakUp(this,'IFMS','1006480');PriceBifurcation.calculateListPriceForCPD();" type="text" value="" maxlength="12"/>
									    	
									    
										<input type="hidden" value="1006480" name="postPropertyPriceBreakUpList[9].priceComponentId" id="priceComponentId_1006480"/>
							    	</span>
							    	
							    	 <div class="posRel">
									 	<div class="fieldValueCont _fieldValueCont1006480">
									 		<span class="helpArrow"></span>
									 		<div class="helpValue" id="helpValue">IFMS <span class="priceIconToolTip"></span> <span class="_amount1006480"></span></div>
									 	</div>
									 </div>
 
							    </div>
							    
									
									
									
									
									
							    		<div class="formCom perWidth"></div>
							    		<div class="valiDated"></div>
										    <div class="clearAll"></div>
										    <div id="" class="formErr"> <span class="formErrArrow"></span> Error message goes here </div>
										  </div>
										  <div class="clearAll"></div>
										</div>
							    	
							    
        		
        			
        					<div class="formEle v--display hide" id="cpdPricecomponentId_1006481">
							  <div class="formLabel inputDrop">EEC/FFC</div>
							  <div class="formValue">
							    <div class="priceIcon"></div>
							    
							    <div class="formCom">
							    	<span class="inputContainer">
							    		
									    	
									    	
									    		<input id="componentPrice_1006481" name="postPropertyPriceBreakUpList[10].componentPrice" class="ciDrop inputText basicInput _resetPriceOnTxnChange" onkeypress="return(ForceNumbersOnly(this, event, 'P'));" onkeyup="onKeyUpDown(this); currencyFormatOnUpDown(this);" onkeydown="onKeyUpDown(this); currencyFormatOnUpDown(this);" placeholder="Enter Charges" onblur="PriceBifurcation.displaySinglePriceBreakUp(this,'EEC/FFC','1006481');PriceBifurcation.calculateListPriceForCPD();" type="text" value="" maxlength="12"/>
									    	
									    
										<input type="hidden" value="1006481" name="postPropertyPriceBreakUpList[10].priceComponentId" id="priceComponentId_1006481"/>
							    	</span>
							    	
							    	 <div class="posRel">
									 	<div class="fieldValueCont _fieldValueCont1006481">
									 		<span class="helpArrow"></span>
									 		<div class="helpValue" id="helpValue">EEC/FFC <span class="priceIconToolTip"></span> <span class="_amount1006481"></span></div>
									 	</div>
									 </div>
 
							    </div>
							    
									
									
									
									
									
							    		<div class="formCom perWidth"></div>
							    		<div class="valiDated"></div>
										    <div class="clearAll"></div>
										    <div id="" class="formErr"> <span class="formErrArrow"></span> Error message goes here </div>
										  </div>
										  <div class="clearAll"></div>
										</div>
							    	
							    
        		
        			
        					<div class="formEle v--display hide" id="cpdPricecomponentId_1006482">
							  <div class="formLabel inputDrop">Other Charges</div>
							  <div class="formValue">
							    <div class="priceIcon"></div>
							    
							    <div class="formCom">
							    	<span class="inputContainer">
							    		
									    	
									    	
									    		<input id="componentPrice_1006482" name="postPropertyPriceBreakUpList[11].componentPrice" class="ciDrop inputText basicInput _resetPriceOnTxnChange" onkeypress="return(ForceNumbersOnly(this, event, 'P'));" onkeyup="onKeyUpDown(this); currencyFormatOnUpDown(this);" onkeydown="onKeyUpDown(this); currencyFormatOnUpDown(this);" placeholder="Enter Charges" onblur="PriceBifurcation.displaySinglePriceBreakUp(this,'Other Charges','1006482');PriceBifurcation.calculateListPriceForCPD();" type="text" value="" maxlength="12"/>
									    	
									    
										<input type="hidden" value="1006482" name="postPropertyPriceBreakUpList[11].priceComponentId" id="priceComponentId_1006482"/>
							    	</span>
							    	
							    	 <div class="posRel">
									 	<div class="fieldValueCont _fieldValueCont1006482">
									 		<span class="helpArrow"></span>
									 		<div class="helpValue" id="helpValue">Other Charges <span class="priceIconToolTip"></span> <span class="_amount1006482"></span></div>
									 	</div>
									 </div>
 
							    </div>
							    
									
									
									
									
									
							    		<div class="formCom perWidth"></div>
							    		<div class="valiDated"></div>
										    <div class="clearAll"></div>
										    <div id="" class="formErr"> <span class="formErrArrow"></span> Error message goes here </div>
										  </div>
										  <div class="clearAll"></div>
										</div>
							    	
							    
        		
				<div class="formEle hide _totalDisplayedHide v--display" id="otherChargesComponentOptions">
						<div class="formLabel inputDrop">Select New Component</div>
						<div class="formValue">
						<div class="formCom">
							<span class="inputContainer">
								<input type="button" id="remainingPriceComponentOptionsVal" value="Select Price Component" class="ciDrop" onClick="getCustomAreaOptionsCovered(event, this, '.formCom', 'remainingPriceComponentOptions')"/>
							</span>
							<select id="remainingPriceComponentOptions" class="areaList">
								<option value="-1">Select Price Component</option>
								
									
								
									
								
									
								
									
								
									
								
									
										<option value="1006476">Club Membership</option>
									
								
									
										<option value="1006477">Power Backup</option>
									
								
									
										<option value="1006478">Electricity/Water Charges</option>
									
								
									
										<option value="1006479">Lease Rent</option>
									
								
									
										<option value="1006480">IFMS</option>
									
								
									
										<option value="1006481">EEC/FFC</option>
									
								
									
										<option value="1006482">Other Charges</option>
									
								
							</select>
							<div class="unitBlockAreaDropDown" style={{display: "none"}}>
                               <ul></ul>
                           	</div>
						</div>
					</div>
					<div class="clearAll"></div>
				</div>
        		<div class="formEle _totalDisplayedHide v--display">
        			<div class="formLabel">&nbsp;</div>
					<div class="formValue">
						<div id="addOtherPrice" class="addPPS" style={{margin: "0"}}>
							<a id="addOtherPriceComponent" href="#!"><span></span>Add other charges</a>
						</div>
					</div>
					<div class="clearAll"></div>
				</div>
				<div class="clearAll"></div>
        	</div>
        	<div id="tpdiv" style={{display: "block"}}> 
			{/* <!--total price div starts "tpdiv"--> */}
            	<div class="formEle v--display" id="totalPriceDiv">
                    <div class="formLabel price" id="salePriceLabel">Expected Price</div>
                    <div class="formLabel price" id="rentPriceLabel" style={{display: "none"}}>Monthly Rent</div>
                    
                    <div class="formValue">
                        <div class="priceBlk">
                        	<div class="priceIcon"></div>
                            <ul class="priceSel errorEventHandler">
                            	
                                    <span class="inputContainer">
                                    	<input id="totalPrice" name="totalPrice" class="ciDrop inputText totalPrice" onkeypress="return(ForceNumbersOnly(this, event, 'P'));" onkeyup="onKeyUpDown(this); currencyFormatOnUpDown(this); fromNumberToWords(this,'price_in_rs');" onkeydown="onKeyUpDown(this); currencyFormatOnUpDown(this);" placeholder="Enter Total Price" onblur="updatePrice('field');" onChange={handleBudget} type="number" value={Property_Budget} maxlength="12"/>
                                    </span>
                                
                               
                                
                            </ul>
                            <div class="clearAll"></div>
	                        <div id="totalPriceError" class="formErr" style={{display: "none"}}>
	                            <span class="formErrArrow"></span>
	                            <span>Error message goes here</span>
	                        </div>
                            <div class="clearAll"></div>
                            <div class="amtInWord" id="price_in_rs"></div>
                             <div id="pricePerPersonDailyLi" style={{display: "none"}}>
                                	<div class="priceHeader">&nbsp;</div>
                                    <span class="inputContainer">Price Per Seat - Daily
                                        <div class="priceIcon"></div>
                                    	<input id="pricePerPersonDaily" name="pricePerPersonDaily" class="ciDrop inputText totalPrice" onkeypress="return(ForceNumbersOnly(this, event, 'P'));" onkeyup="onKeyUpDown(this); currencyFormatOnUpDown(this);" onkeydown="onKeyUpDown(this); currencyFormatOnUpDown(this);" placeholder="Enter Price Per Person" onblur="fromNumberToWords(this,'price_in_rs');updatePrice('field');" type="text" value="" maxlength="12"/>
                                    </span>
                             </div>
                        </div>
                        <div class="clearAll"></div>
                        {/* <!--  <div class="addPPS" id="addPricePerUnitId"><a href="#!" id="addPricePerUnitLink"><span></span>Add Price per Sq ft</a></div>--> */}
                        
                </div>
                <div class="formValue">
					<div class="clearAll"></div>
					<div id="totalPriceErrorWarDiv" class="formWarning" style={{display: "none"}}></div>
					<div class="clearAll"></div>
				</div>
            	<div class="clearAll"></div>
            </div>
            
            
            
            <div class="formEle v--display" id="perUnitPriceDiv" >
                    <div class="formLabel inputDrop" id="salePerUnitPrice" style={{marginLeft:"350px",marginTop:"-49px"}}>Price per Sq-ft :</div>
                    <div class="formValue">
                        <div style={{marginLeft:"350px",marginTop:"-9px"}} class="priceIcon"></div>
                        <div class="formCom formComCW220">
                            <span class="inputContainer">
                            	<input id="perUnitPrice" style={{marginLeft:"-15px",marginTop:"-49px"}} name="perUnitPrice" class="ciDrop inputText pps _resetPriceOnTxnChange" onkeypress="return(ForceNumbersOnly(this, event, 'P'));" onkeyup="onKeyUpDown(this); currencyFormatOnUpDown(this);fromNumberToWords(this,'unit_price_in_rs');" onkeydown="onKeyUpDown(this);" type="text" value="" maxlength="11"/>
                            	<div class="amtInWord" id="unit_price_in_rs" style={{fontSize: "12px"}}></div>
                        	</span>
                        </div>
                        <div class="valiDated"></div>
                        <div class="clearAll"></div>
                        <div id="perUnitPriceError" class="formErr" style={{display: "none"}}>
                            <span class="formErrArrow"></span>
                            <span>Error message goes here</span>
                        </div>
                </div>
            	<div class="clearAll"></div>
            </div>
            
            <div class="formEle v--display" id="bookingAmountDivOwnr" style={{display: "none"}}>
                    <div class="formLabel inputDrop" style={{whiteSpace: "nowrap"}}><span id="bookingAmountlable">Booking/Token Amount</span><span class="pp__magiccasn__int" id="bookingAmount_cash" style={{display: "none"}}><span class="pp__magiccasn__coins"></span><span class="pp__magiccasn__intbold">50</span> Magic Cash</span></div>
                    <div class="formValue">
                        <div class="priceIcon"></div>
                        <div class="formCom">
                            <span class="inputContainer">
                            	<input id="bookingAmount" name="bookingAmount" class="ciDrop inputText" onkeypress="return(ForceNumbersOnly(this, event, 'P'));" onkeyup="onKeyUpDown(this); currencyFormatOnUpDown(this); fromNumberToWords(this,'bookingAmount_in_rs');" onkeydown="onKeyUpDown(this);" rel="Booking/Token amount is the initial amount that a buyer needs to pay for booking the property." placeholder="Booking/Token Amount" onchange="showScore('bookingAmount',this.value);changeScoreClass('bookingId',this.value);" type="text" value="" maxlength="12"/>
                            </span>
                        </div>
                        <div class="valiDated" id="bookingAmountTick"></div>
                        <div class="clearAll"></div>
                        <div class="amtInWord" id="bookingAmount_in_rs" style={{textAlign: "left"}}></div>
                        <div class="clearAll"></div>
                        <div id="bookingAmountError" class="formErr" style={{display: "none"}}>
                            <span class="formErrArrow"></span>
                            <span>Error message goes here</span>
                        </div>
                </div>
            	<div class="clearAll"></div>
            </div>
            
            <div class="clearAll"></div>
            
            <div class="formEle" id="showPriceAsDiv" style={{display: "none"}}>
            	<div class="formLabel">Show <span id="listTypeText">Price</span> as<span></span></div>
                <div class="formValue showPrice rupeeSpc">
                	<div class="radioBlock">
                    	<ul>
                        	<li>
	                        	<span class="customRadioButton checked">
								  	<input id="as_it_is_radio" name="showPriceAs" class="ppRadio" style={{opacity: "0"}} onClick="customRadioButtonNew(this, 'showPriceAs');" type="radio" value="A" checked="checked"/>
								</span> 
								<label for="as_it_is_radio" class="curPoint" id="priceInAmountSpan1"></label>
	                         </li>
                            <li>
                            	<span class="customRadioButton">
                            	 	<input id="as_it_is_radio2" name="showPriceAs" class="ppRadio" style={{opacity: "0"}} onClick="customRadioButtonNew(this, 'showPriceAs');" type="radio" value="N"/>
								</span> 
								<label for="as_it_is_radio2" class="curPoint" id="priceInAmountSpan2"></label>
								<span class="posRel">
									<span id="negotiable_id"> Negotiable</span>
									<span class="callOutPrice"><b></b>Negotiable: if you may agree to reduce the price</span>
								</span>
                             </li>
                            <li id="onwards_id" style={{display: "none"}}>
                            	<span class="customRadioButton">
                            		<input id="onwards_radio" name="showPriceAs" class="ppRadio" style={{opacity: "0", display: "none"}} onClick="customRadioButtonNew(this, 'showPriceAs');" type="radio" value="O"/>
								</span> 
								<label for="onwards_radio" class="curPoint" id="priceInAmountSpan3"></label>
								<span class="posRel">
									<span id="forOnward"> Onwards</span>
									<span class="callOutPrice onword"><b></b>Onwards: if you're not willing to sell below the mentioned price</span>
								</span>
                              </li>
                              
                             <li>
                            	<span class="customRadioButton">
                            		<input id="callForPrice" name="showPriceAs" class="ppRadio" style={{opacity: "0"}} onClick="customRadioButtonNew(this, 'showPriceAs');" type="radio" value="C"/>
								</span> 
								<label for="callForPrice" class="curPoint" id="callForPrice_radio">
								<span class="posRel">
									<span id="callForPrice_radio">Call for Price</span>
									<span class="callOutPrice callforPrice"><b></b>Call for price: if you wish to hide the price</span>
								</span>
								</label>
                            </li>
                        </ul>
                        <div class="clearAll"></div>
                    </div>
                    <div class="clearAll"></div>
                    <div style={{top: "25px", display: "none"}} class="formErr" id="showPriceAsError">
                        <span class="formErrArrow"></span>
                        <span class="callForPriceAsError">Error message goes here</span>
                    </div> 
                </div>
            	<div class="clearAll"></div>
                
            </div>
            
            
            <div class="formEle" id="priceIncludes" style={{}}>
            	<div class="formLabel">Price Includes<span class="pp__magiccasn__int" id="priceIncludes_cash" style={{display: "none"}}><span class="pp__magiccasn__coins"></span><span class="pp__magiccasn__intbold">50</span> Magic Cash</span></div> 
                <div class="formValue rupeeSpc">
                	<div class="radioBlock" id="priceIncludesData">
                    	<ul>
                    		
	                        	<li>
	                        		<span class="customCheckBox">
	                        			<input id="priceIncludes11911" name="priceIncludes" style={{opacity: "0"}} onClick="customCheckBox(this, 'priceIncludes11911');showScoreChechboxscore('priceIncludes');" type="checkbox" value="11911"/><input type="hidden" name="_priceIncludes" value="on"/>
	                        		</span> 
	                        		<label class="curPoint" for="priceIncludes11911">PLC</label>
	                        	</li>
	                        
	                        	<li>
	                        		<span class="customCheckBox">
	                        			<input id="priceIncludes11912" name="priceIncludes" style={{opacity: "0"}} onClick="customCheckBox(this, 'priceIncludes11912');showScoreChechboxscore('priceIncludes');" type="checkbox" value="11912"/><input type="hidden" name="_priceIncludes" value="on"/>
	                        		</span> 
	                        		<label class="curPoint" for="priceIncludes11912">Car Parking</label>
	                        	</li>
	                        
	                        	<li>
	                        		<span class="customCheckBox">
	                        			<input id="priceIncludes11913" name="priceIncludes" style={{opacity: "0"}} onClick="customCheckBox(this, 'priceIncludes11913');showScoreChechboxscore('priceIncludes');" type="checkbox" value="11913"/><input type="hidden" name="_priceIncludes" value="on"/>
	                        		</span> 
	                        		<label class="curPoint" for="priceIncludes11913">Club Membership</label>
	                        	</li>
	                        
                        </ul>
                    </div>
                </div>
                
            	<div class="clearAll"></div>
            </div>
            
            <div class="clearAll"></div>
            
            <div class="formEle" id="hideOtherCharges" style={{}}>
            	<div class="formValue addPPS" style={{marginTop: "0"}}>
            		<a href="#!" id="otherChargesLink"><span></span>Add Other Charges</a>
            	</div>
            	<div class="clearAll"></div>
            </div>
            <div class="clearAll"></div>
            
            <div class="formEle v--display" id="showOtherCharfes" style={{display: "none"}}>
                    <div class="formLabel inputDrop">Other Charges<span class="pp__magiccasn__int" id="otherCharges_cash" style={{display: "none"}}><span class="pp__magiccasn__coins"></span><span class="pp__magiccasn__intbold">50</span> Magic Cash</span></div>
                    <div class="formValue">
                        
                        <div class="formCom">
                            <span class="inputContainer">
                            	<input id="otherCharges" name="otherCharges" class="ciDrop inputText _resetPriceOnTxnChange" placeholder="Other Charges" onchange="showScore('bookingAmount',$('#bookingAmount').val());" type="text" value=""/>
                            </span>
                        </div>
                        <div class="valiDated" id="otherChargesTick"></div>
                        <div class="clearAll"></div>
                        <div class="formErr" id="otherChargesError" style={{display: "none"}}>
                            <span class="formErrArrow"></span>
                            <span>Error message goes here</span>
                        </div>
                </div>
            	<div class="clearAll"></div>
            </div>
            </div> 
			{/* <!--total price div end "tpdiv"--> */}
            <div class="clearAll">
            
            
            <div class="formEle" id="stampAndOtherChargesdiv" style={{display: "block"}}>
                <div class="formValue">
                	<div class="radioBlock">
                    	<ul>
                        	<li><span class="customCheckBox checked">
                        	<input id="stampAndOtherCharges" name="stampAndOtherCharges" style={{opacity: "0"}} onClick="customCheckBox(this, 'stampAndOtherCharges');" checked="checked" class="chBox" type="checkbox" value="Y"/><input type="hidden" name="_stampAndOtherCharges" value="on"/> 
                        	</span> <label class="curPoint" for="stampAndOtherCharges" id="stampText">Stamp Duty &amp; Registration charges excluded.</label></li>
                        </ul>
                    </div>
                </div>
            	<div class="clearAll"></div>
            </div>
            <div class="clearAll"></div>
            <div class="listedPriceBlock hide" style={{display: "none"}}>
        		<div class="listedText">The Listed price visible to buyers is ₹ <span id="priceInAmountSpan4" class="_listedPriceBlockAmount"></span></div>
        	</div>
            
            <div class="clearAll"></div>


		<div class="formEle" id="otherChargestxt" style={{display: "none"}}>
			<div class="formLabel">Other Charges</div>
			<div class="clearAll"></div>
		</div>

		<div class="formEle v--display" id="electricityAmountdiv" style={{display: "none"}}>
                    <div class="formLabel inputDrop" id="">Electricity</div>
                    <div class="formValue">
                        <div class="priceIcon"></div>
                        <div class="formCom">
                            <span class="inputContainer">
                            	<input id="electricityAmount" name="electricityAmount" class="ciDrop inputText" onkeypress="return(ForceNumbersOnly(this, event, 'P'));" onkeyup="onKeyUpDown(this); currencyFormatOnUpDown(this);" onkeydown="onKeyUpDown(this);" placeholder="Electricity Amount" type="text" value="" maxlength="6"/>
                            </span>
                        </div>
                        <div class="valiDated" id="electricityAmountTick"></div>
                        <div class="clearAll"></div>
                        <div class="amtInWord" id="electricityAmount_in_rs"></div>
                        <div class="clearAll"></div>
                        <div id="electricityAmountError" class="formErr" style={{display: "none"}}>
                            <span class="formErrArrow"></span>
                            <span>Error message goes here</span>
                        </div>
                </div>
            	<div class="clearAll"></div>
            </div>
            <div class="clearAll"></div>
            
            
            <div class="formEle v--display" id="laundryAmountdiv" style={{display: "none"}}>
                    <div class="formLabel inputDrop" id="laundryAmountlable">Laundry</div>
                    <div class="formValue">
                        <div class="priceIcon"></div>
                        <div class="formCom">
                            <span class="inputContainer">
                            	<input id="laundryAmount" name="laundryAmount" class="ciDrop inputText" onkeypress="return(ForceNumbersOnly(this, event, 'P'));" onkeyup="onKeyUpDown(this); currencyFormatOnUpDown(this);" onkeydown="onKeyUpDown(this);" placeholder="Laundry Amount" type="text" value="" maxlength="6"/>
                            </span>
                        </div>
                        <div class="valiDated" id="laundryAmountTick"></div>
                        <div class="clearAll"></div>
                        <div class="amtInWord" id="laundryAmount_in_rs"></div>
                        <div class="clearAll"></div>
                        <div id="laundryAmountError" class="formErr" style={{display: "none"}}>
                            <span class="formErrArrow"></span>
                            <span>Error message goes here</span>
                        </div>
                </div>
            	<div class="clearAll"></div>
            </div>
            <div class="clearAll"></div>
            
            
            <div class="formEle v--display" id="bookingAmountDiv" style={{}}></div>
            <div class="clearAll"></div>
            <div id="mainCharges"></div>
            <div class="formEle v--display" id="maintenanceChargesDiv" style={{}}>
                    <div class="formLabel inputDrop">Maintenance Charges <span class="pp__magiccasn__int" id="maintenanceCharges_cash" style={{display: "none"}}><span class="pp__magiccasn__coins"></span><span class="pp__magiccasn__intbold">30</span> Magic Cash</span></div>
                    <div class="formValue">
                        <div class="priceIcon"></div>
                        <div class="formCom">
                            <span class="inputContainer ftlt">
                            	<input id="maintenanceCharges" style={{marginLeft:"10px",marginTop:"-38px"}} name="maintenanceCharges" class="ciDrop inputText maintCharge" onkeypress="return(ForceNumbersOnly(this, event, 'P'));" onkeyup="onKeyUpDown(this); currencyFormatOnUpDown(this, true);fromNumberToWords(this,'maintenanceCharges_in_rs');" onkeydown="onKeyUpDown(this);" rel="Maintenance charges is the amount that need to be paid for the upkeep &amp; maintenance of the society." placeholder="Maintenance Charges" onchange="showScore('maintenanceCharges',this.value);changeScoreClass('MaintenanceChargesId',this.value);" type="text" value="" maxlength="12"/>
                            </span>
                            <div class="formCom perWidth" style={{marginLeft:"230px",marginTop:"-55px",paddingBottom:"-30px"}}>per</div>
                            <span class="inputContainer ftlt">&nbsp;
                            	<div class="formCom">   
                                        <span class="inputContainer">
                                        	<input type="button" id="maintenanceChargeFrequencyVal" style={{marginLeft:"310px",marginTop:"-500px"}} value="Monthly" class="ciDrop monthlyDD" onClick="getCustomAreaOptionsCovered(event, this, '.formCom', 'maintenanceChargeFrequency')"/>
                                        </span>
                                        
                                         <select id="maintenanceChargeFrequency" name="maintenanceChargeFrequency" class="areaList" style={{display: "none"}}>
	                                          <option value="23001">Monthly</option><option value="23002">Quarterly</option><option value="23003">Yearly</option><option value="23004">One-Time</option><option value="23005">Per sq. Unit Monthly</option>
                                        </select>
                                        
                                        <div class="unitBlockAreaDropDown" style={{display: "none"}}>
                                            <ul></ul>
                                        </div>
                                 </div>
                            </span>
                        </div>
                        <div class="valiDated" id="maintenanceChargesTick"></div>
                        <div class="clearAll"></div>
                        <div class="amtInWord" id="maintenanceCharges_in_rs"></div>
                        <div class="clearAll"></div>
                        <div id="maintenanceChargesError" class="formErr" style={{display: "none"}}>
                            <span class="formErrArrow"></span>
                            <span>Error message goes here</span>
                         </div>
                        <div class="clearAll"></div>
                </div>
            	<div class="clearAll"></div>
            </div>
            <div id="noticePerioddiv" class="formEle v--display" style={{display: "none"}}>
			<div class="formLabel inputDrop">Notice Period</div> 
			<div class="formValue">
				<span class="inputContainer">
				<div class="formCom">
					<span class="inputContainer"><input type="button" id="noticePeriodVal" value="Select" class="ciDrop brokerageRate" onClick="getCustomAreaOptionsCovered(event, this, '.formCom', 'noticePeriod')"/>
					</span>
					 <select id="noticePeriod" name="noticePeriod" class="areaList" size="1">
		                               		<option value="-1">Select</option>
		                               		
			                              <option value="17004">1 Week</option>
			                              
			                              <option value="17001">15 Days</option>
			                              
			                              <option value="17002">1 Month</option>
			                              
			                              <option value="17003">2 Months</option>
			                              
			                              <option value="17005">&gt; 2 Months</option>
			                              
			                              <option value="17006">No Notice Period</option>
			                              
														
						 </select> 
					<div class="unitBlockAreaDropDown" style={{display: "none"}}>
						<ul></ul>
					</div>
				</div>
				<div class="donePlaceHolder">
					<div class="valiDated" id="roomsInPgTick"></div>
				</div>
				<div class="clearAll"></div>
				<div id="roomsInPgError" class="formErr" style={{display: "none"}}>
					<span class="formErrArrow"></span> <span>Error message goes
						here</span>
				</div> </span>
			</div>
			<div class="clearAll"></div>
		</div>
            <div class="clearAll"></div>
	            <div class="formEle v--display" id="brokerageRateDiv" style={{display: "block"}}>
	                <div class="formLabel inputDrop">Brokerage<span class="offerContLeft brokerrage">(Brokers only)</span></div>
	                <div class="formValue">
	                	<span class="inputContainer ftlt">
		                	<div class="formCom hide _rentBrokerage" style={{display: "none"}}>   
			                    <span class="inputContainer">
			                    	<input type="button" value="Select Brokerage" id="agentBrokerageRateVal" name="agentBrokerageRateVal" class="ciDrop brokerageRate" onClick="getCustomAreaOptionsCovered(event, this, '.formCom', 'agentBrokerageRate')"/>
			                    </span>
			                    <select id="agentBrokerageRate" name="agentBrokerageRate" class="areaList" style={{display: "none"}}>
						           	<option value="">Select Brokerage</option>
					                <option value="1006101">No brokerage</option><option value="1006102">10 days</option><option value="1006103">15 days</option><option value="1006104">20 days</option><option value="1006105">25 days</option><option value="1006106">30 days</option><option value="1006107">45 days</option><option value="1006108">Others</option>
			             		</select>
			                    <div class="unitBlockAreaDropDown" style={{display: "none"}}>
			                        <ul></ul>
			                    </div>
			                </div>
			                <div class="formCom _buySellBrokerage">   
			                    <span class="inputContainer">
			                    	<input type="button" value="Select Brokerage" id="buyBrokerageRateVal" name="buyBrokerageRateVal" class="ciDrop brokerageRate" onClick="getCustomAreaOptionsCovered(event, this, '.formCom', 'buyBrokerageRate')"/>
			                    </span>
			                    <select id="buyBrokerageRate" name="buyBrokerageRate" class="areaList _displaySelect" style={{display: "none"}}>
						           	<option value="">Select Brokerage</option>
					                <option value="1006440">No Brokerage</option><option value="1006431">0.25%</option><option value="1006432">0.5%</option><option value="1006433">0.75%</option><option value="1006434">1%</option><option value="1006435">1.5%</option><option value="1006436">2%</option><option value="1006437">3%</option><option value="1006438">4%</option><option value="1006439">5%</option>
			             		</select>
			                    <div class="unitBlockAreaDropDown" style={{display: "none"}}>
			                        <ul></ul>
			                    </div>
			                </div>
		                </span>
	                   	<div class="valiDated" id="agentBrokerageRateTick"></div>
	                   	<div class="clearAll"></div>  
	                   	<div id="agentBrokerageRateError" class="formErr" style={{top: "25px", display: "none"}}>
	                   		<span class="formErrArrow"></span>
	                   		<span>Error message goes here</span>
	               		</div>                     
	            	</div>
	        		<div class="clearAll"></div>
	        	</div>
        	
            <div class="clearAll"></div>
            
           
            </div>
            <div class="clearAll"></div>
            
            
            <div class="formEle checkBoxBlock" id="brockerResponseDiv" style={{}}>
            	<div class="formLabel">Response from brokers</div>
            	<div class="clearAll"></div>
                <div class="formValue formValueResFBroker">
                	<div class="radioBlock">
                    	<ul>
                        	<li><span class="customCheckBox">
                        	<input id="brokerExcuse" name="brokerExcuse" style={{opacity: "0"}} onClick="customCheckBox(this, 'brokerExcuse');" type="checkbox" value="Y"/><input type="hidden" name="_brokerExcuse" value="on"/> 
                        	</span> <label class="curPoint" for="brokerExcuse">I am not interested in getting response from brokers.</label></li>
                        </ul>
                    </div>
                </div>
            	<div class="clearAll"></div>
            </div>
            
            
            <div class="formEle" id="homeworthid" style={{display: "none"}}>
            	<div class="mbEsti">
            	<div class="mbEstiHead">Based on the details, Magicbricks estimates the value of your home at <span id="homeworthidspan" class="priceIconMB">40Lac</span></div>
            	<div class="radioBlock1">
	                		<ul>
									<li>
			                   			<span class="customRadioButton">
			                   				<input id="autoPriceMB" name="autoPrice" style={{opacity: "0"}} onClick="customRadioButtonNew(this, 'autoPrice');" value="Y" type="radio"/> 
			                   			</span> 
			                   			<label class="curPoint" for="autoPriceMB">Show estimated value along with my price</label>
									</li>
									<li>
			                   			<span class="customRadioButton">
			                   				<input id="autoPriceM" name="autoPrice" style={{opacity: "0"}} onClick="customRadioButtonNew(this, 'autoPrice');" value="N" type="radio"/> 
			                   			</span> 
			                   			<label class="curPoint" for="autoPriceM">Show my price only</label>
									</li>
	                        </ul>
	                        
	                        <div class="clearAll"></div>
		                    <div id="autoPriceError" class="formErr" style={{top: "25px", display: "none"}}>
		                        <span class="formErrArrow"></span>
		                        <span>Error message goes here</span>
		                    </div> 
	                    </div>
            	<div class="clearAll"></div>
            	</div>
            
            </div>
            <div class="clearAll"></div>            
        </div>
    </div>
     {/* <!-- Property Sales Price end --> */}
    
    <div class="ppSecBlock" id="dealsSection" style={{display: "none"}}>
    	<div class="dataBlock">
        	<div class="secHeading">Discount/Offers</div>
            <div class="formEle v--display">
            	<div class="formLabel">Discount/Offers on the Property</div>
                <div class="formValue">	
                	<div class="formCom">
                		<textarea id="dealDescription" name="dealDescription" class="offerTextArea" onkeyup="limitTextNew(this.form.dealDescription, 'dealDescCountdown', 50);enableOfferValidDate();" onkeydown="limitTextNew(this.form.dealDescription, 'dealDescCountdown', 50); " onpaste="setTimeout(function(){enableOfferValidDate();}, 100);" placeholder="Mention any offers/discounts you have for this property eg. get 200 per sqft. Off"></textarea>
                	</div>
                    <div class="discCounter">
                    	<div class="helpTxtCont"><a href="#!">View Sample Deals</a>
                        	<div class="helpTextContaint">
                            	<span class="arrow"></span>
                            	<ul id="viewSaleDealDesContent" style={{display: "block"}}>
                                	<li>Discount Rs. 300 per sqft.</li>
                                    <li>Pay just 5% and no EMI till possession</li>
                                    <li>Get Car Parking Free</li>
                                    <li>Get 46" LED TV and DIAKIN AC Free</li>
                                    <li>10 gm Tanishq Gold Coin on booking</li>
                                    <li>Book and Get Discount up to 10%</li>
                                    <li>Book a flat with just 5% Down Payment</li>
                                    <li>0% Brokerage Charges</li>
                                    <li>Book now and Get Rs. 400 sqft  Off</li>
                                    <li>Buy and Get Free Furniture and Modular Kitchen</li>
                                </ul>
                                <ul id="viewRentDealDesContent" style={{display: "none"}}>
                                	<li>0 % Brokerage</li>
									<li>Only 10 Days Brokerage</li>
		                            <li>50 % Brokerage Off</li>
		                            <li>Free Android Phone on Booking</li>
									<li>Agreement Cost Waive Off</li>
		                            <li>Only 10 Days Commission</li>
		                            <li>30 % Brokerage Free</li>
                                </ul>
                            </div>
                        </div>
                        <div class="offerContLeft"><span id="dealDescCountdown">50</span> Characters left.</div>
                    </div>
                    <div class="clearAll"></div>
                    <div class="offerNotice">
                    	<span class="offerIcon"></span>
                        Only mention genuine offers or your property might be rejected.
                    </div>
                    <div class="valiDated" id="dealDescriptionTick"></div>
                    <div class="clearAll"></div>
                    <div class="formErr" id="dealDescriptionError" style={{display: "none"}}>
                        <span class="formErrArrow"></span>
                        <span>Error message goes here</span>
                    </div>
                </div>
            	<div class="clearAll"></div>
                
            </div>
            
            
            <div class="formEle" id="OfferValidLi" style={{display: "none"}}>
            	<div class="formLabel inputDrop">Valid till</div>
                <div class="formValue">
                	<div style={{display: "inline-block", float: "left"}} onClick="displayCalendar(document.getElementById('offerValidDateStr'),'dd-mm-yyyy',this);">
	                	<div class="formCom">
	                		<input id="offerValidDateStr" name="offerValidDateStr" class="iDrop inputText validTill" onchange="$('#dealDateId').val($('#offerValidDateStr').val())" readonly="readonly" type="text" value=""/>
	                	</div>
	                    <div class="calanderIcon"></div>
                    </div>
                    <a href="#!" class="clearPosv" onClick="$('#offerValidDateStr').val(''); $('offerValidDate').val(''); ">Clear</a>
                    <input id="dealDateId" name="offerValidDate" type="hidden" value=""/>
                    <div class="valiDated" id="offerValidDateStrTick"></div>
                    <div class="clearAll"></div>
                    <div id="offerValidDateStrError" class="formErr" style={{display: "none"}}>
                        <span class="formErrArrow"></span>
                        <span>Error message goes here</span>
                    </div>
                    <div class="clearAll"></div>
                    
                </div>
            	<div class="clearAll"></div>
                
            </div>
            <div class="clearAll"></div>
        </div>
        <div class="clearAll"></div>
    </div>
		
     <div class="ppSecBlock">
    	<div class="dataBlock pl-3" style={{width:"692px"}}>
    		<div class="clearAll"></div>
        	<div id="photoLink"></div>	
        	<div class="clearAll"></div>
        			






{/* <script>
	var context_url = '/postproperty/';
	var GOOGLE_MAP_KEY_API_V3 = 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places,geometry&types=atm&sensor=false&key=AIzaSyC_YU1YQKR4YoafqUTg2vsoPS1JHqW-pto';
	var MB_SCRIPT_URL = 'https://www.magicbricks.com/scripts/';
	var POSTPROPERTY_SCRIPT_URL = '/static/scripts/'; 
	var globalFocusFlag = true;
	var postPropertyImagePath = '/static/images/';
	var SIBLING_DOMAIN_URL = 'https://www.magicbricks.com';
	var GLOBALASSETURL = 'https://cdn.staticmb.com/';
	var mbpg_context_url = 'https://www.magicbricks.com/pg-home/';
</script>

		<script>
		var latitude;
        var longitude;
        var photoUploadSource = 'Step1WEB';
		</script>
		<script type="text/javascript" src="/static/scripts/jquery.canvasResize.js?ver=05272021.045934"></script>
		<script type="text/javascript" src="/static/scripts/canvasResize.js?ver=05272021.045934"></script>
		<script type="text/javascript" src="/static/scripts/exif.js?ver=05272021.045934"></script>
		<script>
		  var imageRootUrl='/static/images/';
		  var imageTypeSelected="";
		  var ajaxUrl='https://post.magicbricks.com/postproperty/';
		</script>
		<script type="text/javascript" src="/static/scripts/jquery.ui.widget.js?ver=05272021.045934"></script>
        <script type="text/javascript" src="/static/scripts/jquery.iframe-transport.js?ver=05272021.045934"></script>
		<script type="text/javascript" src="/static/scripts/jquery.fileupload.js?ver=05272021.045934"></script>
		<script type="text/javascript" src="/static/scripts/revamp/uploadImage.js?ver=05272021.045934"></script>
		
		
		
	    <script type="text/javascript" src="/static/scripts/myuploadfunction.js?ver=05272021.045934"></script> */}
	    
		
		
		<div class="photoBlock" style={{}} id="imagesSection">
            	<div class="popupHeading" id="addImageLink">
            		Photos <span class="pp__magiccasn__int" id="imagesSection_cash" style={{display: "none"}}><span class="pp__magiccasn__coins"></span><span class="pp__magiccasn__intbold">500</span> Magic Cash</span>
            		<span id="imgOptional" style={{display: "none"}}>It's Optional! But, don't forget to upload them later.</span>
            	</div>
            	<div class="popupHeading" id="editImageLink" style={{display: "none"}}>Edit Photos</div>
                <div class="photoSubHead" style={{display: "none"}}>Just click, Upload &amp; Get upto 5 times higher response</div>
                <div class="clearAll"></div>
                <div class="upImgBlock">
                	<div class="uploadImgTab">
                    	<ul>
                    		<li id="siteViewHeading" style={{display: "none"}}><a href="#!" class="sv" onClick="setImageAndText('siteViewImage','Sample Site View','Site-View-Dummy.jpg');">Site View <span style={{display: "none"}} id="siteViewImage_count">(20)</span></a></li>
                        	<li id="exteriorHeading" style={{display: "block"}}><a href="#!" class="ev active" onClick="setImageAndText('exteriorViewImage','Sample Exterior View','Exterior-Dummy.jpg');">Exterior View <span style={{display: "none"}} id="exteriorViewImage_count">(20)</span></a></li>
                        	<li id="commonAreaHeading" style={{display: "none"}}><a href="#!" class="ca" onClick="setImageAndText('commonViewImage','Sample Common Area','dummyImage.png');">Common Area <span style={{display: "none"}} id="commonViewImage_count">(20)</span></a></li>
                            <li id="livingHeading" style={{display: "block"}}><a href="#!" class="lr" onClick="setImageAndText('livingViewImage','Sample Living Room','Living-Dummy.jpg');">Living Room <span style={{display: "none"}} id="livingViewImage_count">(20)</span></a></li>
                            <li id="bedRoomHeading" style={{display: "block"}}><a href="#!" class="br" onClick="setImageAndText('bedRoomViewImage','Sample Bedroom','Bedroom-Dummy.jpg');">Bedrooms <span style={{display: "none"}} id="bedRoomViewImage_count">(20)</span></a></li>
                            
                            <li id="bathRoomHeading" style={{display: "block"}}><a href="#!" class="btr" onClick="setImageAndText('bathRoomViewImage','Sample Bathroom','Bathroom-Dummy.jpg');">Bathrooms <span style={{display: "none"}} id="bathRoomViewImage_count">(20)</span></a></li><li id="kitchenHeading" style={{display: "block"}}><a href="#!" class="kit" onClick="setImageAndText('kitchenViewImage','Sample Kitchen','Kitchen-Dummy.jpg');">Kitchen <span style={{display: "none"}} id="kitchenViewImage_count">(20)</span></a></li>
                            <li id="floorPlanHeading" style={{display: "block"}}><a href="#!" class="fp" onClick="setImageAndText('floorPlanViewImage','Sample Floor Plan','Floor-Plan-Dummmy.jpg');">Floor Plan <span style={{display: "none"}} id="floorPlanViewImage_count">(20)</span></a> </li>
                            <li id="masterPlanHeading" style={{display: "block"}}><a href="#!" class="mp" onClick="setImageAndText('masterPlanViewImage','Sample Master Plan','Master-Plan-Dummy.jpg');">Master Plan <span style={{display: "none"}} id="masterPlanViewImage_count">(20)</span></a></li>
                            <li id="mapHeading" style={{display: "block"}}><a href="#!" class="lm" onClick="setImageAndText('locationMapViewImage','Sample Location Map','Location-Map-Dummy.jpg');">Location Map <span style={{display: "none"}} id="locationMapViewImage_count">(20)</span></a></li>
                            <li id="otherHeading" style={{display: "block"}}><a href="#!" class="oth" onClick="setImageAndText('otherViewImage','Sample  Image','dummyImage.png');">Others <span style={{display: "none"}} id="otherViewImage_count">(20)</span></a></li>
                        </ul>
                        <div class="clearAll"></div>
                    </div>
                    <div class="uploadImgCont">
                    		<div class="deaultScreen">
                        	<div class="addPhotoBlock">
                        		<div class="addPhotoBlock__box">
                            	<div class="uploadLocal font-type-3">Photos sell/rent your property fast!</div>
                            	<div class="uploadLocal2"><span class="font-type-4">90% Home seekers</span> contact on properties with photos.</div>
                            	</div>
                            	
                                <div class="uploadBtn font-type-4"><a href="#!" onClick="clickOnBrowse(); ga('send','event','PostPropertyWeb','Step1AddPhotos','Step1AddPhotosClicked'); " class="btn__add-photo">Add Photos</a></div>
                            
                            </div>
                            <div class="clearAll"></div>
                            <div style={{display: "none"}}>
                              <li id="addedPhoto">
                                	<div class="madeDefault">
                                    	<span class="customRadioButton"><input type="radio" value="default" onClick="customRadioButtonNew(this, 'default');" name="default" style={{opacity: "0"}}/> </span>
                                    	<label class="curPoint addPhoto" for="default2">Set as Default</label></div>
                                    <div class="uploadImgTemp">
                                    	<div class="img"><img class="lazyload" alt="imagess" data-src="/static/images/dummyImage.png" width="131" height="131" src=""/></div>
                                        <div class="removeLink"><a href="#!">Remove</a></div>
                                        <div class="imageInProcess pending"><span class="icon"></span>Pending..</div>
                                        <div class="imageStatus">Under Screening</div>
                                    </div>
                                </li>
                                </div>
               <div id="luxuryPhotoShootDiv" style={{display: "none"}}>
	               <div class="freephoto__block" style={{paddingLeft: "20px"}}>
	                     <span class="customCheckBox">
	                     <input id="luxuryPhotoShoot" name="luxuryPhotoShoot" style={{opacity: "0"}} onClick="customCheckBox(this, 'luxuryPhotoShoot');" value="Y" type="checkbox"/></span>
	                     <span class="freephoto__freetext">I want a Free <span class="freephoto__freeprofessional">Professional Photoshoot</span> of my Property.</span>
	                     <span class="freephoto__freeicon">FREE</span>
	                     <div class="clearAll"></div>
	               </div>
	               <div class="clearAll"></div>
	               <div class="freephoto__ifneed">If you need immediate assistance, <span class="bold-highlight">please contact</span> our Field Service Executive <span class="bold-highlight" id="fsename"></span> at <span class="semibold-highlight highlight-red" id="fsmobile">+91-</span></div>
	               <div class="clearAll"></div>
               </div>
</div>
                    		<div class="uploadImgBlock" style={{display: "none"}} id="siteViewImage_Id">
                        	<ul>
                                
                                <li id="siteViewImage_Li">
                                	<div class="madeDefault"></div>
                                    <div class="addPhotoBlock">
                                        <div class="arrowBlock">
                                            <div class="arrowUp"></div>
                                        </div>
                                        <div class="uploadBtn"><a href="#!" onClick="clickOnBrowse();ga('send','event','PostPropertyWeb','Step1AddPhotos','Step1AddPhotosClicked');">Add more photos</a></div>
                                    </div>
                                </li>
                                
                            </ul>
                            <div class="clearAll"></div>
                        </div>
                    		<div class="uploadImgBlock" style={{display: "none"}} id="commonViewImage_Id">
                        	<ul>
                                
                                <li id="commonViewImage_Li">
                                	<div class="madeDefault"></div>
                                    <div class="addPhotoBlock">
                                        <div class="arrowBlock">
                                            <div class="arrowUp"></div>
                                        </div>
                                        <div class="uploadBtn"><a href="#!" onClick="clickOnBrowse();ga('send','event','PostPropertyWeb','Step1AddPhotos','Step1AddPhotosClicked');">Add more photos</a></div>
                                    </div>
                                </li>
                                
                            </ul>
                            <div class="clearAll"></div>
                        </div>
                    		<div class="uploadImgBlock" style={{display: "none"}} id="exteriorViewImage_Id">
								<span id="exteriorViewImage" class="msgForImgNo" style={{display: "none"}}>We have added <span id="exteriorViewImageCount"></span> <span id="exteriorViewImageProject"></span> from our Image Gallery. You may remove the ones which don't apply to your property.</span>
                        	<ul>
                                
                                <li id="exteriorViewImage_Li">
                                	<div class="madeDefault"></div>
                                    <div class="addPhotoBlock">
                                        <div class="arrowBlock">
                                            <div class="arrowUp"></div>
                                        </div>
                                        <div class="uploadBtn"><a href="#!" onClick="clickOnBrowse();ga('send','event','PostPropertyWeb','Step1AddPhotos','Step1AddPhotosClicked');">Add more photos</a></div>
                                    </div>
                                </li>
                                
                            </ul>
                            <div class="clearAll"></div>
                        </div>
                    		<div class="uploadImgBlock" style={{display: "none"}} id="livingViewImage_Id">
                        	<ul>
                                
                                <li id="livingViewImage_Li">
                                	<div class="madeDefault"></div>
                                    <div class="addPhotoBlock">
                                        <div class="arrowBlock">
                                            <div class="arrowUp"></div>
                                        </div>
                                        <div class="uploadBtn"><a href="#!" onClick="clickOnBrowse();ga('send','event','PostPropertyWeb','Step1AddPhotos','Step1AddPhotosClicked');">Add more photos</a></div>
                                    </div>
                                </li>
                                
                            </ul>
                            <div class="clearAll"></div>
                        </div>
                    		<div class="uploadImgBlock" style={{display: "none"}} id="bedRoomViewImage_Id">
                        	<ul>
                                
                                <li id="bedRoomViewImage_Li">
                                	<div class="madeDefault"></div>
                                    <div class="addPhotoBlock">
                                        <div class="arrowBlock">
                                            <div class="arrowUp"></div>
                                        </div>
                                        <div class="uploadBtn"><a href="#!" onClick="clickOnBrowse();ga('send','event','PostPropertyWeb','Step1AddPhotos','Step1AddPhotosClicked');">Add more photos</a></div>
                                    </div>
                                </li>
                                
                            </ul>
                            <div class="clearAll"></div>
                        </div>
                    		<div class="uploadImgBlock" style={{display: "none"}} id="bathRoomViewImage_Id">
                        	<ul>
                                
                                <li id="bathRoomViewImage_Li">
                                	<div class="madeDefault"></div>
                                    <div class="addPhotoBlock">
                                        <div class="arrowBlock">
                                            <div class="arrowUp"></div>
                                        </div>
                                        <div class="uploadBtn"><a href="#!" onClick="clickOnBrowse();ga('send','event','PostPropertyWeb','Step1AddPhotos','Step1AddPhotosClicked');">Add more photos</a></div>
                                    </div>
                                </li>
                                
                            </ul>
                            <div class="clearAll"></div>
                        </div>
                    		<div class="uploadImgBlock" style={{display: "none"}} id="kitchenViewImage_Id">
                        	<ul>
                                
                                <li id="kitchenViewImage_Li">
                                	<div class="madeDefault"></div>
                                    <div class="addPhotoBlock">
                                        <div class="arrowBlock">
                                            <div class="arrowUp"></div>
                                        </div>
                                        <div class="uploadBtn"><a href="#!" onClick="clickOnBrowse();ga('send','event','PostPropertyWeb','Step1AddPhotos','Step1AddPhotosClicked');">Add more photos</a></div>
                                    </div>
                                </li>
                                
                            </ul>
                            <div class="clearAll"></div>
                        </div>
                    		<div class="uploadImgBlock" style={{display:"none"}} id="floorPlanViewImage_Id">
								<span id="floorPlanImage" style={{display:"none"}} class="msgForImgNo">We have added <span id="floorPlanImageCount"></span> <span id="floorPlanImageProject"></span> from our Image Gallery. You may remove the ones which don't apply to your property.</span>
                        	<ul>
                                
                                <li id="floorPlanViewImage_Li">
                                	<div class="madeDefault"></div>
                                    <div class="addPhotoBlock">
                                        <div class="arrowBlock">
                                            <div class="arrowUp"></div>
                                        </div>
                                        <div class="uploadBtn"><a href="#!" onClick="clickOnBrowse();ga('send','event','PostPropertyWeb','Step1AddPhotos','Step1AddPhotosClicked');">Add more photos</a></div>
                                    </div>
                                </li>
                                
                            </ul>
                            <div class="clearAll"></div>
                        </div>
                    		<div class="uploadImgBlock" style={{display: "none"}} id="masterPlanViewImage_Id">
                        	<ul>
                                
                                <li id="masterPlanViewImage_Li">
                                	<div class="madeDefault"></div>
                                    <div class="addPhotoBlock">
                                        <div class="arrowBlock">
                                            <div class="arrowUp"></div>
                                        </div>
                                        <div class="uploadBtn"><a href="#!" onClick="clickOnBrowse();ga('send','event','PostPropertyWeb','Step1AddPhotos','Step1AddPhotosClicked');">Add more photos</a></div>
                                    </div>
                                </li>
                                
                            </ul>
                            <div class="clearAll"></div>
                        </div>
                    		<div class="uploadImgBlock" style={{display: "none"}} id="locationMapViewImage_Id">
                        	<ul>
                                
                                <li id="locationMapViewImage_Li">
                                	<div class="madeDefault"></div>
                                    <div class="addPhotoBlock">
                                        <div class="arrowBlock">
                                            <div class="arrowUp"></div>
                                        </div>
                                        <div class="uploadBtn"><a href="#!" onClick="clickOnBrowse();ga('send','event','PostPropertyWeb','Step1AddPhotos','Step1AddPhotosClicked');">Add more photos</a></div>
                                    </div>
                                </li>
                                
                            </ul>
                            <div class="clearAll"></div>
                        </div>
                    		<div class="uploadImgBlock" style={{display: "none"}} id="otherViewImage_Id">
                        	<ul>
                                
                                <li id="otherViewImage_Li">
                                	<div class="madeDefault"></div>
                                    <div class="addPhotoBlock">
                                        <div class="arrowBlock">
                                            <div class="arrowUp"></div>
                                        </div>
                                        <div class="uploadBtn"><a href="#!" onClick="clickOnBrowse();ga('send','event','PostPropertyWeb','Step1AddPhotos','Step1AddPhotosClicked');">Add more photos</a></div>
                                    </div>
                                </li>
                                
                            </ul>
                            <div class="clearAll"></div>
                        </div>
                        <div class="clearAll"></div>
                        {/* <!-- Multiple photo Error msg start--> */}
                        
						{/* <script type="text/javascript">
						function toggleErrorMsg() {
						var element = document.getElementById("multiplePhotoError");
						element.classList.toggle("expand");
						}
						</script> */}
						<div class="photo-upload-error" id="multiplePhotoError" style={{display: "none"}}>
							<div class="photo-upload-error__head" onClick="toggleErrorMsg();">
							<span>
							{/* <!--?xml version="1.0" encoding="UTF-8"?--> */}
							{/* xmlns:xlink="http://www.w3.org/1999/xlink" */}
							<svg width="22px" height="17px" viewBox="0 0 22 17" version="1.1" xmlns="http://www.w3.org/2000/svg" >
								<title>warning</title>
								<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<g id="03_PhotoUpload_option1_b" transform="translate(-172.000000, -3533.000000)" fill-rule="nonzero">
										<g id="Group-52" transform="translate(159.000000, 3041.000000)">
											<g id="Layer_1" transform="translate(13.000000, 492.000000)">
												<path d="M21.2359751,15.943597 L11.5898704,0.679595542 C11.4775629,0.501528048 11.2795268,0.393417722 11.0664214,0.393417722 C10.8530787,0.393417722 10.6551018,0.501761045 10.542735,0.679595542 L0.870585482,15.9854199 C0.752701173,16.1719918 0.746709066,16.4067356 0.855694208,16.5985499 C0.964264055,16.7903642 1.17072475,16.9093671 1.39403453,16.9093671 L20.7391642,16.9093671 L20.7418339,16.9093671 C21.0821381,16.9093671 21.3578343,16.6384505 21.3578343,16.3045667 C21.357419,16.1691375 21.3123299,16.0444845 21.2359751,15.943597 Z" id="Shape" fill="#D8232A"></path>
												<path d="M10.250475,11.1263575 L10.0574522,8.19031206 C10.0212641,7.61810946 10.0034563,7.20732272 10.0034563,6.95818466 C10.0034563,6.61905421 10.090892,6.35443234 10.265477,6.16449368 C10.4402912,5.9739147 10.6708191,5.87914911 10.9560301,5.87914911 C11.301822,5.87914911 11.5332088,6.00069122 11.6495606,6.24377546 C11.7659125,6.48709253 11.8243748,6.83774853 11.8243748,7.29492851 C11.8243748,7.56478926 11.8102316,7.83901575 11.7824034,8.11626916 L11.5229593,11.1383487 C11.494902,11.4981437 11.4346647,11.7738836 11.3419038,11.9662089 C11.249372,12.1580685 11.0963738,12.25394 10.8835965,12.25394 C10.6663528,12.25394 10.5157023,12.1613864 10.4315304,11.9751732 C10.3469005,11.789542 10.2864914,11.5064094 10.250475,11.1263575 Z M10.9197846,15.1597164 C10.6744837,15.1597164 10.4602176,15.0793286 10.2776734,14.917971 C10.0947284,14.7567879 10.0034563,14.5309338 10.0034563,14.240816 C10.0034563,13.9873123 10.090892,13.7716448 10.265477,13.5936974 C10.4402912,13.4159828 10.6545573,13.3270964 10.9078174,13.3270964 C11.1612492,13.3270964 11.3768323,13.41575 11.5559409,13.5936974 C11.7348205,13.771412 11.8243748,13.987254 11.8243748,14.240816 C11.8243748,14.5268009 11.7339616,14.7513744 11.5526771,14.914944 C11.3718507,15.0779898 11.1610201,15.1597164 10.9197846,15.1597164 Z" id="Shape" fill="#FFFFFF"></path>
											</g>
										</g>
									</g>
								</g>
							</svg>
							</span>
							<span id="errorFileUploadCount">5 photos</span> cannot be uploaded.
							</div>
							<div class="photo-upload-error__content" style={{display: "none"}}>
								It could be due to the following reasons: 
								<ul>
									<li>Accepted formats are .jpg, .gif, .bmp &amp; .png.</li>
									<li>Size of image is more than 8 MB.</li>
									<li>Size of image is less than 600*400 pixel.</li>
									<li>Maximum 20 images are allowed.</li>
									<li>The Image file name has comma (,).</li>
								</ul>
							</div>
						</div>
						
						<div class="clearAll"></div>
						{/* <!-- Multiple photo Error msg end--> */}
                        
                        <div class="imgMessages">
                        	<div style={{display: "none", color: "#d8232a"}} id="imgError">Image not uploaded. Please try again.</div>
                    		<div class="acpFormat">Accepted formats are <span class="acpFormat__dark">.jpg, .gif, .bmp &amp; .png</span>. Maximum size allowed is <span class="acpFormat__dark">4 MB</span>. Minimum dimension allowed <span class="acpFormat__dark">600*400 Pixel</span></div>
                        	<div id="ImageerrorDiveNew" style={{display: "none"}} class="uploadPhotoErr">Accepted formats are .jpg, .gif, .bmp &amp; .png. Maximum size allowed is 4 MB. Minimum dimension allowed 600*400 Pixel</div>
                        	<div class="uploadText">You can also email them to us for uploading at <a href="mailto:photos@magicbricks.com">photos@magicbricks.com </a></div>
                   		</div>
                   		
                   		<div class="dummyImg">
							<div class="text">Image Guidelines</div>
						    <div class="dummyImgCont">
						    	<ul>
						    		<li><div class="guideImg1"></div></li>
						    		<li><div class="guideImg2"></div></li>
						    		<li><div class="guideImg3"></div></li>
						    		<li><div class="guideImg4"></div></li>
						    	</ul>
						    </div>
						</div>
						
                    </div>
                    
					<div class="clearAll"></div>
                </div>
            </div>
            
            
            <div id="fileuploadCont">
            	<input id="fileupload" type="file" size="50" name="Images" style={{cursor: "pointer"}}   accept="image/*"  enctype="multipart/form-data" onChange={handleImage}/>
				{/* data-sequential-uploads="true" multiple="" */}
			 </div>
			  
			 
			 
            {/* <script type="text/javascript">
            	$( ".uploadBtn" ).live('hover', function() {
            		var myBtnLeft = $(this).offset().left-10;
            		var myBtnTop = $(this).offset().top;
            		
            		$("#fileuploadCont").css({top:myBtnTop, left:myBtnLeft, position:"absolute"});
            		
            	});
            	if(isAffordableHousing){
	                propertyImageType[10000]='otherHeading' ;
				    propertyImageType[10001]='otherHeading' ;
				    propertyImageType[10002]='otherHeading' ;
				    propertyImageType[10003]='otherHeading' ;
				    propertyImageType[10020]='otherHeading' ;
				    propertyImageType[10017]='otherHeading' ;
				    propertyImageType[10054]='otherHeading' ;
				    propertyImageType[10050]='otherHeading' ;
				    propertyImageType[10053]='otherHeading' ;
				    propertyImageType[10004]='otherHeading' ;
				    propertyImageType[10021]='otherHeading' ;
				    propertyImageType[10022]='otherHeading' ;
				    propertyImageType[10006]='otherHeading' ;
				    propertyImageType[10018]='otherHeading' ;
				    propertyImageType[10007]='otherHeading' ;
				    propertyImageType[10008]='otherHeading' ;
				    propertyImageType[10009]='otherHeading' ;
				    propertyImageType[10030]='otherHeading' ;
				    propertyImageType[10011]='otherHeading' ;
				    propertyImageType[10012]='otherHeading' ;
				    propertyImageType[10013]='otherHeading' ;
				    propertyImageType[10014]='otherHeading' ;
				    propertyImageType[10005]='otherHeading' ;
              }
              var editPhotoSource = '';
              if(typeof editPhotoSource!= 'undefined' && editPhotoSource!=''){
                 photoUploadSource = editPhotoSource;
              }
            </script> */}

            
            <div class="ifNogLogin" style={{display: "block"}}>
            
            	<div class="formEle catcha">
                    <div class="formEle checkBoxBlock" id="isexclusivediv" style={{paddingBottom: "0px", display: "none"}}>
	            	<div class="clearAll"></div>
	                <div class="formValue formValueResFBroker">
	                	<div class="radioBlock">
	                    	<ul>
	                        	<li><span class="customCheckBox checked">
	                        	<input id="isexclusive" name="isexclusive" style={{opacity: "0"}} onClick="customCheckBox(this, 'isexclusive');" checked="checked" type="checkbox" value="Y"/><input type="hidden" name="_isexclusive" value="on"/> 
	                        	</span> <label class="curPoint" for="isexclusive">I am posting this property 'exclusively' on Magicbricks</label></li>
	                        </ul>
	                    </div>
	                </div>
	            	<div class="clearAll"></div>
	            </div>
	            
	            <div class="formEle checkBoxBlock" id="termsAndConditionsdiv" style={{paddingBottom: "0"}}>
	            	<div class="clearAll"></div>
	                <div class="formValue formValueResFBroker">
	                	<div class="radioBlock">
	                    	<ul>
	                        	<li><span class="customCheckBox">
	                        	<input id="termsAndConditions" name="termsAndConditions" style={{opacity: "0"}} onClick="customCheckBox(this, 'termsAndConditions');" type="checkbox" value="N"/><input type="hidden" name="_termsAndConditions" value="on"/> 
	                        	</span> <label class="curPoint" for="termsAndConditions">I agree to Magicbricks
									 <a href="http://property.magicbricks.com/terms/terms.html" target="_blank" rel="noreferrer">T&amp;C</a>, <a href="http://property.magicbricks.com/terms/terms.html" target="_blank" rel="noreferrer">Privacy Policy</a>, &amp; <a href="http://property.magicbricks.com/terms/terms.html" target="_blank" rel="noreferrer">Cookie Policy</a></label></li>
	                        </ul>
		                 <div class="formErr" id="termsAndConditionsError" style={{display: "none"}}>
	                        <span class="formErrArrow"></span>
	                        <span>Please select value</span>
	                    </div>
	                    </div>
	                </div>
	            	<div class="clearAll"></div>
	            </div>
	            
	            <div class="formEle checkBoxBlock" id="whatsappoptdiv" style={{paddingBottom: "0px", display: "none"}}>
	            	<div class="clearAll"></div>
	                <div class="formValue formValueResFBroker">
	                	<div class="radioBlock">
	                    	<ul>
	                        	<li><span class="customCheckBox checked">
	                        	<input id="whatsappopt" name="whatsappopt" style={{opacity: "0"}} onClick="customCheckBox(this, 'whatsappopt');tracking(this);" checked="checked" type="checkbox" value="Y"/><input type="hidden" name="_whatsappopt" value="on"/> 
	                        	</span> <label class="curPoint" for="whatsappopt"> I want to receive responses on <span class="icon__whatsapp"></span> Whatsapp</label></li>
	                        </ul>
	                    </div>
	                </div>
	            	<div class="clearAll"></div>
	            </div>
	            
                    <div class="clearAll"></div>
	           	 	
		                <div id="ifNotLogin">
		            		<div class="actionBlock forLogin"><Link to="/" id="buttonLogin" onClick={handleProperties}>Login &amp; Post Property</Link></div>
		            		{/* <!-- a href="#!" onClick="validatePostPropertyStep1();">Post Property</a--> */}
		                </div>
        			
	                <div style={{display: "none"}} class="ifLogin" id="ifLogin">
	                	
                      	<div class="clearAll"></div>
                      	 
 	                        <div class="pkgSelectBottomText"><div class="formEle" id="packagetext" style={{display: "none"}}>
	                    <div class="formLabel inputDrop">Listing Package</div>
	                    <div class="formValue editPkgTextRow">
	                    	<div class="formCom" onClick="b2cPopOpen('b2c_pkg_popup', );">   
	                        <span class="inputContainer" id="selectedListingTypetxt"></span><span class="editPkgLink">Edit</span>
	                        
	                        </div>
	                </div>
	            	<div class="clearAll"></div>
	                
	            </div></div>
 	                        {/* <script type="text/javascript">
 	                        	$('#b2ctrackValue').val('no');
 	                        </script> */}
                          
                      	<div class="clearAll"></div>
	                	<div class="disClaimer" id="disclaimerAgree">
	                    	<span class="customCheckBox checked">
	                    	<input type="checkbox" id="cbagree" value="checked" checked="" onClick="customCheckBox(this, 'cbagree');" name="cbagree" style={{opacity: "0"}}/></span>
	                        <label for="cbagree" class="disclaimer"> 
	                        		I am the owner/I have the authority to post this property.<br/>
	                                I agree not to provide incorrect property information or state a discriminatory preference.<br/>
	                                In case, the information does not comply with Magicbricks terms, Magicbricks.com has the right to edit/remove the property from their site.
	                        </label>
	                        <div class="clearAll"></div>
                            <div id="cbagreeError" class="formErr" style={{display: "none"}}>
		                        <span class="formErrArrow"></span>
		                        <span>Error message goes here</span>
		                    </div>  
	                    </div>
	                	<div class="actionBlock saveAndProceedBtn" id="saveAndProceed">
	                		<snap class="posRel">
	                			<div style={{position: "absolute", left: "0", top: "0", height: "40px", width: "200px", background: "#fff", opacity: ".6", zIndex: "1", display: "none"}} id="butonCover"></div>
	                		
	                		<Link to="/" onClick={handleProperties} id="mylink">Continue to Post</Link>
	                		<img src="/static/images/loader.gif" alt="imagess" width="30" height="30" style={{display: "none", position: "absolute", left: "200px", top: "-30px"}} id="loadingPosting"/>
	                	</snap></div>
	                </div>
	                
            </div>
                	
		<div class="clearAll"></div>
        </div>       
    
</div>
</div>



	



<style>

</style>
<div class="seoSRPHeading pl-3 pb-3" id="seoSRPHeading" style={{background:"white",width:"692px"}}>


<h2>Looking to Sell or Rent your Flat?</h2>
	<div><font size="2">
	Do you want to Sell your flat or put your house on rent? Magicbricks has the right solution for you.Your advertisement will be viewed by millions of buyers 
	  and tenants in India.Magicbricks provides you the best classified for your requirement. Our website offers one free property
	  ad that you can use for selling or renting . You will be able to sell or rent every real estate property  from flat or house to land , even commercial property fast and immediately.
	  
	   
</font></div>



</div>

</div>
{/* </div> */}




<div class="grayOver doNotShow" id="grayOver" style={{display: "none"}}></div>  
<div class="grayOver doNotShow" id="grayOverLayEx1" style={{display: "none"}}></div>  
<iframe id="FrameKeywordAutoSuggestList" style={{display: "none", width: "134px"}} frameborder="0" scrolling="no"></iframe>

 
 
 <div id="mobileVerificationdive">
  	{/* <style>
.forgotAndMore .enterRefNo input#mobilenumber{width: 120px;}
.forgotAndMore .enterRefNo{text-align: right;}
#isdCodeDropDownVal.ciDrop.coveredDD{height: 40px;}
#mobileError1.formErr .formErrArrow{left: 127px;}
</style> */}
<div id="verifyMob" style={{display: "none"}} class="postLogin">
	<div class="verHeadingX">
		<div class="verification">
			<div class="closeArea" onClick="$('#verifyMob,#grayOverLay').hide();showVerifyMobileScreen();"><a href="#!" style={{float: "right", cursor: "pointer"}}></a></div>
		</div>
	</div><div class="leftSec">
            	<div class="leftCont">
                	<span class="arrow"></span>
                    <h3>Things you Can Do with<br/>Magicbricks Account</h3>
                    <ul>
                        <li>Post one Single Property for FREE</li>
                        <li>Set property alerts for your requirement </li>
                        <li>Get accessed by over 1 Lakh buyers </li>
                        <li>Showcase your property as Rental, PG or for Sale</li>
                        <li>Get instant queries over Phone, Email and SMS</li>
                        <li>Performance in search &amp; Track responses &amp; views online </li>
                        <li>Add detailed property information &amp; multiple photos per listing</li>
                    </ul>
                </div></div>
    <div class="rightPanel rightSec " style={{}}>
    	{/* <!--  <a href="javscript:void(0);" class="backBtn"></a> --> */}
    	 <div class="heading">Verify</div>
         <div class="formRow">
        	<p>Enter 3 digit Verification code sent on <strong><span id="verificationdigit" style={{fontWeight: "bold"}}></span></strong>
            </p>
         </div>
 			 <div class="formRow">
 			 	<div class="formField">
 			 		<label class="labelText">Enter Verification Code</label>
 			 		<input name="inputnumber" id="inputnumber" type="password" class="inputText" maxlength="6" autocomplete="off"/>
 			 	</div>
		 		<div class="errorMsg" id="smsVerifiedMes"><span class="errorIcon"></span><span>Please enter your OTP</span></div>
 			 </div>
 			<div class="formRow btnWrap">
				<button class="mui-btn mui-btn--primary smsSubmit submitLinkAsButtom" onClick="verifyMobileNumber('verify');" type="button">Submit</button>
            </div>
            <div class="formRow btnWrap">
				<span class="verifyCode">Didn't get Verification Code?</span>
            </div>
            
            <ul class="twoCall dummyClass">
            	<li><span class="loginSprite codeIcon"></span>
                <a href="#!" id="resendOTP" onClick="verifyMobileNumber('resend');">Resend Code</a></li>
                {/* <!--  <li><span class="loginSprite callIcon call"></span>
                <a href="#!" onClick="verifyingMobileNumberCallNew('');">Request a Call</a></li>--> */}
            </ul>
 		</div>
    	{/* <!--<div id="smsWrapper" class="forgotAndMore" > */}
	    <div class="projectSMS" id="formdiveid">
	    <div class="popHeading">Verify Mobile Number</div>
	        <div class="smsVerifyMobile">
	            <p>To continue posting your property, it is mandatory<br/> to verify your mobile no.<br/> Please enter the 3 digit OTP code sent on <span id="verificationdigit" style={{fontWeight: "bold"}}></span>  
	            </p>
	        </div>
	        <div class="smsForm">
	            <div>
		            <div class="enterRefNo posRel" style={{paddingBottom: "10px"}}>
		            	<input name="inputnumber" id="inputnumber" type="text" class="smsNo" maxlength="6"/>
		            	<div class="posRel">
			            <div style={{top: "3px", display: "none"}} class="formErr" id="smsVerifiedMes">
							<span class="formErrArrow"></span>
							<div class="smsVerifiedErr">Please enter the correct code</div>
						</div>
		            </div>
	            </div>
	            <a href="#!" onClick="verifyMobileNumber('verify');"  class="smsSubmit">Submit</a></div>
	            <div class="clear"></div>
	            <br/>
	            <div class="smsCodeSent" id="resendLink">Did not receive SMS? <a href="#!" onClick="verifyMobileNumber('resend');">Resend verification code</a></div>
	            <div class="smsCodeSent" id="resendLink">To update your mobile number <a href="#!" onClick="showUpdateMobileScreen();">Click Here</a></div>
	        </div>
	    </div>
	    
	    <div class="projectSMS" style={{display: "none"}} id="confirmMsgdiveid">
	    	<div class="confirmMsg smsVerifyMobile">
	    		<div class="firstMsg">Your mobile has been verified with us.</div>
	    		<div class="secMsg">You may continue posting the property now.</div>
	    		<div class="clickAct"><a href="#!" onClick="$('#verifyMob,#grayOverLay').hide(); doPostLoginAction(globalDataMap);">Continue</a></div>
	    	</div>
	    </div>

	     {/* Verify Mobile Number Starts --> */}
	    
	    {/* <!--<div class="projectSMS" style="display:none;" id="verifyMobileNumber">
	        	<div class="popHeading">Update Mobile Number</div>
		        	 <div class="smsForm" >
		            <div>
		            	<div class="ftlt"> 
	                        <span class="inputContainer ftlt">
		                    	 <div class="formCom">   
		                              <span class="inputContainer" style="margin-left: 85px;">
		                              	<input type="button" onClick="getCustomAreaOptionsCovered(event, this, '.formCom', 'isdCodeDropDown')" class="ciDrop coveredDD" value="IND +91" id="isdCodeDropDownVal">
		                              </span>
		                              
		                              <select name="isdCodeDropDown" id="isdCodeDropDown" class="city1Dd" style="width: 99px; vertical-align: 4px;display:block; opacity: 0; margin-top: -40px; z-index: 999999; position: relative; left: 86px; height: 40px;" >
										
											<option value="50">IND +91</option>
										
											<option value="51">USA +1</option>
										
											<option value="53">ARE +971</option>
										
											<option value="227">SGP +65</option>
										
											<option value="57">SAU +966</option>
										
											<option value="54">CAN +1</option>
										
											<option value="55">AUS +61</option>
										
											<option value="215">QAT +974</option>
										
											<option value="205">OMN +968</option>
										
											<option value="144">HKG +852</option>
										
											<option value="60">AFG +93</option>
										
											<option value="65">AGO +244</option>
										
											<option value="66">AIA +264</option>
										
											<option value="61">ALB +355</option>
										
											<option value="64">AND +376</option>
										
											<option value="194">ANT +599</option>
										
											<option value="68">ARG +54</option>
										
											<option value="69">ARM +374</option>
										
											<option value="63">ASM +684</option>
										
											<option value="67">ATG +268</option>
										
											<option value="71">AZE +994</option>
										
											<option value="88">BDI +257</option>
										
											<option value="87">BFA +226</option>
										
											<option value="74">BGD +880</option>
										
											<option value="73">BHR +973</option>
										
											<option value="72">BHS +1242</option>
										
											<option value="82">BIH +387</option>
										
											<option value="76">BLR +375</option>
										
											<option value="78">BLZ +501</option>
										
											<option value="79">BMU +1441</option>
										
											<option value="81">BOL +591</option>
										
											<option value="84">BRA +55</option>
										
											<option value="75">BRB +1246</option>
										
											<option value="85">BRN +673</option>
										
											<option value="80">BTN +975</option>
										
											<option value="83">BWA +267</option>
										
											<option value="93">CAF +236</option>
										
											<option value="243">CHE +41</option>
										
											<option value="95">CHL +56</option>
										
											<option value="96">CHN +86</option>
										
											<option value="103">CIV +225</option>
										
											<option value="90">CMR +237</option>
										
											<option value="99">COD +243</option>
										
											<option value="100">COG +242</option>
										
											<option value="101">COK +682</option>
										
											<option value="97">COL +57</option>
										
											<option value="98">COM +269</option>
										
											<option value="91">CPV +238</option>
										
											<option value="102">CRI +506</option>
										
											<option value="105">CUB +53</option>
										
											<option value="92">CYM +345</option>
										
											<option value="109">DJI +253</option>
										
											<option value="110">DMA +767</option>
										
											<option value="111">DOM +1</option>
										
											<option value="62">DZA +213</option>
										
											<option value="113">ECU +593</option>
										
											<option value="114">EGY +20</option>
										
											<option value="117">ERI +291</option>
										
											<option value="119">ETH +251</option>
										
											<option value="122">FJI +679</option>
										
											<option value="120">FLK +500</option>
										
											<option value="121">FRO +298</option>
										
											<option value="183">FSM +691</option>
										
											<option value="127">GAB +241</option>
										
											<option value="129">GEO +995</option>
										
											<option value="131">GHA +233</option>
										
											<option value="132">GIB +350</option>
										
											<option value="139">GIN +224</option>
										
											<option value="136">GLP +590</option>
										
											<option value="128">GMB +220</option>
										
											<option value="140">GNB +245</option>
										
											<option value="116">GNQ +240</option>
										
											<option value="135">GRD +473</option>
										
											<option value="134">GRL +299</option>
										
											<option value="138">GTM +502</option>
										
											<option value="125">GUF +594</option>
										
											<option value="137">GUM +671</option>
										
											<option value="141">GUY +592</option>
										
											<option value="143">HND +504</option>
										
											<option value="142">HTI +509</option>
										
											<option value="147">IDN +62</option>
										
											<option value="148">IRN +98</option>
										
											<option value="149">IRQ +964</option>
										
											<option value="146">ISL +354</option>
										
											<option value="151">ISR +972</option>
										
											<option value="153">JAM +1</option>
										
											<option value="155">JOR +962</option>
										
											<option value="154">JPN +81</option>
										
											<option value="156">KAZ +7</option>
										
											<option value="157">KEN +254</option>
										
											<option value="160">KGZ +996</option>
										
											<option value="89">KHM +855</option>
										
											<option value="158">KIR +686</option>
										
											<option value="235">KNA +869</option>
										
											<option value="184">KOR +373</option>
										
											<option value="58">KWT +965</option>
										
											<option value="161">LAO +856</option>
										
											<option value="163">LBN +961</option>
										
											<option value="165">LBR +231</option>
										
											<option value="166">LBY +218</option>
										
											<option value="236">LCA +758</option>
										
											<option value="167">LIE +423</option>
										
											<option value="233">LKA +94</option>
										
											<option value="164">LSO +266</option>
										
											<option value="170">MAC +853</option>
										
											<option value="188">MAR +212</option>
										
											<option value="185">MCO +377</option>
										
											<option value="159">MDA +82</option>
										
											<option value="172">MDG +261</option>
										
											<option value="175">MDV +960</option>
										
											<option value="182">MEX +52</option>
										
											<option value="171">MKD +389</option>
										
											<option value="176">MLI +223</option>
										
											<option value="190">MMR +95</option>
										
											<option value="186">MNG +976</option>
										
											<option value="189">MOZ +258</option>
										
											<option value="179">MRT +222</option>
										
											<option value="187">MSR +664</option>
										
											<option value="178">MTQ +596</option>
										
											<option value="180">MUS +230</option>
										
											<option value="173">MWI +265</option>
										
											<option value="174">MYS +60</option>
										
											<option value="181">MYT +269</option>
										
											<option value="191">NAM +264</option>
										
											<option value="196">NCL +687</option>
										
											<option value="199">NER +227</option>
										
											<option value="202">NFK +672</option>
										
											<option value="200">NGA +234</option>
										
											<option value="198">NIC +505</option>
										
											<option value="201">NIU +683</option>
										
											<option value="204">NOR +47</option>
										
											<option value="193">NPL +977</option>
										
											<option value="192">NRU +674</option>
										
											<option value="197">NZL +64</option>
										
											<option value="56">PAK +92</option>
										
											<option value="206">PAN +507</option>
										
											<option value="211">PCN +649</option>
										
											<option value="209">PER +51</option>
										
											<option value="210">PHL +63</option>
										
											<option value="207">PNG +675</option>
										
											<option value="214">PRI +939</option>
										
											<option value="203">PRK +850</option>
										
											<option value="208">PRY +595</option>
										
											<option value="126">PYF +689</option>
										
											<option value="216">REU +262</option>
										
											<option value="270">RNR +260</option>
										
											<option value="218">RUS +7</option>
										
											<option value="219">RWA +250</option>
										
											<option value="224">SCG +381</option>
										
											<option value="239">SDN +249</option>
										
											<option value="223">SEN +221</option>
										
											<option value="234">SHN +290</option>
										
											<option value="230">SLB +677</option>
										
											<option value="226">SLE +232</option>
										
											<option value="115">SLV +503</option>
										
											<option value="221">SMR +378</option>
										
											<option value="231">SOM +252</option>
										
											<option value="237">SPM +508</option>
										
											<option value="222">STP +239</option>
										
											<option value="240">SUR +597</option>
										
											<option value="241">SWZ +268</option>
										
											<option value="225">SYC +248</option>
										
											<option value="244">SYR +963</option>
										
											<option value="256">TCA +649</option>
										
											<option value="94">TCD +235</option>
										
											<option value="249">TGO +228</option>
										
											<option value="248">THA +66</option>
										
											<option value="246">TJK +992</option>
										
											<option value="250">TKL +690</option>
										
											<option value="255">TKM +993</option>
										
											<option value="112">TLS +670</option>
										
											<option value="251">TON +676</option>
										
											<option value="252">TTO +868</option>
										
											<option value="253">TUN +216</option>
										
											<option value="254">TUR +90</option>
										
											<option value="257">TUV +688</option>
										
											<option value="245">TWN +886</option>
										
											<option value="247">TZA +255</option>
										
											<option value="258">UGA +256</option>
										
											<option value="259">UKR +380</option>
										
											<option value="260">URY +598</option>
										
											<option value="261">UZB +998</option>
										
											<option value="238">VCT +784</option>
										
											<option value="263">VEN +58</option>
										
											<option value="265">VGB +284</option>
										
											<option value="266">VIR +340</option>
										
											<option value="264">VNM +84</option>
										
											<option value="262">VUT +678</option>
										
											<option value="267">WLF +681</option>
										
											<option value="220">WSM +685</option>
										
											<option value="268">YEM +967</option>
										
											<option value="269">YUG +381</option>
										
											<option value="59">ZAF +27</option>
										
											<option value="271">ZWE +263</option>
										
									</select>
			                         <div style="width: 115px; display: block;" class="unitBlockAreaDropDown">
			                             <ul></ul>
			                         </div>
			                   </div>
		           			</span>
           				</div>
		            	<div class="enterRefNo posRel" style="padding-bottom: 10px;">
		            		<input name="mobilenumber" id="mobilenumber" type="text" class="smsNo" maxlength="12" onkeypress="return(ForceNumbersOnly(this, event, 'M'));"/>
		            		<div class="formErr" id="mobileError1" style="text-align: left;">
			             		<span class="formErrArrow"></span>
			             		<span> Error message goes here</span>
			         		</div>
		            	</div>
		            	<a href="#!" onClick="validateMobile('mobilenumber');"  class="smsSubmit">Submit</a></div>
		            	<div class="clear"></div>
		            	<div class="posRel">
			            <div style="top: 0; display: none;" class="formErr" id="smsVerifiedMes">
							<span class="formErrArrow"></span>
							<div class="smsVerifiedErr">Please enter the correct code</div>
						</div>
		            </div>
		        </div>
	    </div>--> */}
	    {/* <!-- Verify Mobile Number Ends --> */}
	    <div id="smsWrapper" class="forgotAndMore _confirmMsgdiv" style={{display: "none"}}>
	    <div class="projectSMS" id="confirmMsgdiveid">
	    	<div class="confirmMsg smsVerifyMobile">
	    		<div class="firstMsg">Your mobile has been verified with us.</div>
	    		<div class="secMsg">You may continue posting the property now.</div>
	    		<div class="clickAct"><a href="#!" onClick="$('#verifyMob,#grayOverLay').hide(); doPostLoginAction(globalDataMap);">Continue</a></div>
	    	</div>
	    </div>
	    </div>
	    
	    <div style={{display: "none"}}>
        	<input name="inputmobilenumber" id="inputmobilenumber" type="text" class="smsNo"/>
        	<input name="hiddenIsdCode" id="hiddenIsdCode" type="text" class="smsNo"/>
        </div>
	    
	    <div style={{display: "none", fontWeight: "bold", fontSize: "12px", color: "#b14a1f"}} id="resendSuccess">Sending...</div>
    </div>
</div>

 </form>
            
        </div>
    )
}

export default PostProperty