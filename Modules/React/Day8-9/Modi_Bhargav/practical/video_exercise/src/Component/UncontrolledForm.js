import React, { Component } from "react";

class UncontrolledForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const Name = this.refs.myname;
    const nameValue = Name.value;

    const email = this.email.value;

    const text = this.refs.mytext;
    const textValue = text.textContent;
    text.style.color = "red";
    console.log(nameValue, email, text);
  };
  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="myname" />
          <input type="email" ref={(orange) => (this.email = orange)} />
          <button type="submit">Submit</button>
        </form>
        <p ref="mytext">Hello World</p>
      </section>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "blue", alignItems: "center" }}>
          UnControll User From
        </h1>
        <UncontrolledForm />
      </div>
    );
  }
}
