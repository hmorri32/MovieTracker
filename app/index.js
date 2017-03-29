import React, { Component } from 'react';
import { render } from 'react-dom';
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';

import { movies } from './reducers/reducers'
import AppContainer from './components/App/AppContainer';
import MovieGrid from './components/MovieGrid/MovieGrid';
import './assets/styles/main.css';

const history    = createHistory()
const devTools   = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const middleware = routerMiddleware(history)

const root       = combineReducers({
  movies,
  router: routerReducer
})

const store = createStore(root, devTools, applyMiddleware(middleware))

const router = (
  <Provider store={store}>
    <ConnectedRouter history={history} >
      <AppContainer />
    </ConnectedRouter>
  </Provider>
)

render(router, document.getElementById('main'))
