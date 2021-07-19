import { useState } from "react";


export const UseForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  return [
    values,
    (e) => {
      if (e.target.name === "studentImage" || e.target.name === "collegeLogo") {
        setValues({ ...values, [e.target.name]: e.target.files[0].name });
      } else {
        setValues({ ...values, [e.target.name]: e.target.value });
      }
    },
  ];
};