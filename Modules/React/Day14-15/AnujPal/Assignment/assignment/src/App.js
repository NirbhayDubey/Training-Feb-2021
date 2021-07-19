import React from "react";
import { Form } from "./components/Form/Form";
import { useState } from "react";


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  const [List, setList] = useState([]);
  const callback=(e)=>{
    const object={Id:1,fname:"Anuj", lname:"Pal"}
    setList(e)
    console.log(List);
    
  }
  return (
    <div className="container">
      <Form></Form>
    </div>
  );
}
