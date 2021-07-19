import React, { useEffect, useState } from 'react'
import Property from "../services/Property"
import ImgSqft from "./ImgSqft"

const ListProperty = (props) => {
    const [image,setImage] = useState([])

    const [sqft,setSqft] = useState(0)

    const {Property_Type_id,Property_Address,Property_City} = props.property


    useEffect(() => {

        Property.getPropertyImage(Property_City,Property_Address,Property_Type_id).then((res) => {
            setImage(res.data[0].Images.data)
        })

        Property.getPropertyDetails(Property_City,Property_Address,Property_Type_id).then((res) => {
            setSqft(res.data[0].superarea)
        })
    },[props])



    return (
        <ImgSqft property={props.property} image={image} sqft={sqft}/>                
    )
}


export default ListProperty
