import React, {Component} from "react"
import './App.css';

// npm install --save prop-types
import PropTypes from "prop-types";

const Person = ({person : { img, name , age, info}}) => {
  return(
    <article>
      <img src={img} alt="person" />
      <h4>name : {name}</h4>
      <h4>age : {age}</h4>
      <h4>info : {info || 'default info about person'}</h4>
    </article>
  )
}

/* Person.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
} */ 

Person.propTypes = {
  person : PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    info : PropTypes.string.isRequired
  })
}

Person.defaultProps = {
  person : {
    info : 'default info about person'
  }
}

/* Person.defaultProps = {
  img : 'https://randomuser.me/api/portraits/thumb/men/45.jpg',
  name : 'john doe',
  age : 34,
  info : 'default info about person'
} */

class PersonList extends Component{
  state = {
    people : [
      {
        id : 1,
        img : 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
        name : 'john',
        age : 24
      },
      {
        id : 2,
        img : 'https://randomuser.me/api/portraits/thumb/men/66.jpg',
        name : 'bob',
        age : 27
      },
      {
        id : 3,
        img : 'https://randomuser.me/api/portraits/thumb/men/34.jpg',
        name : 'peter',
        age : 30,
        info : 'info about peter'
      },
      {
        id : 4,
        //img : 'https://randomuser.me/api/portraits/thumb/men/34.jpg',
        //name : 'peter',
        //age : 30,
        info : 'info about peterson'
      }
    ]
  }
  render(){
    return(
      <section>

        {/* this will print default value */}
        {/* {this.state.people.map((person) => (
          <Person key={person.id} img={person.img} name={person.name} age={person.age} 
            info={person.info} />))} */}
          
        {/* {this.state.people.map((person) => (
          <Person key={person.id} img={person.age} name={person.name} age={person.img} />))} */}

        {/* this will not print default value, use shape */}
        {this.state.people.map((person) => (
          <Person key={person.id} person={person} />))} 

      </section>
    )
  }
}

class App extends Component{
  render(){
    return <PersonList />
  }
}

export default App;
