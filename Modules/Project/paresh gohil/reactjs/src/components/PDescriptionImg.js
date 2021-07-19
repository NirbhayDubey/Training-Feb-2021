import React, { useState } from 'react'

const PDescriptionImg = (props) => {
    const {Property_BHK,Project_Name,Property_Types,Property_Type_Name,Property_Budget,Property_Address,Property_City,Property_Explore,Property_Owner_Name,Property_Type_id} = props.property

    console.log(props.propertydetails)
    const {amenities,description,facilities,full_address,age_of_construction,landmarks,authority_approval} = props.propertydescription

    const {Property_Owner_Number,superarea,furnished_status,storerooms,carpetarea,developer,car_parking,facing,overlooking,water_availability,type_of_ownership,status_of_electricity,floor,unit_on_floor,transaction_type,balcony,bedrooms,bathrooms,date} = props.propertydetails

    const [active3,setActive3] = useState("childDiv-active")
    const [active2,setActive2] = useState("")
    const [active1,setActive1] = useState("")

    const roundOf = (num) => {
        if(num >= 10000000){
            return (num / 10000000).toFixed(1).replace(/\.0$/,' ') + "Cr"
        }
        if(num >= 100000){
            return (num / 100000).toFixed(1).replace(/\.0$/,' ') + "Lac"
        }
        if (num >= 1000){
            return (num / 1000).toFixed(1).replace(/\.0$/,' ') + "K"
        }
    }

    const handlecard = (e) => {
        if(e.target.id === "childDiv-1"){
            setActive1("childDiv-active")
            setActive2("")
            setActive3("")
        }
        else if(e.target.id === "childDiv-2"){
            setActive1("")
            setActive2("childDiv-active")
            setActive3("")
        }
        else{
            setActive1("")
            setActive2("")
            setActive3("childDiv-active")     
        }
    }

    console.log(props.propertydescription)
    const data = new Uint8Array(props.image.data)
    const blob = new Blob([data],{type: "image/png"})
    const url = URL.createObjectURL(blob)


    return (
        <div id="propertyDetailTabId" class="">
            <div class="m-agent-promotion" style={{display:"none"}}></div>
            <div id="b2c-owner-banner-srp"></div>
            <div class="whiteBgBlock">
                <div id="fb-root" class=" fb_reset"><div style={{position:"absolute", top: "-10000px", width: "0px", height: "0px"}}><div></div></div></div>
                    <div class="propInfoTab transition">
                        <div class="propInfoTabInner">
                            <div class="propInfoSec transition  "> 
                                <div class="priceSqft">
                                    <div class="p_price" id="priceSv">
                                        <span class="rupee">₹</span> 
                                        {roundOf(Property_Budget)}
                                    </div>
                                   {/* <input type="hidden" value="Sukrut 2" id="psmName">
                                   <input type="hidden" value="Paldi" id="locality">
                                    <input type="hidden" value="Ahmedabad" id="city"> */}
                                    <div class="clr"></div>
             
                                    <div class="allPricePropWorthSection">
                                        <div class="allPricePropWorth">
                                            <div class="closeAllPricePropWorth"></div>
                                            <div class="srpdetailWrap" id="srpdetailWrap">
                                                <div class="payPlanScroll webkit__scroll">
                                                    " "
                                                </div>                
                                                <div class="applicableCharges">                    
                                                    " "
                                                </div>
                                            </div>
                                            <div class="clr"></div>
                                        </div>
                                    </div>
                                </div>
                                <div id="propUnitDesc" style={{display:"none"}}>
                                    {Property_BHK} BHK  
                                    {Property_Type_Name}
                                </div>
                                <div class="propBhk">
                                    <h1>
                                        <span class="p_bhk">
                                            <input type="hidden" value="10002" id="propertyTypeCode"/>
                                            {Property_BHK} BHK {Property_Type_Name} for sale in {Property_Address}, {Property_City}
                                        </span>
                                        <span class="p_text">
                                            <span class="p_address">
                                                for sale in &nbsp; 
                                                <input type="hidden" value="Sukrut 2" id="projectSocietyName53781349"/>
                                                {Project_Name},&nbsp;
                                               {/* <!--      
                               
                                                  <span><a href="https://www.magicbricks.com/paldi-in-ahmedabad-Overview" target="_blank">Paldi,</a></span>
                                                --> */}
                                               <span>{Property_Address} 
                                                   <span>,&nbsp;{Property_City}</span>
                                               </span>            
                                            </span>
                                        </span>
                                        </h1>
                                        <div class="corridor-container"></div>
                                        <div class="fraction-nearby">
                                            <div class="p-pdp__fracblock">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="propAgent ">
                                        <div class="ph_viewPh">
                                            <div class="agentName">
                                                <div class="nameTitle">Owner</div>
                                                <div class="nameValue">
                                                    {Property_Owner_Name}
                                                </div>
                                                <input type="hidden" value="Bony Dedhia" id="propConNameWeb"/>
                                                <input type="hidden" value="Bony Dedhia (Owner)" id="contactPersonNameForContactId"/>
                                            </div>
                                            <div class="viewPh">
                                                <a href="#!" class="viewPhoneNumber contact-button" id="agentBtnqqq53781349">
                                                    Contact Now
                                                </a>
                                            </div>
                                            <div class="clr"></div>
                                        </div>
                                    </div>
                                    <div class="clr"></div>
                                </div>
                                <div class="propTabSec">
                                    <div class="propTabNav">
                                        <ul>
                                            <li class="active"><a href="#!" data-href="#propertyDetailTabData" onclick="showTabContentProperty(this,'overview','53781349');">Property Details</a></li>
                                            <li class=""><a href="#!" data-href="#projectDetailTabId" onclick="showTabContentProperty(this,'propertydetails','53781349');">Project Details</a> </li>
                                            <li class=""><a href="#!" data-href="#localityDetailTabId" onclick="showTabContentProperty(this,'map-of','53781349');">Locality Details</a> </li>
                                            <li id="pricetrends" style={{display: "block"}}><a href="#!" data-href="#trendsDetailTabId" onclick="showTabContentProperty(this,'priceTrends','53781349');">Price Trends</a>	</li> 
                                        </ul>
                                        <span class="animationLine transition" style={{width: "158.25px", left: "0px"}}></span>
                                    </div>
                                    <div class="postedOn">	Posted on: {date} </div>
                                    <div class="clr"></div>
                                </div>
                            </div>
                        </div>
                        <div id="tracking" style={{display: "none"}}>B</div>
                        <div class="calculatorWrapper" id="calculatorWrapper"></div>





                        <div itemscope="" itemtype="http://schema.org/Apartment"></div>
  
                        <div itemscope="" itemtype="http://schema.org/Apartment">
                            <meta itemprop="name" content="3 BHK Multistorey Apartment 1755 sqft"/>
                            <meta itemprop="description" content="3 Bath,Furnished,1 floor,North - East facing"/>
                            <div itemprop="address" itemscope="" itemtype="http://schema.org/PostalAddress">
                                <meta itemprop="addressLocality" content="Paldi"/>
                                <meta itemprop="addressCountry" content="IN"/>
                                <meta itemprop="addressRegion" content="Ahmedabad"/>    
                            </div>
                            <div itemprop="geo" itemscope="" itemtype="http://schema.org/GeoCoordinates">
                                <meta itemprop="longitude" content="23.0089795"/>
                                <meta itemprop="latitude" content="72.5573232"/>
                            </div>
                            <meta itemprop="numberOfRooms" content="3"/>
                            <meta itemprop="floorSize" content="1755 FTK "/>
                        </div>
                        <div class="propOverView ">
                            <div class="propVerifiedParent caAgentLogo"></div>
                            <div class="propImageBlock">
                                <div class="bigImage " itemscope="" itemtype="http://schema.org/ImageObject">
                                    <div class="largeImgMagni"></div>
                                    <img id="bigImageId" class="lazy" src={url} data-src={url} itemprop="contentURL" alt="" width="333" height="252"  style={{cursor: "pointer"}}/>                    
                                    <span class="photoCount" onclick="showPhotoMap('bricks/photoComponent.html?source=detail&amp;pid=53781349&amp;imageId=PROP197174701&amp;imagesource=10504');" style={{cursor: "pointer"}}>    
                                        0 photos
                                    </span>
                                </div>
                                <span style={{height: "1px", left: "0", position: "absolute", width: "100%", bottom: "0"}}></span>
                                <div class="clr"></div>
                            </div>
                            <div class="joinMbprimePopUpGraybox" id="joinMbprimePopUpGraybox" style={{display: "none"}}>
                                <div class="joinMbprimePopUp hidejoinMbprimePopUp" id="displayPopup">
                                    <span class="joinMbprimePopUpClose" onclick="document.getElementById('joinMbprimePopUpGraybox').style.display = 'none';"></span>
                                        <div class="joinMbprimePopUp__topContent">
                                            <div class="joinMbprimePopUp__h4">
                                                You're not an<span class="primeLogo"></span><span class="boldWord">MB</span><span class="yellowWord"> Prime</span> member!
                                            </div>
                                            <div class="joinMbprimePopUp__joinInfo">
                                                Join &amp; Get an <span class="boldWord">Expert</span> to <span class="boldWord">Verify Properties</span> for you
                                            </div>
                                            <div class="joinMbprimePopUp__whyJoin">
                                                <div class="joinMbprimePopUp__whyJoin__benefits">
                                                    <span class="title">Save your time &amp; money</span> <span class="benefit">Get any 5 properties verified on demand</span>
                                                </div>
                                                <div class="joinMbprimePopUp__whyJoin__benefits">
                                                    <span class="title">Get latest photos &amp; videos</span> <span class="benefit">View properties without stepping out</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="joinMbprimePopUp__bottomContent">
                                            <div class="joinMbprimePopUp__viewBenefit">
                                                View all MB Prime benefits <a href="#!" class="seeHereLink" id="joinMbPrimeSeeHere__link">here</a>
                                            </div>
                                            <div class="joinMbprimePopUp__joinPrimeBtn">
                                                <a href="#!" class="joinprimeBtn" id="joinMbPrimePopUp__link">Join MB Prime @ ₹999</a>
                                            </div>
                                            <div class="joinMbprimePopUp__notNowBtn">
                                                <a href="#!" class="notnowBtn" onclick="hidePrimePopup()">Not Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    

                                <div class="propInfoBlock">
                                    <div class="propInfoBlockInn">
                                        <div class="p_infoRow" id="firstFoldDisplay">
                                            <div class="p_infoColumn">
                                                <div class="p_title">

                                                    Bedrooms
                                                </div>
                                                <div class="p_value">
                                                    <div class="seeBedRoomDimen">
                                                        {bedrooms} <span>

                                                        </span>


                                                    </div>
                                                </div>
                                            </div>
                                            <div class="p_infoColumn">
                                                <div class="p_title">
                                
                                                Bathrooms
                                                </div>
                                                <div class="p_value">{bathrooms}</div>
                                            </div>
                                            <div class="p_infoColumn">
                                                <div class="p_title">
                                                    Balcony

                                                </div>
                                                <div class="p_value">{balcony}</div>
                                            </div>
                                            <div class="p_infoColumn">
                                                <div class="p_title">Store Room</div>
                                                <div class="p_value">{storerooms}</div>
                                            </div>
                                            <div class="clr"></div>
                                        </div>
            
                                        {/* <!-- Row 2:  start --> */}
                                        <div class="p_infoRow" id="secondFoldDisplay">
                                            <div class="p_infoColumn">
                                                <div class="p_title">Super area</div>
                                                <div class="p_value">
                                                    <span id="coveredAreaDisplay">{superarea}</span>
                                                    <div class="posRel">
                                                        <span class="areaInputType">
                                                            sqft
                                                        </span> 
                                                        <select id="coveredAreaConv"  class="areaList">
                                                            <option value="Sq-ft" selected="selected">
                                                                sqft
                                                            </option>

                                                             <option value="Sq-yrd">
                                                                sqyrd
                                                            </option>

                                                             <option value="Sq-m">
                                                                sqm
                                                            </option>

                                                             <option value="Acre">
                                                                acre
                                                            </option>

                                                             <option value="Bigha">
                                                                bigha
                                                            </option>

                                                             <option value="Hectare">
                                                                hectare
                                                            </option>

                                                             <option value="Marla">
                                                                marla
                                                            </option>

                                                             <option value="Kanal">
                                                                kanal
                                                            </option>

                                                             <option value="Biswa1">
                                                                biswa1
                                                            </option>

                                                             <option value="Biswa2">
                                                                biswa2
                                                            </option>

                                                             <option value="Ground">
                                                                ground
                                                            </option>

                                                             <option value="Aankadam">
                                                                aankadam
                                                            </option>

                                                             <option value="Rood">
                                                                rood
                                                            </option>

                                                             <option value="Chatak">
                                                                chatak
                                                            </option>

                                                             <option value="Kottah">
                                                                kottah
                                                            </option>

                                                             <option value="Marla">
                                                                marla
                                                            </option>

                                                             <option value="Cent">
                                                                cent
                                                            </option>

                                                             <option value="Perch">
                                                                perch
                                                            </option>

                                                             <option value="Guntha">
                                                                guntha
                                                            </option>

                                                             <option value="Are">
                                                                are
                                                            </option>

                                                             <option value="Katha">
                                                                katha
                                                            </option>

                                                             <option value="Gaj">
                                                                gaj
                                                            </option>

                                                             <option value="Killa">
                                                                killa
                                                            </option>

                                                             <option value="Kuncham">
                                                                kuncham
                                                            </option>                                                
                                                        </select>
                                                        <div class="unitBlockAreaDropDown">
                                                            <ul></ul>
                                                        </div>
                                                    </div>

                                        <div id="coveredAreaUnit" style={{display: "none"}}>Sq-ft</div>
                                        <div id="coveredArea" style={{display: "none"}}>{superarea}</div>
                                    </div>
                                    <div class="fo_11px c_dark_gray">₹
                                        {Math.round(parseInt(Property_Budget)/parseInt(superarea))}/sqft
                                    </div>                                    
                                </div>
                                <div class="p_infoColumn">
                                    <div class="p_title">Carpet area</div>
                                    <div class="p_value">
                                        <span id="carpetAreaDisplay">{carpetarea}</span>
                                        <div class="posRel">
                                            <span class="areaInputType" onClick="getCustomAreaOptionsCarpet(this, '.posRel')">
                                                sqft
                                            </span> <select id="carpetAreaConv" onChange="convertArea('carpetAreaConv','carpetArea', 'carpetAreaUnit', 'carpetAreaDisplay');" class="areaList">
                                                <option value="Sq-ft" selected="selected">
                                                    sqft
                                                </option>
                                            
                                                <option value="Sq-yrd">
                                                    sqyrd
                                                </option>
                                            
                                                <option value="Sq-m">
                                                    sqm
                                                </option>
                                            
                                                <option value="Acre">
                                                    acre
                                                </option>
                                            
                                                <option value="Bigha">
                                                    bigha
                                                </option>
                                            
                                                <option value="Hectare">
                                                    hectare
                                                </option>
                                            
                                                <option value="Marla">
                                                    marla
                                                </option>
                                            
                                                <option value="Kanal">
                                                    kanal
                                                </option>
                                            
                                                <option value="Biswa1">
                                                    biswa1
                                                </option>
                                            
                                                <option value="Biswa2">
                                                    biswa2
                                                </option>
                                            
                                                <option value="Ground">
                                                    ground
                                                </option>
                                            
                                                <option value="Aankadam">
                                                    aankadam
                                                </option>
                                            
                                                <option value="Rood">
                                                    rood
                                                </option>
                                            
                                                <option value="Chatak">
                                                    chatak
                                                </option>
                                            
                                                <option value="Kottah">
                                                    kottah
                                                </option>
                                            
                                                <option value="Marla">
                                                    marla
                                                </option>
                                            
                                                <option value="Cent">
                                                    cent
                                                </option>
                                            
                                                <option value="Perch">
                                                    perch
                                                </option>
                                            
                                                <option value="Guntha">
                                                    guntha
                                                </option>
                                            
                                                <option value="Are">
                                                    are
                                                </option>
                                            
                                                <option value="Katha">
                                                    katha
                                                </option>
                                            
                                                <option value="Gaj">
                                                    gaj
                                                </option>
                                            
                                                <option value="Killa">
                                                    killa
                                                </option>
                                            
                                                <option value="Kuncham">
                                                    kuncham
                                                </option>
                                                
                                            </select>

                                            <div class="unitBlockAreaDropDown">
                                                <ul></ul>
                                            </div>

                                        </div>
                                        <div id="carpetAreaUnit" style={{display: "none"}}>Sq-ft</div>
                                        <div id="carpetArea" style={{display: "none"}}>{carpetarea}</div>
                                    </div>                                    
                                    <div class="fo_11px c_dark_gray">₹
                                        {Math.round(parseInt(Property_Budget)/parseInt(carpetarea))}/sqft
                                    </div>
                                </div>
                                <div class="p_infoColumn">
                                    <div class="p_title">
                                        Loading
                                        <div class="loading_info">
                                            <div class="toolTip">
                                                <p>Loading area or loading is the difference between
                                                    super area and carpet area divided by super area.</p>
                                                <p>Eg.- Super area= 1000 sq ft, Carpet area= 800 sq ft,
                                                    Loading= 20%.</p>
                                                <div class="toolTipArrowSec">
                                                    <div class="toolTipArrowShadow"></div>
                                                    <div class="toolTipArrow"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p_value">{Math.round(((parseInt(superarea)-parseInt(carpetarea))/parseInt(superarea))*100)}%</div>
                                </div>
                                <div class="clr"></div>
                            </div>
                            {/* <!-- Row 2:  End  --> */}

                            {/* <!-- Row 3:  Sart   --> */}
                                
                            <div class="p_infoRow" id="thirdFoldDisplay">
                                <div class="p_infoColumn">
                                    <div class="p_title">Developer</div> 
                                    <div class="p_value">
                                        <span class=""><a href="https://www.magicbricks.com/sukrut-developers-buid-4d423731303535" target="_blank" rel="noreferrer">
                                        {developer}                                    
                                        </a></span>	
                                    </div>
                                </div>
                            <div class="p_infoColumn">
                                <div class="p_title">Project</div> 
                                <div class="p_value">
                                    <span class="prop_address"><a href="https://www.magicbricks.com/sukrut-2-paldi-ahmedabad-pdpid-4d4235303739353931" target="_blank" rel="noreferrer"> {Project_Name} </a></span>
                                </div>
                            </div>
                            <div class="clr"></div>
                        </div>
                        <div class="clr"></div>

                        {/* <!-- Row 3:  end   --> */}

                        {/* <!-- Row 4:  Sart   --> */}
                                
                        <div class="p_infoRow" id="fourthFoldDisplay">
                            <div class="p_infoColumn">
                                <div class="p_title">Status</div>
                                <div class="p_value">{Property_Explore}</div>
                            </div>
                            <div class="p_infoColumn">
                                <div class="p_title">Transaction type</div>
                                <div class="p_value">{transaction_type}</div>
                            </div>
                            <div class="p_infoColumn">
                                <div class="p_title">Floor</div>
                                <div class="p_value truncated">{unit_on_floor}&nbsp;({floor})
                                </div>
                            </div>
                            <div class="p_infoColumn">
                                <div class="p_title">Car parking</div>
                                <div class="p_value">{car_parking}</div>
                            </div>
                            <div class="clr"></div>
                        </div>
                        {/* <!-- Row 4:  end   --> */}
                        <div class="belowSec"></div>
                        <div class="clearAll"></div>
                    </div>
                    <input type="hidden" id="schIdTaskPdp53781349" name="schIdTaskPdp53781349" value=""/>
                    <input type="hidden" class="checkVidTourPdp" id="checkVidTourPdp_53781349" value=""/>
                    <input type="hidden" class="toStartVidTourPdp" id="toStartVidTourPdp_53781349" value=""/>
                    <input type="hidden" class="liveToFutureTourPdp" id="liveToFutureTourPdp_53781349" value=""/>
                    <div class="contactSec">
                        <div class="contactBtns">
                            <a href="#!" class="btnContact radius3 contactBtn contact-button" id="agentBtnat53781349" onclick="createCookie('contactTrackCookie', 'AC-Main-Contact-B', -1);
                                        _trackContactForm();showPropertyContactForm(this,'53781349',
                                      'Sukrut 2','https://cdn.staticmb.com/propertydetailstatic/images/','above','property','Y');setContactTrackCodePDPWeb('Contact Owner');setSearchedSeat('property');
                                      ">Contact Owner
                            </a>
                                <input type="hidden" id="advertiserName" name="advertiserName" value=""/>
                                <input type="hidden" id="isSiteVisit" value=""/>
                                <input type="hidden" id="siteVisitDates" value="09-06-2021,10-06-2021,11-06-2021,12-06-2021,13-06-2021,14-06-2021,15-06-2021,16-06-2021,17-06-2021,18-06-2021,19-06-2021,20-06-2021,21-06-2021,22-06-2021"/>
                                <input type="hidden" id="siteVisitSlot" value="09-06-2021_1113_1315_1517_1719_1921"/>
                                <input type="hidden" id="svPrefDaysSlot" value=""/>
                                <input type="hidden" id="svPrefTimeSlot" value=""/>
                                <input type="hidden" id="siteVisitDays" value="Wed,Thu,Fri,Sat,Sun,Mon,Tue,Wed,Thu,Fri,Sat,Sun,Mon,Tue"/>
                                <input type="hidden" id="siteVisitOwnerType" value="Wed,Thu,Fri,Sat,Sun,Mon,Tue,Wed,Thu,Fri,Sat,Sun,Mon,Tue"/>
                                <input type="hidden" id="siteVisitPhoneNum" value="Wed,Thu,Fri,Sat,Sun,Mon,Tue,Wed,Thu,Fri,Sat,Sun,Mon,Tue"/>
                                <a id="siteVisitLink" class="btnViewPh radius3 viewPhoneNumber viewphone-button" href="#!" data-id="siteVisitContact" data-name="Site Visit" onclick="showPropertyContactForm(document.getElementById('aboveContactAgentForm53781349'),'53781349','Sukrut 2','https://cdn.staticmb.com/propertydetailstatic/images/','above','property-siteVisit-top','Y');ga('send', 'event', 'Site visit', 'Open');setContactTrackCodePDPWeb('Site_Visit');">
                                    Book Site Visit
                                </a>
                                <div class="btnShortSec" id="savedShortList53781349"><a class="saveLink" href="#!" onclick="shortListPropProjB('53781349','propertyShortList');fireUniversalGAShortList();"><span onclick="stopPage=true;"></span><div class="clearAll"></div></a></div>            
                        </div>
                        <div class="download-brochure-btn" onclick="callPdpScheduleFormObj('downloadBrochure');">
                            <span class="download-brochure-btn__icon">
                                <svg width="16px" height="19px" viewBox="0 0 16 19" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                                    <title>Group 107</title>
                                    <g id="Web" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g id="1-Artboard-web" transform="translate(-873.000000, -94.000000)" fill-rule="nonzero" stroke-width="0.650000036">
                                            <g id="Group-2" transform="translate(849.000000, 86.000000)">
                                                <g id="Group-63" transform="translate(6.000000, 9.000000)">
                                                    <g id="Group-108">
                                                        <g id="Group-107" transform="translate(19.000000, 0.000000)">
                                                            <path d="M7.07724143,13.1010045 L7.07724143,13.1010045 C6.93180783,13.1010045 6.81377477,12.982606 6.81377477,12.8367221 L6.8143017,6.87504096 C6.8143017,6.72915711 6.93233476,6.61075861 7.07776836,6.61075861 L7.07776836,6.61075861 C7.22320196,6.61075861 7.34123502,6.72915711 7.34123502,6.87504096 L7.34070809,12.8367221 C7.34070809,12.982606 7.22267502,13.1010045 7.07724143,13.1010045 Z" id="Path" stroke="#D8232A" fill="#D8232A"></path>
                                                            <path d="M7.07724143,13.1010045 C7.00979396,13.1010045 6.9423465,13.0751048 6.89070703,13.023834 L4.61804362,10.7441345 C4.51529162,10.6410644 4.51529162,10.4735094 4.61804362,10.3704393 C4.72079562,10.2673692 4.88783348,10.2673692 4.99058548,10.3704393 L7.07671449,12.4630269 L9.16284351,10.3704393 C9.26559551,10.2673692 9.43263337,10.2673692 9.53538537,10.3704393 C9.63813736,10.4735094 9.63813736,10.6410644 9.53538537,10.7441345 L7.26272196,13.023834 C7.21213636,13.0751048 7.14468889,13.1010045 7.07724143,13.1010045 Z" id="Path" stroke="#D8232A" fill="#D8232A"></path>
                                                            <path d="M12.8376765,17.5975043 L1.3173333,17.5975043 C0.591219186,17.5975043 0,17.0049833 0,16.2760926 L0,1.32141173 C0,0.592521021 0.591219186,8.5128702e-14 1.3173333,8.5128702e-14 L9.68345363,8.5128702e-14 C9.82888723,8.5128702e-14 9.94692029,0.118398491 9.94692029,0.264282346 C9.94692029,0.410166202 9.82888723,0.528564693 9.68345363,0.528564693 L1.3173333,0.528564693 C0.881559445,0.528564693 0.52693332,0.884288731 0.52693332,1.32141173 L0.52693332,16.2760926 C0.52693332,16.7132156 0.881559445,17.0689396 1.3173333,17.0689396 L12.8376765,17.0689396 C13.2734503,17.0689396 13.6280765,16.7132156 13.6280765,16.2760926 L13.6280765,4.60062709 C13.6280765,4.45474323 13.7461095,4.33634474 13.8915431,4.33634474 C14.0369767,4.33634474 14.1550098,4.45474323 14.1550098,4.60062709 L14.1550098,16.2766212 C14.1550098,17.0049833 13.5643175,17.5975043 12.8376765,17.5975043 Z" id="Path" stroke="#606060" fill="#606060"></path>
                                                            <path d="M13.8915431,4.86490943 L9.68345363,4.86490943 C9.53802003,4.86490943 9.41998697,4.74651094 9.41998697,4.60062709 L9.41998697,0.378980885 C9.41998697,0.23309703 9.53802003,0.114698538 9.68345363,0.114698538 C9.82888723,0.114698538 9.94692029,0.23309703 9.94692029,0.378980885 L9.94692029,4.33581618 L13.8915431,4.33581618 C14.0369767,4.33581618 14.1550098,4.45421467 14.1550098,4.60009852 C14.1550098,4.74598238 14.0375037,4.86490943 13.8915431,4.86490943 Z" id="Path" stroke="#606060" fill="#606060"></path>
                                                            <path d="M13.8915431,4.86490943 C13.8230418,4.86490943 13.7545405,4.83795263 13.702901,4.78509617 L9.4948115,0.449279989 C9.3936403,0.345152745 9.39574804,0.177069172 9.50008083,0.0755847511 C9.6038867,-0.0264282346 9.77092456,-0.0237854112 9.87262269,0.080870398 L14.0807122,4.41668657 C14.1818834,4.52081382 14.1797757,4.68889739 14.0754429,4.79038181 C14.0243303,4.84006689 13.9579367,4.86490943 13.8915431,4.86490943 Z" id="Path" stroke="#606060" fill="#606060"></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </span>
                            Download Brochure
                        </div>
                        <div class="reportInaccuracy" onclick="showFeedbackGrayBoxSES('53781349', '', '');">
                            Share Property Feedback
                        </div>
                        <div class="clr"></div>
                    </div>
                </div>
                <div class="clr"></div>
            </div>
            <div class="content" id="appBannerForDetail" style={{display: "block"}}></div>
            <div style={{display: "none"}} id="hiddenPsmLeadGenDiv">
        </div>
    </div>
            <div class="clearAll"></div>
            <div class="desAndQuetion ">
                <div id="propertyDetailTabData">
                    <div class="whiteBgBlock" id="whiteBgBlock-id">
                        <div class="schedule-contact save-prop-widget">
                            <div class="schedule-contact__icon">
                               <img src="https://cdn.staticmb.com/propertydetailstatic/images/save-sortlist-form-icon-2.svg" alt="imagess" data-src="https://cdn.staticmb.com/propertydetailstatic/images/save-sortlist-form-icon-2.svg" width="" height="" class="cust-lazy"/>
                            </div>
                            <div class="schedule-contact__text-section">
                                <div class="schedule-contact__heading">Save Property</div>
                                <div class="schedule-contact__text">Don't want to share your details with the agent right now?</div>
                            </div>        
                            <a href="#!" onclick="callPdpScheduleFormObj('DropOff');" class="btnContact radius3" >Save Property for Later</a>
                            <div class="clearAll"></div>
                        </div>
                    </div>
                    <div class="whiteBgBlock" id="propDetailDescriptionId">
                        <div class="blockHeading">Description</div>
                        <div class="propDescription clearfix">
                            <div class="descriptionCont">
                                <div class="p_infoRow">
                                    <div class="prop-desc">
                                        <div id="prop-detail-desc">
                                            {description}
                                        </div>
                                        <div class="prop-desc__more" id="prop-desc__moreId" onclick="showMoreDesc(this, '#prop-detail-desc')" style={{display: "block"}}>more</div>
                                    </div>
                                </div>
                                <div class="p_infoRow">
                                    <div class="p_title">Price Breakup </div>
                                    <div class="p_value">
                                        <div class="fltLeft">
                                                <span class="breakupdivider">
                                                    <span class="rupee">₹</span>
                                                    <span class="semiBold">{roundOf(Property_Budget)}</span>
                                                </span>
                                        </div>
                                        <div class="allPricePropWorthSection"></div>
                                        <div class="clr"></div>
                                    </div>
                                    <div class="clr"></div>
                                </div>
                                <div id="bookingAmount" class="p_infoRow p_infoRowSecDep" style={{display:"none"}}>
                                    <div class="p_title">
                                       Booking Amount
                                    </div>
                                    <div class="p_value">
                                        <div class="alliance-bnr">
                                            <ul class="alliance-bnr__list" id="BookingAmountTypeDiv"></ul>
                                        </div>   
                                        <div class="clr"></div>
                                    </div>
                                    <div class="clr"></div>
                                </div>
                                <div class="p_infoRow">
                                    <div class="p_title">Facilities</div>
                                    <div class="p_value">{facilities}</div>
                                    <div class="clr"></div>
                                </div>
                                <div class="p_infoRow">
                                    <div class="p_title">Address</div>
                                    <div class="p_value">{full_address}</div>
                                    <div class="clr"></div>
                                </div>
                                <div class="p_infoRow">
                                    <div class="p_title">Landmarks</div>
                                    <div class="p_value">{landmarks}</div>
                                    <div class="clr"></div>
                                </div>
                                <div class="p_infoRow">
                                    <div class="p_title">Facing</div>
                                    <div class="p_value">
                                        {facing}
                                        <div class="p_value__subinfo"><span class="p_value__subinfoicon"></span>Talk to our best Vastu Consultants to get instant solution. <a href="https://www.magicbricks.com/propertyservices/vastu-services?inc=MB_PDP_Facing_VastuLink" target="_blank" rel="noreferrer" class="p_value__subinfocta">View Consultants</a> </div>
                                    </div>
                                    <div class="clr"></div>
                                </div>
                                <div class="p_infoRow">
                                    <div class="p_title">Overlooking</div>
                                    <div class="p_value">{overlooking}</div>
                                    <div class="clr"></div>
                                </div>
                                <div class="p_infoRow">
                                    <div class="p_title">Water Availability</div>
                                    <div class="p_value">{water_availability}</div>
                                    <div class="clr"></div>
                                </div>
                                <div class="p_infoRow">
                                    <div class="p_title">Status of Electricity</div>
                                    <div class="p_value">{status_of_electricity}</div>
                                    <div class="clr"></div>
                                </div>
                                <div class="p_infoRow">
                                    <div class="p_title">Lift</div>
                                    <div class="p_value">
                                        <div class="fltLeft">
                                            <div class="">1</div>
                                            <div class="alliance-bnr">
                                                <ul class="alliance-bnr__list" id="liftTypeDiv"></ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="clr"></div>
                                </div>
                                <div class="p_infoRow">
                                    <div class="p_title">Age of Construction</div>
                                    <div class="p_value">{age_of_construction}</div>
                                    <div class="clr"></div>
                                </div>
                                <div class="p_infoRow">
                                    <div class="p_title">Furnishing</div>
                                    <div class="p_value">
                                        <div class="fltLeft">
                                            <div class="">{furnished_status}</div>
                                            <div class="alliance-bnr">
                                                <ul class="alliance-bnr__list" id="furnishingTypeDiv"></ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="clr"></div>
                                </div>
                                <div class="p_infoRow">
                                    <div class="p_title">Authority Approval</div>
                                    <div class="p_value">{authority_approval}</div>
                                    <div class="clr"></div>
                                </div>
                                <div class="p_infoRow">
                                    <div class="p_title">Type of Ownership</div>
                                    <div class="p_value">{type_of_ownership}</div>
                                    <div class="clr"></div>
                                </div>
                                <div id="insurancePartner" class="p_infoRow" style={{display:"none"}}>
                                    <div id="insurPatLabel" class="p_title">Insurance Partner</div>
                                    <div class="p_value">
                                        <div class="fltLeft">
                                            <div class="alliance-bnr">
                                                <ul class="alliance-bnr__list" id="InsurancePartnerTypeDiv"></ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="clr"></div>
                                </div>   
                                <div class="p_infoRow">
                                    <div class="p_title">Amenities</div>
                                    <div class="p_value">
                                        <div class="amenities">
                                            <ul>
                                                {amenities}
                                            </ul>
                                        </div>
                                        <div class="alliance-bnr">
                                            <ul class="alliance-bnr__list" id="amenitiesTypeDiv"></ul>
                                        </div>
                                    </div>
                                    <div class="clr"></div>
                                </div>
                                <div class="ctaReport">
                                    <div class="cta">
                                        <a href="#!" class="btnContact radius3 contact-button" id="agentBtnt53781349" onclick="createCookie('contactTrackCookie', 'AC-Main-Contact-B', -1);_trackContactForm();showPropertyContactForm(document.getElementById('aboveContactAgentForm53781349'),'53781349',
                                        'Sukrut 2','https://cdn.staticmb.com/propertydetailstatic/images/','above','property','Y');setContactTrackCodePDPWeb('Contact Owner');setSearchedSeat('property');
                                        ">Contact Owner</a>
                                    </div>
                                    <div class="report">
                                        <span class="r_label">Report:</span>
                                        <span class="r_link" onclick="showFeedbackGrayBoxSES('53781349', '', '11351');">Sold Out</span>
                                        <span class="r_link" onclick="showFeedbackGrayBoxSES('53781349', '', '11352');">Wrong Info</span>                                           
                                        <span class="r_link" onclick="showFeedbackGrayBoxSES('53781349', '', '11353');">Broker</span>
                                    </div>                
                                    <div class="clr"></div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div class="boxCont projectDet clearfix" id="bRera">
                            <div class="whiteBgBlock"> 
                                <div class="blockHeading">Disclaimer</div>
                                <div class="rerDis propDescription" id="reraDisclaimerTextIdNo">Magicbricks has endeavoured to ascertain the requirement of RERA registration. However, the advertiser claims that there is no requirement for such registration. Users are cautioned accordingly.<span class="tdS">...</span> <span class="hdT dNone"><br/><br/>Magicbricks is a platform for advertisement and does not vouch for the project or the details provided in the advertisement. Users are required to verify the authenticity of the claims made therein.</span> <span class="sd c_dark_gray ulT">read more</span> <span class="hdT c_dark_gray ulT dNone">read less</span></div>
                            </div> 
                    </div> 
                    <div id="stdcDYnamicBannerTopDiv" style={{display: "none"}}>
                        <div id="stdcDYnamicBannerInnerDiv" class="dealhuntBanner">
                    </div>
                </div>
                <div class="clearAll"></div>    
            </div>
                {/* <!-- <div id = "propertyServicesBan" style={{display:"none"}}></div> --> */}
                <div class="boxCont projectDet clearfix">
                    <div class="whiteBgBlock" style={{width:"830px",backgroundColor:"whitesmoke"}}>
                        <div class="parentDiv" style={{marginLeft:"0px"}}>
                            <div class={`childDiv childDiv-3 ${active3}`} id="childDiv-3" onMouseEnter={handlecard}>
                                <div class="defaultInfo">Legal <br/>Services</div>
                                <div class="activeInfo">
                                    <div class="activeHeading">Legal Services</div>
                                    <ul class="activeUL">
                                        <li class="activeLI">Property Verification</li>
                                        <li class="activeLI">Drafting/vetting Sale Deed &amp; Agreement </li>
                                        <li class="activeLI">Property Registration</li>
                                    </ul>
                                    <a href="https://www.magicbricks.com/propertyservices/legal-services?inc=PDP_LegalServices" target="_blabk" class="activeCta">Know More</a>
                                </div>
                                <span class="activeImg activeImg-03"><img data-src="https://cdn.staticmb.com/propertydetailstatic/images/legal.png" alt="imagess" src="https://cdn.staticmb.com/propertydetailstatic/images/legal.png" class="lazy"/></span>
                            </div>
                            <div class={`childDiv childDiv-1 ${active1}`} id="childDiv-1" onMouseEnter={handlecard}>
                                <div class="defaultInfo">Home <br/>Inspection</div>
                                <div class="activeInfo">
                                    <div class="activeHeading">Home Inspection</div>
                                    <ul class="activeUL">
                                        <li class="activeLI">Renegotiate property price</li>
                                        <li class="activeLI">Avoid expensive repairs</li>
                                        <li class="activeLI">Protect your investment</li>
                                    </ul>
                                    <a href="https://www.magicbricks.com/propertyservices/property-inspection-services?inc=PDP_HomeInspection" target="_blank" rel="noreferrer" class="activeCta">Know More</a>
                                </div>
                                <span class="activeImg activeImg-01"><img data-src="https://cdn.staticmb.com/propertydetailstatic/images/inspection.png" src="https://cdn.staticmb.com/propertydetailstatic/images/inspection.png" alt="imagess" class="lazy"/></span>
                            </div>
                            <div class={`childDiv childDiv-2 ${active2}`} id="childDiv-2" onMouseEnter={handlecard}>
                                <div class="defaultInfo">Home <br/>Cleaning</div>
                                <div class="activeInfo">
                                    <div class="activeHeading">Home Cleaning</div>
                                    <ul class="activeUL">
                                        <li class="activeLI">Verified &amp; trusted cleaning experts</li>
                                        <li class="activeLI">Intensive cleaning of all areas</li>
                                        <li class="activeLI">Lowest prices</li>
                                    </ul>
                                    <a href="https://www.magicbricks.com/propertyservices/home-cleaning-services?inc=PDP_HomeCleaning" target="_blank" rel="noreferrer" class="activeCta">Know More</a>
                                </div>
                                <span class="activeImg activeImg-02"><img data-src="https://cdn.staticmb.com/propertydetailstatic/images/cleaning.png" alt="imagess" src="https://cdn.staticmb.com/propertydetailstatic/images/cleaning.png" class="lazy"/></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="whiteBgBlock" style={{width:"965px"}}>
                    <div class="blockHeading mktDtlhead">Tools to Help You Decide
                        Better</div>
                    <div class="propDescription helpTool">
                        <div class="helpToolWrap" id="helpToolCard">
                            <div class="helpToolCard pull-left bg_white">
                                <div class="inner">
                                    <a href="https://www.magicbricks.com/homeloan/home?home_loan_calculator_type=1001" onClick="implicitTrackingActivity('Calculators');" target="_blank" rel="noreferrer" class="pos_rel">
                                        <div class="helpTool_title fo_14px c_black font-type-4">Check
                                            Your Loan Eligibility</div>
                                        <div class="helpTool_cont fo_12px c_middle_gray">Find out
                                            how much loan you are eligible for?</div>
                                    </a>
                                </div>
                            </div>
                            <div class="helpToolCard pull-left bg_white">
                                <div class="inner">
                                    <a href="https://www.magicbricks.com/homeloan/home?home_loan_calculator_type=1002" onclick="implicitTrackingActivity('Calculators');" target="_blank" rel="noreferrer" class="pos_rel"> <span class="helpTool_tag pos_abs text-center fo_9px c_black font-type-4 text-uppercase">Most
                                            Used</span>
                                        <div class="helpTool_title fo_14px c_black font-type-4">Calculate
                                            Your EMI</div>
                                        <div class="helpTool_cont fo_12px c_middle_gray">Find out
                                            how much how much EMI you have to pay?</div>
                                    </a>
                                </div>
                            </div>
                            <div class="helpToolCard pull-left bg_white">
                                <div class="inner">
                                    <a href="https://www.magicbricks.com/homeloan/home?home_loan_calculator_type=1003" onClick="implicitTrackingActivity('Calculators');" target="_blank" rel="noreferrer" class="pos_rel">
                                        <div class="helpTool_title fo_14px c_black font-type-4">Prepay
                                            your loan</div>
                                        <div class="helpTool_cont fo_12px c_middle_gray">Find out if
                                            it is beneficial to prepay your loan?</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
                <div class="clearAll"></div>
                {/* </div> */}
                <div class="propDescription	rightFormBlock" style={{display:"none"}}>
                <div class="des_Contact">
                    <div class="desContactInnNo">
                            <div class="propAgent caAgentBtmCta">
                                <div class="CA_contact_wrap">
                                    <div class="CA_contact_pic ">	
                                        <img class="cust-lazy" data-src="https://cdn.staticmb.com/propertydetailstatic/images/adp__agent__no_image.gif" alt="" src="https://cdn.staticmb.com/propertydetailstatic/images/adp__agent__no_image.gif"/>
                                    </div>
                                    <div class="CA_contact_detail">
                                        <p class="CA_ownertype_name">Owner</p>
                                            <p class="CA_agent_name">
                                                {}
                                            </p>                                   
                                            <p class="CA_mobile_no">    
                                                +91
                                                -{Property_Owner_Number}
                                            </p>        
                                            <div class="viewPh">                                                
                                                <a href="#!" class="btnContact radius3 contactBtn viewphone-button" id="viewPhoneBtnat153781349" ></a>
                                            </div>        
                                    </div>            
                                </div>
                            </div>                
                            <div class="contactForm" id="aboveAgentPhoneFormOpen53781349"> </div>
                            <div id="contactFormInclude" style={{display: "none", border:"0px"}}></div>
                            <div id="agentInfoContainer"><iframe frameborder="0" name="upfrontContactForm" scrolling="no" style={{width: "100%", height: "600px"}} src="/propertyDetail/getUpfrontContactForm.html?id=53781349&amp;prjname=Sukrut 2&amp;pagSrc=pdp&amp;ref=upfrontContact&amp;source=wap&amp;alliance=&amp;mbtracker=&amp;ccode=&amp;luxGaDimension=undefined"></iframe></div>
                            <div id="pdpLocalityProjectChampionDiv"></div>
                        </div>
                        <div class="clr"></div>
                    </div>
                </div>
                <div class="clearAll"></div>
            </div>
        </div>
    )
}

export default PDescriptionImg