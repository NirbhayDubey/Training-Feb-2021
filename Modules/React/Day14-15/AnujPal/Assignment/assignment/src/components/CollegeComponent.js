import React from "react";

export const CollegeComponent = (props) => {
  const { collegeName,address } = props.info.info;
  return (
    <>
      <h5>{collegeName}</h5>
      <h5>{address}</h5>
    </>
  );
};
