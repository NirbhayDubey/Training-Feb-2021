import React, {useState} from 'react'

class ProductInformation extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    handleChange = (e) => {
     this.props.onQuantityChange(e.target.value)
					console.log(this.props)
    }

				handleChange1 = (e) => {
						console.log(e.target.value)
						this.props.OnNameChanged(e.target.value)
				} 

    render()
    {
						return(
							<div style={{border: '3px solid red'}}>

									<h2>Product Information</h2>
									<p>
										<label>Product Name 
											<select value={this.props.name} onChange={this.handleChange1}>
												<option value="Product-1">Product1 </option>
												<option value="Product-2">Product2 </option>
												<option value="Product-3">Product3 </option>
											</select>
										</label>
									</p>

									<label>Enter Quantity :
										<input type="text" value={this.props.quantity} onChange={this.handleChange}></input>
									</label>
							</div>
						);
    }
}

export default ProductInformation