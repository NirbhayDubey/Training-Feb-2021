import React, { Component } from "react";

class Data extends Component {
  state = {
    count: 0,
  };
  handleIncrease = () => {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => console.log("called second:", this.state.count)
    );
  };
  handleDecrease = () => {
    this.setState(
      {
        count: this.state.count - 1,
      },
      () => console.log("called second:", this.state.count)
    );
    // this.setState(
    //   (state, props) => {
    //     return { count: this.state.count - props.amount };
    //   },
    //   () => console.log("called second:", this.state.count)
    // );
  };
  render() {
    return (
      <div style={{ margin: "3rem", fontSize: "2rem" }}>
        <button type="button" onClick={this.handleDecrease}>
          Decrease
        </button>
        <span style={{ margin: "1rem" }}>Count: {this.state.count}</span>
        <button type="button" onClick={this.handleIncrease}>
          Increase
        </button>
      </div>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "blue", alignItems: "center" }}>
          reactFragment and setState
        </h1>
        {/* <Data amount={2} /> */}
        <Data />
      </div>
    );
  }
}
