import configureMockStore from 'redux-mock-store';
import * as actions from './actions';
import mockMovies from '../helpers/newMoviesStub.json';

const store = configureMockStore()();

const mockUser = {
  data: {
    id: 1,
    name: 'Taylor',
    email: 'tman2272@aol.com',
    password: 'password'
  }
}

describe('LogIn actions', () => {

  afterEach(() => {
    store.clearActions();
  })

  it('creates LOG_IN when initiating the logIn action', () => {

    let expectedAction = { type: 'LOG_IN', user: mockUser.data}

    store.dispatch(actions.logIn(mockUser.data));
    let createdActions = store.getActions();

    expect(createdActions.length).toEqual(1)
    expect(createdActions[0]).toEqual(expectedAction)
  })

  it('creates LOG_OUT when initiating the logOut action', () => {

    let expectedAction = { type: 'LOG_OUT', user:''}

    store.dispatch(actions.logOut());
    let createdActions = store.getActions();

    expect(createdActions.length).toEqual(1)
    expect(createdActions[0]).toEqual(expectedAction)
  })

  it('creates ADD_MOVIES when initiating the logOut action', () => {

    let expectedAction = { type: 'ADD_MOVIES', movie: mockMovies}

    store.dispatch(actions.addMovies(mockMovies));
    let createdActions = store.getActions();

    expect(createdActions.length).toEqual(1)
    expect(createdActions[0]).toEqual(expectedAction)
  })

  it('creates ADD_MOVIE_TO_FAVORITES when initiating the addMovieToFavoties action', () => {

    const mockFav = {
      body: {
        status:"success",
        message:"Movie was added to favorites",
        id:1
      }
    }

    let expectedAction = { type: 'ADD_MOVIE_TO_FAVORITES', movie: mockFav}

    store.dispatch(actions.addMovieToFavorites(mockFav));
    let createdActions = store.getActions();

    expect(createdActions.length).toEqual(1)
    expect(createdActions[0]).toEqual(expectedAction)
  })

})
