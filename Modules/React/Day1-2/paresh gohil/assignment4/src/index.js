import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import logo from "./logo192.png";


// 4. Call StudentID Card component 3 times and pass different student data using props.

const App = () => {
    const studentlist1 = {img: "23", id: "1", firstname: "John", lastname: "Doe", dob: "22/01/1999", college: "ABC", address: "USA", collegelogo: logo}
    const studentlist2 =  {img: "25", id: "2", firstname: "Peter", lastname: "Doe", dob: "02/01/1980", college: "PQR", address: "INDIA", collegelogo: logo}
    const studentlist3 =  {img: "27", id: "3", firstname: "Roy", lastname: "Doe", dob: "17/04/2001", college: "XYZ", address: "South Africa", collegelogo: logo}
    
    return(
      <section className="person-list">
        <Person student={studentlist1}/>
        <Person student={studentlist2}/>
        <Person student={studentlist3}/>
      </section>
    )
  }
  
  const Person = (props) => {
    return(
    <article className="person">
      <Image image={props.student.img}/>
      <Personal detail={props.student} />
      <hr/>
      <College clg={props.student} />
    </article>
    )
  } 
  
  const Image = (images) => {
    const url = `https://randomuser.me/api/portraits/thumb/men/${images.image}.jpg`
    return (
    <img src= {url}  alt="person images"/>
    )
  }
  
  const Personal = (details) => {
    return(
      <article>
        <h4>{details.detail.id}</h4>
        <h4>{details.detail.firstname + " " +details.detail.lastname}</h4>
        <h4>{details.detail.dob}</h4>
      </article>
    )
  }
  
  const College = (clgs) => {
    return(
      <article>
        <h4>{clgs.clg.college}</h4>
        <h4>{clgs.clg.address}</h4>
        <img src={clgs.clg.collegelogo} alt="logos" style={{height: "30px" , background:"white"}}/>      
      </article>
    )
  }
  
  ReactDOM.render(<App />, document.getElementById("root"))