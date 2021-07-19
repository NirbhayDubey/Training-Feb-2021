import './App.scss';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListStudent from './components/ListStudent';
import AddStudent from './components/AddStudent';
import ViewStudent from './components/ViewStudent';
import UpdateStudent from "./components/UpdateStudent"
import HeaderStudent from "./components/HeaderStudent"
import StudentIdCard from "./components/StudentIdCard"

function App() {
  return (
    <div>
        <Router>
          <HeaderStudent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListStudent}></Route>
                          <Route path = "/add-student/" component = {AddStudent}></Route>
                          <Route path = "/view-student/:id" component = {ViewStudent}></Route>
                          <Route path = "/update-student/:id" component = {UpdateStudent}></Route>
                          <Route path = "/list-studentidcard/" component = {StudentIdCard}></Route>  
                    </Switch>
                </div>
        </Router>
    </div>
  );
}

export default App;
