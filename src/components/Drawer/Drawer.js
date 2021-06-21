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
import {toggleProgress,toggleDrawer} from '../../actions';
import { connect } from "react-redux";



const styles = theme => ({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

class DawerComponent extends React.Component {
  state = {
    left: false
  };

  signOut(){
    let status = "logging out";
    console.log(status);
    firebase.auth().signOut().then(()=>{
       status="logged out"
       console.log(status);
    });
  }

  render() {
    const { classes } = this.props;

    const sideList = side => (
      <div
        className={classes.list}
        role="presentation"
        onClick={()=>toggleDrawer()}
        onKeyDown={()=>toggleDrawer()}
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
          <ListItem button key={"Courses"} onClick={()=>toggleProgress()}>
            toggleProgress
          </ListItem>

        </List>
        <Divider />
        <List>
          <ListItem button key={"Logout"}>
              <a onClick={() => this.signOut()}><ListItemIcon><ExitToAppIcon /></ListItemIcon> </a>
              <a onClick={() => this.signOut()}><ListItemText primary="LogOut" /></a>
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
      <Drawer open={this.props.left} onClose={()=>toggleDrawer()}>
        {sideList("left")}
      </Drawer>
    );
  }
}
const mapStateToProps = state => {
  return { left: state.left,showProgress:state.showProgress,progressText:state.progressText };
};

// export default VisibilityFilters;
const DrawerComponent = connect(
  mapStateToProps,{toggleDrawer,toggleProgress})(DawerComponent);

export default withStyles(styles)(DrawerComponent);
