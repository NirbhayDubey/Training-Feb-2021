import React from "react";
import ReactDom from "react-dom";
// import "./index.css"


// stateless functional component
// always return JSX
// function Greeting() {
//   return (
//     <section>
//       <div>
//         <h3>hello people</h3>
//         <ul>
//           <li>
//             <a href="#">hello world</a>
//           </li>
          
//         </ul>
//       </div>
//     </section>
//   );
// }

// Without Parenthesis
// function Greeting(){
//   return <div>
//     <h2>hello world</h2>
//   </div>
// }

// function Greeting(){
//   return (
//     <section>
//       <Person />
//       <Message />
//     </section>
//   )
// }

// const Person = () => <h2>John Doe</h2>;
// const Message = () => <p>this is my message</p>;

// three arguments element, propsObject, children
// function Greeting(){
//   return React.createElement("div",{}, "hello world");
// }
// ReactDom.render(<Greeting />,
//   document.getElementById("root"));




// MINIBOOK
// ES6, Nested Components and React Tools
// function Books(){
//   return (
//     <section className="books">
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//     </section>
//   );
// }

// const Book = () => {
//   return (
//     <article className="book">
//       <CoverImage />
//       <Title /> 
//       <Author />
//     </article>
//   );
// }

// const CoverImage = () => 
//   <img 
//     width = "200"
//     src = "https://images-na.ssl-images-amazon.com/images/I/71N4oeWwYlL._AC_UL200_SR200,200_.jpg" 
//     alt="wonkey donkey" />

// const Title = () =>
//   <h1 style = {{fontSize:"2rem",color : "red"}}>The Wonkey Donkey</h1> 

// const authorStyle = {
//   letterSpacing: "10px",
//   color: "green"
// };

// const Author = () =>
//   <p style={authorStyle}>by Craig Smith</p>

// JSX
// const btnText = "big button";

// function Person(){
//   const btn = "search button";         
//   const name = "john"
//   const lastName = "doe"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
//   return (
//     <section>
//       <button>{btnText}</button>
//       <button>{btn}</button>
//       <h2>{name + " " + lastName}</h2>
//       <h3>{`${name} ${lastName}`}</h3>
//       <p>Info</p>
//       <p>{12+35}</p>
//       <hr />
//     </section>
//   )
// }

// PROPS
// parameters and arguments
// function sayName(name){
//   console.log(name);
// }
// sayName("John");

function People(){
  return (
    <section>
      <Person name="john doe" job="developer" />
      <Person name="bob doe" job="designer" />
      <Person name="susy doe" job="artist" age="22" />
    </section>
  )
}const Person = (props) =>{
  console.log(props);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
  return (
    <article>
      <h1>{props.name}</h1>
      <p>{props.job}</p>
      <p>{props.age}</p>
      <hr/>
    </article>
  );
}



// DESTRUCTURING

// function People(){
//   const friends = [
//     {name: "john", job: "developer", age: 23, company: "apple"},
//     {name: "bob", job: "designer", age: 21, company: "facebook"},
//     {name: "susy", job: "artist", age: 26, company: "google"}
//   ]
//   return (
//     <section>
//       <Person person={friends[0]} />
//       <Person person={friends[1]} />
//       <Person person={friends[2]} />
//     </section>
//   )
// }

// const person = {
//   name: "john",
//   age: 26
// };
// const { name } = person;
// // console.log(name);

// // const showPerson = ({name,age}) => console.log(name,age);

// // showPerson(person);

// const Person = ({person: { name, job, age, company }}) => {
//   console.log(name);
//   // const {name,job,age,company} = props.person
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
//   return (
//     <article>
//       <h1>{name}</h1>
//       <p>{job}</p>
//       <p>{age}</p>
//       <p>{company}</p>
//       <hr/>
//     </article>
//   );
// }




// CHILDREN PROPS

// function People(){
//   const friends = [
//     {name: "john", job: "developer", age: 23, company: "apple"},
//     {name: "bob", job: "designer", age: 21, company: "facebook"},
//     {name: "susy", job: "artist", age: 26, company: "google"}
//   ]
//   return (
//     <section>
//       <Person person={friends[0]}  >
//         <div>
//           <h1>some heading</h1>
//           <p>some info about</p>
//         </div>
//       </Person>
//       <Person person={friends[1]} />
//       <Person person={friends[2]} />
//     </section>
//   )
// }


// const Person = (props) => {
//   const { name, job, age, company } = props.person;
//   const { children } = props                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
//   return (
//     <article>
//       <h1>{name}</h1>
//       {children} 
//       <p>{job}</p>
//       <p>{age}</p>
//       <p>{company}</p>      
//       <hr/>
//     </article>
//   );
// }


ReactDom.render(<People />, document.getElementById("root"));