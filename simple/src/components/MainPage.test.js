import React from 'react'
import { shallow } from 'enzyme'

import MainPage from './MainPage'
import TasksList from './TasksList'

describe('<MainPage /> component', () => {
  it('renders normally', () => {
    const mainWrapper = shallow(<MainPage />)
    expect(mainWrapper).toHaveLength(1)
  })

  it('should have one h1', () => {
    const mainWrapper = shallow(<MainPage />)
    const mainHeader = mainWrapper.find('h1')
    expect(mainHeader).toHaveLength(1)
  })

  it('should have tasks state', () => {
    const mainWrapper = shallow(<MainPage />)
    const tasksState = mainWrapper.state('tasks')
    expect(tasksState).toHaveLength(1)
  })

  it('tasks state should be an array', () => {
    const mainWrapper = shallow(<MainPage />)
    const tasksState = mainWrapper.state('tasks')
    expect(Array.isArray(tasksState)).toEqual(true)
  })

  it('individual task should be an object', () => {
    const mainWrapper = shallow(<MainPage />)
    const tasksState = mainWrapper.state('tasks')
    expect(typeof tasksState[0]).toEqual('object')
  })

  it('should have taskinput state', () => {
    const mainWrapper = shallow(<MainPage />)
    const tasksState = mainWrapper.state('taskInput')
    expect(tasksState).toEqual('')
  })

  it('should change taskinput with taskinputlistener()', () => {
    const mainWrapper = shallow(<MainPage />)
    mainWrapper.instance()._taskInputListener("blablabla")

    const taskInput = mainWrapper.state('taskInput')
    expect(taskInput).toEqual("blablabla")
  })

  it('should add new task to tasks state', () => {
    const mainWrapper = shallow(<MainPage />)
    const expectedState = [
      { id: 1, tasks: 'Thunder Talk'},
      { id: 2, tasks: 'blablabla'}
    ]

    mainWrapper.instance()._addTask('blablabla')
    const actualState = mainWrapper.state('tasks')

    expect(actualState).toEqual(expectedState)
  })

  it('should add new task if "Add Task" button is clicked', () => {
    const mainWrapper = shallow(<MainPage />)
    const expectedState = [
      { id: 1, tasks: 'Thunder Talk'},
      { id: 2, tasks: ''}
    ]

    const addButton = mainWrapper.find('.addButton')
    addButton.simulate('click')
    const actualState = mainWrapper.state('tasks')

    expect(actualState).toEqual(expectedState)
  })

  it('should have one TasksList component', () => {
    const mainWrapper = shallow(<MainPage />)
    const tasksList = mainWrapper.find(TasksList)
    expect(tasksList).toHaveLength(1)
  })
})