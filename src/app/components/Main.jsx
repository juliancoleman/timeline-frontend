import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import {
  AppBar,
  Divider,
  Drawer,
  FloatingActionButton,
  MenuItem,
  Subheader,
} from "material-ui";

import Fingerprint from "material-ui/svg-icons/action/fingerprint";
import Home from "material-ui/svg-icons/action/home";
import Group from "material-ui/svg-icons/social/group";
import Today from "material-ui/svg-icons/action/today";
import Feedback from "material-ui/svg-icons/action/feedback";
import WC from "material-ui/svg-icons/notification/wc";
import Info from "material-ui/svg-icons/action/info";
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
          title="Summerpalooza"
          titleStyle={{ fontSize: 20 }}
          onLeftIconButtonTouchTap={this.handleDrawerToggle}
          showMenuIconButton={AuthService.validateToken()}
        />

        <Drawer
          open={this.state.drawerOpen}
          docked={false}
          onRequestChange={open => this.setState({ drawerOpen: open })}
        >
          <NavLink exact to="/" activeClassName="active">
            <MenuItem
              primaryText="Home"
              onTouchTap={this.handleDrawerClose}
              leftIcon={<Home />}
            />
          </NavLink>
          <NavLink to="/groups" activeClassName="active">
            <MenuItem
              primaryText="Small Groups"
              onTouchTap={this.handleDrawerClose}
              leftIcon={<Group />}
            />
          </NavLink>
          <NavLink to="/itineraries" activeClassName="active">
            <MenuItem
              primaryText="Itineraries"
              onTouchTap={this.handleDrawerClose}
              leftIcon={<Today />}
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
              leftIcon={<Feedback />}
            />
          </NavLink>
          <NavLink exact to="/parentguide" activeClassName="active">
            <MenuItem
              primaryText="Parent Guide"
              onTouchTap={this.handleDrawerClose}
              leftIcon={<WC />}
            />
          </NavLink>
          <NavLink exact to="/about" activeClassName="active">
            <MenuItem
              primaryText="About Timeline"
              onTouchTap={this.handleDrawerClose}
              leftIcon={<Info />}
            />
          </NavLink>

          <Divider />

          <Subheader>&copy; 2017 Julian Coleman</Subheader>
          <Subheader>Timeline Project</Subheader>
        </Drawer>

        {this.props.children}
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
};
