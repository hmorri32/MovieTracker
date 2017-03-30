import React from 'react';
import { browserHistory } from 'react-router'
import { Link } from 'react-router-dom';
import './movie.css';

const Movie = ({title, poster, vote}) => {
  return (
    <Link to='/movie-detail' className='movie-card'>
      <div
        className="movie-card"
        style={ {backgroundImage: `url(https://image.tmdb.org/t/p/w342/${poster})` } }>
      </div>
    </Link>
  )
}

export default Movie;
