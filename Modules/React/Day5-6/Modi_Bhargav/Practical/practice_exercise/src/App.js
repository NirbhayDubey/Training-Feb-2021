import './App.css';
import React, { Component } from 'react'
import ToggleInfo from './component/toggle_info'
import OrderInfo from './component/Lifting StateUp/order'
import Calculator from './component/Lifting_StateUp-2/calculator'

export default class App extends Component {
  render() {
    return (
      <div>
        <ToggleInfo/>
        <OrderInfo/>
        <Calculator/>
      </div>
    )
  }
}
