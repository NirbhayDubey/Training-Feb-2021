import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import logo from "./logo192.png";


// 2. Create a StudentIDCard Component which will include another component image,Personal Component include(ID,FirstName,LastName,DOB),College Component include collegeName,College Address and College Logo)

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
  return (
    <img src= "https://randomuser.me/api/portraits/thumb/men/23.jpg"  alt="person images"/>
  )
}
  
const Personal = () => {
    return(
      <article>
        <h4>ID : 1</h4>
        <h4>FirstName : John</h4>
        <h4>LastName : Doe</h4>
        <h4>DOB : 12/12/2020</h4>
      </article>
    )
}
  
const College = () => {
    return(
      <article>
        <h4>College : GTU</h4>
        <h4>Address : USA</h4>
        <img src={logo} alt="logos" style={{height: "30px" , background:"white"}}/>      
      </article>
    )
}
  
ReactDOM.render(<App />, document.getElementById("root"))