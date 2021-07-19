//state ,this.setStat = hold/access/change data of component
//props = read only

import React from 'react'
import BookList from './BookList' 
import "./App.css"


const App = ()=>(
  <section>
      <h1>This is  our application</h1>
      <BookList/>
    </section>
)

export default App;