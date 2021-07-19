import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Person = ({ name, job, img, children }) => {
  const url = `https://randomuser.me/api/portraits/men/${img}.jpg`;
  return (
    <section className="person">
      {/* <img
        src={`https://randomuser.me/api/portraits/men/${img}.jpg`}
        alt="img1"
      /> */}
      <img src={url} alt="img1" />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </section>
  );
};

const PersonList = () => {
  return (
    <section className="person-list">
      <Person img="55" name="John" job="Developer" />
      <Person img="66" name="Bob" job="Designer">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          repudiandae?
        </p>
      </Person>
      <Person img="77" name="Devid" job="Boss" />
    </section>
  );
};

ReactDOM.render(<PersonList></PersonList>, document.getElementById("root"));
