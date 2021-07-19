import React from "react";
import ReactDOM from "react-dom";
import "./index.css"

const Person = ({img,Name,Job,children}) => {
  var url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
  return (
    <article className="person">
      <img src={url} alt="person img"/>
      <h4>{Name}</h4>
      <h4>{Job}</h4>
      {children}
    </article>
  )
}
const PersonList = () => {
  return (
  <section className="person-list">
    <Person img="34" Name="Bhargav" Job="Devloper"/>
    <Person img="35" Name="Meet" Job="Designer">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta reprehenderit corporis error delectus, quas hic?</p>
    </Person>
    <Person img="36" Name="Prit" Job="Boss"/>
  </section>
  )
}

ReactDOM.render(<PersonList/>,document.getElementById("root"));
