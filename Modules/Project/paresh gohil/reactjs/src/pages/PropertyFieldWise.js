import React,{useEffect,useState} from 'react'
import Property from "../services/Property"
import FieldWiseProperty from "../components/FieldWiseProperty"

const PropertyFieldWise = (props) => {
    const [property,setProperty] = useState([])

    const [active3,setActive3] = useState("childDiv-active")
    const [active2,setActive2] = useState("")
    const [active1,setActive1] = useState("")


    useEffect(() => {

        Property.getPropertyByCity(props.match.params.city).then((res) => {
            setProperty(res.data)
        })        
    },[props])


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

    console.log(property)
    return (
        <div style={{backgroundColor:"#F5F5F5",padding:"2px",marginLeft:"-150px",marginRight:"-130px"}}>
            {props.match.params.category === "buy" &&
            <div className="container-fluid mt-5 bg-white" style={{width:"1000px",height:"50px"}}>
                <p className="pt-2 text-secondary" style={{fontSize:"22px"}}>{props.match.params.field} Properties for sell in {props.match.params.city}</p>
            </div>
            }

            {props.match.params.category === "Rent" &&
            <div className="container-fluid mt-5 bg-white" style={{width:"1000px",height:"50px"}}>
                <p className="pt-2 text-secondary" style={{fontSize:"22px"}}>{props.match.params.field} Properties for {props.match.params.category} in {props.match.params.city}</p>
            </div>
            }

            { props.match.params.category === "buy" && 

            <div className="container-fluid mt-3 bg-white d-flex box" style={{width:"1000px",boxShadow:"0px 2px #D3D3D3",color:"black"}}>

                {property.map((property) => {
                    const {Property_Types,Property_Type_id,Property_Explore,Property_Type_Name,Property_Budget} = property
                    console.log(Property_Type_id)
                    
                    if(Property_Types === props.match.params.category){
                        if(props.match.params.fieldtype === "explore"){
                            console.log(Property_Explore)

                            if(Property_Explore === props.match.params.field){
                                console.log(props.match.params.field)
                                return(
                                        <FieldWiseProperty property={property} city={props.match.params.city} category={props.match.params.category} fieldtype={props.match.params.fieldtype} field={props.match.params.field}/>
                                    // </Link>
                                )                                     
                            }
                        }

                        else if(props.match.params.fieldtype === "propertytype"){
                            console.log(props.match.params.fieldtype)
                            
                            if(Property_Type_Name === props.match.params.field){
                                return( 
                                        <FieldWiseProperty property={property} city={props.match.params.city} category={props.match.params.category} fieldtype={props.match.params.fieldtype} field={props.match.params.field}/>
                                )
                            }
                        }
                        else if(props.match.params.fieldtype === "budget"){
                            if(Property_Budget <= 5000000 && props.match.params.field === "50 Lac"){
                                return( 
                                        <FieldWiseProperty property={property} city={props.match.params.city} category={props.match.params.category} fieldtype={props.match.params.fieldtype} field={props.match.params.field}/>
                                )
                            }
                            else if(Property_Budget > 5000000 && Property_Budget <= 10000000 && props.match.params.field === "50 Lac-1 Cr"){
                                return( 
                                        <FieldWiseProperty property={property} city={props.match.params.city} category={props.match.params.category} fieldtype={props.match.params.fieldtype} field={props.match.params.field}/>
                                )
                            }
                            else if(Property_Budget > 10000000 && Property_Budget <= 15000000 && props.match.params.field === "1 Cr-1.5 Cr"){
                                return( 
                                        <FieldWiseProperty property={property} city={props.match.params.city} category={props.match.params.category} fieldtype={props.match.params.fieldtype} field={props.match.params.field}/>
                                )
                            }
                            else if(Property_Budget > 15000000 && props.match.params.field === "1.5 Cr"){
                                return( 
                                        <FieldWiseProperty property={property} city={props.match.params.city} category={props.match.params.category} fieldtype={props.match.params.fieldtype} field={props.match.params.field}/>
                                )
                            }
                        }
                    }
                })} 
            </div>
            // </Link>

            }


            { props.match.params.category === "Rent" && 
            <div className="container-fluid mt-3 bg-white d-flex box" style={{width:"1000px",boxShadow:"0px 2px #D3D3D3",color:"black"}}>

                {property.map((property) => {
                    const {Property_Types,Property_Explore,Property_Type_Name,Property_Budget} = property
                    if(Property_Types === props.match.params.category){
                        if(props.match.params.fieldtype === "explore"){
                            if(Property_Explore === props.match.params.field){
                                console.log(props.match.params.field)
                                return( 
                                    <FieldWiseProperty property={property} city={props.match.params.city} category={props.match.params.category} fieldtype={props.match.params.fieldtype} field={props.match.params.field}/>
                                )                                     
                            }
                        }
                        else if(props.match.params.fieldtype === "propertytype"){
                            if(Property_Type_Name === props.match.params.field){
                                return( 
                                        <FieldWiseProperty property={property} city={props.match.params.city} category={props.match.params.category} fieldtype={props.match.params.fieldtype} field={props.match.params.field}/>
                                )
                            }
                        }
                        else if(props.match.params.fieldtype === "budget"){
                            if(Property_Budget <= 5000000 && props.match.params.field === "50 Lac"){
                                return( 
                                        <FieldWiseProperty property={property} city={props.match.params.city} category={props.match.params.category} fieldtype={props.match.params.fieldtype} field={props.match.params.field}/>
                                )
                            }
                            else if(Property_Budget > 5000000 && Property_Budget <= 10000000 && props.match.params.field === "50 Lac-1 Cr"){
                                return( 
                                        <FieldWiseProperty property={property} city={props.match.params.city} category={props.match.params.category} fieldtype={props.match.params.fieldtype} field={props.match.params.field}/>
                                )
                            }
                            else if(Property_Budget > 10000000 && Property_Budget <= 15000000 && props.match.params.field === "1 Cr-1.5 Cr"){
                                return( 
                                        <FieldWiseProperty property={property} city={props.match.params.city} category={props.match.params.category} fieldtype={props.match.params.fieldtype} field={props.match.params.field}/>
                                )
                            }
                            else if(Property_Budget > 15000000 && props.match.params.field === "1.5 Cr"){
                                return( 
                                        <FieldWiseProperty property={property} city={props.match.params.city} category={props.match.params.category} fieldtype={props.match.params.fieldtype} field={props.match.params.field}/>
                                )
                            }
                        }
                    }

                })} 
            </div>
            }


        {/* <div className="wrap">
            
		        <ul>
                    <li><h3 className="h3">Legal Service</h3></li>
			        <li></li>
                    <li></li>
                    <li></li>
		        </ul>	
            </div> */}
        <div class="boxCont projectDet clearfix">
		<div class="whiteBgBlock" style={{width:"830px",marginLeft:"313px"}}>
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
						<a href="https://www.magicbricks.com/propertyservices/legal-services?inc=SRP_LegalServices" target="_blabk" class="activeCta">Know More</a>
					</div>
					<span class="activeImg activeImg-03"><img data-src="https://cdn.staticmb.com/searchstatic/images/legal.png" alt="imagess" src="https://cdn.staticmb.com/searchstatic/images/legal.png" class="lazy"/></span>
				</div>
				<div class={`childDiv childDiv-1 ${active1}`} id="childDiv-1" onMouseEnter={handlecard}>
					<div class="defaultInfo">Home <br/>Inspection</div>
					<div class="activeInfo">
						<div class="activeHeading" >Home Inspection</div>
						<ul class="activeUL">
							<li class="activeLI">Renegotiate property price</li>
							<li class="activeLI">Avoid expensive repairs</li>
							<li class="activeLI">Protect your investment</li>
						</ul>
						<a href="https://www.magicbricks.com/propertyservices/property-inspection-services?inc=SRP_HomeInspection" target="_blank" rel="noreferrer" class="activeCta">Know More</a>
					</div>
					<span class="activeImg activeImg-01"><img data-src="https://cdn.staticmb.com/searchstatic/images/inspection.png" alt="imagess" src="https://cdn.staticmb.com/searchstatic/images/inspection.png" class="lazy"/></span>
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
						<a href="https://www.magicbricks.com/propertyservices/home-cleaning-services?inc=SRP_HomeCleaning" target="_blank" rel="noreferrer" className="activeCta">Know More</a>
					</div>
					<span class="activeImg activeImg-02"><img data-src="https://cdn.staticmb.com/searchstatic/images/cleaning.png" alt="imagess" src="https://cdn.staticmb.com/searchstatic/images/cleaning.png" class="lazy"/></span>
				</div>
			</div>
		</div>
	</div>
        </div>
        // </div>
        
    )
}


export default PropertyFieldWise