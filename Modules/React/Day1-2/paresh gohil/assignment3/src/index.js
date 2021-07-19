import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import logo from "./logo192.png";


// 3. Store above example info javascript variable and then display dynamically, Display FullName variable in respective Component

const App = () => {
    return(
      <section className="person-list">
        <Student />
      </section>
    )
  }
  
const Student = () => {
  return(
      <article className="person">
        <Image />
        <Personal />
        <hr/>
        <College />
      </article>
  )
} 

const Image = () => {
    const img = "https://randomuser.me/api/portraits/thumb/men/23.jpg"
      return (
        <img src= {img}  alt="person images"/>
    )
}
  
const Personal = () => {
    const person = {id : 1, firstname : "John", lastname : "Doe", DOB : "12/12/2020"}
    return(
      <article>
        <h4>ID : {person.id}</h4>
        <h4>FirstName : {person.firstname}</h4>
        <h4>LastName : {person.lastname}</h4>
        <h4>DOB : {person.DOB}</h4>
      </article>
    )
}
  
const College = () => {
    const clg = {college : "GTU",address : "USA"}
    return(
      <article>
        <h4>College : {clg.college}</h4>
        <h4>Address : {clg.address}</h4>
        <img src={logo} alt="logos" style={{height: "30px" , background:"white"}}/>      
      </article>
    )
}
  
ReactDOM.render(<App />, document.getElementById("root"))