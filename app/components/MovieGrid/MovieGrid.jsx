import React, { Component } from 'react';
import Movie from '../Movie/Movie.js'

export default class MovieGrid extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Movie />
      </div>
    )
  }
}
