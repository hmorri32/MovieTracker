import React, { Component } from 'react';


export default class FavoritesDetail extends Component {

  findMovie() {
    return this.props.userFavorites.filter(movie => parseInt(this.props.match.params.movieid) === movie.movie_id)
  }

  render(){
    const movie2 = this.findMovie()[0]
    return(
      <div>
          <p className="title">{ movie2.title }</p>
          <p className="description">{ movie2.overview }</p>
          <p className="vote">{ movie2.vote_average }</p>
      </div>
    )
  }
}
