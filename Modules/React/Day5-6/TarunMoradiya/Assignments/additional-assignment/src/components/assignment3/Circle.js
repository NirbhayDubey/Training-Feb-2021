import React, { Component } from "react";

export default class Circle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      radius: null,
      result: null,
    };
  }

  onChangeVal = (event) => {
    const val = event.target.value;

    this.setState(
      {
        radius: +val,
      },
      this.getResult
    );
  };

  getResult = () => {
    const res = this.state.radius ** 2 * Math.PI;
    this.setState({
      result: +res.toFixed(2),
    });
  };

  render() {
    return (
      <div className="rectangle p-5 bg-dark text-light">
        <h1 className="display-4">Circle</h1>
        <form>
          <div className="form-group">
            <label htmlFor="radius">Radius:</label>
            <input
              type="number"
              name="radius"
              className="form-control"
              onChange={this.onChangeVal}
            />
          </div>
          {this.state.result ? (
            <div className="mt-2">Area of Circle: {this.state.result}</div>
          ) : null}
        </form>
      </div>
    );
  }
}
