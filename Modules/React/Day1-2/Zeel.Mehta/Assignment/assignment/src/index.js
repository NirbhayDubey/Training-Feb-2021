import React from 'react';
import ReactDOM from 'react-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Ass1 from './components/assignment1';
import Ass2 from './components/assignment2';
import Ass3 from './components/assignment3';
import Ass4 from './components/assignment4';
import Ass5 from './components/assignment5';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <h3 className="text-primary d-flex justify-content-center" >Assignment 1</h3>
    <Ass1 /><hr />
    <h3 className="text-primary d-flex justify-content-center pt-3">Assignment 2</h3>
    <Ass2 /><hr />
    <h3 className="text-primary d-flex justify-content-center pt-3">Assignment 3</h3>
    <Ass3 /><hr />
    <h3 className="text-primary d-flex justify-content-center pt-3">Assignment 4</h3>
    <Ass4 /><hr />
    <h3 className="text-primary d-flex justify-content-center pt-3">Assignment 5</h3>
    <Ass5 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
