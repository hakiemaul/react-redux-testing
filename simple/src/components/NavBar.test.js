import React from 'react'
import { shallow } from 'enzyme'
import { Navbar, NavItem } from 'react-materialize'

import NavBar from './NavBar'

describe('<NavBar /> component', () => {
  it('renders normally', () => {
    const navWrapper = shallow(<NavBar />)
    expect(navWrapper).toHaveLength(1)
  })

  it('should have one Navbar component', () => {
    const navWrapper = shallow(<NavBar />)
    const navBar = navWrapper.find(Navbar)
    expect(navBar).toHaveLength(1)
  })

  it('should have two NavItem component', () => {
    const navWrapper = shallow(<NavBar />)
    const navItem = navWrapper.find(Navbar).find(NavItem)
    expect(navItem).toHaveLength(2)
  })
})