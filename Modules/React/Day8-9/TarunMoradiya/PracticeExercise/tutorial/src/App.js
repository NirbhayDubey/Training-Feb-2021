import "./App.css";
import React, { Component } from "react";
import PropTypesEx from "./components/PropTypes/PropTypesEx";
import ControlledInp from "./components/ControlledInp/index";
import UnControlledInp from "./components/UnControlledInp/index";
import Counter from "./components/Fragments/Counter";

function App() {
  return (
    <section className="container mt-5">
      {/* <PropTypesEx /> */}
      {/* <ControlledInp /> */}
      {/* <UnControlledInp /> */}
      <Counter amount="2" />
    </section>
  );
}

export default App;
