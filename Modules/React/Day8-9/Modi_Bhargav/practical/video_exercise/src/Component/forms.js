import React, { Component } from "react";

class Forms extends Component {
  state = {
    firstName: "",
    lastName: "",
    people: [],
  };

  handleClick = (event) => {
    // console.log(event.target)
    console.log(event.target.name);
    console.log(event.target.value);

    // if (event.target.name === "firstName") {
    //   const textvalue = event.target.value;
    //   this.setState({
    //     firstName: textvalue,
    //   });
    // }
    this.setState({
      [event.target.name]: [event.target.value.toUpperCase()],
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
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
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleClick}
            />
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleClick}
            />
            <button type="submit">Submit</button>
          </form>
        </article>
        <article>
          <h1>People</h1>
          <div>{this.state.people}</div>
        </article>
      </section>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "blue", alignItems: "center" }}>
          Controll User From
        </h1>
        <Forms />
      </div>
    );
  }
}
