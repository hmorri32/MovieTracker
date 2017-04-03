import React, { Component } from 'react';
import Movie from '../Movie/Movie.js';

export default class MovieGrid extends Component {

  render() {
    const { movies } = this.props
    return (
      <div className="movie-grid">
        {movies.map((movie, i) => {
          return <Movie
                    title={ movie.original_title }
                    poster={ movie.poster_path }
                    vote={ movie.vote_average }
                    id={ movie.id }
                    key={ i }
                    />
       })}
      </div>
    )
  }
}
