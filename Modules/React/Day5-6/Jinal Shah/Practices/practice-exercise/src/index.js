import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/Login'
import Calc from './components/LiftState'



/* function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
} 

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
} */

/* ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
); */

const F1 = () => {
  return(
    <div style={{margin:'30px',width:'320px'}}>
      <App></App><br/><br/>
      <Calc></Calc><br/><br/>
      <hr style={{border : '2.5px solid red',width:'500px'}} ></hr>
    </div>
  )
}

ReactDOM.render(
  <F1/>,document.getElementById('root')
)
