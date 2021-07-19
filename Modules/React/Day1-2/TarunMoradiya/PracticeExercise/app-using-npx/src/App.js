import logo from "./logo.svg";
import "./App.css";

// Using Dot Notation for JSX Type
const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  },
};

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}

// User-Defined Components Must Be Capitalized

// Wrong! This is a component and should have been capitalized:
function hello(props) {
  // Correct! This use of <div> is legitimate because div is a valid HTML tag:
  return <div>Hello {props.toWhat}</div>;
}

function HelloWorld() {
  // Wrong! React thinks <hello /> is an HTML tag because it's not capitalized:
  return <hello toWhat="World" />;
}

// Choosing the Type at Runtime

// const components = {
//   photo: PhotoStory,
//   video: VideoStory,
// };

// function Story(props) {
//   // Wrong! JSX type can't be an expression.
//   return <components[props.storyType] story={props.story} />;
// }

// function Story(props) {
//   // Correct! JSX type can be a capitalized variable.
//   const SpecificStory = components[props.storyType];
//   return <SpecificStory story={props.story} />;
// }

// Props in JSX

function NumberDescriber(props) {
  let description;
  if (props.number % 2 == 0) {
    description = <strong>even</strong>;
  } else {
    description = <i>odd</i>;
  }
  return (
    <div>
      {props.number} is an {description} number
    </div>
  );
}

// String Literals

// These two JSX expressions are equivalent:
// <MyComponent message="hello world" />
// <MyComponent message={'hello world'} />

// These two JSX expressions are equivalent:
// <MyComponent message="&lt;3" />
// <MyComponent message={'<3'} />

// If you pass no value for a prop, it defaults to true. These two JSX expressions are equivalent:
// <MyTextBox autocomplete />
// <MyTextBox autocomplete={true} />

// Spread Attributes

// function App1() {
//   return <Greeting firstName="Ben" lastName="Hector" />;
// }

// function App2() {
//   const props = { firstName: "Ben", lastName: "Hector" };
//   return <Greeting {...props} />;
// }

const Button = (props) => {
  const { kind, ...other } = props;
  const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
  return <button className={className} {...other} />;
};

/**A React component can also return an array of elements:

render() {
  // No need to wrap list items in an extra element!
  return [
    // Don't forget the keys :)
    <li key="A">First item</li>,
    <li key="B">Second item</li>,
    <li key="C">Third item</li>,
  ];
} */

function App() {
  return (
    <div className="App">
      <h1>Hello World!!!</h1>
      <BlueDatePicker />
      <HelloWorld />
      {/* <Story /> */}
      <NumberDescriber number="10" />
      <Button kind="primary" onClick={() => console.log("clicked!")}>
        Hello World!
      </Button>
    </div>
  );
}

export default App;
