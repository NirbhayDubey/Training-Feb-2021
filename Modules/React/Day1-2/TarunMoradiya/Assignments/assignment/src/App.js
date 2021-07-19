import "./App.css";
import Hello from "./componants/assignment1/Hello";
import StudentIdCard from "./componants/assignment2/StudentIdCard";
import DynamicCard from "./componants/assignment3/StudentIdCard";
import StudentIdCard4 from "./componants/assignment4/StudentIdCard";
import StudentIdCard5 from "./componants/assignment5/StudentIdCard";
import StudentIdCard6 from "./componants/assignment6/StudentIdCard";

import logo1 from "./img/college1.png";
import logo2 from "./img/college2.jpg";
import logo3 from "./img/college3.png";

function App() {
  const studentData = [
    {
      img: 55,
      personal: {
        id: 1,
        fname: "John",
        lname: "Doe",
        dob: "01/01/1989",
      },
      college: {
        name: "loyalist",
        addr: "appolio",
        logo: logo1,
      },
    },
    {
      img: 56,
      personal: {
        id: 2,
        fname: "David",
        lname: "Eagle",
        dob: "08/01/1999",
      },
      college: {
        name: "pmona",
        addr: "New Jersy",
        logo: logo2,
      },
    },
    {
      img: 58,
      personal: {
        id: 3,
        fname: "Joe",
        lname: "Rogan",
        dob: "01/01/1989",
      },
      college: {
        name: "Canada",
        addr: "Canada",
        logo: logo3,
      },
    },
  ];
  return (
    <div className="container mt-5">
      <Hello />
      <hr />
      <StudentIdCard />
      <hr />
      <DynamicCard />
      <hr />
      <div id="students4" className="row">
        <StudentIdCard4
          className="col-md-3"
          img={5}
          id="1"
          fname="John"
          lname="Doe"
          dob="01/02/1897"
          name="loyalist"
          addr="appolio"
          logo={logo1}
        />
        <StudentIdCard4
          className="col-md-3"
          img={6}
          id="2"
          fname="Joe"
          lname="Doe"
          dob="01/02/1897"
          name="pmona"
          addr="New Jersy"
          logo={logo2}
        />
        <StudentIdCard4
          className="col-md-3"
          img={7}
          id="3"
          fname="David"
          lname="Doe"
          dob="01/02/1897"
          name="canada"
          addr="canada"
          logo={logo3}
        />
      </div>
      <hr />
      <div id="students5" className="row">
        <StudentIdCard5 className="col-md-3" student={studentData[0]} />
        <StudentIdCard5 className="col-md-3" student={studentData[1]} />
        <StudentIdCard5 className="col-md-3" student={studentData[2]} />
      </div>
      <hr />
      <div id="students6" className="row">
        <StudentIdCard6 className="col-md-3" student={studentData[0]}>
          <h1>Student Info: </h1>
        </StudentIdCard6>
        <StudentIdCard6 className="col-md-3" student={studentData[1]}>
          <h1>Student Info: </h1>
        </StudentIdCard6>
        <StudentIdCard6 className="col-md-3" student={studentData[2]}>
          <h1>Student Info: </h1>
        </StudentIdCard6>
      </div>
    </div>
  );
}

export default App;
