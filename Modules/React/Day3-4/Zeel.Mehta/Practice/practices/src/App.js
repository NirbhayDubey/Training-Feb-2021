import React, { Component } from "react";
import { name, age, person } from './data'
import Banner from './components/Header/Banner'


// PRACTICE 1
//named and default import/exports
// only one default export module
// think of module as file

// const App = () => (
//   <section>
//     <Banner />
//     <p>this is my content</p>
//     <p>{name}</p>
//     <p>{age}</p>
//     <p>{person.name}</p>
//     {/* <p>{secretValue}</p> */}
//   </section>
// );
// import * as data from './data'
// const App = () => (
//   <section>
//     <p>this is my content</p>
//     <p>{data.name}</p>
//     <p>{data.age}</p>
//     <p>{data.person.name}</p>
//   </section>
// );



// PRACTICE 2
// stateless functional components
// class based components
// state, life cycle methods
// Classes - Syntatical Sugar For Constructor Functions
// subclass of Component
// extends from Component Class
// inherits functionality
// Component class is used to transfer from basic E6 class.

// class App1 extends Component {
//   render() {
//     return (
//       <section>
//         <Banner />
//         <p>this is my content</p>
//         <p>{name}</p>
//         <p>{age}</p>
//         <p>{person.name}</p>
//       </section>
//     );
//   }
// }



export default App1;
