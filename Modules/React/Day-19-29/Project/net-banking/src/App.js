import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import { Login } from "./components/Login/Login";
import { Navbar } from "./components/Portal/Navbar";
import { Portal } from "./components/Portal/Portal";
import { SignUp } from "./components/SignUp/SignUp";
import { About } from "./Pages/About/About";
import { addBeneficiary } from "./Pages/addBeneficiary";
import { Admin } from "./Pages/Admin";
import { AdminLogin } from "./Pages/Admin-Login/AdminLogin";
import { AdminRegister } from "./Pages/AdminRegister/AdminRegister";
import { ApplyForCheque } from "./Pages/ApplyForCheque";
import { ApplyForDebit } from "./Pages/ApplyForDebit";
import { ApplyForFD } from "./Pages/ApplyForFD";
import { CloseAccount } from "./Pages/CloseAccount";
import { ErrorPage } from "./Pages/ErrorPage";
import { Home } from "./Pages/Home/Home";
import { Loan } from "./Pages/Loan/Loan";
import { NEFT } from "./Pages/NEFT";
import { NEFT1 } from "./Pages/NEFT1";
import { ViewLoanStatus } from "./Pages/viewLoanStatus";
import { Withdrawl } from "./Pages/Withdrawl";
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import { ApplyForNominee } from './Pages/ApplyForNominee';
import { ViewNominee } from './Pages/viewNominee';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/Admin/Login" exact component={AdminLogin}></Route>
          <Route path="/Admin/Dashboard" exact component={Admin}></Route>
          <Route path="/Admin/Register" exact component={AdminRegister}></Route>
          <Route path="/Navbar" exact component={Navbar}></Route>
          <PrivateRoute path="/Portal/:id" exact component={Portal}></PrivateRoute>
          <PrivateRoute path="/Portal/:id/ApplyForCheque" exact component={ApplyForCheque}></PrivateRoute>
          <PrivateRoute path="/Portal/:id/ApplyForDebit" exact component={ApplyForDebit}></PrivateRoute>
          <PrivateRoute path="/Portal/:id/ApplyForFD" exact component={ApplyForFD}></PrivateRoute>
          <PrivateRoute path="/Portal/:id/ApplyForNominee" exact component={ApplyForNominee}></PrivateRoute>
          <PrivateRoute path="/Portal/:id/viewNominee" exact component={ViewNominee}></PrivateRoute>
          <PrivateRoute path="/Portal/:id/Loan" exact component={Loan}></PrivateRoute>
          <PrivateRoute path="/Portal/:id/LoanStatus" exact component={ViewLoanStatus}></PrivateRoute>
          <PrivateRoute path="/Home/:id" exact component={Home}></PrivateRoute>
          <PrivateRoute path="/Portal/:id/Withdrawl" exact component={Withdrawl}></PrivateRoute>
          <PrivateRoute path="/Portal/:id/NEFT1" exact component={NEFT1}></PrivateRoute>
          <PrivateRoute path="/Portal/:id/NEFT1/addBeneficiary" exact component={addBeneficiary}></PrivateRoute>
          <PrivateRoute path="/Portal/:id/NEFT" exact component={NEFT}></PrivateRoute>
          <PrivateRoute path="/Portal/:id/Delete" exact component={CloseAccount}></PrivateRoute>
          <Route path="/Portal/:id/About" exact component={About}></Route>
          <Route path="/Error" exact component={ErrorPage}></Route>

          <Route path="/SignUp" exact component={SignUp}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
