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
import UserProfile from "components/molecules/UserProfile";
import EditProfile from "components/molecules/UserProfile/EditProfile";
import UserProjects from "components/molecules/UserProjects";
import UserPropertyList from "components/molecules/UserPropertyList";

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
        <Route exact path="/user" component={UserJourney} />
        <Route exact path="/404" component={NoMatch} />
        <UserJourney>
          <Route
            component={({ match }) => (
              <Switch>
                <Route
                  exact
                  path="/user/profile"
                  component={UserProfile}
                />
                <Route
                  exact
                  path="/user/profile-edit"
                  component={EditProfile}
                />
                <Route
                  exact
                  path="/user/projects"
                  component={UserProjects}
                />
                <Route
                  exact
                  path="/user/property-list"
                  component={UserPropertyList}
                />
              </Switch>
            )}
          />
        </UserJourney>
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
