import React, { Component } from 'react';
import './MovieDetailcss';



export default class MovieDetail extends Component {

  findMovie() {
    return this.props.movies.filter((movie) => movie.id === parseInt(this.props.match.params.id))
  }

  render() {
    const movie = this.findMovie()[0]
    return(
      <div className="movie-div" style={ {backgroundImage: `url(https://image.tmdb.org/t/p/w342/${movie.backdrop_path})` } }>
        <div className='info-div'>
          <p className="title">{ movie.title }</p>
          <p className="description">{ movie.overview }</p>
          <p className="vote">{ movie.vote_average }</p>
          <button className="favorites">Add to Favorites</button>
        </div>
      </div>
    )
  }
}


// <img className="poster" src={`https://image.tmdb.org/t/p/w342/${movie.backdrop_path}`}/>
