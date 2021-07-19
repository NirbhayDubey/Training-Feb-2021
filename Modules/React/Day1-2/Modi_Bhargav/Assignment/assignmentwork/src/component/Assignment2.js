// Create a StudentIDCard Component which will include another component image,Personal Component include(ID,FirstName,LastName,DOB),College Component include collegeName,College Address and College Logo)

import React from 'react'

const StudentIDCard = () => {
 return (
  <section className="student">
   <Images/>
   <Student/>
   <College/>
  </section>
 )
}

const Images = () => {
  
  return (
    <article>
      <img id="p1" width="80px" src="https://randomuser.me/api/portraits/thumb/men/11.jpg" alt="student img"/>
      <img id="p2" width="80px" src="Gujarat-Technological-University-Logo.png" alt="college logo"/>
    </article>
  )
}

const Student = () => {

  return (
    <article>
      <h4>ID : 1</h4>
      <h4>FirstName : Bhargav</h4>
      <h4>LastName : Modi</h4>
      <h4>DOB : 20/12/98</h4>
    </article>
  )
}

const College = () => {
  
  return (
    <article>
      <h4>collegeName : GEC</h4>
      <h4>Address : Patan</h4>
    </article>
  )
}


export default StudentIDCard