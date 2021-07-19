import React, { Children } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
const info = {
  ID: 101,
  fname: "Anuj",
  lname: "Pal",
  DOB: "06/03/1998",
  collegeName: "GEC-DAHOD",
  Address: "DAHOD",
};

const Image = () => {
  return (
    <img
      src="https://c1.wallpaperflare.com/preview/475/75/706/suit-sufi-blue-business.jpg"
      alt="Image1"
      height="200px"
      width="448px"
    />
  );
};
const PersonalComponent = () => {
  return (
    <article>
      <div>
        <Image></Image>
      </div>
      <div className="mt-3 text-left">
        <h4 className="h5">ID : {info.ID}</h4>
        <h4 className="h5">Name : {info.fname + " " + info.lname}</h4>
        <h4 className="h5">DOB : {info.DOB}</h4>
      </div>

      <hr></hr>
    </article>
  );
};

const CollegeComponent = () => {
  return (
    <article>
      <div className="row">
        <div className="col ">
          <img
            className=" mr-0"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkbyo7ly10vWaYm2aIJG5rZgTtZGdb6YazeMQm00lOEVrlmyvGF17_1z21aM6Hh-nv1L0&usqp=CAU"
            alt=""
            width="180px"
            height="100px"
          />
        </div>
        <div className="col ml-0">
          <h4 className="h5">CollegeName : {info.collegeName}</h4>
          <h4 className="h5">Address : {info.Address}</h4>
        </div>
      </div>
    </article>
  );
};

const StudentIdCard = (props) => {
  console.log(props.children);
  return (
    <div>
      {props.children}
      <article
        className=" m-auto border border-primary  "
        style={{ width: "450px" }}
      >
        <PersonalComponent></PersonalComponent>
        <CollegeComponent></CollegeComponent>
      </article>
    </div>
  );
};
const Assignment = () => {
  return (
    <section class="m-auto text-center  ">
      <StudentIdCard>
        <p className="h3 mt-5 mb-5"> Student Details</p>
      </StudentIdCard>
    </section>
  );
};

ReactDOM.render(<Assignment></Assignment>, document.getElementById("root"));
