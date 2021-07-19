// npm i react-icons
// npm i react-router-dom --save
// npm install --save styled-components

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import { RoomProvider} from './context';


ReactDOM.render(
  <RoomProvider>
    <Router>
      <App />
    </Router>
  </RoomProvider>,
  document.getElementById('root')
);



