import React, { Component } from "react";

export default class Form extends Component {
  handleSubmit = (event) => {
    event.preventDefault();

    const myName = this.refs.myName.value;
    const myEmail = this.myEmail.value;
    const text = this.refs.myText;
    text.style.color = "red";
    console.log(myName, myEmail, text.textContent);
  };
  render() {
    return (
      <section>
        <article>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-control"
                ref="myName"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control"
                ref={(em) => (this.myEmail = em)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </article>
        <article className="mt-5">
          <p ref="myText">Hello World!!!</p>
        </article>
      </section>
    );
  }
}
