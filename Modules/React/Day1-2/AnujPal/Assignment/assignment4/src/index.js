import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
const students = [
  {
    src:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    ID: 101,
    fname: "Mukesh",
    lname: "Pal",
    DOB: "7/10/1954",
    collegeName: "Alpha",
    Address: "Kalol",
    srcc: "https://gtu-info.com/Photos/Logo/College/018_GEC_Dahod_Logo.png",
  },
  {
    src: "https://vistapointe.net/images/man-6.jpg",
    ID: "102",
    fname: "Anuj",
    lname: "Pal",
    DOB: "7/10/4343",
    collegeName: "IITM",
    Address: "Madras",
    srcc: "https://gtu-info.com/Photos/Logo/College/018_GEC_Dahod_Logo.png",
  },
  {
    src: "https://vistapointe.net/images/man-7.jpg",
    ID: "103",
    fname: "Jyoti",
    lname: "Pal",
    DOB: "06/03/1998",
    collegeName: "IIMA",
    Address: "Ahmedabad",
    srcc:
    "https://gtu-info.com/Photos/Logo/College/018_GEC_Dahod_Logo.png",
  },
];

const PersonalComponent = (props) => {
  return (
    <article className="personal">
      <h4 className="h5">ID : {props.ID}</h4>
      <h4 className="h5">Name : {props.fname + " " + props.lname}</h4>
      <h4 className="h5">DOB : {props.DOB}</h4>
      <hr></hr>
    </article>
  );
};

const CollegeComponent = (props) => {
  return (
    <article >
      <div className="row">
        <div className="col">
          <img className="img-fluid mb-5" src={props.srcc} alt="" />
        </div>
        <div className="col ">
          <h4 className="h5 mt-3">CollegeName : {props.collegeName}</h4>
          <h4 className="h5 mt-3">Address : {props.Address}</h4>
        </div>
      </div>
    </article>
  );
};

const Image = (props) => {
  return <img src={props.src} alt="Image1" height="200px" width="320x" />;
};

const StudentIdCard = (props) => {
  return (
    <div >
      <article className="studentIdCard border border-secondary">
        <Image src={props.src}></Image>
        <PersonalComponent
          ID={props.ID}
          fname={props.fname}
          lname={props.lname}
          DOB={props.DOB}
        ></PersonalComponent>
        <CollegeComponent
          srcc={props.srcc}
          collegeName={props.collegeName}
          Address={props.Address}
        ></CollegeComponent>
      </article>
    </div>
  );
};
const Assignment = (props) => {
  let stu = props.data;
  console.log(stu);
  return (
    <div className="container">
    <section class="row">
      <div className="col">
        <StudentIdCard
          src={stu[0].src}
          ID={stu[0].ID}
          fname={stu[0].fname}
          lname={stu[0].lname}
          DOB={stu[0].DOB}
          collegeName={stu[0].collegeName}
          Address={stu[0].Address}
          srcc={stu[0].srcc}
        ></StudentIdCard>
      </div>
      <div className="col">
        <StudentIdCard
          src={stu[1].src}
          ID={stu[1].ID}
          fname={stu[1].fname}
          lname={stu[1].lname}
          DOB={stu[1].DOB}
          collegeName={stu[1].collegeName}
          Address={stu[1].Address}
          srcc={stu[1].srcc}
        ></StudentIdCard>
      </div>
      <div className="col">
        <StudentIdCard
          src={stu[2].src}
          ID={stu[2].ID}
          fname={stu[2].fname}
          lname={stu[2].lname}
          DOB={stu[2].DOB}
          collegeName={stu[2].collegeName}
          Address={stu[2].Address}
          srcc={stu[2].srcc}
        ></StudentIdCard>
      </div>
>
    </section>
    </div>
  );
};

ReactDOM.render(
  <Assignment data={students}></Assignment>,
  document.getElementById("root")
);
