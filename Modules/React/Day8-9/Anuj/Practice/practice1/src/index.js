import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Form from "./Form";
import UCForm from "./UncontrolledForms"
import Counter from "./Counter"
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
  <Counter></Counter>
  <hr></hr>
    <Form></Form>
    <hr></hr>
    <UCForm></UCForm>
    <hr></hr>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
