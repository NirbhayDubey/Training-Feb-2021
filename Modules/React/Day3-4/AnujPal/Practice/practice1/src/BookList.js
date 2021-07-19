import React, { Component } from "react";
import Book from "./Book";
import bookData from "./bookData";

export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: bookData,
    };
  }

  render() {
    const books = this.state.books;
    return (
      <section>
        <h3>This is our BookList</h3>
        {this.state.books.map((item, index) => (
          <Book key={item.id} info={item}></Book>
        ))}
      </section>
    );
  }
}
