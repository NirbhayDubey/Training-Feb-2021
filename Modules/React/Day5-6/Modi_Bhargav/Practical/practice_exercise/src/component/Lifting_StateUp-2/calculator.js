import React, { Component } from 'react'
import TemperatureInput from './TemperatureInput'

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p class="text-center"><b>The water would boil.</b></p>;
  }
  return <p class="text-center"><b>The water would not boil.</b></p>;
}

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {fahrenheit: '', celsius: ''};
  }

  handleCelsiusChange = (celsius) => {
    this.setState({celsius: celsius, fahrenheit:toFahrenheit(celsius)});
  }

  handleFahrenheitChange = (fahrenheit) => {
    this.setState({fahrenheit: fahrenheit, celsius:toCelsius(fahrenheit)});
  }

  render() {
    return (
      <div>
        <h1 class="text-primary text-center bg-dark">Lifitig State Example - 2</h1>
        <TemperatureInput
          scale="c"
          temperature={this.state.celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={this.state.fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(this.state.celsius)} />
      </div>
    );
  }
}
