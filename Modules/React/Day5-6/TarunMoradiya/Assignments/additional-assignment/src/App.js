import "./App.scss";
import Rectangle from "./components/assignment1/Rectangle";
import Login from "./components/assignment2/Login";
import Circle from "./components/assignment3/Circle";
import LeftBar from "./components/assignment4/LeftBar";
import SignUp from "./components/assignment5/SignUp";

function App() {
  return (
    <div className="container bg-white p-5">
      <p className="lead">
        1.Create a Rectangle Component which computes area of Rectangle.
      </p>
      <Rectangle />
      <br />
      <p className="lead">
        2. Create Login Component which validate a user with below credential
        username=admin, password=admin
      </p>
      <Login />
      <br />
      <p className="lead">
        3. Create a circle component which computes area of Circle
      </p>
      <Circle />
      <br />
      <p className="lead">
        4. Create a left bar component which contain some dummy adds.{" "}
      </p>
      <LeftBar />
      <br />
      <p className="lead">
        5. Create a signup component which contains field like Name, Address,
        PanNumber and interpolate these information in the paragraph
      </p>
      <SignUp />
    </div>
  );
}

export default App;
