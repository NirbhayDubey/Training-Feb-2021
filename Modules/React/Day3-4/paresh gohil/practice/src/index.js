import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"


//------------------list-------------------------------
// function App(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//       <li>{number}</li>
//     );
//     return (
//       <ul>{listItems}</ul>
//     );
//   }
  
//   const numbers = [1, 2, 3, 4, 5];
//   ReactDOM.render(
//     <App numbers={numbers} />,
//     document.getElementById('root')
//   );


//------------------keys-------------------------------------
// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//       <li key={number.toString()}>
//         {number}
//       </li>
//     );
//     return (
//       <ul>{listItems}</ul>
//     );
//   }
  
//   const numbers = [1, 2, 3, 4, 5];
//   ReactDOM.render(
//     <NumberList numbers={numbers} />,
//     document.getElementById('root')
//   );


//---------------componentdidmount , componenrwillunmount , render ,constructor----------------------------
// class App extends React.Component {
//         constructor(props) {
//           super(props);
//           this.state = {date: new Date()};
//         }
//           componentDidMount() {
//           this.timerID = setInterval(
//             () => this.tick(),
//             1000
//           );
//         }
//          componentWillUnmount() {
//           clearInterval(this.timerID);
//         }
//          tick() {
//           this.setState({
//             date: new Date()
//           });
//         }
//          render() {
//           return (
//             <div>
//               <h1>Hello, world!</h1>
//               <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//             </div>
//           );
//         }
//       }
    

ReactDOM.render(<App />, document.getElementById("root"))
