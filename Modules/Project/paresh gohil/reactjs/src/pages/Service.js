import React from 'react'
import PayrentService from "../components/PayrentService"

const Service = (props) => {

    return (
        <>
            {props.match.params.service === "Pay Rent" && 
                <PayrentService />
            }            
        </>
    )
}

export default Service