import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
//import ErrorHandler from "./utils/ErrorHandlerUtility";
import App from "./App";
import CustomerList from "components/molecules/CustomerList";
import TeamList from "components/molecules/TeamList";
import PropertyList from "components/molecules/PropertyList";
import LoginPage from "containers/organisms/Login/Login";
import AddDeveloper from "components/molecules/Developer";
import EditDeveloper from "components/molecules/Developer/EditDeveloper";
import AddTeam from "components/molecules/TeamList/AddTeam";
import EditTeam from "components/molecules/TeamList/EditTeam";
import AddAminities from "components/molecules/aminities/AddAminities";
import EditAminities from "components/molecules/aminities/EditAminities";
import Aminities from "components/molecules/aminities/AminitiesListing";
import DeveloperList from "components/molecules/Developer/DeveloperListing";
import ProjectList from "components/molecules/Project";
import AddProject from "components/molecules/Project/AddProject";
import EditProject from "components/molecules/Project/EditProject";
import SeoList from "components/molecules/Seo/SeoListing";
import AddSeo from "components/molecules/Seo/";
import EditSeo from "./components/molecules/Seo/EditSeo";
import NoMatch from "components/atoms/NoMatch";
import NoMatch500 from "components/atoms/NoMatch/NoMatch500";
import { LocalStorageUtil } from "./utils/localstorage";

const Routes = () => {
  const localStorage = new LocalStorageUtil();
  const loggedIn = JSON.parse(localStorage.getItem("userProfile"));
  return (
    <BrowserRouter>
      {/* <ErrorHandler> */}
      <Switch>
        <Route exact path="/">
          {loggedIn ? (
            <Redirect to="/app/customer-list" />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/app" component={App} />
        <Route exact path="/404" component={NoMatch} />
        <Route exact path="/500" component={NoMatch500} />
        <App>
          <Route
            component={({ match }) => (
              <Switch>
                <Route
                  exact
                  path="/app/customer-list"
                  component={CustomerList}
                />
                <Route exact path="/app/team-list" component={TeamList} />
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
                <Route
                  exact
                  path="/app/edit-developer/:id"
                  component={EditDeveloper}
                />
                <Route
                  exact
                  path="/app/add-aminities"
                  component={AddAminities}
                />
                <Route
                  exact
                  path="/app/edit-aminities/:id"
                  component={EditAminities}
                />
                <Route exact path="/app/aminities-list" component={Aminities} />
                <Route exact path="/app/add-team" component={AddTeam} />
                <Route exact path="/app/edit-team/:id" component={EditTeam} />
                <Route exact path="/app/project-list" component={ProjectList} />
                <Route exact path="/app/add-project" component={AddProject} />
                <Route
                  exact
                  path="/app/edit-project/:id"
                  component={EditProject}
                />
                <Route exact path="/app/seo-list" component={SeoList} />
                <Route exact path="/app/add-seo" component={AddSeo} />
                <Route exact path="/app/edit-seo/:id" component={EditSeo} />
                <Route component={NoMatch}>
                  <Redirect to="/404" />
                </Route>
              </Switch>
            )}
          />
        </App>
        <Route component={NoMatch}></Route>
      </Switch>
      {/* </ErrorHandler> */}
    </BrowserRouter>
  );
};

export default Routes;
