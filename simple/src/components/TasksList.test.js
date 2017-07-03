import React from 'react'
import { shallow, mount } from 'enzyme'
import { Table } from 'react-materialize'

import TasksList from './TasksList'

describe('<TasksList /> component', () => {
  const initialProps = [{ id: 1, tasks: 'Thunder Talk' }]

  it('should get tasks prop', () => {
    const listWrapper = shallow(<TasksList tasks={initialProps} />)
    const tasksProp = listWrapper.unrendered.props.tasks

    const isObject = typeof tasksProp === 'object'
    expect(isObject).toBeTruthy()
  })
})