import React, { Component } from "react";
import Student from "./Student";
import studentData from "./studentInfo";

export default class StudentList extends Component {
constructor(props) {
    super(props);
    this.state = {
    students: studentData,
    };
}
state = {
    students: studentData,
  };
  //this.setState()
  render() {
    //const students = this.state.books.map((item)=>item.student);
    
    return (
      <section>
        
        <h3>This is our studentList</h3>
        <hr/>
        {this.state.students.map((item, index) => (
          <Student info={item}></Student>
        ))}
      </section>
    );
  }
}
