import React , { Component } from 'react'

export default class AddressInformation extends React.Component
{
    constructor(props)
    {
        super(props)
    }
    handleChange =(e)=>{
        this.props.onAddressChange(e.target.value)
    }
    render()
    {
    return(
        <div class="bg-light d-flex justify-content-between">
                <h2 class="text-warning" style={{marginLeft:"-30px"}}>Address Information :</h2>
               
                <label style={{marginLeft:"-180px"}}>Enter Address :<textarea value={this.props.Address} onChange={this.handleChange}/></label>
        </div>
        );
    }
}
