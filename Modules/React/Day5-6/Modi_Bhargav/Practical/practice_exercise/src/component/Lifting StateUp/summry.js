import React , { Component } from 'react'

export default class SummaryInformation extends React.Component
{
    constructor(props)
    {
        super(props)
    }
    handleChange =(e)=>{
        this.props.onQuantityChange(e.target.value)
    }
    render()
    {
    return(
        <div class="bg-light d-flex justify-content-between">
                <h1 class="text-warning" style={{marginLeft:"-25px"}}>Summary Information :</h1>
               <div>
                   <p>
                   <label>Product Name :<b>{this.props.     Product}</b></label>
               </p>
               
               <p>
                <label>Address :<b>{this.props.Address}</b></label>
                </p>
                <label>Enter Quantity :<textarea   value ={this.props.quantity} onChange={this.handleChange} /></label>
             </div>
        </div>
        );
    }
}
