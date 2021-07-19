import React , { Component } from 'react'
import ProductInformation from './product'
import AddressInformation from './address'
import SummaryInformation from './summry'

export default class Order extends React.Component
{
   constructor(props)
   {
       super(props);
       this.state = {
                        Product:'Product1',
                        quantity:'',
                        Address:''
        }
   }
        ProductChanged = (val) =>   {
        this.setState({Product:val})
        } 
   OrderInfoChanged = (val) => {
       this.setState({quantity:val})
   }

   AddressChanged = (val) =>   {
        this.setState({Address:val})
} 

   render()
   {
       return(
        <div>
        <h1 class="text-center text-white bg-dark">Lifitig State Example</h1>
        <div>
            <h1 class="text-center">Product Order screen</h1>
            <ProductInformation quantity={this.state.       quantity} Product = {this.state.Product} onQuantityChange={this.OrderInfoChanged} onProductChange = {this.ProductChanged}></ProductInformation>
            <AddressInformation Address={this.state.Address} onAddressChange={this.AddressChanged}></AddressInformation>
            <SummaryInformation Product = {this.state.Product}
quantity={this.state.quantity} Address={this.state.Address} 
onQuantityChange={this.OrderInfoChanged}></SummaryInformation>
        </div>
        </div>
       )
   }
}
