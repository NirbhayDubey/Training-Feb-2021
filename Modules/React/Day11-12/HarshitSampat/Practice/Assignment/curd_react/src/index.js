import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import EditStudent from './components/EditStudent'
import AddStudent from './components/AddStudent'
import ListStudent from './components/ListStudent'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact component={ListStudent}></Route>
          <Route path="/add-student" component={AddStudent}></Route>
          <Route path="/Edit-student/:id" component={EditStudent}></Route>
          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
