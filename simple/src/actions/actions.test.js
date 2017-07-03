import * as actions from './index'

describe('Actions testing', () => {
  it('should create an ADD_TASK action', () => {
    const newTask = {
      id: 1,
      tasks: 'Abal abal'
    }
    const expectedAction = {
      type: 'ADD_TASK',
      payload: newTask
    }
    const actualAction = actions.addTask(newTask)

    expect(actualAction).toEqual(expectedAction)
  })

  it('should create a DELETE_TASK action', () => {
    const deletedTaskId = 1
    const expectedAction = {
      type: 'DELETE_TASK',
      payload: deletedTaskId
    }
    const actualAction = actions.deleteTask(deletedTaskId)

    expect(actualAction).toEqual(expectedAction)
  })
})