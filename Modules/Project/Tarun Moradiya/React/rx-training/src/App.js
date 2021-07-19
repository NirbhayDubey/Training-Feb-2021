import { useContext, lazy } from "react";
import "./App.scss";
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthContext } from "./contexts/authContext";
import { Suspense } from "react";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import ChangePassword from "./pages/ChangePassword";
import ResetPassword from "./pages/ResetPassword";
import FallbackUI from "./components/FallbackUI";

const Header = lazy(() => import("./components/Header"));
const Home = lazy(() => import("./pages/Home"));
const Module = lazy(() => import("./pages/Module"));
const Plan = lazy(() => import("./pages/Plan"));
const Error = lazy(() => import("./pages/Error"));
const Users = lazy(() => import("./pages/Users"));
const Departments = lazy(() => import("./pages/Departments"));
const Login = lazy(() => import("./pages/Login"));

function App() {
  const { userIsLoggedIn, isAdminUser } = useContext(AuthContext);
  return (
    <>
      <Suspense fallback={<FallbackUI />}>
        {userIsLoggedIn && <Header />}
        <Switch>
          <Route exact path="/">
            {userIsLoggedIn ? <Home /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/plans/:id">
            {userIsLoggedIn ? <Plan /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/modules/:id">
            {userIsLoggedIn ? <Module /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/departments">
            {userIsLoggedIn ? (
              isAdminUser ? (
                <Departments />
              ) : (
                <Redirect to="/" />
              )
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route exact path="/users">
            {userIsLoggedIn ? (
              isAdminUser ? (
                <Users />
              ) : (
                <Redirect to="/" />
              )
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route exact path="/login">
            {userIsLoggedIn ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route exact path="/profile">
            {userIsLoggedIn ? <Profile /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/forgot-password">
            <ForgotPassword />
          </Route>
          <Route exact path="/reset-password">
            <ResetPassword />
          </Route>
          <Route exact path="/change-password">
            {userIsLoggedIn ? <ChangePassword /> : <Redirect to="/login" />}
          </Route>
          <Route>{userIsLoggedIn ? <Error /> : <Redirect to="/login" />}</Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
