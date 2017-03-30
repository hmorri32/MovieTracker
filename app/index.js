import React, { Component } from 'react';
import { render } from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';

import { movies, user } from './reducers/reducers';
import AppContainer from './components/App/AppContainer';
import MovieDetailContainer from './components/MovieDetail/MovieDetailContainer';

import './assets/styles/normalize.css';

const history    = createHistory()
const devTools   = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const middleware = routerMiddleware(history)

const root       = combineReducers({
  movies,
  user,
  router: routerReducer
})

const store = createStore(root, devTools, applyMiddleware(middleware))

const router = (
  <Provider store={store}>
    <ConnectedRouter history={ history } >
      <Route path='/' component={ AppContainer } />
    </ConnectedRouter>
  </Provider>
)

render(router, document.getElementById('main'))

