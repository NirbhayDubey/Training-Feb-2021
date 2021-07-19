import React from "react";
import logo1 from "../../img/college1.png";

// 2. Create a StudentIDCard Component which will include another component image,Personal Component include(ID,FirstName,LastName,DOB),College Component include collegeName,College Address and College Logo)

const Image = () => {
  const url = `https://randomuser.me/api/portraits/men/55.jpg`;
  return <img src={url} alt="img" className="img" />;
};

const Personal = () => {
  return (
    <section>
      <p>ID: 1</p>
      <p>Name: "John Deo"</p>
      <p>DOB: "01/02/1987"</p>
    </section>
  );
};

const College = () => {
  return (
    <section>
      <p>Name: "loyalist"</p>
      <p>Address: "appolio"</p>
      <img src={logo1} alt="logo" />
    </section>
  );
};

const StudentIdCard = () => {
  return (
    <card className="card w-25">
      <Image className="card-img-top img-fluid" />
      <div className="card-body">
        <Personal />
        <College />
      </div>
    </card>
  );
};

export default StudentIdCard;
