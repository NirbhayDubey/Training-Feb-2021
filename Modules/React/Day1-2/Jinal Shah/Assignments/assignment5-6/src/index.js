import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Welcome from './components/helloworld';
import Stud from './components/studentIDCard';

const App1 = () =>{
  var obj = [
{ id:"1386",name:"vats patel",dob:"01-07-2000",cn:"Vishwakarma gov. eng.",ca:"Gandhinagar", img :"45", logo:"vgec.png"},
{ id:"1092",name:"mehul shah",dob:"11-02-1999",cn:"Government eng. col.",ca:"Modasa",img :"52",logo:"gec.png"},
{ id:"0375",name:"tanish vyas",dob:"25-12-2000",cn:"SACE eng. col.",ca:"Ahmedabad",img :"28", logo:"saec.png"}
]

  return(
    <section className="list">
      <Stud Student = {obj[0]}>
        <p>Performance and grade is good</p>
      </Stud>
      <Stud Student = {obj[1]}>
        <p>Performance and grade is average</p>
      </Stud>
      <Stud Student = {obj[2]}>
        <p>Performance and grade is excellent</p>
      </Stud>
    </section>
  );
}

const App2 = () =>{
  return(
    <section>
      <Welcome></Welcome>
      <App1></App1>
    </section>
  )
}

ReactDOM.render(
  <App2></App2>,
  document.getElementById('root')
);


