import configureMockStore from 'redux-mock-store';
import * as actions from './actions';

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

  it.only('creates LOG_IN when initiating the logIn action', () => {

    let expectedAction = { type: 'LOG_IN', user: mockUser.data}

    store.dispatch(actions.logIn(mockUser.data));
    let createdActions = store.getActions();

    expect(createdActions.length).toEqual(1)
    expect(createdActions[0]).toEqual(expectedAction)
  })

  it.only('creates LOG_OUT when initiating the logOut action', () => {

    let expectedAction = { type: 'LOG_OUT', user:''}

    store.dispatch(actions.logOut());
    let createdActions = store.getActions();

console.log(createdActions);
    expect(createdActions.length).toEqual(1)
    expect(createdActions[0]).toEqual(expectedAction)
  })

})
