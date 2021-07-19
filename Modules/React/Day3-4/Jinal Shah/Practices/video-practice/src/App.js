/*
------------imports and export--------
    named and default import/export
    only one default export module
    think of module as file
*/

import './App.css';
import React, {Component} from 'react';
import {name , age, person } from "./data"
import Banner from './components/Header/Banner'

const App = () => {
 return(
  <section>
    <Banner />
    <p>this is my content</p>
    <p>{name}</p>
    <p>{age}</p>
    <p>{person.name}</p>
  </section>
 )
}

/* 
import * as data from "./data"
const App = () => {
 return(
  <section>
    <p style={{color : "red"}}>this is my content</p>
    <p style={{color : "red"}}>{data.name}</p>
    <p style={{color : "red"}}>{data.age}</p>
    <p style={{color : "red"}}>{data.person.name}</p>
  </section>
 )
}
 */

/* 
-----------------------Class Based Components-----------------
    stateless functional components
    class based components
    state , life cycle methods
    react hooks
    classes - syntactical sugar for constructor functions
    subclass of components
    extends from component class
    inherits functionality
    component class is used to transfer from basic E6 class
*/

class App1 extends Component {
  render(){
    return(
      <section>
        <Banner />
        <p>this is my contentt</p>
        <p>{name}</p>
        <p>{age}</p>
        <p>{person.name}</p>
      </section>
    )
  }
}

/*
-----------------------FunctionalVSClass---------------------
              preferences
              functional vs class based components
              performance benefits
*/


export default App1;
