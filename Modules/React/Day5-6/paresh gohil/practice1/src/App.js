import React, { Component } from 'react'
import Answer from "./componenets/Answer"
import Temperture from "./componenets/temperture"

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      farenhint : "",
      celcius : ""
    }
  }


  onChange = (val) => {
    this.setState({
      celcius : ((val-32) * (5/9)).toFixed(2)
    })
    this.setState({
      farenhint : val * (9/5) + 32
    })


  }

  render() {
    return (
      <div>
        <Temperture onclickchange={this.onChange}/>
        <Answer cel = {this.state.celcius} far={this.state.farenhint}/>
      </div>
    )
  }
}
