import React from "react";
import { useState } from "react";
import { StudentIdCard } from "./StudentIdCard";

export const StudentList = (props) => {
  const [List, setList] = useState([]);
  return (
    <div>
      {List.length > 0
        ? List.map((item) => {
            return <StudentIdCard key={item.id} item={item}></StudentIdCard>;
          })
        : "no students are present at this time "}
    </div>
  );
};
