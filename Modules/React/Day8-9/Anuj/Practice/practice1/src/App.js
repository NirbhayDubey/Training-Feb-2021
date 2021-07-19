import "./App.css";

import PropTypes from 'prop-types'

import React, { Component } from "react";

export default class App extends Component {
  state = {
    people: [
      {
        id: 1,
        fname: "anuj",
        age: 23,
      },
      {
        id: 2,
        fname: "shivam",
        age: 23,
      },
    ],
  };
  render() {
    return (
      <section>
        {this.state.people.map((person) => (
          <Person key={person.id} person={person}></Person>
        ))}
      </section>
    );
  }
}

const Person = ({person:{id,fname,age}}) => {
  

  return (
    <artical>
      <h3>ID : {id}</h3>
      <h3>fname : {fname}</h3>
      <h3>age : {age}</h3>
    </artical>
  );
};

Person.propTypes={
  person:PropTypes.shape({
    fname:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired
  })
}
// Person.propTypes={
//   fname:PropTypes.string.isRequired,
//   age:PropTypes.number
// };
// Person.defaultProps={
//   age:570
// }
