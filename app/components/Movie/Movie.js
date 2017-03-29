import React from 'react'

const Movie = ({title, poster, vote}) => {

console.log(poster);
  return (
    <div style={ {backgroundImage: `url(https://image.tmdb.org/t/p/w342/${poster})` } }>
      <h2>{title}</h2>
      <p>{vote}</p>
    </div>
  )
}

export default Movie;
