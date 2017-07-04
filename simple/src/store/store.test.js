import store from './index'

describe('Store testing', () => {
  it('should get tasks initial tasks state', () => {
    const expectedState = [{ id: 1, tasks: 'Thunder Talk' }]
    const actualState = store.getState().tasks

    expect(actualState).toEqual(expectedState)
  })

  it('should add new task to tasks state', () => {
    const newTask = { id: 2, tasks: 'bla' }
    const expectedState = [{ id: 1, tasks: 'Thunder Talk' }, newTask]

    store.dispatch({ type: 'ADD_TASK', payload: 'bla' })
    const actualState = store.getState().tasks

    expect(actualState).toEqual(expectedState)
  })

  it('should remove certain task from state', () => {
    const expectedState = [{ id: 1, tasks: 'Thunder Talk' }]

    store.dispatch({ type: 'DELETE_TASK', payload: 2 })
    const actualState = store.getState().tasks

    expect(actualState).toEqual(expectedState)
  })
})