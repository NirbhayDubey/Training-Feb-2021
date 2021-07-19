import React from "react"
import Booklist from "./Booklist"
import "./App.css"
//--------------first type------------------------------------------
// import {name,age,student} from "./data"

// const App = () => (
//   <section>
//     <p>this is the day-3,4 practice exercise</p>
//     <p>{name}</p>
//     <p>{age}</p>
//     <p>{student.name}</p>
//     <p>{student.age}</p>
//   </section>
//   );


//----------------second type---------------------------------------
// import * as data from "./data"
// import Banner from "./components/Header/Banner"


// class App extends Component{
//   render(){
//     return(
//       <section>
//         <Banner />
//         <p>this is the day-3,4 practice exercise</p>
//         <p>{data.name}</p>
//         <p>{data.age}</p>
//         <p>{data.student.name}</p>
//         <p>{data.student.age}</p>
//       </section>
//     )
//   }
// }


const App = () => (
  <section>
    <Booklist />
  </section>
  );

export default App;
