import React, { Component } from "react";
import StudentService from "./../services/StudentService";

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStudent: "",
      students: "",
   
    };
    StudentService.getStudentById(this.props.match.params.id).then((res) => {
      this.setState({
        currentStudent: res.data[0],
      });
    });
    StudentService.getStudents().then((res) => {
      this.setState({
        students: res.data,
      });
    });
  }
  delete = (id) => {
    StudentService.deleteStudent(id).then((res) => {
      console.log(res);
    });
    this.props.history.push("/");
  };

 edit=(id)=>{
  this.props.history.push(`/update-student/${id}`);
 }

  render() {
    console.log(this.state.currentStudent.Id);

    return (
      <div className="container mb-5  ">
        <table className="table w-50 mt-3 mx-auto">
          <h3 className="h5 mt-5 mb-3"> Student Details: </h3>
          <tbody>
            <tr>
              <td>Student Id</td>
              <td>{this.state.currentStudent.Id}</td>
            </tr>
            <tr>
              <td>First Name</td>
              <td>{this.state.currentStudent.fname}</td>
            </tr>
            <tr>
              <td>Middle Name:</td>
              <td>{this.state.currentStudent.mname}</td>
            </tr>
            <tr>
              <td>Last Name:</td>
              <td>{this.state.currentStudent.lname}</td>
            </tr>
          </tbody>
        </table>

        <table className="table w-50 mt-3 mx-auto">
          <h3 className="h5 mt-5">Father Details: </h3>
          <tbody>
            <tr>
              <td>First Name</td>
              <td>{this.state.currentStudent.ffname}</td>
            </tr>
            <tr>
              <td>Middle Name:</td>
              <td>{this.state.currentStudent.fmname}</td>
            </tr>
            <tr>
              <td>Last Name:</td>
              <td>{this.state.currentStudent.flname}</td>
            </tr>
          </tbody>
        </table>

        <table className="table w-50 mt-3 mx-auto">
          <h3 className="h5 mt-5 ">Academic Details: </h3>
          <tbody>
            <tr>
              <td>College Name</td>
              <td>{this.state.currentStudent.collegeName}</td>
            </tr>
            <tr>
              <td>Degree</td>
              <td>{this.state.currentStudent.selectedDegree}</td>
            </tr>
          </tbody>
        </table>

        <table className="table w-50 mt-3 mx-auto ">
          <h3 className="h5 mt-5 mb-3">Address Details: </h3>
          <tbody>
            <tr>
              <td>Country </td>
              <td>{this.state.currentStudent.selectedCountry}</td>
            </tr>
            <tr>
              <td>State</td>
              <td>{this.state.currentStudent.selectedState}</td>
            </tr>
            <tr>
              <td>City </td>
              <td>{this.state.currentStudent.selectedCity}</td>
            </tr>
          </tbody>
        </table>
        <table className="table w-50 mt-3 mx-auto ">
          <h3 className="h5 mt-5 mb-3">Other Details: </h3>
          <tbody>
            <tr>
              <td>E-mail : </td>
              <td>{this.state.currentStudent.email}</td>
            </tr>
            <tr>
              <td>DOB :</td>
              <td>{this.state.currentStudent.DOB}</td>
            </tr>
          </tbody>
        </table>
        <div className="mx-auto text-center">
          <button
            className="btn btn-primary w-25 m-3"
            onClick={() => this.edit(this.props.match.params.id)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger w-25"
            onClick={() => this.delete(this.props.match.params.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
