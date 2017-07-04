import React from 'react'
import { shallow, mount } from 'enzyme'
import { Table } from 'react-materialize'
import { Provider } from 'react-redux'

import TasksList from './TasksList'
import store from '../store'

describe('<TasksList /> component', () => {
  const initialProps = [{ id: 1, tasks: 'Thunder Talk' }]

  it('should render correctly', () => {
    const listWrapper = shallow(<Provider store={store}><TasksList /></Provider>)
    
    expect(listWrapper).toHaveLength(1)
  })
})