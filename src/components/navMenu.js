import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const NavMenu = () => (
  <div>
    <Menu secondary attached='top'>
      <Dropdown item text="Games"> 
        <Dropdown.Menu>
          <Dropdown.Item>New Game</Dropdown.Item>
          <Dropdown.Item>Game History</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown item text="Teams"> 
        <Dropdown.Menu>
          <Dropdown.Item>New Team</Dropdown.Item>
          <Dropdown.Item>All Teams</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown item text="Sports"> 
        <Dropdown.Menu>
          <Dropdown.Item>New Sport</Dropdown.Item>
          <Dropdown.Item>All Sports</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown item text="Reports"> 
        <Dropdown.Menu>
          <Dropdown.Item>New Report</Dropdown.Item>
          <Dropdown.Item>All Reports</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

    </Menu>

  </div>
)

export default NavMenu