import React, { Component } from "react";
import "./App.css";
import BookList from "./BookList";

class App extends Component {
  render() {
    return (
      <section>
        <h3>This is our App:</h3>
        <BookList />
      </section>
    );
  }
}

export default App;
