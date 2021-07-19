import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListStudent from "./components/ListStudent";
import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";
import ViewStudent from "./components/ViewStudent";
import Header from "./components/Header";
import ViewAllStudent from "./components/ViewAllStudent";

export default class App extends Component {
  render() {
    return (
      <div className="bg-info">
        <Router>
          <Header />
          <div className="container">
            <Switch>
              <Route path="/" exact component={ListStudent}></Route>
              <Route path="/add-studentInfo/" component={AddStudent}></Route>
              <Route
                path="/edit-studentData/:id"
                component={EditStudent}
              ></Route>
              <Route
                path="/view-studentCard/:id"
                component={ViewStudent}
              ></Route>
              <Route
                path="/view-AllStudent/"
                component={ViewAllStudent}
              ></Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
