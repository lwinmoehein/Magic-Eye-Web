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
import { firebase } from '@firebase/app';
import { Link } from 'react-router-dom';
import { toggleProgress, toggleDrawer, storeUser } from '../../actions';
import { connect } from "react-redux";
import { TOGGLE_DRAWER, TOGGLE_PROGRESS } from "../../constants/action-types";
import '@firebase/auth';



const styles = theme => ({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

class DrawerComponent extends React.Component {

  signOut() {
    this.props.toggleProgress(true);
    firebase.auth().signOut().then(() => {
      this.props.toggleProgress(false);
    });
  }

  componentDidMount(){
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      if(user){
        console.log('user:'+user.phoneNumber)
        this.props.storeUser(user);
      }
      this.props.storeUser(null);
    });
    return () => unregisterAuthObserver(); 
  }

  render() {
    const { classes } = this.props;

    const sideList = side => (
      <div
        className={classes.list}
        role="presentation"
        onClick={() => this.props.toggleDrawer()}
        onKeyDown={() => this.props.toggleDrawer()}
      >
        <List>
          <Link to="/">
            <ListItem button key={"Home"}>
                <ListItemIcon><HomeIcon /></ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Link to="/about">
            <ListItem button key={"About"}>
                <ListItemIcon><InfoIcon /></ListItemIcon>
                <ListItemText primary="About" />
            </ListItem>
          </Link>
          <Link to="/courses">
            <ListItem button key={"Courses"}>
                <ListItemIcon><MenuBookIcon /></ListItemIcon>
                <ListItemText primary="Courses" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <ListItem button key={"Logout"}>
            <a onClick={() => this.signOut()}><ListItemIcon><ExitToAppIcon /></ListItemIcon> </a>
            <a onClick={() => this.signOut()}><ListItemText primary="LogOut" /></a>
          </ListItem>
          <Link to="/login">
            <ListItem button key={"LogIn"}>    
                <ListItemIcon><ExitToAppIcon /></ListItemIcon>      
                <ListItemText primary="LogIn" />    
            </ListItem>
          </Link>
        </List>
      </div>
    );

    return (
      <Drawer open={this.props.isDrawerOpen} onClose={() => this.props.toggleDrawer()}>
        {sideList("left")}
      </Drawer>
    );
  }
}


const mapStateToProps = state => {
  return { isDrawerOpen: state.app.isDrawerOpen };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawer: () => dispatch(toggleDrawer()),
    toggleProgress: () => dispatch(toggleProgress()),
    storeUser:(user)=>dispatch(storeUser(user)),
  }
}

export default withStyles(styles)(connect(
  mapStateToProps, mapDispatchToProps)(DrawerComponent));

