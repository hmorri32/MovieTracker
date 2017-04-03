import React, { Component } from 'react';
import { render } from 'react-dom';

  /******** store ********/
import createHistory from 'history/createBrowserHistory';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';

  /******** router ********/
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';

  /******** files ********/
import { movies, user, favorites, userFavorites } from './reducers/reducers';
import AppContainer from './components/App/AppContainer';
import MovieDetailContainer from './components/MovieDetail/MovieDetailContainer';

  /******** css ********/
import './components/MovieDetail/MovieDetailcss.css';
import './components/Movie/moviecss.css';
import './components/MovieGrid/movieGridcss.css';
import './components/NewUsers/NewUserscss.css';
import './assets/styles/normalize.css';
import './components/LogIn/LogIncss.css';
import './components/App/appcss.css';

const history    = createHistory()
const middleware = routerMiddleware(history)
const devTools   = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const root = combineReducers({
  movies,
  user,
  userFavorites,
  router: routerReducer
})

const store = createStore(root, devTools, applyMiddleware(middleware))

const router = (
  <Provider store={ store }>
    <ConnectedRouter history={ history } >
      <Route path='/' component={ AppContainer } />
    </ConnectedRouter>
  </Provider>
)

render(router, document.getElementById('main'))
