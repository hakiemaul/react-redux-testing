export const addTask = (newTask) => {
  return {
    type: 'ADD_TASK',
    payload: newTask
  }
}

export const deleteTask = (taskId) => {
  return {
    type: 'DELETE_TASK',
    payload: taskId
  }
}