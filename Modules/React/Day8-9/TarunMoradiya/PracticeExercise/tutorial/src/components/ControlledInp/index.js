import React, { Component } from "react";

export default class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    people: [],
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value.toUpperCase(),
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    if (firstName.length > 0 && lastName.length > 0) {
      const person = `${firstName} ${lastName}`;
      this.setState({
        people: [...this.state.people, person],
        firstName: "",
        lastName: "",
      });
    }
  };
  render() {
    return (
      <section>
        <article>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                className="form-control"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="lastName"
                className="form-control"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </article>
        <article className="mt-5">
          <h1>People</h1>
          <div>{this.state.people}</div>
        </article>
      </section>
    );
  }
}
