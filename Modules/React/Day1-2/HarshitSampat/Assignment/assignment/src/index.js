import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// import different components
import Assignment1 from "./Component/Assignment1" 
import Assignment2 from "./Component/Assignment2"
import {StudentIdCard,StudentDetails} from "./Component/Assignment5"
import StudentIdCard1 from "./Component/Assignment3"
import StudentIdCard2 from "./Component/Assignment4"




//import App from './App';
//import reportWebVitals from './reportWebVitals';



 
function ShowData(){
  return (
    <body>
    <div className="showData">
    
      <Assignment1/>
      <hr/>
      <Assignment2/>
      <br/>
      <div>
        <StudentIdCard1/>
        </div>
        <div>
          
        </div>
      <div id="students">
        <section className="img">
        <StudentIdCard student={StudentDetails[0]}><br/><p>College  Details</p><hr/></StudentIdCard>
        <StudentIdCard student={StudentDetails[1]}/>
        <StudentIdCard student={StudentDetails[2]}/>
        </section>
      </div>
      
    </div>
    </body>
  )
}  

ReactDOM.render(<ShowData/>,document.getElementById("root"));
