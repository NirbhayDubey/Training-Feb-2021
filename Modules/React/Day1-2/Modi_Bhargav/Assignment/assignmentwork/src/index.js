import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import Element from "./component/Assignment1"
import StudentIdCard from "./component/Assignment2"
import StudentIdCard1 from "./component/Assignment3"
import StudentCardList from "./component/Assignment4"
import StudentCardList1 from "./component/Assignment5"

const Result = () =>{
  return(
    <section>
      <Element/>
      <hr/>
      <StudentIdCard/>
      <hr/>
      <StudentIdCard1/>
      <hr/>
      <StudentCardList/>
      <hr/>
      <StudentCardList1/>
    </section>
  )
}

ReactDOM.render(<Result/>,document.getElementById("root"));
