import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Assignment1 from './components/assignment1'
import Assignment2 from './components/assignment2'
import Assignment3 from './components/assignment3'
import Assignment4 from './components/assignment4'
import Assignment5 from './components/assignment5'
import Assignment6 from './components/assignment6'

const App2 = () =>{
  return(
    <section>
      <h1 style={{color :"red" }}><center> Assignment 1 : print hello world</center></h1><br/>
      <Assignment1 /><br/>
      <h1 style={{color :"red" }}><center> Assignment 2 : statically</center></h1>
      <Assignment2 /><br/>
      <h1 style={{color :"red" }}><center> Assignment 3 : Using variable</center></h1>
      <Assignment3 />
      <h1 style={{color :"red" }}><center> Assignment 4 : 3 cards,Using props</center></h1>
      <Assignment4 />
      <h1 style={{color :"red" }}><center> Assignment 5 : Using Array</center></h1>
      <Assignment5 />
      <h1 style={{color :"red" }}><center> Assignment 6 : children prop(bootstrap)</center></h1>
      <Assignment6 />
    </section>
  )
}

ReactDOM.render(
  <App2></App2>,
  document.getElementById('root')
);


