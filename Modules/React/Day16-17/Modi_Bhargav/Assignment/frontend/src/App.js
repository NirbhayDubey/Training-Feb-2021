import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListStudent from "./components/ListStudents";
import AddStudent from "./components/AddStudents";
import EditStudent from "./components/EditStudents";
import ViewStudent from "./components/ViewStudents";
import Header from "./components/Header";
import ViewAllStudent from "./components/ViewAllStudents";

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
