import React, { Component } from "react";
import PropTypes from "prop-types";

const Person = (props) => {
  const { img, name, age, info } = props.person;
  return (
    <article>
      <img src={img} alt="photos" />
      <h4>Name : {name}</h4>
      <h4>Age : {age}</h4>
      <h4>Info : {info}</h4>
    </article>
  );
};
Person.propTypes = {
  person: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    info: PropTypes.string.isRequired,
  }),
};
Person.defaultProps = {
  pesron: {
    // img:"https://randomuser.me/api/portraits/thumb/men/45.jpg",
    // name:"None",
    // age:34,
    info: "this is a engineer",
  },
};
class PersonList extends Component {
  state = {
    people: [
      {
        id: 1,
        img: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
        name: "john",
        age: 24,
      },
      {
        id: 2,
        img: "https://randomuser.me/api/portraits/thumb/men/34.jpg",
        age: 27,
      },
      {
        id: 3,
        img: "https://randomuser.me/api/portraits/thumb/men/35.jpg",
        name: "smith",
        info: "this is a computer engineer",
      },
    ],
  };
  render() {
    return (
      <section>
        {this.state.people.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </section>
    );
  }
}

export default class props extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "blue", background: "white" }}>
          Props Type And Rquired
        </h1>
        <PersonList />
      </div>
    );
  }
}
