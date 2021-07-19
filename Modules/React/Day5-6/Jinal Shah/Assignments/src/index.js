import React from 'react';
import ReactDOM from 'react-dom';
import './custom.scss';
import Assignment1 from './components/Assignment1';
import Assignment2 from './components/Assignment2';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return(
    <div>
      <Assignment1/><br/> 
      <hr style={{border: "3px solid #254658"}}></hr>
      <h2 style={{color:'red',textAlign:'center'}}>Assignment2</h2>
      <Assignment2/>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

