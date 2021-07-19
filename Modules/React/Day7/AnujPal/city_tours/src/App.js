
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import TourList from './components/Tour/TourList/index'
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <TourList></TourList>
    </React.Fragment>
  );
}

export default App;
