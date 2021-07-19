import logo1 from "./img/college1.png";
import logo2 from "./img/college2.jpg";
import logo3 from "./img/college3.png";

import "./App.css";
import StudentIdCard from "./components/studentIdCard";

const HelloWorld = () => {
  return <h1>Hello World!!!</h1>;
};

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

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <div id="students">
        <StudentIdCard student={studentData[0]}>
          <h1>Student Info: </h1>
        </StudentIdCard>
        <StudentIdCard student={studentData[1]}>
          <h1>Student Info: </h1>
        </StudentIdCard>
        <StudentIdCard student={studentData[2]}>
          <h1>Student Info: </h1>
        </StudentIdCard>
      </div>
    </div>
  );
}

export default App;
