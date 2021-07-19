// Create a StudentIDCard Component which will include another component image,Personal Component include(ID,FirstName,LastName,DOB),College Component include collegeName,College Address and College Logo)

import React from 'react';
import Clg from '../components/college'
import Personal from '../components/personal'

function IDcard (props){
  console.log(props.Student)
  var obj1 = props.Student
  return(
    <section className="student1">
      <div className="s1">
        <Data Student1 = {obj1}></Data>
      </div>
      <div className="s2">
        <Personal Student1 = {obj1}></Personal>
        <Clg Student1 = {obj1}></Clg>
      </div>
      {props.children}
    </section>
  );
}

const Data = (props) => {
  const img = props.Student1.img
  const url =`https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
 return(
  <section>
   <img className="pic" width="80px" src={url} alt=""/>
   <img className="logo" width="80px" src={props.Student1.logo} alt=""/> 
  </section>
 )
}



export default IDcard