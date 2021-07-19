import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function Books() {
  return (
    <section className="books">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
    //return React.createElement("div",{},"Hello World")
  );
}

const Book = () => {
  return (
    <article className="book">
      <CoverImage />
      <Title />
      <Author />
    </article>
  );
};

const CoverImage = () => (
  <img
    width="200"
    src="https://m.media-amazon.com/images/I/91+t0Di07FL._AC_UL320_.jpg"
    alt="Inteliigent Investor"
  />
);

const Title = () => (
  <h1 style={{ fontSize: "2rem", color: "darkblue" }}>Inteliigent Investor</h1>
);
const authorStyle = {
  letterSpacing: "5px",
  color: "green",
};
const Author = () => <p style={authorStyle}>by brenjamin greham</p>;

ReactDom.render(<Books />, document.getElementById("root"));
