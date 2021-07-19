import React, { Component } from "react";
import { name, age, person } from "./data";
import Banner from "./componants/Header/Banner";
import Clock from "./componants/LifeCycle/Clock";
import NumberList from "./componants/ListAndKey/NumberList";
import Mounting from "./componants/LifeCycle/Mounting";

// const App = () => (
//   <section>
//     <Banner />
//     <p>this is my content</p>
//     <p>{name}</p>
//     <p>{age}</p>
//     <p>{person.name}</p>
//   </section>
// );

/////////////////////////////////////////////////////////////////

// import * as data from "./data";

// const App = () => (
//   <section>
//     <p>this is my content</p>
//     <p>{data.name}</p>
//     <p>{data.age}</p>
//     <p>{data.person.name}</p>
//   </section>
// );

/////////////////////////////////////////////////////////////////

// class based component

// class App extends Component {
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

///////////////////////////////////////////////////

// state
import BookList from "./BookList";
import Updating from "./componants/LifeCycle/Updating";
import Unmounting from "./componants/LifeCycle/Unmounting";

class App extends Component {
  state = { numbers: [1, 2, 3, 4, 5] };
  render() {
    return (
      <section>
        <Banner />
        <h3>This is our App:</h3>
        <Clock />
        <NumberList numbers={this.state.numbers} />
        <Mounting favcol="blue" />
        <Updating favcol="blue" />
        <Unmounting favcol="blue" />

        {/* <BookList /> */}
      </section>
    );
  }
}

export default App;
