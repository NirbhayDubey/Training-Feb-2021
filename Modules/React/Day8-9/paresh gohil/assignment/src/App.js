import './App.scss';
import React, { Component } from 'react';


class Form extends Component {

  state ={
    id : "",
    firstName : "",
    lastName : "",
    // images : null,
    collegeName : "",
    // collegeLogo : null
    studentList : []
  }
  handleChange = (event) =>{
    this.setState({
    //   images : URL.createObjectURL(this.refs.img.files[0])
      [event.target.name] : event.target.value
     })
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const id = this.state.id;
    const collegeName = this.state.collegeName
    const images = URL.createObjectURL(this.refs.img.files[0]) 
    const logoimges = URL.createObjectURL(this.refs.logoimg.files[0])
    const student = ` ${images} ${id} ${firstName} ${lastName} ${collegeName} ${logoimges}`//[`img : ${images}, id : ${id}, firstName : ${firstName}, lastName : ${lastName}, collegeName : ${collegeName}, logo : ${logoimges}`];
    this.setState({
      studentList : [...this.state.studentList,student]
    })

  }
  render(){
    return (
      <section>
        <article>
        <form onSubmit={this.handleSubmit} className="studentform">
          <label>ID : </label>
          <input type="text" name="id" value={this.state.id} onChange={this.handleChange}/>
          <label>FirstName : </label>
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
          <label>LastName : </label>
          <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
          <label>CollegeName : </label>
          <input type="text" name="collegeName" value={this.state.collegeName} onChange={this.handleChange}/>
          <label>CollegeLogo : </label>
          <input type="file" ref="logoimg"/>
          <label>Image : </label>
          <input type="file" ref="img"/>
          <button type="submit">submit</button>
        </form>
        </article>
        <article className="student">
          {this.state.studentList.map((student) =>(
            <>
              <img src={URL.createObjectURL(this.refs.img.files[0])} alt="images"/>
              <h3>ID : {this.state.id}</h3>
              <h3>FirstName : {this.state.firstName}</h3>
              <h3>LastName : {this.state.lastName}</h3>
              <h3>CollegeName : {this.state.collegeName}</h3>
              <img src={URL.createObjectURL(this.refs.logoimg.files[0])} className="logo" alt="logo"/>
            </>
          ))}
        </article>
        
      </section>

    )
  }
}


function App() {
  return (
    <Form amount="2"/>
  );
}

export default App;
