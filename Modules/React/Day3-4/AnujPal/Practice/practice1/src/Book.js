import React, { Component } from "react";

export default class Book extends Component {
  render() {
    const { img, author, title } = this.props.info;
    return (
      <article className="book">
        <img src={img} alt="book" width="150"></img>
        <div>
          <h4>Title:{title}</h4>
          <h6>Author:{author}</h6>
        </div>
      </article>
    );
  }
}
