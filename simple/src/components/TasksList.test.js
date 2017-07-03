import React from 'react'
import { shallow } from 'enzyme'

import TasksList from './TasksList'

describe('<TasksList /> component', () => {
  it('renders normally', () => {
    const mainWrapper = shallow(<TasksList />)
    expect(mainWrapper).toHaveLength(1)
  })

  it('should have one h1', () => {
    const mainWrapper = shallow(<TasksList />)
    const mainHeader = mainWrapper.find('h1')
    expect(mainHeader).toHaveLength(1)
  })

  it('should have tasks state', () => {
    const mainWrapper = shallow(<TasksList />)
    const tasksState = mainWrapper.state('todos')
    expect(tasksState).toHaveLength(1)
  })

  it('tasks state should be an array', () => {
    const mainWrapper = shallow(<TasksList />)
    const tasksState = mainWrapper.state('todos')
    expect(typeof tasksState).toEqual('array')
  })

  it('individual task should be an object', () => {
    const mainWrapper = shallow(<TasksList />)
    const tasksState = mainWrapper.state('todos')
    expect(typeof tasksState[0]).toEqual('object')
  })

  it('should have one TaskList component', () => {
    const mainWrapper = shallow(<TasksList />)
    const tasksList = mainWrapper.find(TaskList)
    expect(tasksList).toHaveLength(1)
  })
})