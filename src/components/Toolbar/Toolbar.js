import "../../styles/ToolbarStyle.css";
import React from "react";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { TOGGLE_DRAWER } from "../../constants/action-types";
import firebase from "@firebase/app";
import User from "../../components/Reusables/User";
const styles = (theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
});

class ToolbarComponent extends React.Component {
  state = {
    achorEl: false,
    MobileMoreAnchorEl: false,
  };

  handleProfileMenuOpen = (event) => {
    this.setState({
      achorEl: event.currentTarget,
    });
  };

  handleMobileMenuClose = () => {
    this.setState({
      mobileMoreAnchorEl: null,
    });
  };

  handleMenuClose = () => {
    this.setState({
      achorEl: null,
      mobileMoreAnchorEl: null,
    });
  };

  handleMobileMenuOpen = (event) => {
    this.setState({
      mobileMoreAnchorEl: event.currentTarget,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={() => this.props.toggleDrawer()}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              <span className="whiteText">Magic Eye Computer (Pakokku)</span>
            </Typography>

            <div className={classes.grow} />
            <div>
              <Typography variant="h6">
                <User className="whiteText" />
              </Typography>
            </div>
            {/* <div className={classes.sectionMobile}>
              <Typography variant="h6" className={classes.title}>
                {this.props.user
                  ? this.props.user.phoneNumber
                  : "Not Logged In"}
              </Typography>
            </div> */}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isDrawerOpen: state.app.isDrawerOpen, user: state.app.user };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawer: () => dispatch({ type: TOGGLE_DRAWER }),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(ToolbarComponent)
);
