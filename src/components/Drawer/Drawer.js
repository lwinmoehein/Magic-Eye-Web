import React from "react";
import Drawer from "@material-ui/core/Drawer";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from '@material-ui/icons/Info';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {firebase} from '@firebase/app';
import { Link } from 'react-router-dom';


const styles = theme => ({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

class DrawerComponent extends React.Component {
  state = {
    left: false
  };

  render() {
    const { classes } = this.props;

    const sideList = side => (
      <div
        className={classes.list}
        role="presentation"
        onClick={this.props.toggleDrawerHandler}
        onKeyDown={this.props.toggleDrawerHandler}
      >
        <List>

          <ListItem button key={"Home"}>
            <Link to="/">
              <ListItemIcon><HomeIcon /></ListItemIcon>
            </Link>
            <Link to="/">
              <ListItemText primary="Home" />
            </Link>
          </ListItem>
          <ListItem button key={"About"}>
            <Link to="/about">
              <ListItemIcon><InfoIcon /></ListItemIcon>
            </Link>
            <Link to="/about">
              <ListItemText primary="About" />
            </Link>
          </ListItem>
          <ListItem button key={"Courses"}>
            <Link to="/courses">
              <ListItemIcon><MenuBookIcon /></ListItemIcon>
            </Link>
            <Link to="/courses">
              <ListItemText primary="Courses" />
            </Link>
          </ListItem>

        </List>
        <Divider />
        <List>
          <ListItem button key={"Logout"}>
              <a onClick={() => firebase.auth().signOut()}><ListItemIcon><ExitToAppIcon /></ListItemIcon> </a>
              <a onClick={() => firebase.auth().signOut()}><ListItemText primary="LogOut" /></a>
          </ListItem>
          <ListItem button key={"LogIn"}>
            <Link to="/login">
              <ListItemIcon><ExitToAppIcon /></ListItemIcon>
            </Link>
            <Link to="/login">
              <ListItemText primary="LogIn" />
            </Link>
          </ListItem>
        </List>
      </div>
    );

    return (
      <Drawer open={this.props.left} onClose={this.props.toggleDrawerHandler}>
        {sideList("left")}
      </Drawer>
    );
  }
}

export default withStyles(styles)(DrawerComponent);
