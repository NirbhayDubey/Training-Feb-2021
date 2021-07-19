import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
const PersonalComponent = () => {
  return (
    <article className="personal">
      <img
        src="https://c1.wallpaperflare.com/preview/475/75/706/suit-sufi-blue-business.jpg"
        alt="Image1"
        height="200px"
        width="322px"
      />
      <div className="m-3">
      <h3 className="h5">ID : 101</h3>
      <h3 className="h5">Name : Anuj Pal</h3>
      <h3 className="h5">DOB : 7/10/1996</h3>
      </div>
  
      <hr  className="bg-primary"></hr>
    </article>
  );
};

const CollegeComponent = () => {
  return (
    <article className="container">
      <div className="row">
        <div className="col">
          <img
            className="mb-3"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkbyo7ly10vWaYm2aIJG5rZgTtZGdb6YazeMQm00lOEVrlmyvGF17_1z21aM6Hh-nv1L0&usqp=CAU"
            alt=""
            height="100px"
            width="120px"
          />
        </div>
        <div className="col">
          <h3 className="h6">CollegeName : GEC-DAHOD</h3>
          <h3 className="h6">Address : DAHOD</h3>
        </div>
      </div>
    </article>
  );
};

const StudentIdCard = () => {
  return (
    <article className=" border border-primary w-50" >
      <PersonalComponent></PersonalComponent>
      <CollegeComponent></CollegeComponent>
    </article>
  );
};
const Assignment = () => {
  return (
    <section class="container w-50 mt-5">
      <StudentIdCard></StudentIdCard>
    </section>
  );
};

ReactDOM.render(<Assignment></Assignment>, document.getElementById("root"));
