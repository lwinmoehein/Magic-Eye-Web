
import React from 'react';
import ToolbarComponent from "./components/Toolbar/Toolbar";
import DrawerComponent from "./components/Drawer/Drawer";
import ProgressBar from "./components/Reusables/ProgressBar";
import Routes from './Routes';
import { connect } from "react-redux";
import {toggleDrawer,toggleProgress} from './actions/index';


class App extends React.Component {


  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App" style={{position:'relative',height:'100%'}}>

        <ProgressBar/>
        <ToolbarComponent openDrawerHandler={()=>toggleDrawer()} />
        <DrawerComponent
        />
        <Routes/>
      </div>
    );

  }
}

const mapStateToProps = state => {
  return { left: state.left,isProgressShown:state.isProgressShown};
};

// export default VisibilityFilters;
export default connect(
  mapStateToProps)(App);