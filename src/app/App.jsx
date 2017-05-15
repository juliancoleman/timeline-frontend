import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";

import { teal500 } from "material-ui/styles/colors";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Main from "./components/Main";
import Login from "./components/Login";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

import AuthService from "../helpers/AuthService";

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: teal500,
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
          <Route component={NotFound} />
        </Switch>
      </Main>
    </HashRouter>
  </MuiThemeProvider>
);

export default App;
