import React , { Component } from 'react'

export default class ProductInformation extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    handleChange =(e) => {
        this.props.onQuantityChange(e.target.value)
      }
   handleChange1 =(e) => {
        this.props.onProductChange(e.target.value)
      }
    render()
    {
    return(
	      <div class="bg-light d-flex justify-content-between">
                <h2 class="text-warning">Product Information : </h2>
                <div>
                    <label class="text-dark" style={{marginLeft:"-140px"}}>Product Name :
                        <select class="mr-5" onChange={this.handleChange1} style={{marginLeft:"-100px"}}>
                            <option value="Product-1">Produc                                  t1 </option>
                            <option value="Product-2">Produc                                  t2 </option>
                            <option value="Product-3">Produc                                  t3 </option>
                        </select>
                    </label>
                  <div class="mt-5 text-dark" style={{marginLeft:"-50px"}}>
                  <label>Enter Quantity :<input type="text
                  " value={this.props.quantity} 
                  onChange={this.handleChange}></input></label>
               </div> 
                </div>   
        </div>
        );
    }
}
