import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Movie from '../Movie/Movie';


export default class FavoritesGrid extends Component {

  componentDidMount() {
    if(this.props.user !== undefined) {
      fetch(`http://localhost:3000/api/users/${this.props.user.id}/favorites`)
      .then(response => response.json())
      .then((json) => {
        let movieArray = json.data
        this.props.retrieveFavoriteMovies(movieArray)
      })
    }
  }

  componentWillUnmount() {
    this.props.clearMovies()
  }

  render() {
    return(
      <div className="movie-grid">
        {this.props.userFavorites.map((movie, i) => {
          return (
            <Link to={`/favorites/${movie.id}`} className='movie-card'>
              <div
                className="movie-card"
                key={ i }
                style={ {backgroundImage: `url(https://image.tmdb.org/t/p/w342/${movie.poster_path})` } }>
              </div>
            </Link>
          )
       })}
      </div>
    )
  }
}


