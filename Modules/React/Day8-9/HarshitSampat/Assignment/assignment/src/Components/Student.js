import React from "react";

export default function Student({
  student: {
    firstName,
    middleName,
    lastName,
    DOB,
    id,
    city,
    pinCode,
    Img,
    gender,
  },
}) {
  return (
    <div className="mx-auto my-3 col-md-6 bg-secondary text-white rounded text-center">
      <div className="p-3 d-flex justify-content-between">
        <img
          src={Img}
          width="50px"
          height="50px"
          className="border border-light rounded"
          alt="student"
        />
        <div>
          <h6 className="m-0 text-capitalize">
            NAME : {firstName + " " + middleName + " " + lastName}
          </h6>
          <h6 className="m-0 text-capitalize">ID : {id} </h6>
          <h6 className="m-0 text-uppercase">dob : {DOB} </h6>
          <h6 className="m-0 text-capitalize">CITY : {city} </h6>
          <h6 className="m-0 text-capitalize">PinCode:{pinCode}</h6>
          <h6 className="m-0 text-capitalize">Gender:{gender}</h6>
        </div>
      </div>
    </div>
  );
}
