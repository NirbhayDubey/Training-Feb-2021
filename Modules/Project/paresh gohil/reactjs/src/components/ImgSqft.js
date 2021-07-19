import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'

const ImgSqft = (props) => {

    const {Property_BHK,Property_Types,Property_Type_Name,Property_Type_id,Property_Budget,Property_Address,Property_City,Property_Explore} = props.property

    useEffect(() => {

    }, [props])

    const roundOf = (num) => {
        if(num >= 100000){
            return (num / 100000).toFixed(1).replace(/\.0$/,' ') + "Lac"
        }
        if (num >= 1000){
            return (num / 1000).toFixed(1).replace(/\.0$/,' ') + "K"
        }
    }


    console.log(props.image.data)
    const data = new Uint8Array(props.image.data)
    const blob = new Blob([data],{type: "image/png"})
    const url = URL.createObjectURL(blob)

    console.log(url)
    return (
        <div className="card mt-1 mb-3 d-inline-block mr-3 hover-shadow" style={{width:"19rem",height:"20rem",borderRadius:"10px"}}>
                <Link to={`/${Property_City}/${Property_Types}/explore/${Property_Explore}/${Property_Type_id}`}>
                    <img className="card-img-top border-bottom img" src={url} alt="property images"/>
                </Link>
                <div className="card-body">
                    <p className="text-secondary mb-0 text-capitalize">{Property_BHK} BHK {Property_Type_Name}</p>
                    <h5>&#8377; {roundOf(Property_Budget)} &nbsp;| &nbsp;{props.sqft} sqft</h5>
                    <p className="text-secondary mt-2 mb-0 text-capitalize">{Property_Address}, {Property_City}</p>
                    <p className="text-secondary text-capitalize explore">{Property_Explore}</p>
                    <span className="btn btn-danger medium owner text-white">Contact Owner</span>
                </div>

        </div>
    )
}


export default ImgSqft