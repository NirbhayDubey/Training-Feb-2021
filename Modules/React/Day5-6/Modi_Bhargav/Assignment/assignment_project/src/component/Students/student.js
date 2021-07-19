import React from "react";

const Student = (props) => {
  return (
    <ul class="list-group list-group-flush text-dark">
      <li class="list-group-item border border-info">StudentId : {props.ID}</li>
      <li class="list-group-item border border-info">
        Name : {props.FirstName + " " + props.LastName}
      </li>
      <li class="list-group-item border border-info">
        Date Of Birth : {props.DOB}
      </li>
    </ul>
  );
};

export default Student;
