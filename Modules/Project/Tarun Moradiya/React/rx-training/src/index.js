import React from "react";
import ReactDOM from "react-dom";
// import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { TechProvider } from "./contexts/techContext";
import { TechGroupProvider } from "./contexts/techGroupContext";
import { PlanProvider } from "./contexts/planContext";
import { ModuleProvider } from "./contexts/moduleContext";
import { UserProvider } from "./contexts/userContext";
import { DepartmentProvider } from "./contexts/deptContext";
import { AuthProvider } from "./contexts/authContext";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <AuthProvider>
    <UserProvider>
      <DepartmentProvider>
        <TechGroupProvider>
          <TechProvider>
            <PlanProvider>
              <ModuleProvider>
                <Router>
                  <App />
                </Router>
              </ModuleProvider>
            </PlanProvider>
          </TechProvider>
        </TechGroupProvider>
      </DepartmentProvider>
    </UserProvider>
  </AuthProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
