import React, { Component } from "react";

export default class UncontrolledForms extends Component {
    handleSubmit=e=>{
        e.preventDefault()
        const name=this.refs.myName;
        const nameValue=name.value
        const email=this.email.value

        const text=this.refs.myText
        text.style.color="red"
        console.log(nameValue,email,text);
    }
  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="myName"/>
          <input type="email" ref={(orange)=>{this.email=orange}} />
          <button type="submit" >submit</button>
        </form>
        <p ref="myText">Hello World</p>
      </section>
    );
  }
}
