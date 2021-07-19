import React,{useState,useEffect} from 'react'
import FieldWiseImag from "./FieldWiseImag"
import Property from "../services/Property"


const FieldWiseProperty = (props) => {
    const [image,setImage] = useState([])

    const [propertydetails,setPropertydetails] = useState([])

    const [propertydescription,setPropertydescription] = useState([])

    const {Property_Type_id,Property_Address,Property_City} = props.property


    useEffect(() => {

        Property.getPropertyImage(Property_City,Property_Address,Property_Type_id).then((res) => {
            setImage(res.data[0].Images.data)
        })

        Property.getPropertyDetails(Property_City,Property_Address,Property_Type_id).then((res) => {
            setPropertydetails(res.data[0])
        })

        Property.getPropertyDescription(Property_City,Property_Address,Property_Type_id).then((res) => {
            setPropertydescription(res.data[0])
        })

    },[props])

console.log(props.city)

    return (
            <FieldWiseImag property={props.property} image={image} propertydetails={propertydetails} propertydescription={propertydescription} city={props.city} category={props.category} fieldtype={props.fieldtype} field={props.field}/>                
    )
}


export default FieldWiseProperty