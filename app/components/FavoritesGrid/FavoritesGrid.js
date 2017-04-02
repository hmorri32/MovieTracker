import React, { Component } from 'react'

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

  render() {
    return(
      <div>
        suh dude.
      </div>
    )
  }
}


