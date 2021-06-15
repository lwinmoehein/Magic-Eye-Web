
import React from 'react';
import ToolbarComponent from "./components/Toolbar/Toolbar";
import DrawerComponent from "./components/Drawer/Drawer";
import Routes from './Routes';


class App extends React.Component {

  state = {
    left: false
  };

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


  render() {
    return (
      <div className="App">
        <ToolbarComponent openDrawerHandler={this.openDrawer} />
        <DrawerComponent
          left={this.state.left}
          toggleDrawerHandler={this.toggleDrawer}
        />
        <Routes/>
      </div>
    );

  }
}

export default App;