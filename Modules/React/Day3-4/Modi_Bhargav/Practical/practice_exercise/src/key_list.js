import React from 'react'

export default function NumberList(props) {
    const numbers = props.number;
    const lists = props.list
    const listItems = numbers.map((number) =>
      <li>{number}</li>
    );
    return (
      <div>
           <ul>{listItems}</ul>
           <NumberList1 number = {numbers}>
             <p>multiplication number</p>
           </NumberList1>
           <NumberString number = {numbers}>
             <p>number to string</p>
           </NumberString>
           <GetList list = {lists}>
             <p>people name </p>
           </GetList>
      </div>
      
    );
  }

function NumberList1(props) {
    const numbers = props.number;
    const listItems = numbers.map((number) =>
      <li>{number * 2 }</li>
    );
    return (
           <div>
                {props.children}
                <ul>{listItems}</ul>
            </div>
    );
  }

function NumberString(props) {
    const numbers = props.number;
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>
         {number}
      </li>
    );
    return (
           <div>
                {props.children}
                <ul>{listItems}</ul>
            </div>
    );
  }

function GetList(props)
{
    const list = props.list;
    const listItems = list.map((listItem) => 
         <li  key={listItem.toString()}>
          {listItem.FirstName + " " + listItem.LastName}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
}




