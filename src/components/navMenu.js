import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const NavMenu = (props) => (
  <div>
    <Menu secondary attached='top'>
      <Dropdown item text="Games"> 
        <Dropdown.Menu>
          <Dropdown.Item onClick={props.handleNewGame}>New Game</Dropdown.Item>
          <Dropdown.Item onClick={props.handleGameHistory}>Game History</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown item text="Teams"> 
        <Dropdown.Menu>
          <Dropdown.Item onClick={props.handleNewTeam}>New Team</Dropdown.Item>
          <Dropdown.Item onClick={props.handleAllTeams}>All Teams</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown item text="Sports"> 
        <Dropdown.Menu>
          <Dropdown.Item onClick={props.handleNewSport}>New Sport</Dropdown.Item>
          <Dropdown.Item onClick={props.handleAllSports}>All Sports</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown item text="Reports"> 
        <Dropdown.Menu>
          <Dropdown.Item onClick={props.handleNewReport}>New Report</Dropdown.Item>
          <Dropdown.Item onClick={props.handleAllReports}>All Reports</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

    </Menu>

  </div>
)

export default NavMenu