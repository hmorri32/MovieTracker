import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Movie from '../Movie/Movie';


export default class FavoritesGrid extends Component {

  componentDidMount() {
    if(this.props.user) {
      fetch(`http://localhost:3000/api/users/${this.props.user.id}/favorites`)
      .then(response => response.json())
      .then(json => {
        let movieArray = json.data;
        let reduced = movieArray.reduce((arr, obj) => {
          const duplicate = arr.find(stuff => obj.movie_id === stuff.movie_id)
          if(!duplicate) {
            arr.push(obj)
          }
          return arr
        }, [])
        this.props.retrieveFavoriteMovies(reduced)
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
            <Link to={`/${this.props.user.id}/favorites/${movie.movie_id}`}
                  className='movie-card'
                  key={ i }>
              <div className="movie-card"
                   style={ {backgroundImage: `url(https://image.tmdb.org/t/p/w342/${movie.poster_path})` } }>
              </div>
            </Link>
          )
       })}
      </div>
    )
  }
}
