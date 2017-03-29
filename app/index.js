import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import MovieGrid from './components/MovieGrid/movieIndex';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './assets/styles/main.css';


const router = (
    <Router history={browserHistory} >
      <Route path='/' component={ App }>
        <IndexRoute component={ MovieGrid } />
      </Route>
    </Router>
)

render(router, document.getElementById('main'))
