import React, { Component } from 'react';
import Movie from '../Movie/Movie.js';
import './movieGrid.css';

export default class MovieGrid extends Component {

  render() {
    return (
      <div className="movie-grid">
        {this.props.movies.map((movie, i) => {
          return <Movie
                    title={movie.original_title}
                    poster={movie.poster_path}
                    vote={movie.vote_average}
                    id={movie.id}
                    key={i}/>
       })}
      </div>
    )
  }
}
