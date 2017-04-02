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
          error: 'Email and Password do not match'
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

  welcomeUser(){
    if(!this.props.user.name) {
    return (
      <div>
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
          <button onClick={ (e) => this.signIn(e) }>Log In</button>
          <Link to="/signup"><button> Sign Up</button></Link>
        </form>
        { this.state.error && <h2>{this.state.error}</h2>}
      </div>
      )
    }
    if (this.props.user.name) {
      return (
        <div>
          <p>Welcome {this.props.user.name}</p>
          <button onClick={ (e) => this.signOut(e) }> Log Out </button>
        </div>
      )
    }

  }

  render() {
    return (
      <div>
        { this.welcomeUser() }
      </div>
    )
  }
}



export default LogIn;
