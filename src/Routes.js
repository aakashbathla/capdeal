import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./App";
import Login from "./components/molecules/Login";
import NoMatch from "./components/atoms/NoMatch";
import Dashboard from "./Dashboard/Dashboard";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route component={NoMatch}></Route>
    </Switch>
  );
};

export default Routes;
