import './App.css';
import React, { Component } from 'react';
//import PropTypes from "prop-types"


//--------------proptype, isrequired and object shape-----------------------------------

// const Person = ({person : {img, name, age, info}}) => {
//   return(
//     <article>
//       <img src={img} alt="person"/>
//       <h4>name : {name}</h4>
//       <h4>age : {age}</h4>
//       <h4>info : {info || "default info about person" }</h4>
//     </article>
//   )
// }

// Person.propTypes = {
//   person: PropTypes.shape({
//     img: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     age: PropTypes.number.isRequired,
//     info: PropTypes.string.isRequired
//   })
// }

// //not work when use shape
// Person.defaultProps = {
//   person:{
//     img: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
//     name: "Roy Doe",
//     age: 34,
//     info: "default info about person"  
//   }
// }

// class PersonList  extends Component{
//   state = {
//     people : [
//       {
//         id: 1,
//         img: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
//         name: "John Doe",
//         age: 27
//       },
//       {
//         id: 2,
//         img: "https://randomuser.me/api/portraits/thumb/men/34.jpg",
//         name: "James Doe",
//         age: 24
//       },
//       {
//         id: 3,
//         img: "https://randomuser.me/api/portraits/thumb/men/33.jpg",
//         name: "Peter Doe",
//         age: 21,
//         info: "some info about peter"
//       }
//     ]
//   }
//   render(){
//     return(
//       <section>{this.state.people.map((person) => (
//         <Person 
//         key= {person.id}
//         person= {person}
//         />
//       ))}</section>
//     );
//   }
// }


//---------------controlled--------------------------

// class Form extends Component {
//   state = {
//     firstName : "",
//     lastName : "",
//     people : []
//   }

//   handleChange = (event) => {
//     this.setState({
//       // [event.target.name] : event.target.value.toUpperCase()
//       [event.target.name] : event.target.value
//     })
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const firstName = this.state.firstName;
//     const lastName = this.state.lastName;
//     if(firstName.length > 0 && lastName.length > 0){
//       const person = ` ${firstName} ${lastName} `;
//       this.setState({
//         people : [...this.state.people,person],
//         firstName : "",
//         lastName : ""
//       })
//     }
//   }

//   render(){
//     return (
//       <section>
//         <article>
//           <form onSubmit={this.handleSubmit}>
//             <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
//             <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
//             <button type="submit">submit</button>
//           </form>
//         </article>
//         <article>
//           <h1>people</h1>
//           <div>{this.state.people}</div>
//         </article>
//       </section>
//     )
//   }
// }


//--------------uncontrolled-------------------------------------

// class Form extends Component {
//   handleSubmit = (e) => {
//     e.preventDefault();
//     const name = this.refs.myName;
//     const nameValue = name.value;

//     const email = this.email.value;

//     const text = this.refs.myText;
//     const textValue = text.textContent;
//     text.style.color = "red";
//     console.log(nameValue ,email ,textValue)

//   }
//   render(){
//     return(
//       <section>
//         <form onSubmit ={this.handleSubmit}>
//           <input type="text" ref="myName"/>
//           <input type="email" ref={orange => (this.email = orange)}/>
//           <button type="submit">submit</button>
//         </form>
//         <p ref="myText">hello world</p>
//       </section>
//     )
//   }
// }


//-----------------react fragment and function this.setState()---------------------

class Form extends Component{
  state = {
    count : 0
  }

  handleIncrease = () => {
    console.log("this is first : ",this.state.count)
    this.setState({
      count : this.state.count + 1
    },() => console.log("this is second : ",this.state.count))

    //----when two setstate then answer is second setstate follow in this answer = 2 not 3 
    // this.setState({
    //   count : this.state.count + 2
    // },() => console.log("this is second : ",this.state.count))

    // console.log("this is third :",this.state.count)
  }

  handleDecrease = () => {
    console.log("this is first : ",this.state.count)
    this.setState((state,props) =>{
      return {count : state.count - props.amount}
    })

    //--------when two setstate function then answer is -2 
    // this.setState((state,props) =>{
    //   return {count : state.count - 1}
    // })

    // console.log("this is third :",this.state.count)

  }

  render(){
    return (  
      <React.Fragment>
        <div style={{margin : "3rem", fontSize : "2rem"}}>
          <button type="button" onClick={this.handleDecrease}>decrease</button>
          <span style={{margin: "1rem"}}>count : {this.state.count}</span>
          <button type="button" onClick={this.handleIncrease}>increase</button>
        </div>
      </React.Fragment>
    ) 
  }

} 

class Form extends Component {

  state = {
    peoplelist : ""
  }
  handleChange = () =>{
    const img = this.refs.img
    this.setState({
      peoplelist : img.value
    },() => console.log(this.state.peoplelist.value))

  }

  handleSubmit = (e) =>{
    e.preventDefault();
    this.handleChange()
  }
  render(){
    return (
      <section>
        <article>
        <form onSubmit={this.handleSubmit}>
          <input type="url" ref="img"/>
          <button type="submit">submit</button>
        </form>
        </article>
        <article>
          <img src={this.state.peoplelist} alt="images"/>
        </article>
        
      </section>

    )
  }
}


function App() {
  return (
    <Form amount="2"/>
  );
}

export default App;
