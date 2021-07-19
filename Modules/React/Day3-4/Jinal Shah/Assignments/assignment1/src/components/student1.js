import React, { Component } from 'react'
import IDcard from './IDcard'

export default class Student1 extends Component {
 
 state = {
  studentData : [
{ id:"1386",name:"vats patel",dob:"01-07-2000",cn:"Vishwakarma gov. eng.",ca:"Gandhinagar", img :"45", pic:"vgec.png"},
{ id:"1092",name:"mehul shah",dob:"11-02-1999",cn:"Government eng. col.",ca:"Modasa",img :"52",pic:"gec.png"},
{ id:"0375",name:"tanish vyas",dob:"25-12-2000",cn:"SACE eng. col.",ca:"Ahmedabad",img :"28", pic:"saec.png"},
{ id:"0186",name:"vats patel",dob:"01-07-2000",cn:"Vishwakarma gov. eng.",ca:"Gandhinagar", img :"45", pic:"vgec.png"},
{ id:"2075",name:"tanish vyas",dob:"25-12-2000",cn:"SACE eng. col.",ca:"Ahmedabad",img :"28", pic:"saec.png"}
]
 }
 
 
  render() {
    const books1 =this.state.studentData.map((item) => item.name);
    console.log(books1)
    return (
      <div class="row">
        {this.state.studentData.map(item => ( <IDcard key={item.id} info={item}>
        <p>Student details</p>
      </IDcard> ) )}
      </div>
    )
  }
}







