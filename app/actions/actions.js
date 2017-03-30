export const addMovies = (movie) => {
  return {
    type: 'ADD_MOVIES',
    movie
  }
}

export const logIn = (user) => {
  return {
    type: 'LOG_IN',
    user
  }
};