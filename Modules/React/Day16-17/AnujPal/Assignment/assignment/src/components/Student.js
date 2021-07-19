import React from "react";

export const Student = (props) => {
  const { info } = props;
  const src = `clg-img copy/${info.collegeLogo}`;
  const src1 = `stu-img/${info.studentImage}`;
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
          <h6>ID : {info.Id}</h6>
          <h6>
            Name : {info.fname} {info.mname} {info.lname}
          </h6>
          <h6>
            Father's Name : {info.ffname} {info.fmname} {info.flname}
          </h6>

          <h6>College Name : {info.collegeName}</h6>
          <h6>DOB : {info.DOB}</h6>
          <h6>E-mail : {info.email}</h6>
        </div>
      </div>
    </div>
  );
};
