// https://reactjs.org/docs/state-and-lifecycle.html

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import State from './components/state'
import Lc from './components/LifeCycle'

ReactDOM.render(
    <Lc/>,
    document.getElementById('root')
);

/* function tick() {

  const element = (
    <div>
      <h1>Hello, people!   from object</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );

  function Clock(props) {
    return (
      <div>
        <h1>Hello, world!!!!!!!!!  from function</h1>
        <h2>It is {props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }

  const App1 = () =>{
    return(
      <section>
        <Clock date={new Date()} />
        {element}
        <State/>
      </section>
    )
  } 

  ReactDOM.render(
    <App1/>,
    document.getElementById('root')
  );
}

setInterval(tick, 2000);  */


