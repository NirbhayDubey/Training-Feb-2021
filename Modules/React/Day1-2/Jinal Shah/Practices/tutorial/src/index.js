import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

/* JSX Rules :
    Return single element
    div / section / article
    use camelCase for html attribute
    className instead of class
    close every element
    formatting
*/

//stateless functional component -------------------------------
//always return JSX
/* function Greeting(){
  return(
    //<React.Fragment>
    <> 
      <div>
        <h1>Hello people !!</h1>
        <ul>
          <li>
            <a href ='#'>Hello world</a>
          </li>
        </ul>
      </div>
    </>
  ) 
}   */

// 3 arguments (element , propsObject, children) --------------------------
/* function Greeting2(){
  return React.createElement("div",{},"Hello World !!") 
} */

// ES6, nested components and tools ---------------------------------------------
/* function Greeting1(){
  return <section>
    <Person />
    <Message />
  </section>
}
const Person =() => <h2>Jinal Shah</h2>
const Message =() => <p>Good morning !</p>  */



//----------------------------------------------------------------------------------------
/* function Books() {
  return(
    <section className = "books">
      <Book />
      <Book />
      <Book />
      <Book/>
      <Book/>
    </section>
  )
}
const Book = ()=> {
  return (
    <article className = "book">
    <CoverImage />
    <Title></Title>
    <Author></Author>
  </article> 
  ) ;
}
const CoverImage = () =>{ 
  return(
    <img width="200" src="https://m.media-amazon.com/images/I/71N4oeWwYlL._AC_UY327_QL65_.jpg" 
    alt="Book"/>
  )
};

const Title = () =>( 
  <h1 style= {{ fontSize:'2rem', color:'red' }}>
    The Wonkey Donkey
  </h1> 
);

const authorStyle = {
  letterSpacing : "10px",
  color : "green"
};

const Author = () => <p style = {authorStyle}>by Craig Smith </p> */


//javascript -----------------------------------------------------------------------------
/* const btnText = " big search button";
function Person2() {
  const btn = "search button";
  const name = "john";
  const lastname = "doe";
  return(
    <section>
      <button>{btnText}</button>
      <h2>{` ${name} ${lastname}`}</h2>
      <h2>{ name + " " + lastname}</h2>
      <p>{12 + 23}</p>
      <p>info</p>
    </section>
  )
} */


// PROPS (PROPERTIES) = ARGUMENTS TO COMPONENT---------------------------------------

// parameters and arguments
function sayName(name) {
  console.log(name);
}
sayName("jinal");

function People() {
  return(
    <section>
      <Personn name1 ="Jinal Shah" job="designer" ></Personn>
      <Personn name1 ="Zeel Mehta" job="developer" age="22" ></Personn>
    </section>
  )
}

const Personn = props => {
  console.log(props);
  return(
    /* <article>
      <h1>Jinal Shah</h1>
      <p>Developer</p>
      <hr />
    </article> */
    <article>
      <h1>{props.name1}</h1>
      <p>{props.job}</p>
      <p>{props.age}</p>
      <hr />
    </article>
  )
}
const Personn1 = () => {
  return(
    <article>
      <h1>zeel mehta</h1>
      <p>Developer</p>
      <hr />
    </article>
  )
}

ReactDOM.render(<People/>,document.getElementById('root'));

/* import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 */