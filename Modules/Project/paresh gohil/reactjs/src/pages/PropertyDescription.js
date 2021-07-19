import React,{useEffect,useState} from 'react'
import Property from "../services/Property"
import PDescription from "../components/PDescription"

const PropertyDescription = (props) => {
    const [property,setProperty] = useState([])

    useEffect(() => {

        Property.getPropertyByCity(props.match.params.city).then((res) => {
            setProperty(res.data)
        })        
    },[props])


    return (
        <div style={{backgroundColor:"whitesmoke",width:"1400px",height:"2400px",marginLeft:"0px",marginTop:"-20px",paddingTop:"20px"}}>
            { props.match.params.category === "buy" && 

            <>

                {property.map((property) => {
                    const {Property_Types,Property_Type_id,Property_Explore,Property_Type_Name,Property_Budget} = property
                    console.log(Property_Type_id)
                    
                    if(Property_Types === props.match.params.category){
                        if(props.match.params.fieldtype === "explore"){
                            console.log(Property_Explore)

                            if(Property_Explore === props.match.params.field){
                                console.log(props.match.params.field)
                                return(
                                    <PDescription property={property}/>
                                )                                     
                            }
                        }

                        else if(props.match.params.fieldtype === "propertytype"){
                            console.log(props.match.params.fieldtype)
                            
                            if(Property_Type_Name === props.match.params.field){
                                return( 
                                    <PDescription property={property}/>
                                )
                            }
                        }
                        else if(props.match.params.fieldtype === "budget"){
                            if(Property_Budget <= 5000000 && props.match.params.field === "50 Lac"){
                                return( 
                                    <PDescription property={property}/>
                                )
                            }
                            else if(Property_Budget > 5000000 && Property_Budget <= 10000000 && props.match.params.field === "50 Lac-1 Cr"){
                                return( 
                                    <PDescription property={property}/>
                                )
                            }
                            else if(Property_Budget > 10000000 && Property_Budget <= 15000000 && props.match.params.field === "1 Cr-1.5 Cr"){
                                return( 
                                    <PDescription property={property}/>
                                )
                            }
                            else if(Property_Budget > 15000000 && props.match.params.field === "1.5 Cr"){
                                return( 
                                    <PDescription property={property}/>
                                )
                            }
                        }
                    }
                })} 
            </>
            // </Link>

            }


            { props.match.params.category === "Rent" && 
                <>
                {property.map((property) => {
                    const {Property_Types,Property_Explore,Property_Type_Name,Property_Budget} = property
                    if(Property_Types === props.match.params.category){
                        if(props.match.params.fieldtype === "explore"){
                            if(Property_Explore === props.match.params.field){
                                console.log(props.match.params.field)
                                return( 
                                    <PDescription property={property}/>
                                )                                     
                            }
                        }
                        else if(props.match.params.fieldtype === "propertytype"){
                            if(Property_Type_Name === props.match.params.field){
                                return( 
                                    <PDescription property={property}/>
                                )
                            }
                        }
                        else if(props.match.params.fieldtype === "budget"){
                            if(Property_Budget <= 5000000 && props.match.params.field === "50 Lac"){
                                return( 
                                    <PDescription property={property}/>
                                )
                            }
                            else if(Property_Budget > 5000000 && Property_Budget <= 10000000 && props.match.params.field === "50 Lac-1 Cr"){
                                return( 
                                    <PDescription property={property}/>
                                )
                            }
                            else if(Property_Budget > 10000000 && Property_Budget <= 15000000 && props.match.params.field === "1 Cr-1.5 Cr"){
                                return( 
                                    <PDescription property={property}/>
                                )
                            }
                            else if(Property_Budget > 15000000 && props.match.params.field === "1.5 Cr"){
                                return( 
                                    <PDescription property={property}/>
                                )
                            }
                        }
                    }

                })} 
            </>
            }
        </div>
        
    )
}

export default PropertyDescription