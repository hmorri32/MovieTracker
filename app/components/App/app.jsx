import React, { Component } from 'react';
import MovieGridContainer from '../MovieGrid/MovieGridContainer'

export default class App extends Component {
  constructor() {
    super();

  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=e918cc56cafd311d7955d426f4da1685&language=en-US&page=1')
    .then(response => response.json())
    .then((json) => {
      let movies = json.results
      console.log(movies);
      this.props.addMovies(movies)
    })
  }

  render() {
    return (
      <div>
        <h1>Movie Watcher</h1>
        <MovieGridContainer />
      </div>
    )
  }
}
