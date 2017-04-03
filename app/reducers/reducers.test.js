import {movies} from './reducers.js';
import {user} from './reducers.js';
import {favorites} from './reducers.js';
import {userFavorites} from './reducers.js';


describe('movies reducer', () => {

  const initialState = [];

  it('should return state by default', () => {
    expect(movies(undefined, {})).toEqual(initialState);
  });

  it('should return an array of objects when action is ADD_MOVIES', () => {

    const movie = [
      {
        title: 'beauty and the beast',
        description: 'a really good movie',
        vote: 8
      },
      {
        title: 'the lion king',
        description: 'another goodie',
        vote: 10
      },
    ]

    expect(movies(undefined, {
      type: 'ADD_MOVIES',
      movie
    })).toEqual(movie);
    expect(movie.length).toEqual(2);
  });
});

describe('user reducer', () => {

  const initialUserState = {
    email: '',
    password: '',
    error: ''
  };

  it('should return state by default', () => {
    expect(user(undefined, {})).toEqual(initialUserState);
  });

  it('should return an empty string when action is LOG_OUT', () => {

    const userLogOut = '';

    expect(user(undefined, {
      type: 'LOG_OUT',
      user: ''
    })).toEqual(userLogOut);
  });

  it('should update state with user info when action is LOG_IN', () => {

    const newUser = {
      id: 1,
      name: 'kenia',
      email: 'asdfsdf@sdf.com',
      password: 'sdfsdfsdf',
    }

    expect(user(undefined, {
      type: 'LOG_IN',
      user: newUser
    })).toEqual(newUser);
  });
});

describe('favorites reducer', () => {

  const initialState = [];

  it('should return state by default', () => {
    expect(movies(undefined, {})).toEqual(initialState);
  });

  it('should add movies to the fav array when action is ADD_MOVIE_TO_FAVORITES', () => {

    const favMovie = [
      {
        title: 'beauty and the beast',
        description: 'a really good movie',
        vote: 8
      }
    ]

    expect(favorites(undefined, {
      type: 'ADD_MOVIE_TO_FAVORITES',
      favorites: favMovie
    }))
  });
});

describe('userFavorites reducer', () => {

  const initialState = [];

  it('should return state by default', () => {
    expect(userFavorites(undefined, {})).toEqual(initialState);
  });

  it.skip('should retrieve favorite movies from favmovies array when action is RETRIVE_FAVORITE_MOVIES', () => {

    const favorites = [
      {
        status: 'success',
        message: 'Move was added to favorites',
        id: 23
      }
    ]
    const favMovieArray = [
      {
        id: 23,
        movie_id: 395992,
        user_id: 5,
        title: "Life",
        poster_path: "/h2mhfbEBGABSHo2vXG1ECMKAJa7.jpg",
        release_date: "2017-03-23",
        vote_average: "6.2",
        overview: "The six-member crew"
      }
    ]

    expect(userFavorites(favorites, {
      type: 'RETRIVE_FAVORITE_MOVIES',
      userfavorites: favMovieArray
    }))

  })
});
