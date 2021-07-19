import React from 'react'

class AddressInformation extends React.Component
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
       <div style={{border: '3px solid red'}}>

        <h2>Address Information</h2>
        <label>
         Enter Address :<textarea value={this.props.Address} onChange={this.handleChange}/>
        </label>

       </div>
      )
    
    }
}


export default AddressInformation