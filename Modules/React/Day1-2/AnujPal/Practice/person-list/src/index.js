import React from 'react'
import ReactDom from 'react-dom'
import "./index.css"

const Person=({img,name,job,children})=>{
  const url=`https://randomuser.me/portraits/thumb/men/${img}.jpg`
  return(
    <article className="person">
      <img
        src={url}
        alt="person"
      />
        <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
   
    </article>
  )

}

const PersonList=()=>{
  return(
    <section className="personList">
      <Person img="34" name="Anuj" job="devloper"/>
      <Person img="22" name="Atul" job="Designmer">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa
        </p>
      </Person>
      <Person img="56" name="Shivam" job="devloper"/>
    </section>
  )
}


ReactDom.render(<PersonList></PersonList>,document.getElementById('root'))