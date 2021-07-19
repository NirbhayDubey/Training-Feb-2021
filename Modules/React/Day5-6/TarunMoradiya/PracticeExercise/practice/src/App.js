import React, { Component } from "react";
import Clock from "./componants/setStateAndConditionalJsx/Clock";
import "./App.scss";
import Toggle from "./componants/eventsAndLiftState/Toggle";
import Calculator from "./componants/LiflingStateUp/Calculator";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tick: true,
    };
  }
  toggleClock = (bool) => {
    this.setState({
      tick: !this.state.tick,
    });
  };
  render() {
    return (
      <div className="container mt-5">
        <Toggle toggleClock={this.toggleClock} />
        <Clock tick={this.state.tick} />
        <Calculator />
      </div>
    );
  }
}
