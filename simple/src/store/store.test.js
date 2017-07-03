import store from './index'

describe('Store testing', () => {
  it('should get tasks initial tasks state', () => {
    const expectedState = []
    const actualState = store.getState().tasks

    expect(actualState).toEqual(expectedState)
  })

  it('should add new task to tasks state', () => {
    const newTask = { id: 1, tasks: 'bla' }
    const expectedState = [newTask]

    store.dispatch({ type: 'ADD_TASK', payload: newTask })
    const actualState = store.getState().tasks

    expect(actualState).toEqual(expectedState)
  })

  it('should remove certain task from state', () => {
    const newTask = { id: 1, tasks: 'bla' }
    store.dispatch({ type: 'ADD_TASK', payload: newTask })
    const expectedState = []

    store.dispatch({ type: 'DELETE_TASK', payload: 1 })
    const actualState = store.getState().tasks

    expect(actualState).toEqual(expectedState)
  })
})