import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0,
  };
  handleIncrease = () => {
    console.log("called first: " + this.state.count);
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => console.log("called second: " + this.state.count)
    );
    this.setState(
      {
        count: this.state.count + 2,
      },
      () => console.log("called second: " + this.state.count)
    );
    console.log("called third: " + this.state.count);
  };
  handleDecrease = () => {
    console.log("called first: " + this.state.count);
    this.setState(
      (state, props) => {
        return {
          count: state.count - props.amount,
        };
      },
      () => console.log("called second: " + this.state.count)
    );
    this.setState(
      (state, props) => {
        return {
          count: state.count - 1,
        };
      },
      () => console.log("called second: " + this.state.count)
    );
    console.log("called third: " + this.state.count);
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <button className="btn btn-dark" onClick={this.handleIncrease}>
            Increase
          </button>
          <span className="btn btn-light btn-lg">
            Count: {this.state.count}
          </span>
          <button className="btn btn-dark" onClick={this.handleDecrease}>
            Decrease
          </button>
        </div>
      </React.Fragment>
    );
  }
}
