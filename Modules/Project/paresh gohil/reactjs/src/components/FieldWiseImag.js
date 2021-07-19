import React, { useState } from 'react'
import {Link} from "react-router-dom"

const FieldWiseImag = (props) => {
    const [handle,setHandle] = useState("d-none")
    
    const [btn,setBtn] = useState("down")

    const [readmore,setReadmore] = useState("read more")

    const [trunc,setTrunc] = useState("text-truncate")

    const {Property_BHK,Property_Types,Property_Type_Name,Property_Budget,Property_Address,Property_City,Property_Explore,Property_Owner_Name,Property_Type_id} = props.property

    console.log(props.propertydetails)
    const {description} = props.propertydescription

    const {superarea,unit_on_floor,transaction_type,furnished_status,bathrooms,date} = props.propertydetails

    const data = new Uint8Array(props.image.data)
    const blob = new Blob([data],{type: "image/png"})
    const url = URL.createObjectURL(blob)


    const handledetails = () => {
        if(handle === "d-none"){
        setHandle("d-flex")
        setBtn("up")
        }
        else{
            setHandle("d-none")
            setBtn("down")
        }
    }

    const handledescription = () => {
        if(readmore === "read more"){
            setReadmore("read less")
            setTrunc("")
        }
        else{
            setReadmore("read more")
            setTrunc("text-truncate")
        }
    }

    console.log(props.propertydescription)
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
    console.log(props.city)

    return (
        <>
        <div className="d-inline-block">
            <img style={{width:"130px",height:"130px"}} className="mt-3  border" src={url} alt="property images"/>
        </div>

        <div className="d-inline-block ml-3 mt-3">
            <h6 className="text-danger font-weight-bold" style={{fontSize:"18px"}}>&#8377; {roundOf(Property_Budget)}</h6>
            <p style={{fontSize:"13px"}}>&#8377; {Math.round(parseInt(Property_Budget)/parseInt(superarea))} per sqft</p>
        </div>

        <div className="d-block mt-3 ml-3" >
            <Link to={`/${props.city}/${props.category}/${props.fieldtype}/${props.field}/${Property_Type_id}`} className="text-decoration-none" style={{color:"black"}}> 
                <div className="d-flex">
                    <h6>{Property_BHK} BHK {Property_Type_Name}</h6>&nbsp;
                    <p style={{fontSize:"13px"}}> for {Property_Types} in {Property_Address},{Property_City}</p> 
                </div>
            </Link>

            <div className="d-flex" style={{backgroundColor:"whitesmoke"}}>
                <div className="d-inline">
                    <p style={{fontSize:"10px",color:"grey",marginLeft:"10px",marginTop:"5px"}}>SUPER AREA</p>
                    <p style={{fontSize:"13px",marginTop:"-5px",marginLeft:"10px",marginBottom:"5px"}}>{superarea} sqft</p>
                </div>
                <div className="d-inline" style={{marginLeft:"50px"}}>
                    <h3 style={{marginLeft:"25px",fontSize:"26px",color:"grey"}}>|</h3>
                    <p style={{fontSize:"10px",color:"grey",marginLeft:"50px",marginTop:"-28px"}}>STATUS</p>
                    <p style={{fontSize:"13px",marginTop:"-5px",marginLeft:"50px",marginBottom:"5px"}} className="text-capitalize">{Property_Explore}</p>
                </div>
                <div className="d-inline" style={{marginLeft:"50px"}}>
                    <h3 style={{marginLeft:"25px",fontSize:"26px",color:"grey"}}>|</h3>
                    <p style={{fontSize:"10px",color:"grey",marginLeft:"50px",marginTop:"-28px"}}>FLOOR</p>
                    <p style={{fontSize:"13px",marginTop:"-5px",marginLeft:"50px",marginBottom:"5px"}} className="text-capitalize">{unit_on_floor}</p>
                </div>                
                <div className="d-inline" style={{marginLeft:"50px",marginRight:"80px"}}>
                    <h3 style={{marginLeft:"25px",fontSize:"26px",color:"grey"}}>|</h3>
                    <p style={{fontSize:"10px",color:"grey",marginLeft:"50px",marginTop:"-28px"}}>TRANSACTION</p>
                    <p style={{fontSize:"13px",marginTop:"-5px",marginLeft:"50px",marginBottom:"5px"}} className="text-capitalize">{transaction_type}</p>
                </div>                
                <button style={{border:"none",backgroundColor:"whitesmoke"}} onClick={handledetails}><i className={`far fa-angle-${btn}`}/></button>
            </div>


            <div className={`${handle}`} style={{backgroundColor:"whitesmoke"}}>
                <div className="d-inline">
                    <p style={{fontSize:"10px",color:"grey",marginLeft:"10px",marginTop:"5px"}}>FURNISHING</p>
                    <p style={{fontSize:"13px",marginTop:"-5px",marginLeft:"10px",marginBottom:"5px"}}>{furnished_status}</p>
                </div>
                <div className="d-inline" style={{marginLeft:"20px"}}>
                    <h3 style={{marginLeft:"25px",fontSize:"26px",color:"grey"}}>|</h3>
                    <p style={{fontSize:"10px",color:"grey",marginLeft:"50px",marginTop:"-28px"}}>SOCIETY</p>
                    <p style={{fontSize:"13px",marginTop:"-5px",marginLeft:"50px",marginBottom:"5px"}} className="text-capitalize">{Property_Address}</p>
                </div>
                <div className="d-inline" style={{marginLeft:"100px"}}>
                    <h3 style={{marginLeft:"25px",fontSize:"26px",color:"grey"}}>|</h3>
                    <p style={{fontSize:"10px",color:"grey",marginLeft:"50px",marginTop:"-28px"}}>BATHROOM</p>
                    <p style={{fontSize:"13px",marginTop:"-5px",marginLeft:"50px",marginBottom:"5px"}} className="text-capitalize">{bathrooms}</p>
                </div>                
                
            </div>

            <div className={`ml-0 mt-3 ${trunc}`}  style={{width:"40rem"}}>
                <p className={` d-inline`} style={{fontSize:"13px"}}>{description}</p>
           </div>
           <a style={{marginTop:"-100px",color:"black",fontSize:"13px"}} href="#!" onClick={handledescription}>{readmore}<hr style={{width:"60px",backgroundColor:"black",marginTop:"-5px",marginLeft:"0px"}}/></a>

           <div className={`ml-0 mt-3 mb-4`}  style={{width:"40rem"}}>
                <p style={{marginLeft:"-250px",marginTop:"0px",color:"grey",fontSize:"11px"}}>Posted on: {date}</p>
                <button className="btn btn-danger font-weight-bold" style={{width:"200px",marginTop:"-40px"}}>Contact Seller</button>
                <button className="btn btn-white font-weight-bold border border-danger text-danger ml-2" style={{width:"200px",marginTop:"-40px"}}>Enquire Now</button>
                <p style={{marginLeft:"600px",marginTop:"-55px",color:"lightgrey"}}>Seller</p>
                <p style={{marginLeft:"600px",marginTop:"-10px",color:"grey"}}>{Property_Owner_Name}</p>
           </div>

        </div>
        </>
    )
}


export default FieldWiseImag