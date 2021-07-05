import React from "react";
import Drawer from "@material-ui/core/Drawer";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CategoryIcon from "@material-ui/icons/Category";
import ViewListIcon from "@material-ui/icons/ViewList";
import { firebase } from "@firebase/app";
import { Link } from "react-router-dom";
import { toggleProgress, toggleDrawer, storeUser, logOut } from "../../actions";
import { connect } from "react-redux";
import { TOGGLE_DRAWER, TOGGLE_PROGRESS } from "../../constants/action-types";
import "@firebase/auth";

const styles = (theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

class DrawerComponent extends React.Component {
  componentDidMount() {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        if (!user) {
          this.props.storeUser(null);
        }
      });
    return () => unregisterAuthObserver();
  }

  render() {
    const { classes } = this.props;

    const sideList = (side) => (
      <div
        className={classes.list}
        role="presentation"
        onClick={() => this.props.toggleDrawer()}
        onKeyDown={() => this.props.toggleDrawer()}
      >
        <List>
          {this.props.user && (
            <Link to="/courses">
              <ListItem button key={"Courses"}>
                <ListItemIcon>
                  <CategoryIcon />
                </ListItemIcon>
                <ListItemText primary="Courses" />
              </ListItem>
            </Link>
          )}
          {this.props.user && (
            <Link to="/catalogs">
              <ListItem button key={"Catalogs"}>
                <ListItemIcon>
                  <ViewListIcon />
                </ListItemIcon>
                <ListItemText primary="Catalogs" />
              </ListItem>
            </Link>
          )}
          {this.props.user && (
            <Link to="/about">
              <ListItem button key={"About"}>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="About" />
              </ListItem>
            </Link>
          )}
        </List>
        <Divider />
        <List>
          {this.props.user && (
            <ListItem button key={"Logout"}>
              <a onClick={() => this.props.signOut()}>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>{" "}
              </a>
              <a onClick={() => this.props.signOut()}>
                <ListItemText primary="LogOut" />
              </a>
            </ListItem>
          )}

          {!this.props.user && (
            <Link to="/login">
              <ListItem button key={"LogIn"}>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary="LogIn" />
              </ListItem>
            </Link>
          )}
        </List>
      </div>
    );

    return (
      <Drawer
        open={this.props.isDrawerOpen}
        onClose={() => this.props.toggleDrawer()}
      >
        {sideList("left")}
      </Drawer>
    );
  }
}

const mapStateToProps = (state) => {
  return { isDrawerOpen: state.app.isDrawerOpen, user: state.app.user };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawer: () => dispatch(toggleDrawer()),
    toggleProgress: () => dispatch(toggleProgress()),
    storeUser: (user) => dispatch(storeUser(user)),
    signOut: () => dispatch(logOut()),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(DrawerComponent)
);
