import React, { Component } from 'react';
import { render } from 'react-dom';
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';

import * as reducers from './reducers/reducers'
import App from './components/App/app.jsx';
import MovieGrid from './components/MovieGrid/MovieGrid';
import './assets/styles/main.css';

const history    = createHistory()
const devTools   = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const middleware = routerMiddleware(history)

const root       = combineReducers({
  router: routerReducer
})

const store = createStore(root, devTools, applyMiddleware(middleware))

const router = (
  <Provider store={ store}>
    <ConnectedRouter history={history} >
      <App />
    </ConnectedRouter>
  </Provider>
)

render(router, document.getElementById('main'))

