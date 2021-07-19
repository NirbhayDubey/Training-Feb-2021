import React from 'react';
import {name} from '../../data'

export default  function Banner(){
 return (
  <div>
   <h1>Hello From Banner Component</h1>
   <h1>name : {name} (From Banner Component)</h1>
  </div>
 )
}