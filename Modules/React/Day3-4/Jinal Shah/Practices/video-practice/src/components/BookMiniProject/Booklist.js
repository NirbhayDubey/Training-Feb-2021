// rcc - class base component, rfc - function base component

import React, { Component } from 'react'
import Book from './Book' 

//Alternative State
import BooksData from './BookData'

export default class Booklist extends Component {

  constructor(props){
    super(props);
    this.state = {
      books : BooksData
    };
  }

/*  state = {
      books : [
        { id : 1, book : "donkey wankey",author : "john doe" },
        { id : 2, book : "fairy tales", author : "denish rich" },
        { id : 3, book : "piarets of carabian", author : "bob zen" }
      ]
    } */

  render() {

    //const books1 =this.state.books.map((item) => item.book);
    //console.log(books1)

    return (
      <section>
        <h3>This Is Our Booklist</h3>
        {this.state.books.map(item => ( <Book key={item.id} info={item}/> ) )}  
      </section>
    );
  }

}


/* <Book book = {this.books[0]} />
    <Book book = {this.books[1]} /> */

    /* {this.state.books.map((item,index) => (
     <Book info={item}/>
    ))} */


