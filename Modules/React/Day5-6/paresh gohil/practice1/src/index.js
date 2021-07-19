import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"


//----------this.setState and conditional in jsx-----------------------
// class App extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             toggle : true
//         }
//     }


//     toggleClick = () => {
//         this.setState({
//             toggle : !this.state.toggle
//         })
//     }

//     render(){
//         return(
//             <button type="button" onClick={this.toggleClick}>
//                 {this.state.toggle?"ON":"OFF"}
//             </button>
//         )
//     }
// }
    

ReactDOM.render(<App />, document.getElementById("root"))
