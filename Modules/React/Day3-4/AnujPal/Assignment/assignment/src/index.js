import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import StudentIdCard from "./components/StudentIdCard";
import students from "./components/studentData";

class Assignment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: students,
    };
  }
handleDelete = id=>{
  const modifyStudents=this.state.students.filter((item) => item.ID !== id);
  this.setState({
    students:modifyStudents
  })
 
}

  render() {
    return (
      <div className="container">
        <h3 className="text-center mt-3 shadow p-3 mb-5 bg-white rounded">This Is Some Students Details</h3>
        <div className="row mt-5">
          {this.state.students.map((item, index) => (
            <div className="col">
              <StudentIdCard key={item.id} info={item} handleDelete={this.handleDelete}></StudentIdCard>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Assignment data={students}></Assignment>,
  document.getElementById("root")
);

