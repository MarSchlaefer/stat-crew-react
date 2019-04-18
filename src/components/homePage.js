import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';

class HomePage extends Component {
    render() {
      return (
          <div>
            <div className="nav-bar">
                <span>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Games
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">New Game</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Game History</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </span>
                <span>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Teams
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">New Team</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">My Teams</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">All Teams</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </span>
                <span>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Sports
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">New Sport</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">My Sports</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">All Sports</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </span>
                <span>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Reports
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">My Reports</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">All Reports</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
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
  