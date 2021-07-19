import React, { Component } from "react";

export default class Rectangle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      length: null,
      width: null,
      result: null,
    };
  }

  onChangeVal = (event) => {
    const nam = event.target.name;
    const val = event.target.value;

    this.setState(
      {
        [nam]: +val,
      },
      this.getResult
    );
  };

  getResult = () => {
    this.setState({
      result: this.state.length * this.state.width,
    });
  };

  render() {
    return (
      <div className="rectangle p-5 bg-dark text-info">
        <h1 className="display-4">Rectangle</h1>
        <form>
          <div className="form-group">
            <label htmlFor="length">Length:</label>
            <input
              type="number"
              name="length"
              className="form-control"
              onChange={this.onChangeVal}
            />
          </div>
          <div className="form-group">
            <label htmlFor="width">Width:</label>
            <input
              type="number"
              name="width"
              className="form-control"
              onChange={this.onChangeVal}
            />
          </div>
          {this.state.result ? (
            <div className="mt-2">Area of rectangle: {this.state.result}</div>
          ) : null}
        </form>
      </div>
    );
  }
}
