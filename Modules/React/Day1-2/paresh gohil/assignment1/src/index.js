import React from 'react';
import ReactDOM from 'react-dom';

// 1. Create a Functional Component which prints Hello World.

function Greeting() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}
 
ReactDOM.render(<Greeting />, document.getElementById("root"))
