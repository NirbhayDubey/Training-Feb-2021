import React from 'react';
import ReactDOM from 'react-dom';
//import "./index.css"

//-----------------------------------------------
// function Greeting(){
//   return <h4>this is the first react app</h4>
// }

//------------------------------------------------
// function Greeting() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//     </div>
//   )
// }

//---------------------------------------------------
// function Greeting(){
//   return(
//     <section>
//       <Person />
//       <Message />
//     </section>
//   )
// }

// const Person = () => <h1>Hello world</h1>

// const Message = () => <p>this is the nested component</p>


//--------------------------------------------------
// function Books() {
//   return(  
//   <section className="books">
//     <Book />
//     <Book />
//     <Book />
//     <Book />
//     <Book />
//   </section>
//   )
// }

// const Book = () => {
//   return (
//     <article className="book">
//       <CoverImage />
//       <Title />
//       <Author />
//     </article>
//   )
// }

// const CoverImage = () => (
//   <img
//     width="200"
//     src="https://images-na.ssl-images-amazon.com/images/I/51cHCkvvKiL._SY498_BO1,204,203,200_.jpg"
//     alt="wonkey donkey"
//   />
// )

// const Title = () => <h1>The Wonkey Donkey</h1>

// const Author = () => <p>by Craig Smith</p>

//-------------------------------------------------------------------
// function Person(){
//   const btn = "search button";
//   const name = "Peter";
//   const lname = "doe";
//   return (
//   <section>
//     <button>{btn}</button>
//     <h2>{name + " "+lname}</h2>
//     <h2>{`${name} ${lname}`}</h2>
//     <p>info</p>
//     <p>{15 + 20}</p>
//   </section>
//   )
// }


//--------------------------------------------------------------
// function People(){
//   return(
//   <section>
//     <Person name="John doe" job="Developer"/>
//     <Person name="Peter doe" job="Designer"/>
//     <Person name="Roy doe" job="Artist" age="20"/>
//   </section>
//   )
// }

// const Person = (props) => {
//   return(
//     <article>
//       <h2>{props.name}</h2>
//       <p>{props.job}</p>
//       <p>{props.age}</p>
//       <hr/>
//     </article>
//   )
// }


//---------------------------------------------------
// function People(){
//   const friends = [
//     {name:"John doe", job:"Developer",age:"22"},
//     {name:"Peter doe", job:"Designer", age:"21"},
//     {name:"Roy doe", job:"Artist", age:"20"}
//   ]
//   return(
//   <section>
//     <Person person={friends[0]}/>
//     <Person person={friends[1]}/>
//     <Person person={friends[2]}/>
//   </section>
//   )
// }
// //const Person = ({person:{name,job,age}}) => {}
// const Person = (props) => {
//   const {name,job,age} = props.person
//   return(
//     <article>
//       <h2>{name}</h2>
//       <p>{job}</p>
//       <p>{age}</p>
//       <hr/>
//     </article>
//   )
// }

//----------------------------------------------------------
function People(){
  const friends = [
    {name:"John doe", job:"Developer",age:"22"},
    {name:"Peter doe", job:"Designer", age:"21"},
    {name:"Roy doe", job:"Artist", age:"20"}
  ]
  return(
  <section>
    <Person person={friends[0]}>
      <h1 style={{fontSize: "40px"}}>person information</h1>
    </Person>
    <Person person={friends[1]}/>
    <Person person={friends[2]}/>
  </section>
  )
}
//const Person = ({person:{name,job,age}}) => {}
const Person = (props) => {
  const {name,job,age} = props.person
  const {children} = props
  return(
    <article>
      {children}
      <h2>{name}</h2>
      <p>{job}</p>
      <p>{age}</p>
      <hr/>
    </article>
  )
}


ReactDOM.render(<People />, document.getElementById("root"))