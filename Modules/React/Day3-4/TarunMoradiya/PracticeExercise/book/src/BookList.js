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

  // handleDelete = () => {
  //   console.log("del");
  // };

  handleDelete = (id) => {
    console.log(id);
    const filterBooks = this.state.books.filter((item) => item.id !== id);
    this.setState({
      books: filterBooks,
    });
  };

  render() {
    return (
      <section>
        <h3>This is our book</h3>
        {this.state.books.map((item) => (
          <Book key={item.id} info={item} handleDelete={this.handleDelete} />
        ))}
      </section>
    );
  }
}
