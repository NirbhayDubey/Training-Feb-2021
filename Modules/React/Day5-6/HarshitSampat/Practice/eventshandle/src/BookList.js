import React, { Component } from "react";
import Book from "./Book";
import booksData from "./bookData";

export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: booksData,
  
    };
  }

  handleDelete = id =>{
    console.log(this.state.books);
    const sortedBooks = this.state.books.filter((item)=>item.id!==id)
  
    console.log(sortedBooks);
    this.setState({
      books:sortedBooks
    })
  }




  
  // state = {
  //   books: booksData,
  // };
  // //this.setState()
  render() {
    //const books = this.state.books.map((item)=>item.book);
    //console.log(books)
    //filter
    //forEach
    //map
    //reduce
    return (
      <section>
        <h1>Hello this is change</h1>
        <h3>This is our bookList</h3>
        {this.state.books.map((item, index) => (
          <Book key={index} info={item} handleDelete= {this.handleDelete}></Book>
        ))}
      </section>
    );
  }
}
