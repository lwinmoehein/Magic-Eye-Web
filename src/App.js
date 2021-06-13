
import React from 'react';
import ToolbarComponent from "./components/Toolbar/Toolbar";
import DrawerComponent from "./components/Drawer/Drawer";
import Home from './pages/Home';
import About from './pages/About';

import { BrowserRouter, Route, Switch } from 'react-router-dom';


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


   render(){
     return (
      <div className="App">
        <ToolbarComponent openDrawerHandler={this.openDrawer} />
        <DrawerComponent
          left={this.state.left}
          toggleDrawerHandler={this.toggleDrawer}
        />
        <Switch>
             <Route path='/' component={Home} />
             <Route path='/about' component={About} />
        </Switch>
      </div>
    );
    
   }
}
  
export default App;