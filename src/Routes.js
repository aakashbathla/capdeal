import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Login from "./components/molecules/Login";
import NoMatch from "./components/atoms/NoMatch";

import Home from 'pages/Home';
import Dashboard from "pages/Dashboard";
import User from "pages/Dashboard/User";


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard}>
      </Route>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route component={NoMatch}></Route>
    </Switch>
  );
};

export default Routes;
