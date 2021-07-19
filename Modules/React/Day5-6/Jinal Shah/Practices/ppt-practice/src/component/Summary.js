import React from 'react'

class SummaryInformation extends React.Component
{

 constructor(props) {
  super(props)
 }

 handleChange = (e) => {
  this.props.onQuantityChange(e.target.value)
 }

 render(){
  return(
   <div style={{border: '3px solid red'}}>
    <h1>Summary Information</h1>
    <p>
     <label>Product Name <b>{this.props.name}</b></label>
    </p>
    <p>
     Address <label>{this.props.Address}</label>
    </p>
    <label>
     Enter Quantity :<textarea value={this.props.quantity} onChange={this.handleChange}/>
    </label>
   </div>
  )
 }
}


export default SummaryInformation