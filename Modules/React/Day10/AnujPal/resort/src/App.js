import "./App.css";
import Home from "./pages/Home";
import Room from "./pages/Room";
import SingleRoom from "./pages/SingleRoom";
import Navbar from './components/Navabar'
import Error from "./pages/Error";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar></Navbar>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms" component={Room} />
      <Route exact path="/rooms/:slug" component={SingleRoom} />
      <Route component={Error}/>
      </Switch>
    </>
  );
}

export default App;
