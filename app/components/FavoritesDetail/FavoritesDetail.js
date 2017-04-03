import React, { Component } from 'react';


export default class FavoritesDetail extends Component {

  findMovie() {
    return this.props.userFavorites.filter(movie => parseInt(this.props.match.params.movieid) === movie.movie_id)
  }

  render(){
    const movie2 = this.findMovie()[0]
    return(
      <div className="movie-div" style={ {backgroundImage: `url(https://image.tmdb.org/t/p/w342/${movie2.poster_path})` } }>
        <div className='info-div'>
          <p className="title">{ movie2.title }</p>
          <p className="description">{ movie2.overview }</p>
          <p className="vote">{ movie2.vote_average }</p>
          <button className="favorites">Delete Favorite</button>
        </div>
      </div>
    )
  }
}
