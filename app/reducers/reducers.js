export const movies = (state = [], action) => {
  switch(action.type){
    case 'ADD_MOVIES':
      return [...state, ...action.movie]
    default:
      return state
  }
}


export const user = (state = [], action) => {
  switch(action.type){
    case 'LOG_IN':
      return action.user;
    case 'LOG_OUT':
      return action.user
    default:
      return state;
  }
};