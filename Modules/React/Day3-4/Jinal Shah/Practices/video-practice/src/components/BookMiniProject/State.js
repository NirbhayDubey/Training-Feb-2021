// state, this.setState = hold/access/change data of component
// props = read only

import React, {Component} from 'react';
import Booklist from '../BookMiniProject/Booklist'
import '../../App.css'

const App = () => {
  return(
    <section>
      {/* <h1>This is our application</h1> */}
      <Booklist />
    </section>
  )
}

export default App;