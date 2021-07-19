import React from "react";
import ReactDom from "react-dom";

import "./index.css";

// three arguments element, propsObject, children
// function Greeting() {
//   return React.createElement('div', {}, 'hello world')
// }

// ReactDom.render(<Greeting />, document.getElementById("root"));

///////////////////////////////////////////////////////////////////////////////////////

// stateless functional component
// always return jsx
// function Greeting() {
//   return (
//     <section>
//       <h1>Hello World!!!</h1>
//       <Person></Person>
//       <Message></Message>
//     </section>
//   );
// }

// const Person = () => <h2>John Doe</h2>;
// const Message = () => <p>This is my message</p>;

// ReactDom.render(<Greeting />, document.getElementById("root"));

/////////////////////////////////////////////////////////////////////////////////////

// function Books() {
//   return (
//     <section className="books">
//       <Book></Book>
//       <Book></Book>
//       <Book></Book>
//       <Book></Book>
//     </section>
//   );
// }

// const Book = () => (
//   <article className="book">
//     <CoverImg></CoverImg>
//     <Title></Title>
//     <Auther></Auther>
//   </article>
// );

// const CoverImg = () => (
//   <img
//     width="200"
//     src="https://images-eu.ssl-images-amazon.com/images/I/51cHCkvvKiL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg"
//     alt="img"
//   />
// );

// const Title = () => (
//   <h1 style={{ fontSize: "1rem", color: "Red" }}>The Wonky Donkey</h1>
// );

// const autherStyle = {
//   letterSpacing: "10px",
//   color: "green",
// };

// const Auther = () => <p style={autherStyle}>By Crag Smith</p>;

// ReactDom.render(<Books />, document.getElementById("root"));

/////////////////////////////////////////////////////////////////////////////////////

// const btnText = "Big Button";

// function Person() {
//   const fname = "John";
//   const lname = "Doe";
//   return (
//     <section>
//       <button>{btnText}</button>
//       <h2>{fname + " " + lname}</h2>
//       <h2>{`${fname} ${lname}`}</h2>
//       <h2>{12 + 5}</h2>
//       {/* <h2>{let x = 5 // not allowed}</h2> */}
//       <p>info</p>
//     </section>
//   );
// }

// ReactDom.render(<Person />, document.getElementById("root"));

/////////////////////////////////////////////////////////////////////////////////////

// props

// function People() {
//   return (
//     <section>
//       <Person name="John" job="Developer" />
//       <Person name="Bob" job="Designer" />
//       <Person name="Susi" job="Architect" age="22" />
//     </section>
//   );
// }

// const Person = (props) => {
//   return (
//     <article>
//       <h1>{props.name}</h1>
//       <p>{props.job}</p>
//       <p>{props.age}</p>
//       <hr />
//     </article>
//   );
// };

// ReactDom.render(<People />, document.getElementById("root"));

/////////////////////////////////////////////////////////////////////////////////////

// destructuring

// function People() {
//   const friends = [
//     { name: "John", job: "Developer", age: "21" },
//     { name: "Bob", job: "Designer", age: "25" },
//     { name: "Susi", job: "Architect", age: "22" },
//   ];
//   return (
//     <section>
//       <Person person={friends[0]} />
//       <Person person={friends[1]} />
//       <Person person={friends[2]} />
//     </section>
//   );
// }

// // const Person = (props) => {
// //   const { name, job, age } = props.person;
// //   return (
// //     <article>
// //       <h1>{name}</h1>
// //       <p>{job}</p>
// //       <p>{age}</p>
// //       <hr />
// //     </article>
// //   );
// // };

// const Person = ({ person: { name, job, age } }) => {
//   return (
//     <article>
//       <h1>{name}</h1>
//       <p>{job}</p>
//       <p>{age}</p>
//       <hr />
//     </article>
//   );
// };

// ReactDom.render(<People />, document.getElementById("root"));

/////////////////////////////////////////////////////////////////////////////////////

//children

function People() {
  const friends = [
    { name: "John", job: "Developer", age: "21" },
    { name: "Bob", job: "Designer", age: "25" },
    { name: "Susi", job: "Architect", age: "22" },
  ];
  return (
    <section>
      <Person person={friends[0]}>
        <h1>Some Heading</h1>
        <p>Info About:</p>
      </Person>
      <Person person={friends[1]} />
      <Person person={friends[2]} />
    </section>
  );
}

const Person = (props) => {
  const { name, job, age } = props.person;
  const { children } = props;
  return (
    <article>
      <h1>{name}</h1>
      {children}
      <p>{job}</p>
      <p>{age}</p>
      <hr />
    </article>
  );
};

// const Person = ({ children, person: { name, job, age } }) => {
//   return (
//     <article>
//       <h1>{name}</h1>
//       {children}
//       <p>{job}</p>
//       <p>{age}</p>
//       <hr />
//     </article>
//   );
// };

ReactDom.render(<People />, document.getElementById("root"));
