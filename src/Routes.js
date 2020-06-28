import React from "react";
import {BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Login from "./components/molecules/Login";
import NoMatch from "./components/atoms/NoMatch";

import Home from 'pages/Home';
import Dashboard from "pages/Dashboard";
import User from "pages/Dashboard/User";


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" >
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Dashboard>
          <Route component={({ match }) =>
            <div>
              <Route exact path='/dashboard/user' component={User} />
            </div>
          }/>
        </Dashboard>
        <Route component={NoMatch}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
