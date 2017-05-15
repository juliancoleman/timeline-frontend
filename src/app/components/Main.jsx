import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import {
  AppBar,
  Divider,
  Drawer,
  FloatingActionButton,
  MenuItem,
} from "material-ui";

import Fingerprint from "material-ui/svg-icons/action/fingerprint";
import Home from "material-ui/svg-icons/action/home";
import Lock from "material-ui/svg-icons/action/lock";

import AuthService from "../../helpers/AuthService";

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
      drawerOpen: false,
    };

    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
  }

  handleDrawerToggle() {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }
  handleDrawerClose() {
    this.setState({ drawerOpen: false });
  }

  render() {
    return (
      <div style={{ height: "100vh" }}>
        <AppBar
          title="Timeline"
          titleStyle={{ fontSize: 22 }}
          onLeftIconButtonTouchTap={this.handleDrawerToggle}
          showMenuIconButton={AuthService.validateToken()}
        />

        <Drawer
          open={this.state.drawerOpen}
          docked={false}
          width={250}
          onRequestChange={open => this.setState({ drawerOpen: open })}
        >
          <NavLink exact to="/" activeClassName="active">
            <MenuItem
              primaryText="Home"
              onTouchTap={this.handleDrawerClose}
              leftIcon={<Home />}
            />
          </NavLink>
          <NavLink exact to="/login" activeClassName="active" onTouchTap={() => AuthService.logout()}>
            <MenuItem
              primaryText="Logout"
              onTouchTap={this.handleDrawerClose}
              leftIcon={<Lock />}
            />
          </NavLink>

          <Divider />

          <NavLink exact to="/help" activeClassName="active">
            <MenuItem
              primaryText="Help & Feedback"
              onTouchTap={this.handleDrawerClose}
            />
          </NavLink>
          <NavLink exact to="/parentguide" activeClassName="active">
            <MenuItem
              primaryText="Parent Guide"
              onTouchTap={this.handleDrawerClose}
            />
          </NavLink>
          <NavLink exact to="/about" activeClassName="active">
            <MenuItem
              primaryText="About Timeline"
              onTouchTap={this.handleDrawerClose}
            />
          </NavLink>
        </Drawer>

        {this.props.children}

        <FloatingActionButton style={{ position: "fixed", bottom: 24, right: 24 }}>
          <Fingerprint />
        </FloatingActionButton>
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
};
