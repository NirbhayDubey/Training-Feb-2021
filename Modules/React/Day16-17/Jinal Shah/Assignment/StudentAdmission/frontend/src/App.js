import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListStudent from './components/ListStudent';
import HeaderComponent from './components/Header';
import FooterComponent from './components/Footer';
import UpdateStudents from './components/UpdateStudent';
import AddStudent from './components/AddStudent';
import DetailsStudent from './components/DetailsStudent';
import IdCard from './components/IdCard';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListStudent}></Route>
            <Route path="/details-student/:id" component={DetailsStudent} ></Route>
            <Route path="/add-student" component={AddStudent}></Route>
            <Route path="/id-card" component={IdCard}></Route>
            <Route path="/edit-student/:id" component={UpdateStudents}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>

  );
}

export default App;