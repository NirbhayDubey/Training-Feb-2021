import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import React from "react";
import TourList from "./components/TourList/index";

export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <TourList />
    </React.Fragment>
  );
}
