import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StudentList from "./components/studentList";
import Header from './components/Header'
import CreateStudent from "./components/CreateStudent";
import UpdateStudent from "./components/UpdateStudent";
import Details from "./components/Details";
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Router>
      <Header></Header>
        <div className="container">
          <Switch>
            <Route path="/" exact component={StudentList}></Route>
            <Route path="/add-student" exact component={CreateStudent}></Route>
            <Route path="/Details/:id" exact component={Details}></Route>
            <Route path="/update-student/:id" exact component={UpdateStudent}></Route>
          </Switch>
        </div>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
