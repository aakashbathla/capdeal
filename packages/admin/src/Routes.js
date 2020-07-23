import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import App from "./App";

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
          <Redirect to="/app" />
        </Route>
        <Route exact path="/app" component={App} />
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
