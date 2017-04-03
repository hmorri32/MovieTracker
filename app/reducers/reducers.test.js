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
  });
});

describe('user reducer', () => {

  const initialState = {
    email: '',
    password: '',
    error: ''
  };

  it('should return state by default', () => {
    expect(user(undefined, {})).toEqual(initialState);
  });

  it('should return to the intial state when action is LOG_OUT', () => {

    expect(user({
      email: 'blah',
      password: 'blahblah',
      error: ''
    }, {
      type: 'LOG_OUT',
    })).toEqual(initialState);
  });
});
