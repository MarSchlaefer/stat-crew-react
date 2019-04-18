import React, { Component } from 'react';

class HomePage extends Component {
    render() {
      return (
          <div>
            <div className="nav-bar">
                <span>Games</span>
                <span>Teams</span>
                <span>Sports</span>
                <span>Reports</span>
            </div>
            <div className="recent-reports-container">
                <h1>Recent Reports</h1>
            </div>
            <div className="top-players-container">
                <h1>Top Players</h1>
            </div>
          </div>
      );
    }
  }
  
  export default HomePage;
  