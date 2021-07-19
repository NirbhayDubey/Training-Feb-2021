import React, { Component } from "react";

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      addr: "",
      pan: "",
      mag: "",
    };
  }

  handleChange = (event) => {
    const nam = event.target.name;
    const val = event.target.value;

    this.setState({
      [nam]: val,
      msg: "",
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      msg: (
        <div>
          <p className="text-dark">Name: {this.state.name}</p>
          <p className="text-dark">Address: {this.state.addr}</p>
          <p className="text-dark">PAN: {this.state.pan}</p>
        </div>
      ),
    });
  };

  render() {
    return (
      <div className="bg-danger text-dark p-5">
        <h1 className="display-4">SignUp</h1>
        <form action="#" onSubmit={this.handleSubmit}>
          <div className="fomr-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="fomr-group">
            <label htmlFor="addr">Address:</label>
            <input
              type="text"
              name="addr"
              id="addr"
              className="form-control"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="fomr-group">
            <label htmlFor="pan">PAN:</label>
            <input
              type="text"
              name="pan"
              id="pan"
              className="form-control"
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-lg btn-warning my-2">
            Submit
          </button>
        </form>
        {this.state.msg}
      </div>
    );
  }
}
