import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

const Person = ({img,name,job,children}) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
  return(
  <article className="person">
    <img src= {url}
      alt="person images"/>
    <h4>{name}</h4>
    <h4>{job}</h4>
    {children}
  </article>
  )
} 

const PersonList = () => {
  return(
    <section className="person-list">
      <Person img="34" name="John" job="Developer"/>
      <Person img="75" name="Peter" job="Designer">
        <p>hdidgbb dhiidhid hddiidihidh hidhihdhiihd</p>
      </Person>
      <Person img="68" name="Roy" job="Boss"/>
    </section>
  )
}


ReactDOM.render(<PersonList />, document.getElementById("root"))