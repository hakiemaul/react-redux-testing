const initialState = [{ id: 1, tasks: 'Thunder Talk' }]

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      var latestId = 0
      if (state.length > 0) {
        latestId = state[state.length - 1].id + 1
      } else latestId = 1
      return [...state, { id: latestId, tasks: action.payload }]
    case 'DELETE_TASK':
      const newState = state.filter(task => task.id !== action.payload)
      return newState
    default:
      return state
  }
}