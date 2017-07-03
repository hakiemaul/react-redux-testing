const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload]
      break;
    case 'DELETE_TASK':
      const newState = state.filter(task => task.id !== action.payload)
      return newState
      break;
    default:
      return state
  }
}