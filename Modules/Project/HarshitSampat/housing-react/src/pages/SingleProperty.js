import React from 'react'
import {useParams} from "react-router-dom";

function SingleProperty() {
    
    const {id} =  useParams();
    
    return (
        <h1>Single Proerty page id:{id}</h1>
    )
}

export default SingleProperty
