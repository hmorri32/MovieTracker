import React from 'react';
import '../../assets/styles/movie.css';
import {Link} from 'react-router-dom';

const Movie = ({title, poster, vote}) => {

console.log(poster);
  return (
    <div className="movie-card" style={ {backgroundImage: `url(https://image.tmdb.org/t/p/w342/${poster})` } }>
    </div>
  )
}

export default Movie;
