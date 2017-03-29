

export const movies = (state = [], action) => {
  console.log('inside reducer', action);
  switch(action.type){
    case 'ADD_MOVIES':
      return [...state, action.movie]

    default:
      return state
  }
}
