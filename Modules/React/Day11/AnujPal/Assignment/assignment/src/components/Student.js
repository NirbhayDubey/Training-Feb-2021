import React, { Component } from "react";
// import CollegeLogo from './../../public/clg-img copy/download.jpg'

export default class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      undefined: true,
      collegeLogo: this.props.info.collegeLogo,
      studentImage:this.props.info.studentImage
    };
  }

  render() {
    // const { info } = this.props;
  

    const { info } = this.props;
   

    if (info.length>=1) {
      const src = `clg-img copy/${info[0].collegeLogo}`;
      const src1 = `stu-img/${info[0].studentImage}`;
      return (
        <div className="container mt-5 ">
          <div className="row w-50 mx-auto border border-primary">
            <div className="col border  h-25 w-25">
              <img
                className="card-img-top h-50 w-50 d-flex justify-self mx-auto mb-0  "
                src={src}
                alt="college "
              />
            </div>
            <div className="col    h-25 w-25">
              <img
                className="card-img-top h-50 w-50 d-flex justify-self mx-auto mb-0  "
                src={src1}
                alt="student"
              />
            </div>
            <hr></hr>
            <div className="text-center">
              <h6>ID : {info[0].Id}</h6>
              <h6>
                Name : {info[0].fname} {info[0].mname} {info[0].lname}
              </h6>
              <h6>
                Father's Name : {info[0].ffname} {info[0].fmname} {info[0].flname}
              </h6>

              <h6>College Name : {info[0].collegeName}</h6>
              <h6>DOB : {info[0].DOB}</h6>
              <h6>E-mail : {info[0].email}</h6>
            </div>
          </div>
        </div>
      );
    }
    else{
      return(
        null
      )
    }
  }
}
