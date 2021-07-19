import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import F1 from './components/form'
import Form1 from './components/form1'
import Counter from './components/Counter'

const App1 = () => {
  return(
    <div>
      {/* <App /> 
      <F1 />  
      <Form1 />*/}
      <Counter amount="2"/>
    </div>
  )
}

ReactDOM.render(
  
    <App1 />
  ,
  document.getElementById('root')
);


