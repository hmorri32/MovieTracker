import React, { Component } from 'react';
import { Link }                 from 'react-router-dom';


export default class FavoritesDetail extends Component {

  findMovie() {
    const { userFavorites } = this.props
    const { movieid } = this.props.match.params

    return userFavorites.filter(movie => parseInt(movieid) === movie.movie_id)
  }

  deleteFavorite() {
    const { userid, movieid } = this.props.match.params;
    fetch(`http://localhost:3000/api/users/${userid}/favorites/${movieid}`,{
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      id: movieid
    })
  }

  render() {
    const movie2 = this.findMovie()[0]
    return(
      <div className="movie-div"
           style={ {backgroundImage: `url(https://image.tmdb.org/t/p/w342/${movie2.poster_path})` } }>
        <div className='info-div'>
          <p className="title">{ movie2.title }</p>
          <p className="description">{ movie2.overview }</p>
          <p className="vote"><span className="detail-category">Rating:</span> { movie2.vote_average }</p>
          <Link to={`/${this.props.user.id}/favorites`}>
            <button onClick={() => this.deleteFavorite()} className="favorites">Delete Favorite</button>
          </Link>
        </div>
      </div>
    )
  }
}
