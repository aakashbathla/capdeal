import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import App from "./App";
import CustomerList from "components/molecules/CustomerList";
import AgentsList from "components/molecules/AgentsList";
import PropertyList from "components/molecules/PropertyList";
import LoginPage from "containers/organisms/Login/Login";
import AddDeveloper from "components/molecules/Developer";
import DeveloperList from "components/molecules/Developer/DeveloperListing";

// import Login from "./containers/organisms/Login/Login";
// import NoMatch from "./components/atoms/NoMatch";

// import Home from "pages/Home";
// import Dashboard from "pages/Dashboard";
// import User from "pages/Dashboard/User";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/app" component={App} />
        <App>
          <Route
            component={({ match }) => (
              <Switch>
                <Route
                  exact
                  path="/app/customer-list"
                  component={CustomerList}
                />
                <Route exact path="/app/agents-list" component={AgentsList} />
                <Route
                  exact
                  path="/app/property-list"
                  component={PropertyList}
                />
                <Route
                  exact
                  path="/app/developer-list"
                  component={DeveloperList}
                />
                <Route
                  exact
                  path="/app/add-developer"
                  component={AddDeveloper}
                />
              </Switch>
            )}
          />
        </App>
        {/* <Route exact path="/login" component={Login} />
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
        <Route component={NoMatch}></Route> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
