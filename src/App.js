
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

        <ProgressBar isShown={this.props.isProgressShown}/>
        <ToolbarComponent openDrawerHandler={()=>toggleDrawer()} />
        <DrawerComponent
        />
        <Routes/>
      </div>
    );

  }
}

const mapStateToProps = state => {
  return { left: state.left,showProgress:state.showProgress,progressText:state.progressText };
};

// export default VisibilityFilters;
export default connect(
  mapStateToProps,{toggleDrawer,toggleProgress})(App);