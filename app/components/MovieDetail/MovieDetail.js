import React, { Component } from 'react';
// import './MovieDetailcss';
import { Link } from 'react-router-dom';

export default class MovieDetail extends Component {

  callFavApi() {
    const movie = this.findMovie()[0]
    fetch('http://localhost:3000/api/users/favorites/new', {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({
        movie_id: movie.id,
        user_id: this.props.user.id,
        title: movie.title,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
        vote_average: movie.vote_average,
        overview: movie.overview
      })
    })
  }

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
          <p className="vote">
            <span className="detail-category">Rating:</span> { movie.vote_average }
          </p>
          <div className='favorite-wrapper'>
            <button className='favorites' disabled={!this.props.user.name} onClick={ () => this.callFavApi() }>Favorite</button>
            { !this.props.user.name ? <div className="alert-div">
              <p className='sign-in-please'>
                (in order to use this sweet functionality you must be signed in.)
              </p>
              <Link className='sign-in-please' to='/login'>Link To Log-in Page</Link>
            </div> : null }
          </div>
        </div>
      </div>
    )
  }
}
