import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import ConnectedPage, { MainPage } from './MainPage'
import TasksList from './TasksList'
import store from '../store'

describe('<MainPage /> component', () => {
  const initialState = [ { id: 1, tasks: 'Blabla' }]
  const mockStore = configureStore()


  it('renders normally', () => {
    const connectedMain = shallow(<Provider store={store}><ConnectedPage /></Provider>)
    expect(connectedMain).toHaveLength(1)
  })

  it('should have one h1', () => {
    const mainWrapper = shallow(<MainPage />)
    const mainHeader = mainWrapper.find('h1')
    expect(mainHeader).toHaveLength(1)
  })
})