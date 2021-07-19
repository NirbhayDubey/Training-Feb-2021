import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import logo from "./logo192.png";

// 6. While calling StudentID Component in the app Component pass one <p>Student Details</p> as children. Access it in the StudentID Card Component with Children props

const App = () => {
  const studentlist = [
    {img: "23", id: "1", firstname: "John", lastname: "Doe", dob: "22/01/1999", college: "ABC", address: "USA", collegelogo: logo},
    {img: "25", id: "2", firstname: "Peter", lastname: "Doe", dob: "02/01/1980", college: "PQR", address: "INDIA", collegelogo: logo},
    {img: "27", id: "3", firstname: "Roy", lastname: "Doe", dob: "17/04/2001", college: "XYZ", address: "South Africa", collegelogo: logo},
  ]
  return(
    <section className="person-list">
      <Person student={studentlist[0]}>
        <p>student Details</p>
      </Person>
      <Person student={studentlist[1]}/>
      <Person student={studentlist[2]}/>
    </section>
  )
}

const Person = (props) => {
  return(
  <article className="person">
    <h2>{props.children}</h2>
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