/**
 * Author   :   Allan Nava
 * Modifier :   Allan Nava
 * Update   :   26/01/2020
 * Date     :   26/01/2020
 */
import React, {Component}   from 'react';
//import logo                 from './logo.svg';
import Toolbar              from './components/Toolbar/Toolbar'
import SideDrawer           from './components/SideDrawer/SideDrawer'
import Backdrop             from './components/Backdrop/Backdrop'
///
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
///
class App extends Component {

  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{marginTop: '64px'}}>
          <p>This is the page content!</p>
        </main>
        
      </div>
    );
  };

}
///
export default App;
///
