import React from 'react'
import { Navbar, NavItem } from 'react-materialize'

class NavBar extends React.Component {
  render () {
    return (
      <div>
        <Navbar brand='Simple Test' right className="teal darken-4">
          <NavItem href='#'>Home</NavItem>
          <NavItem href='#'>About</NavItem>
        </Navbar>
      </div>
    )
  }
}

export default NavBar