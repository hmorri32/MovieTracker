export const movies = (state = [], action) => {
  switch(action.type){
    case 'ADD_MOVIES':
      return [...state, ...action.movie]
    default:
      return state
  }
};

const initialUserState = {
  email: '',
  password: '',
  error: ''
};

export const user = (state = initialUserState, action) => {
  switch(action.type){
    case 'LOG_IN':
      return action.user;
    case 'LOG_OUT':
      return action.user
    default:
      return state;
  }
};

export const userFavorites = (state=[], action) => {
  switch(action.type) {
    case 'RETRIVE_FAVORITE_MOVIES':
      return [...state, ...action.movie]
    case 'CLEAR_FAVORITE_MOVIES':
      return action.movie
    default:
      return state
  }
};
