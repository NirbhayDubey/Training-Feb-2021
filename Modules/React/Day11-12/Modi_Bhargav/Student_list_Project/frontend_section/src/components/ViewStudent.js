import React, { Component } from "react";
import StudentService from "../Services/StudentService";

class ViewStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enrollNumber: this.props.match.params.id,
      students: {},
    };
  }

  componentDidMount() {
    StudentService.getStudentById(this.state.enrollNumber).then((res) => {
      console.log(res.data);
      this.setState({ students: res.data });
    });
  }

  editStudent = (id) => {
    this.props.history.push(`/edit-studentData/${id}`);
  };

  deleteStudent = (id) => {
    StudentService.deleteStudent(id).then((res) => {
      this.props.history.push("/");
    });
  };

  homeFunction = (e) => {
    e.preventDefault();
    StudentService.getStudents().then((res) => {
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div className="container">
        <div class="row m-5 justify-content-center">
          <div className="mt-3 bg-dark" style={{ border: "2px solid red" }}>
            <h3 className="text-capitalize text-center text-white">
              Students Personal details
            </h3>
            <div className="card card-body bg-light my-3">
              <form className="row">
                <div className="col-md-3 mb-2" style={{ marginLeft: "50px" }}>
                  <img
                    className="img-fulid"
                    id="p1"
                    width="100"
                    heigth="100"
                    src={this.state.students.Logo}
                    alt="student img"
                  />
                </div>
                <div className="col-md-5 text-center text-dark h1">
                  {this.state.students.collegeName +
                    "," +
                    this.state.students.Ccity +
                    "," +
                    this.state.students.Cstate}
                </div>
                <div className="col-md-3 mb-2 text-center">
                  <img
                    className="rounded-circle img-fulid"
                    id="p2"
                    width="100"
                    src={this.state.students.Img}
                    alt="college logo"
                  />
                </div>
                <div style={{ borderBottom: "3px solid red" }}></div>
                <div
                  className="text-center text-primary  h1"
                  style={{ borderBottom: "3px solid red" }}
                >
                  Student Details
                </div>
                <div className="col-md-5 text-center text-success h3">
                  Enrollment-Number
                </div>
                <div className="col-md-2 h3 text-center">{":----->"}</div>
                <div className="col-md-5 text-dark h3">
                  {this.state.students.enrollNumber}
                </div>
                <div style={{ borderBottom: "2px solid black" }}></div>
                <div className="col-md-5 text-center text-success h3">
                  Full Name
                </div>
                <div className="col-md-2 h3 text-center">{":----->"}</div>
                <div className="col-md-5 text-dark h3">
                  {this.state.students.firstName +
                    " " +
                    this.state.students.middleName +
                    " " +
                    this.state.students.lastName}
                </div>
                <div style={{ borderBottom: "2px solid black" }}></div>
                <div className="col-md-5 text-center text-success h3">
                  Gender
                </div>
                <div className="col-md-2 h3 text-center">{":----->"}</div>
                <div className="col-md-5 text-dark h3">
                  {this.state.students.Gender}
                </div>
                <div style={{ borderBottom: "2px solid black" }}></div>
                <div className="col-md-5 text-center text-success h3">
                  Date Of Birth
                </div>
                <div className="col-md-2 h3 text-center">{":----->"}</div>
                <div className="col-md-5 text-dark h3">
                  {this.state.students.DOB}
                </div>
                <div style={{ borderBottom: "2px solid black" }}></div>
                <div className="col-md-5 text-center text-success h3">
                  Email Id
                </div>
                <div className="col-md-2 h3 text-center">{":----->"}</div>
                <div className="col-md-5 text-dark h3">
                  {this.state.students.Email}
                </div>
                <div style={{ borderBottom: "2px solid black" }}></div>
                <div className="col-md-5 text-center text-success h3">
                  Phone Number
                </div>
                <div className="col-md-2 h3 text-center">{":----->"}</div>
                <div className="col-md-5 text-dark h3">
                  {this.state.students.phoneNumber}
                </div>
                <div style={{ borderBottom: "2px solid black" }}></div>
                <div className="col-md-5 text-center text-success h3">
                  Place Of Birth
                </div>
                <div className="col-md-2 h3 text-center">{":----->"}</div>
                <div className="col-md-5 text-dark h3">
                  {this.state.students.placeOfBirth}
                </div>
                <div style={{ borderBottom: "2px solid black" }}></div>
                <div className="col-md-5 text-center text-success h3">
                  Address
                </div>
                <div className="col-md-2 h3 text-center">{":----->"}</div>
                <div className="col-md-5 text-dark h3">
                  {this.state.students.City +
                    "," +
                    this.state.students.State +
                    "," +
                    this.state.students.Country}
                </div>
                <div style={{ borderBottom: "3px solid red" }}></div>
                <div
                  className="text-center text-primary mb-3 h1"
                  style={{ borderBottom: "3px solid red" }}
                >
                  Father's Details
                </div>
                <div className="col-md-5 text-center text-success h3">
                  Full Name
                </div>
                <div className="col-md-2 h3 text-center">{":----->"}</div>
                <div className="col-md-5 text-dark h3">
                  {this.state.students.ffirstName +
                    " " +
                    this.state.students.fmiddleName +
                    " " +
                    this.state.students.flastName}
                </div>
                <div style={{ borderBottom: "2px solid black" }}></div>
                <div className="col-md-5 text-center text-success h3">
                  Email Id
                </div>
                <div className="col-md-2 h3 text-center">{":----->"}</div>
                <div className="col-md-5 text-dark h3">
                  {this.state.students.Femail}
                </div>
                <div style={{ borderBottom: "2px solid black" }}></div>
                <div className="col-md-5 text-center text-success h3">
                  phoneNumber
                </div>
                <div className="col-md-2 h3 text-center">{":----->"}</div>
                <div className="col-md-5 text-dark h3">
                  {this.state.students.Fnumber}
                </div>
                <div style={{ borderBottom: "2px solid black" }}></div>
                <div className="col-md-5 text-center text-success h3">
                  Education Qualification
                </div>
                <div className="col-md-2 h3 text-center">{":----->"}</div>
                <div className="col-md-5 text-dark h3">
                  {this.state.students.feduQualific}
                </div>
                <div style={{ borderBottom: "2px solid black" }}></div>
                <div className="col-md-5 text-center text-success h3">
                  Profession
                </div>
                <div className="col-md-2 h3 text-center">{":----->"}</div>
                <div className="col-md-5 text-dark h3">
                  {this.state.students.Fprofession}
                </div>
                <div style={{ borderBottom: "2px solid black" }}></div>
                <div className="col-md-5 text-center text-success h3">
                  Designation
                </div>
                <div className="col-md-2 h3 text-center">{":----->"}</div>
                <div className="col-md-5 text-dark h3">
                  {this.state.students.Fdesignation}
                </div>
                <div style={{ borderBottom: "3px solid Red" }}></div>
                <div
                  className="text-center text-primary mb-3 h1"
                  style={{ borderBottom: "3px solid red" }}
                >
                  Mother's Details
                </div>
                <div className="col-md-5 text-center text-success h3">
                  Full Name
                </div>
                <div className="col-md-2 h3 text-center">{":----->"}</div>
                <div className="col-md-5 text-dark h3">
                  {this.state.students.mfirstName +
                    " " +
                    this.state.students.mmiddleName +
                    " " +
                    this.state.students.mlastName}
                </div>
                <div style={{ borderBottom: "2px solid black" }}></div>
                <div className="col-md-5 text-center text-success h3">
                  Email Id
                </div>
                <div className="col-md-2 h3 text-center">{":----->"}</div>
                <div className="col-md-5 text-dark h3">
                  {this.state.students.Memail}
                </div>
                <div style={{ borderBottom: "2px solid black" }}></div>
                <div className="col-md-5 text-center text-success h3">
                  phoneNumber
                </div>
                <div className="col-md-2 h3 text-center">{":----->"}</div>
                <div className="col-md-5 text-dark h3">
                  {this.state.students.Mnumber}
                </div>
                <div style={{ borderBottom: "2px solid black" }}></div>
                <div className="col-md-5 text-center text-success h3">
                  Education Qualification
                </div>
                <div className="col-md-2 h3 text-center">{":----->"}</div>
                <div className="col-md-5 text-dark h3">
                  {this.state.students.meduQualific}
                </div>
                <div style={{ borderBottom: "2px solid black" }}></div>
                <div className="col-md-5 text-center text-success h3">
                  Profession
                </div>
                <div className="col-md-2 h3 text-center">{":----->"}</div>
                <div className="col-md-5 text-dark h3">
                  {this.state.students.Mprofession}
                </div>
                <div style={{ borderBottom: "2px solid black" }}></div>
                <div className="col-md-5 text-center text-success h3">
                  Designation
                </div>
                <div className="col-md-2 h3 text-center">{":----->"}</div>
                <div className="col-md-5 text-dark h3">
                  {this.state.students.Mdesignation}
                </div>
                <div style={{ borderBottom: "2px solid black" }}></div>
                <div className="col-md-6 text-center bg-light">
                  <button
                    type="button"
                    className="btn btn-danger mt-4"
                    onClick={() => this.deleteStudent(this.state.enrollNumber)}
                    style={{ marginRight: "50px" }}
                  >
                    Delete Data
                  </button>
                </div>
                <div className="col-md-6 text-center bg-light">
                  <button
                    type="button"
                    className="btn btn-success mt-4"
                    onClick={() =>
                      this.editStudent(this.state.students.enrollNumber)
                    }
                  >
                    Edit Data
                  </button>
                </div>
                <div className="col-md-12 text-center">
                  <button
                    type="button"
                    className="btn btn-block btn-primary text-white mt-3"
                    onClick={this.homeFunction}
                  >
                    Back To Home Page
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewStudent;
