import React, { useState, useEffect, useRef, useContext } from "react";
import userServices from "../services/UserServices";
import authServices from "../services/AuthServices";

const AuthContext = React.createContext();

let header = "";

function AuthProvider(props) {
  const [isAdminUser, setIsAdminUser] = useState(false);
  const [userEmail, setUserEmail] = useState(false);
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUserIsLoggedIn(true);
      setToken(token);
      if (localStorage.getItem("isAdmin") === "true") setIsAdminUser(true);
      else setIsAdminUser(false);
      setUserEmail(localStorage.getItem("email"));
    }
  }, []);

  const login = async (credentials) => {
    try {
      const res = await authServices.login(credentials);
      console.log(res);
      if (res.data.loggedIn) {
        localStorage.setItem("token", "Bearer " + res.data.token);
        localStorage.setItem("isAdmin", res.data.userInfo.isAdmin);
        localStorage.setItem("email", res.data.userInfo.email);
        setUserIsLoggedIn(true);
        setIsAdminUser(res.data.userInfo.isAdmin);
        setUserEmail(res.data.userInfo.email);
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("email");
    setUserIsLoggedIn(false);
    setUserEmail("");
    setIsAdminUser(false);
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        isAdminUser,
        userEmail,
        userIsLoggedIn,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
