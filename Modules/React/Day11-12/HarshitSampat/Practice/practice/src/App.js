import React, { Component } from "react";
import "./App.css";

class Form extends Component {
    state={
      firstName:"",
      lastName:"",
      people:[]
    }
  handleChange= event=>{
      // console.log(event.target.name)
      // console.log(event.target.value);
    // if(event.target.name === "firstName"){
    // const textvalue = event.target.value
    // this.setState({
    //   firstName:textvalue,
    // })

    this.setState({
      [event.target.name]:[event.target.value]
    })
   }
  
   handleSubmit=(e)=>{
      e.preventDefault();
       const firstName = this.state.firstName
       const lastName = this.state.lastName;
      // console.log(firstName, lastName);
      if(firstName.length>0 && lastName.length>0){
        const person = `${firstName} ${lastName}`;
        this.setState({
          people: [...this.state.people, person],
          firstName:"",
          lastName:""
       });
      }
        
   }
  render() {
    return (
      <section>
        <article>
          <form onSubmit= {this.handleSubmit}>
            <label htmlFor="firstanme">FirstName</label>
            <input type="text" name="firstName" placeholder="Enter Your Name" value={this.state.firstName}
            onChange={this.handleChange}/>
            <br />

            <label htmlFor="lastanme">LastName</label>
            <input type="text" name="lastName" placeholder="Enter Last Name" value={this.state.lastName} onChange={this.handleChange}/><br/>
            <button type="submit">submit</button>
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

class App extends Component {
  render() {
    return <Form />;
  }
}
export default App;
