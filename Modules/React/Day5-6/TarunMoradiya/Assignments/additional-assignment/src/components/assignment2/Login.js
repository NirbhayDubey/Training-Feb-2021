import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      msg: null,
    };
  }

  handleChange = (event) => {
    const nam = event.target.name;
    const val = event.target.value;

    this.setState({
      [nam]: val,
      msg: null,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.username === "admin" && this.state.password === "admin") {
      this.setState({
        msg: <p className="text-success">Login Successfull</p>,
      });
    } else {
      this.setState({
        msg: <p className="text-danger">Login Failed</p>,
      });
    }
  };

  render() {
    return (
      <div className="bg-warning p-5">
        <h1 className="display-4">Login</h1>
        <form action="#" onSubmit={this.handleSubmit}>
          <div className="fomr-group">
            <label htmlFor="username">UserName:</label>
            <input
              type="text"
              name="username"
              id="username"
              className="form-control"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="fomr-group">
            <label htmlFor="password">Password:</label>
            <input
              type="text"
              name="password"
              id="password"
              className="form-control"
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-lg btn-primary my-2">
            Submit
          </button>
          {this.state.msg}
        </form>
      </div>
    );
  }
}
