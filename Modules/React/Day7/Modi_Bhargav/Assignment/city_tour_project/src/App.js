import React, { Component } from 'react'
import './App.scss'
import Navbar from './components/Navbar/navbar'
import TourList from './components/TourList/index'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <TourList/>
      </div>
    )
  }
}
