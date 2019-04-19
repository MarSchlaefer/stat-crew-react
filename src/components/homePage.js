import React, { Component } from 'react';
import NavMenu from './navMenu'

class HomePage extends Component {
    render() {
      return (
          <React.Fragment>
              <NavMenu />
              <div>
                <h1>Recent Reports</h1>
              </div>
              <div>
                <h1>Top Players</h1>
              </div>
          </React.Fragment>

      );
    }
  }
  
  export default HomePage;
  