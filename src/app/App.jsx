import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";

import { teal500 } from "material-ui/styles/colors";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Main from "./components/Main";
import Login from "./components/Login";
import Home from "./components/Home";
import Group from "./components/Group";
import Groups from "./components/Groups";
import Person from "./components/Person";
import Itinerary from "./components/Itinerary";
import Quagga from "./components/Quagga";
import ParentGuide from "./components/ParentGuide";
import Help from "./components/Help";
import About from "./components/About";
import NotFound from "./components/NotFound";

import AuthService from "../helpers/AuthService";

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: teal500,
  },
  appBar: {
    height: 54,
    titleFontWeight: 400,
  },
});

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      AuthService.validateToken() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{
          pathname: "/login",
          state: { from: props.location },
        }}
        />
      )
    )}
  />
);

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <HashRouter basename="/">
      <Main>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/groups" component={Groups} />
          <PrivateRoute path="/group/:groupId" component={Group} />
          <PrivateRoute path="/person/:userId" component={Person} />
          <PrivateRoute path="/itinerary/:itineraryId" component={Itinerary} />
          <PrivateRoute path="/quagga" component={Quagga} />
          <PrivateRoute path="/parentguide" component={ParentGuide} />
          <PrivateRoute path="/help" component={Help} />
          <PrivateRoute path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </Main>
    </HashRouter>
  </MuiThemeProvider>
);

export default App;
