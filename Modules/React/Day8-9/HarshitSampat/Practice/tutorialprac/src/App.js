import React, { Component } from 'react'
import "./App.css"
import PropTypes from 'prop-types'

const Person = ({person:{img,name,age,info}})=>{
  console.log(info)
  return(
    <article>
      <img src={img} alt="person"/>
      <h4>name:{name}</h4>
      <h4>age:{age}</h4>
      <h4>info:{info || "Some info about person"}</h4>
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
   img: "https://randomuser.me/api/portraits/thumb/men/89.jpg",
  // name: "anonymous",
  // age: 0,
  // info:"Not provided yet"

};

class Personlist extends Component {
  state = {
    people: [
      {
        id: 1,
        img: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
        name: "john",
        age: 23,
      },
      {
        id: 2,
        img: "https://randomuser.me/api/portraits/thumb/men/76.jpg",
        name: "Hashit",
        age: 23,
      },
      {
        id: 3,
        img: "https://randomuser.me/api/portraits/thumb/men/77.jpg",
        name: "lily",
        age: 25,
        info: "some info about lily",
      },

      {
        id: 4,
         img: "https://randomuser.me/api/portraits/thumb/men/79.jpg",
         name: "Krenil",
         age: 23,
         info: "some info about krenil",
      },
    ],
  };
  render() {
    return (
      <section>
        {this.state.people.map((person) => (
          <Person
            key={person.id}
            person={person}
          />
        ))}
      </section>
    );
  }
}

export default class App extends Component {
  render() {
    return (
       <Personlist/>
    )
  }
}
