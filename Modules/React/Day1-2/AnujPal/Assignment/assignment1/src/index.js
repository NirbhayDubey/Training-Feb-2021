import React from "react";
import ReactDOM from "react-dom";
const HelloWorld = () => {
  return (
    <article>
      <h1>Hello World</h1>
      <hr />
    </article>
  );
};
ReactDOM.render(<HelloWorld></HelloWorld>, document.getElementById("root"));