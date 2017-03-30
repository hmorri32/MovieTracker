import React from 'react';
import '../../assets/styles/movie.css';
import { browserHistory } from 'react-router'


const Movie = ({title, poster, vote}) => {

console.log(poster);
  return (

      <div
        onClick={ () => browserHistory.push('/movie-detail') }
        className="movie-card"
        style={ {backgroundImage: `url(https://image.tmdb.org/t/p/w342/${poster})` } }>

      </div>
  )
}

export default Movie;
