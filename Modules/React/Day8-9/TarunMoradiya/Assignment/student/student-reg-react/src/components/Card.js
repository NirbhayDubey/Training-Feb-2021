import React, { Component } from "react";
import studentServices from "../services/StudentServices";

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      student: [],
    };
  }
  componentDidMount() {
    studentServices.getStudentById(this.state.id).then((res) => {
      this.setState({ student: res.data }, () => {
        console.log("state: ", this.state);
      });
    });
  }
  render() {
    const {
      firstName,
      lastName,
      middleName,
      email,
      dob,
      img,
      collegeName,
      collegeLogo,
      phone,
    } = this.state.student;
    const day = new Date().getDay(dob);
    const month = new Date().getMonth(dob);
    const year = new Date().getFullYear(dob);
    return (
      <div className="container text-capitalize">
        <div className="icard p-5">
          <div className="icard-header clearfix">
            <img
              src={collegeLogo}
              alt="logo"
              id="logo"
              className="img-fluid float-left mr-5"
            />
            <h1 className="display-3">{collegeName}</h1>
          </div>
          <hr />
          <div className="card-body">
            <div className="row">
              <div className="col-4">
                <img src={img} alt="student" className="img-fluid w-100" />
              </div>
              <div className="col-8">
                <ul className="list-group">
                  <li className="list-group-item">
                    Name: {firstName} {middleName} {lastName}
                  </li>
                  <li className="list-group-item">
                    email: <span className="text-lowercase">{email}</span>
                  </li>
                  <li className="list-group-item">phone: {phone}</li>
                  <li className="list-group-item">
                    dob: {`${day}-${month}-${year}`}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
