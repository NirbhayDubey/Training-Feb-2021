import React, { Component } from "react";

import PropTypes from "prop-types";

// const Person = ({ img, name, age, info }) => {
const Person = ({ person: { img, name, age, info } }) => {
  return (
    <section>
      <img src={img} alt="person" />
      <h4>{name}</h4>
      <h4>{age}</h4>
      {/* <h4>{info}</h4> */}
      <h4>{info || "default info about the person"}</h4>
    </section>
  );
};

// Person.propTypes = {
//   img: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   age: PropTypes.number.isRequired,
//   info: PropTypes.string.isRequired,
// };

Person.defaultProps = {
  img: "https://randomuser.me/api/portraits/thumb/women/75.jpg",
  name: "emma",
  age: 34,
  info: "default info about person",
};

Person.propTypes = {
  person: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    info: PropTypes.string.isRequired,
  }),
};

class PersonList extends Component {
  state = {
    people: [
      {
        id: 1,
        img: "https://randomuser.me/api/portraits/thumb/women/46.jpg",
        name: "Lilly",
        age: 24,
      },
      {
        id: 2,
        img: "https://randomuser.me/api/portraits/thumb/women/55.jpg",
        age: 27,
        info: "my info",
      },
      {
        id: 3,
        name: "Robin",
      },
    ],
  };
  render() {
    return (
      <section>
        {/* {this.state.people.map((person) => (
          <Person
            key={person.id}
            img={person.img}
            name={person.name}
            age={person.age}
            info={person.info}
          />
        ))} */}
        {this.state.people.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </section>
    );
  }
}

export default function PropTypesEx() {
  return (
    <section>
      <PersonList />
    </section>
  );
}
