import taskReducer from './taskReducer'

describe('taskReducer testing', () => {
  it('should return initial tasks state', () => {
    const initialState = []

    const expectedState = initialState
    const actualState = taskReducer(initialState, {})

    expect(actualState).toEqual(expectedState)
  })

  it('should add new task to state', () => {
    const initialState = []
    const newTask = {
      id: 1,
      tasks: 'Bla'
    }
    const action = {
      type: 'ADD_TASK',
      payload: newTask
    }

    const expectedState = [...initialState, newTask]
    const actualState = taskReducer(initialState, action)

    expect(actualState).toEqual(expectedState)
  })

  it('should remove task from state', () => {
    const initialState = [{ id: 1, tasks: 'Bla' }]
    const action = {
      type: 'DELETE_TASK',
      payload: 1
    }

    const expectedState = []
    const actualState = taskReducer(initialState, action)

    expect(actualState).toEqual(expectedState)
  })
})