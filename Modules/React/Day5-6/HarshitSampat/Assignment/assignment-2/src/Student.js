import React, { Component } from "react";

export default class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      name: "John",
      showInfo: true,
    };
  }

  handelInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    // console.log(this.props)
    const { children } = this.props;
    //const { img } = this.props.student;

    const checkInfo = (info) => {
      if (info === true) {
        return (
          <p>
            Lorem ipsum dolor sit, amet consectetur <br />
            adipisicing elit. Ipsam, asperiores?
          </p>
        );
      } else {
        return null;
      }
    };

    const {
      Id,
      img,
      firstname,
      lastName,
      DOB,
      collegeName,
      addr,
      logo,
    } = this.props.info;
    //const { handleDelete } = this.props;

    const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
    return (
      <div className="container">
        <div className="row ">
          <div calss="col-sm-18">
            <div className="card mb-3 border-white text-white bg-dark rounded-corners">
              <h5 className="card-header border-white mb-3">Student ID Card</h5>
              {children}
              <img
                src={url}
                alt="StudentImg"
                className="card-img-top rounded-circle rounded-corners"style={{"circle-radius":"30%"}}
                style={{ "max-width": "100%" }}
              />
              <br />
              <h4 className="card-text text-white text-center">Id: {Id}</h4>
              <h6 className="card-text text-white text-center">
                Name: {firstname + " " + lastName}
              </h6>
              <h6 className="card-text text-white text-center">DOB:{DOB}</h6>
              <h6 className="card-text text-white text-center">
                CollegeName:{collegeName}
              </h6>
              <h6 className="card-text text-white text-center ">Addr:{addr}</h6>
              <img
                src={logo}
                width="50"
                alt="StudentImg"
                className="mx-auto d-block"
              />{" "}
              <br />
              <button
                type="button"
                className="btn btn-success border-primary"
                onClick={this.handelInfo}
              >
                See other Details
              </button>
              <br />
              {checkInfo(this.state.showInfo)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
