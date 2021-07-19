import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const Person = ({ img, name, job, children }) => {
  //console.log(props);
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;

  return (
    <article className="person">
      <img src={url} alt="PersonImage"></img>
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

const PersonList = () => {
  return (
    <section className="person-list">
      <Person img="90" name="Harshit" job="Developer">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, at!
        </p>
      </Person>
      <Person img="14" name="Kashmir" job="Bharat">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
          tenetur.
        </p>
      </Person>
      <Person img="12" name="Brazil" job="Developer">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
          tempore.
        </p>
      </Person>
    </section>
  );
};

ReactDom.render(<PersonList></PersonList>, document.getElementById("root"));
