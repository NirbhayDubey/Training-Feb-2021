import React from 'react'
import ReactDOM from 'react-dom'
import NumberList from './key_list'


export default function App() {
 const number = [1,2,3,4,5]
 const peoplelist=[{"FirstName":"Ronit","LastName":"Patel"},
                  {"FirstName":"Reena","LastName":"Sharma"}]

 return (
  <div> 
       <NumberList number = {number} list = {peoplelist}/>
       <Clock/>
  </div>
 )
}

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
      componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        10000
      );
    }
     componentWillUnmount() {
      clearInterval(this.timerID);
    }
     tick() {
      this.setState({
        date: new Date()
      });
    }
     render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
         <LifeCycleA/>
        </div>
      );
    }
  }


class LifeCycleA extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={name:"Greeting of the day"}
        console.log("Constructor Life Cycle A");
    }
   static getDerivedStateFromProps(props,state)
   {
       console.log("getDerivedStateFromPropslife cycle A")
       return null;
   }
   changeState=()=>
   {
    this.setState({name:"Welcome"});
   }
render()
  {
      console.log("Life Cycle A render");
      return(
          <div>
              <p>{this.state.name}</p>
           <div>LifeCycle A 
               <button onClick = {this.changeState}>Change State</button>
           </div>
         <LifeCycleB/>
           </div>
      );
  }
  }


class LifeCycleB extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={name:""}
        console.log("Constructor Lide Cycle B");
    }
   static getDerivedStateFromProps(props,state)
   {
       console.log("getDerivedStateFromPropslife cycle B")
       return null;
   }
  render()
  {
      console.log("Life Cycle B render");
      return(
          <div>
             <div>LifeCycle B </div>
          </div>
          );
  }
  componentDidMount()
  {
      console.log("Component Did Mount B");
  }
}


ReactDOM.render(
    <App />,
  document.getElementById('root')
);
