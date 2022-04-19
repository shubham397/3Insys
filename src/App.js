import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Description from "./components/Description";
import Dashboard from "./components/Dashboard";
import { history } from "./helpers/history";

function App() {
  return (
    <Router history={history}>
      <div className="container mt-3">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/description" component={Description} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
