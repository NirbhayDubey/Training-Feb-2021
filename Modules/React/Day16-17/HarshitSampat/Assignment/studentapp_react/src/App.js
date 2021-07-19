import './App.css';
import  {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import StudentList from './components/StudentList';
import ViewStudent from './components/ViewStudent';
import AddStudent from './components/AddStudent';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>  
      <Route path="/" exact component={StudentList}></Route>
      <Route path="/students" exact component={StudentList}></Route>
      <Route path="/add-student/:id" exact component={AddStudent}></Route>
      <Route path="/view-student-:id" exact component={ViewStudent}></Route>
      </Switch>
    </Router>
  );
}

export default App;
