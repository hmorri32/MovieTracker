import React, { Component }     from 'react';
import { Route }                from 'react-router-dom';
import { Link }                 from 'react-router-dom';

import MovieGridContainer       from '../MovieGrid/MovieGridContainer';
import NewUserContainer         from '../NewUsers/NewUserContainer';
import MovieDetailContainer     from '../MovieDetail/MovieDetailContainer';
import LogInContainer           from '../LogIn/LogInContainer.js';
import FavoritesGridContainer   from '../FavoritesGrid/FavoritesGridContainer.js';
import FavoritesDetailContainer from '../FavoritesDetail/FavoritesDetailContainer.js';


export default class App extends Component {

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=e918cc56cafd311d7955d426f4da1685&language=en-US&page=1')
    .then(response => response.json())
    .then((json) => {
      let movies = json.results
      this.props.addMovies(movies)
    })
  }

  signOut() {
    this.props.logOut()
  }

  render() {
    const { name, id } = this.props.user
    const { history } = this.props

    return (
      <div>
        <header className='header-wrap'>
          <Link className='movie-watcher-h1' to='/'>
            <h1>Movie
              <span className='movie-watcher-span'>Watcher</span>
            </h1>
            { name != undefined ? <h3>Welcome { name }</h3> : null  }
          </Link>
          { name === undefined ? <Link className='sign-in' to='/login'><h2>Log In</h2></Link> : <h2 className='sign-in' onClick={ () => this.signOut() }> Log Out </h2> }
          { name != undefined ? <Link className='favorites-link' to={`/${id}/favorites`}><h2>Favorites</h2></Link> : null }
        </header>
        <Route
          exact path='/'
          render={ () => <MovieGridContainer />}/>
        <Route
          exact path='/signup'
          component={ NewUserContainer }/>
        <Route
          exact path='/login'
          render={ () => <LogInContainer history={ history } /> }/>
        <Route
          exact path='/movie/:id'
          render={({ match }) =>
            <MovieDetailContainer match={ match }/>
          }/>
        <Route
          exact path='/:userid/favorites/:movieid'
          render={({ match }) =>
            <FavoritesDetailContainer match = { match }/>
          }/>
        <Route
          exact path='/:id/favorites'
          component={ FavoritesGridContainer }/>
      </div>
    )
  }
}
