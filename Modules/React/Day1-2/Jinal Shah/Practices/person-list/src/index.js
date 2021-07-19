import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const Person = ({img,name,job,children}) =>{
  const url =`https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
  return(
    <article className="person">
      <img src={url} alt="person"/>
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
}

const PersonList = () =>{
  return (
    <section className="person-list">
      <Person img="34" name="john" job="developer"></Person>
      <Person img="66" name="jolly" job="designer">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, adipisci.
      </Person>
      <Person img="28" name="bob" job="developer"></Person>
    </section>
  );
};

ReactDom.render(<PersonList/> , document.getElementById("root"));
