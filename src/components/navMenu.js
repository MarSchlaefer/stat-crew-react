import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'
import withAuth from '../hocs/withAuth';

const NavMenu = (props) => {
  console.log(props)
  return (
    <div>
    <Menu secondary attached='top'>
      <Dropdown item text="Games"> 
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => props.handleModal("New Game")}>New Game</Dropdown.Item>
          <Dropdown.Item onClick={props.handleGameHistory}>Game History</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown item text="Teams"> 
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => props.handleModal("New Team")}>New Team</Dropdown.Item>
          <Dropdown.Item onClick={props.handleAllTeams}>All Teams</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown item text="Sports"> 
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => props.handleModal("New Sport")}>New Sport</Dropdown.Item>
          <Dropdown.Item onClick={props.handleAllSports}>All Sports</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown item text="Reports"> 
        <Dropdown.Menu>
          <Dropdown.Item onClick={props.handleAllReports}>All Reports</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  </div>
  )
}

export default connect()(NavMenu)