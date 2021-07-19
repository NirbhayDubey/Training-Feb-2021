import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ListStudent from "./components/ListStudents";
import Student from "./components/Student";
import Card from "./components/Card";
import StudentForm from "./components/StudentForm";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ListStudent} />
        <Route exact path="/details/:id" component={Student} />
        <Route exact path="/create" component={StudentForm} />
        <Route exact path="/update/:id" component={StudentForm} />
        <Route exact path="/card/:id" component={Card} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
