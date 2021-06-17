
import React from 'react';
import ToolbarComponent from "./components/Toolbar/Toolbar";
import DrawerComponent from "./components/Drawer/Drawer";
import ProgressBar from "./components/Reusables/ProgressBar";
import Routes from './Routes';


class App extends React.Component {

  state = {
    left: false,
    showProgress:true,
    progressText:'Loading...'
  };

  constructor(props){
    super(props);
    this.toggleProgress = this.toggleProgress.bind(this);
  }

  toggleDrawer = () => {
    // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //   return;
    // }

    this.setState({ left: false });
  };

  openDrawer = () => {
    this.setState({
      left: true
    });
  };

  toggleProgress(status='loading...'){
    this.setState({showProgress:!this.state.showProgress,progressText:status});
  }




  render() {
    return (
      <div className="App" style={{position:'relative',height:'100%'}}>

        <ProgressBar isShown={this.state.showProgress}/>
        <ToolbarComponent openDrawerHandler={this.openDrawer} />
        <DrawerComponent
          left={this.state.left}
          toggleDrawerHandler={this.toggleDrawer}
          toggleProgress={this.toggleProgress}
        />
        <Routes/>
      </div>
    );

  }
}

export default App;