import './App.scss';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Property from './pages/Property';
import PropertyFieldWise from './pages/PropertyFieldWise';
import PropertyDescription from './pages/PropertyDescription';
// import UpdateStudent from "./components/UpdateStudent"
import Header from "./components/Header"
import Footer from './components/Footer';
import Verificationotp from './pages/Verificationotp';
import Service from "./pages/Service";
import PostProperty from './pages/PostProperty';
import Register from "./pages/Register"
import Login from './pages/Login';

function App() {
  return (
    <div>
        <Router>
          <Header />
          {/* <div className="container"> */}

                    <Switch>
                          <Route path = "/:city/:category" exact component = {Property}></Route>
                          <Route path = "/:city/:category/:fieldtype/:field" exact component = {PropertyFieldWise}></Route>
                          <Route path = "/:city/:category/:fieldtype/:field/:id" exact component = {PropertyDescription}></Route>
                          <Route path = "/:service" exact component = {Service}></Route>
                          <Route path = "/user/post/property" exact component = {PostProperty}/>
                          <Route path = "/bricks/user/registration" exact component = {Register}/>
                          <Route path = "/bricks/user/registration-otp" exact component = {Verificationotp}></Route> 
                          <Route path = "/bricks/user/login" exact component = {Login}></Route> 

                    </Switch>
                    {/* </div> */}

          <Footer/>
        </Router>
    </div>
  );
}

export default App;
