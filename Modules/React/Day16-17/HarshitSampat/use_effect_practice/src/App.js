import {React,useState,useEffect} from 'react'
import MouseContainer from './MouseContainer';

function App() {
  const [count,setCount] = useState(0);  

useEffect(()=>{
  document.title=`you clicked ${count} times`
});


  return (
    <div>
      <MouseContainer/>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}
export default App