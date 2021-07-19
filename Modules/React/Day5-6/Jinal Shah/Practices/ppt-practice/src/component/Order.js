import React from 'react'
import ProductInformation from './Product'
import AddressInformation from './Address'
import SummaryInformation from './Summary'

class Order extends React.Component {

  constructor(props)
  {
    super(props);
    this.state={quantity:'',Address:'',name:'Product 1'}  
  }

  OrderInfoChanged = val => {
   this.setState({quantity:val})
  }

  OnNameChanged = val => {
   this.setState({name:val})
  }

  AddressChanged = val => {
   this.setState({Address:val})
  }
  
  render()
  {
    return(

     <div>
      <h1>Product Order screen</h1>

      <ProductInformation quantity={this.state.quantity} onQuantityChange= {this.OrderInfoChanged}     
       name={this.state.name} OnNameChanged={this.OnNameChanged}>
      </ProductInformation>

      <AddressInformation Address={this.state.Address} onAddressChange={this.AddressChanged}>
      </AddressInformation>

      <SummaryInformation name={this.state.name} quantity={this.state.quantity} Address={this.state.Address} onQuantityChange={this.OrderInfoChanged}>
      </SummaryInformation>
     
     </div>
    )
   }
}

export default Order
