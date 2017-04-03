import React, { Component } from 'react';


export default class FavoritesDetail extends Component {

  findMovie() {
    return this.props.userFavorites.filter(movie => movie.id === parseInt(this.props.match.params.id))
  }

  render(){
    const movie = this.findMovie()
    console.log(movie);
    return(
      <div className="movie-div" style={ {backgroundImage: `url(https://image.tmdb.org/t/p/w342/${movie.backdrop_path})` } }>
        <div className='info-div'>
          <p className="title">{ movie.title }</p>
          <p className="description">{ movie.overview }</p>
          <p className="vote">{ movie.vote_average }</p>
        </div>
      </div>
    )
  }
}
