import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './components/App/app.jsx';
import MovieGrid from './components/MovieGrid/MovieGrid';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './assets/styles/main.css';


const router = (
  <Router history={browserHistory} >
    <Route path='/' component={ App }>
    </Route>
  </Router>
)

render(router, document.getElementById('main'))
