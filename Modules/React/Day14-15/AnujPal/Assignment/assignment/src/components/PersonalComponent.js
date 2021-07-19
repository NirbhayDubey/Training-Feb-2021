import React from "react";

export const PersonalComponent = (props) => {
  const { rollNo, fname, lname, email } = props.info.info;

  return (
    <>
      <h5>{rollNo}</h5>
      <h5>{email}</h5>
      <h5>{fname} {lname}</h5>
    </>
  );
};
