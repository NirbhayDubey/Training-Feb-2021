import React, { useState } from 'react'
import {Link} from "react-router-dom"

const Searchproperty = (props) => {
    const [category,setCategory] = useState("buy")
    const [left,setLeft] = useState("280px")
    const [width,setWidth] = useState("50px")

    const handleCategory = (e) => {
        if(e.target.id === "rent"){
            setCategory("rent")
            setLeft("350px")
            setWidth("50px")
        }
        else if(e.target.id === "PG"){
            setCategory("PG")
            setLeft("430px")
            setWidth("25px")
        }
        else if(e.target.id === "Plot"){
            setCategory("Plot")
            setLeft("495px")
            setWidth("30px")
        }
        else if(e.target.id === "Commercial"){
            setCategory("Commercial")
            setLeft("565px")
            setWidth("90px")
        }
        else if (e.target.id === "Post"){
            setCategory("Post")
            setLeft("695px")
            setWidth("90px")
        }
        else{
            setLeft("280px")
            setWidth("50px")
        }

    }
    return (
        // <div className="container-fluid">
        //     <div className="heading">Welcome back! Let's continue your search</div>
        <>
            <div className="d-inline-block propertydiv">
                <Link className="property " id="buy" to={`/${props.props}/buy`} onClick={handleCategory}>Buy</Link>
                <Link className="property " id="rent" to={`/${props.props}/Rent`} onClick={handleCategory}>Rent</Link>
                <Link className="property " id="PG" to={`/${props.props}/PG`} onClick={handleCategory}>PG</Link>
                <Link className="property " id="Plot" to={`/${props.props}/Plot`} onClick={handleCategory}>Plot</Link>
                <Link className="property " id="Commercial" to={`/${props.props}/Commercial`} onClick={handleCategory}>Commercial</Link>
                <Link className="property " id="Post" to={`/${props.props}/Post`} onClick={handleCategory}>Post Free Ad</Link>
            </div>
            <div className="hr"><hr className="border border-danger rounded bg-danger mt-1"   style={{width:`${width}`,height:"2px",marginLeft:`${left}`,transition:"0.6s ease"}}/></div>
        </>            
        // </div>
    )
}


export default Searchproperty