//import modules
import React from "react";
import gitlogo from "../img/logo1.jpg";

//
const Image = ({ img }) => {
  const url = `https://randomuser.me/api/portraits/men/${img}.jpg`;
  return <img src={url} alt="img" className="img" />;
};

const PersonalInfo = ({ id, firstName, lastName, dob }) => {
  return (
    <section>
      <p>ID: {id}</p>
      <p>Name: {firstName + " " + lastName}</p>
      <p>DOB: {dob}</p>
    </section>
  );
};

const College = ({ collegename, collegeaddress, logo }) => {
  return (
    <section>
      <p>CollegeName: {collegename}</p>
      <p>CollegeAddress: {collegeaddress}</p>
      
      <img width="100" src={logo} alt="collegelogo" />
    </section>
  );
};

const StudentIdCard = () => {
  const student = {
    img: 34,
    personal: {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      dob: "01/01/1989",
    },
    college: {
      collegeName: "GIT",
      collegeaddress: "MotiBhoyan",
      logo: gitlogo,
    },
  };
  return (
    <div>
      <h1>Assignment 3</h1>
      <br />
      <card className="card w-25">
        <Image className="card-img-top img-fluid" img={student.img} />
        <div className="card-body">
          <PersonalInfo
            className="card-text"
            id={student.personal.id}
            firstName={student.personal.firstName}
            lastName={student.personal.lastName}
            dob={student.personal.dob}
          />
          <College
            className="card-text"
            collegename={student.college.collegeName}
            collegeaddress={student.college.collegeaddress}
            logo={student.college.logo}
          />
        </div>
      </card>
      <hr />
      <br />
    </div>
  );
};

export default StudentIdCard;
