// https://reactjs.org/docs/introducing-jsx.html
// https://reactjs.org/docs/jsx-in-depth.html

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* const name = 'Jinal Shah';
const element = <h1>Hello, {name}</h1>; */

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};
const user1 = '';

const Element = () =>{
  return (
  <div>
    <h1 style={{color:'green'}}>
    Hello, {formatName(user)}!
  </h1>
  <h1 style={{color:'red'}}>
    {getGreeting(user)}
    {getGreeting(user1)}
  </h1>
  </div>
);
}

//const title = response.potentiallyMaliciousInput;

//---------------------------------------------------------------

function getGreeting(user) {
  if (user) {
    return (
      <div>
        <h1>Hello, {formatName(user)}!</h1>
        <button color="blue" shadowSize={2}>
          Click Me
        </button>
      </div>
    );
  }
  return <h1>Hello, Stranger.</h1>;
}

//-------------------------------------------------------

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
}

function BlueDatePicker() {
  return (
    <div>
      <MyComponents.DatePicker color="blue" />
      <MyComponents.DatePicker color="red" />
      <NumberDescriber number="6"></NumberDescriber>
      <NumberDescriber number="7"></NumberDescriber>
    </div>
  );
}

//------------------------------------------------------

function NumberDescriber(props) {
  let description;
  if (props.number % 2 == 0) {
    description = <strong>even</strong>;
  } else {
    description = <i>odd</i>;
  }
  return <div>{props.number} is an {description} number</div>;
}

//---------------------------------------------------------------

const Greeting = (props) =>{
  return(
    <h1 style={{color:"blue"}}>
      Greetings from {props.firstName } { props.lastName}
      <div>This is valid HTML &amp; JSX at the same time.</div>
    </h1>
  )
}

function App2() {
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return <Greeting {...props} />;
}

//----------------------------------

const Button = props => {
  const { kind, ...other } = props;
  const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
  return <button className={className} {...other} />;
};

const App3 = () => {
  return (
    <div>
      <Button kind="primary" onClick={() => console.log("primary clicked!")}>
        Hello World!
      </Button><br/><br/>
      <Button kind="" onClick={() => console.log("clicked!")}>
        Hello World!
      </Button>
    </div>
  );
};

//--------------------------------------

// Calls the children callback numTimes to produce a repeated component
function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

function ListOfTenThings() {
  return (
    <center>
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
    </center>
  );
}

//------------------------------------------------

const App1 = () =>{
  return(
    <section>
      <Element></Element>
      <BlueDatePicker></BlueDatePicker>
      <App2></App2>
      <App3></App3>
      <ListOfTenThings/>
    </section>
  )
}


ReactDOM.render(
  <App1/>,
  document.getElementById('root')
);


