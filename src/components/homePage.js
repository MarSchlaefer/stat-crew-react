import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

class HomePage extends Component {
    render() {
      return (
          <div>
            <div className="nav-bar">
                <span>
                    <DropdownButton id="dropdown-basic-button" title="Games">
                        <Dropdown.Item href="#/action-1">New Game</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Game History</Dropdown.Item>
                    </DropdownButton>
                </span>
                <span>
                    <DropdownButton id="dropdown-basic-button" title="Teams">
                        <Dropdown.Item href="#/action-1">New Team</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">My Teams</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">All Teams</Dropdown.Item>
                    </DropdownButton>
                </span>
                <span>
                    <DropdownButton id="dropdown-basic-button" title="Sports">
                        <Dropdown.Item href="#/action-1">New Sport</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">My Sports</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">All Sports</Dropdown.Item>
                    </DropdownButton>
                </span>
                <span>
                    <DropdownButton id="dropdown-basic-button" title="Reports">
                        <Dropdown.Item href="#/action-1">My Reports</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">All Reports</Dropdown.Item>
                    </DropdownButton>
                </span>
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
  