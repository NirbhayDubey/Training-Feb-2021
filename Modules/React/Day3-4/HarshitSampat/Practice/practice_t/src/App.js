import React from 'react'
import{name,age,person} from './data'
import Banner from './component/Header/Banner'

// const App = ()=>(
  //  <section>
  //       <Banner/>
  //       <p>This is my content</p>
  //       <p>{name}</p>
  //       <p>{age}</p>
  //       <p>{person.name}</p>
         
  //  </section>
//  )
// 

class App extends React.Component{
  render(){
    return (
      <section>
        <Banner />
        <p>This is my content</p>
        <p>{name}</p>
        <p>{age}</p>
        <p>{person.name}</p>
      </section>
    );
  }
}


// import * as data from './data' 
// const App = ()=>(
//   <section>
//         <p>This is my content</p>
//         <p>{data.name}</p>
//         <p>{data.age}</p>
//         <p>{data.person.age}</p>
//   </section>
// )
export default App;