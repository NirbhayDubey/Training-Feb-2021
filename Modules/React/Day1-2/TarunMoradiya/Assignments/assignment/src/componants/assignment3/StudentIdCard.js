import React from "react";
import logo1 from "../../img/college1.png";

// 2. Create a StudentIDCard Component which will include another component image,Personal Component include(ID,FirstName,LastName,DOB),College Component include collegeName,College Address and College Logo)

const Image = ({ img }) => {
  const url = `https://randomuser.me/api/portraits/men/${img}.jpg`;
  return <img src={url} alt="img" className="img" />;
};

const Personal = ({ id, fname, lname, dob }) => {
  return (
    <section>
      <p>ID: {id}</p>
      <p>Name: {fname + " " + lname}</p>
      <p>DOB: {dob}</p>
    </section>
  );
};

const College = ({ name, addr, logo }) => {
  return (
    <section>
      <p>Name: {name}</p>
      <p>Address: {addr}</p>
      <img src={logo} alt="logo" />
    </section>
  );
};

const StudentIdCard = () => {
  const student = {
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
  };
  return (
    <card className="card w-25">
      <Image className="card-img-top img-fluid" img={student.img} />
      <div className="card-body">
        <Personal
          className="card-text"
          id={student.personal.id}
          fname={student.personal.fname}
          lname={student.personal.lname}
          dob={student.personal.dob}
        />
        <College
          className="card-text"
          name={student.college.name}
          addr={student.college.addr}
          logo={student.college.logo}
        />
      </div>
    </card>
  );
};

export default StudentIdCard;
