import React, { Component } from "react";
import "./App.css";
import Props from "./Component/props";
import ControllForm from "./Component/forms";
import UncontrollForm from "./Component/UncontrolledForm";
import Data1 from "./Component/reactFragment_state";
export default class App extends Component {
  render() {
    return (
      <div style={{ margin: "auto" }}>
        <ControllForm />
        <UncontrollForm />
        <Data1 />
        <Props />
      </div>
    );
  }
}
