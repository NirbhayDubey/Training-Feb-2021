import React from "react";
import ReactDom from "react-dom";
// import "./index.css"

// function Greeting(){
//   return <h4>This is my first React App </h4>;
// }

// ReactDom.render(<Greeting/>,document.getElementById('root'))

// function Books() {
//   return (
//     <section className="books">
//       <Book />
//       <Book/>
//       <Book />
//       <Book/>
//     </section>
//   );
// }

// const Book = () => {
//   return (
//     <article className="book">
//      <CoverImage></CoverImage>
//      <Title></Title>
//      <Writer></Writer>
//     </article>
//   );
// };

// const CoverImage = () => (
//   <img
//     width="300"
//     src="https://images-eu.ssl-images-amazon.com/images/I/91m%2Bcb%2BijPL._AC_UL200_SR200,200_.jpg"
//     alt="Wonkey Donkey"
//   />
// );

// const Title=()=>(
//   <h2 style={{fontSize:"2rem",color:"red"}}>The Wonkey Donkey</h2>
// )
// const writerStyle={
//   letterSpacing:"10px",
//   color:"green"
// }
// const Writer=()=>(
//   <p style={writerStyle}>The craig Wrath</p>
// )

// function Person() {
//   const buttonText="Big Button"
//   const fname="Anuj"
//   const lname="Pal"
//   return(
//     <section>
//       <button>{buttonText}</button>
//       <h2>{fname}</h2>
//       <p>{lname}</p>
//     </section>
//   )
// }

function People() {
  return (
    <section>
      <Person name="Anuj" job="developer" />
      <Person name="Mukesh" job="developer" />
    </section>
  );
}

const Person = (props) => {
  return (
    <article>
      <h1>{props.name}</h1>
      <h1>{props.job}</h1>
      <hr />
    </article>
  );
};

ReactDom.render(<People />, document.getElementById("root"));
