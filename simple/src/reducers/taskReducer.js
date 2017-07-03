const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload]
    case 'DELETE_TASK':
      const newState = state.filter(task => task.id !== action.payload)
      return newState
    default:
      return state
  }
}