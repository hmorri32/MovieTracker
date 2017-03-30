import React from 'react';
import '../../assets/styles/movie.css';

const Movie = ({title, poster, vote}) => {

console.log(poster);
  return (
    <div className="movie-card" style={ {backgroundImage: `url(https://image.tmdb.org/t/p/w342/${poster})` } }>
      <h2 className="movie-title">{title}</h2>
      <p className="movie-vote">{vote}</p>
    </div>
  )
}

export default Movie;
