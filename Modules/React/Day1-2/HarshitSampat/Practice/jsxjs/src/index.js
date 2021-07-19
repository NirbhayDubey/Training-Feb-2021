import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";

// function sayName(name){
//   console.log(name);
// }
// sayName("John")

function People() {
  const friends = [
    { name: "Harshit", job: "developer", age: "21", company: "Apple" },
    { name: "Parita", job: "Insauurance", age: "23", company: "Snazzy" },
    { name: "Bhavesh", job: "Businessman", age: "51", company: "Bhagvati" },
    { name: "Jay", job: "Assistant Accountat", age: "26", company: "IIT-Gn" },
  ];
  return (
    <section>
      <Person person={friends[0]}>
        <div>
          <h2>
            <p>Some info about me</p>
          </h2>
        </div>
      </Person>
      <Person person={friends[1]} />
      <Person person={friends[2]} />
      <Person person={friends[3]} />  
    </section>
  );
}

// const person = {
//  name: "john",
//  age: "23",
//};
// console.log(person);

//const showPerson = ({name,age}) => console.log(name,age)
//showPerson(person)

const Person = (props) => {
  //console.log({ name, age });
  //
  const { name, job, age, company } = props.person;
  console.log(props);
  const {children} =props
  
  return (
    <article>
      <h1>{name}</h1>
      {children}
      <p>{job}</p>
      <p>{age}</p>
      <p>{company}</p>
      <hr />
    </article>
  );
};

ReactDOM.render(<People />, document.getElementById("root"));
