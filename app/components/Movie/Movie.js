import React from 'react';
import { browserHistory } from 'react-router'
import { Link } from 'react-router-dom';

const Movie = ({ title, poster, vote, id }) => {
  return (
    <Link
      to={ `/movie/${id}` }
      className='movie-card'>
      <div
        className="movie-card"
        style={ {backgroundImage: `url(https://image.tmdb.org/t/p/w342/${poster})` } }>
      </div>
    </Link>
  )
}

export default Movie;
