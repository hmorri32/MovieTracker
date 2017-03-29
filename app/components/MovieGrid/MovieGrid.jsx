import React, { Component } from 'react';
import Movie from '../Movie/Movie.js';

export default class MovieGrid extends Component {

  render() {
    return (
      <div>
        {this.props.movies.map((movie, i) => {
          return <Movie title={movie.original_title}
                        poster={movie.poster_path}
                        vote={movie.vote_average}
                        key={i}/>
       })}
      </div>
    )
  }
}
