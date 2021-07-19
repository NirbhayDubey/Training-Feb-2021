import React, { Component } from "react";
import Student from "./../components/Student";

import StudentService from "./../services/StudentService";

export default class studentList extends Component {
  constructor(props) {
    console.log("hii");
    super(props);
    this.state = {
      students: [],
      currentStudent: {},
      show: true,
    };
  }

  componentDidMount() {
    StudentService.getStudents().then((res) => {
      this.setState({
        students: res.data,
      });
    });
  }

  showIdCard = (id) => {
    StudentService.getStudentById(id).then((res)=>{
      this.setState({
        currentStudent:res.data
      })
    })
  };
  Details = (id) => {
    this.props.history.push(`/Details/${id}`);
  };

  render() {
    let currentStudent = "";
    return (
      <div className="container mt-3">
        <h4 className="text-center mt-5">Student List</h4>
        <table className="table mt-3">
          <thead className="thead-light">
            <tr>
              <th>Student Id</th>
              <th>Student name</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {this.state.students.map((item) => {
              return (
                <tr>
                  <td>{item.Id}</td>
                  <td>
                    {item.fname} {item.lname}
                  </td>
                  <td>
                    <button
                      className="m-2 btn btn-success h5"
                      onClick={() => this.Details(item.Id)}
                    >
                      Details
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModal"
                      onClick={() => this.showIdCard(item.Id)}
                    >
                      Id-Card
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <Student info={this.state.currentStudent}></Student>
        </div>
      </div>
    );
  }
}
