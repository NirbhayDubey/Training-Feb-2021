import React, { Component } from "react";

export default class Book extends Component {
  render() {
    const { book, auther } = this.props.info;
    return (
      <article>
        <h3>Book: {book}</h3>
        <h5>Auther: {auther}</h5>
      </article>
    );
  }
}
