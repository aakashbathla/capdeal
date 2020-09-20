import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from "./containers/organisms/Login/Login";
import NoMatch from "./components/atoms/NoMatch";

import Home from "pages/Home";
import Dashboard from "pages/Dashboard";
import User from "pages/Dashboard/User";
import ProjectList from "pages/ProjectList";
import ProjectDetail from "pages/ProjectDetail";
import UserJourney from "pages/UserJourney";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home" component={Home} />
        <Route exact path="/project-list" component={ProjectList} />
        <Route exact path="/project-detail/:id" component={ProjectDetail} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/user-journey" component={UserJourney} />
        <Route exact path="/404" component={NoMatch} />
        <Dashboard>
          <Route
            component={({ match }) => (
              <Switch>
                <Route exact path="/dashboard/user" component={User} />
                <Route component={NoMatch}>
                  <Redirect to="/404" />
                </Route>
              </Switch>
            )}
          />
        </Dashboard>
        <Route component={NoMatch}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
