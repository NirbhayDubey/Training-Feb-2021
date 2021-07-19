import "./App.css";
import ListStudent from "./components/ListStudent";
import { Route, Switch } from "react-router-dom";
import ViewStudent from "./components/ViewStudent";
import CreateStudent from "./components/CreateStudent";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ListStudent} />
        <Route exact path="/details/:id" component={ViewStudent} />
        <Route exact path="/create" component={CreateStudent} />
        <Route exact path="/update/:id" component={CreateStudent} />
        <Route exact path="/card/:id" component={Card} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
