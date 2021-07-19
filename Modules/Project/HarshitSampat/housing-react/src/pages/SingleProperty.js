import React from 'react'
import {useParams} from "react-router-dom";
import Footer from "../components/Footer";

function SingleProperty() {
    
    const {id} =  useParams();
    
    return (
        <>
        <h1>Single Proerty page id:{id}</h1>
        <Footer/>
        </>
    )
}

export default SingleProperty
