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

export const logOut = () => {
  return {
    type: 'LOG_OUT',
    user: ''
  }
};

export const addMovieToFavorites = (movie) => {
  return {
    type: 'ADD_MOVIE_TO_FAVORITES',
    movie
  }
};

export const retrieveFavoriteMovies = (movie) => {
  return {
    type: 'RETRIVE_FAVORITE_MOVIES',
    movie
  }
};

export const clearMovies = () => {
  return {
    type: 'CLEAR_FAVORITE_MOVIES',
    movie: []
  }
}
