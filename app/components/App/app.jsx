import React, { Component } from 'react';
import MovieGrid from '../MovieGrid/MovieGrid'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      recentMovies: []
    }
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=e918cc56cafd311d7955d426f4da1685&language=en-US&page=1')
    .then(response => response.json())
    .then((json) => {
      const recentMovies = json.results
      this.setState({ recentMovies })
    })
  }

  render() {
    return (
      <div>
        <h1>Movie Watcher</h1>
        <MovieGrid />
      </div>
    )
  }
}
