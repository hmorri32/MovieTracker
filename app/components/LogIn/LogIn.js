import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      email: 'tman2272@aol.com',
      password: 'password',
      error: ''
    }
  }

  signIn(e) {
    e.preventDefault()

    const { logIn } = this.props
    const { email, password } = this.state;

    fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    .then(response => {
      if(!response.ok) {
        this.setState({
          error: 'invalid credentials'
        });
      }
      else {
        response.json().then(user => logIn(user.data))
        this.props.history.push('/')
      }
    })
  }

  signOut(e) {
    e.preventDefault()
    this.props.logOut()
    this.setState({
      email: '',
      password: '',
      error: ''
    })
  }

  render() {
    return (
      <div>
        {!this.props.user.data ? null : <p>Welcome: {this.props.user.data.name}</p>}
        <form>
          <input
            type='email'
            name='email'
            value={ this.state.email }
            onChange={ (e) => this.setState({ email: e.target.value }) }
            ></input>
          <input
            type='password'
            name='password'
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
            ></input>
          <button onClick={ (e) => this.signIn(e) }></button>
          <button onClick={ (e) => this.signOut(e) }> LOG OUT </button>
        </form>
      </div>
    )
  }
}



export default LogIn;
