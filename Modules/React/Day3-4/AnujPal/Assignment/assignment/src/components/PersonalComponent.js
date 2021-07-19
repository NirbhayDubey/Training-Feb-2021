// const PersonalComponent = (props) => {
//     return (
//       <div className="card-body">
//         <h5 className="card-title text-center">Student Details</h5>
//         <h6 className="h6">ID : {props.ID}</h6>
//         <h6 className="h6">Name : {props.fname + " " + props.lname}</h6>
//         <h6 className="h6">DOB : {props.DOB}</h6>
//       </div>
//     );
//   };

import React from "react";

export default function PersonalComponent(props) {
  return (
    <div className="card-body">
      <h5 className="card-title text-center">Student Details</h5>
      <h6 className="h6">ID : {props.ID}</h6>
      <h6 className="h6">Name : {props.fname + " " + props.lname}</h6>
      <h6 className="h6">DOB : {props.DOB}</h6>
    </div>
  );
}
