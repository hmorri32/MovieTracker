import React, { Component } from 'react';
import './MovieDetail';



export default class MovieDetail extends Component {

  findMovie() {
    return this.props.movies.filter((movie) => movie.id === parseInt(this.props.match.params.id))
  }

  render() {
    const movie = this.findMovie()[0]
    return(
      <div className="movie-div">
        <img className="poster" src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}/>
        <div className='info-div'>
          <p>{ movie.title }</p>
          <p>{ movie.overview }</p>
          <p>{ movie.vote_average }</p>
        </div>
      </div>
    )
  }
}
