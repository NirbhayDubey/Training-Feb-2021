import React from 'react';
import './App.scss';
import Navbar from './components/NavBar/NavBar'; 
import TourList from './components/TourList/index' 

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <TourList/>
    </React.Fragment>
  );
}

export default App;
