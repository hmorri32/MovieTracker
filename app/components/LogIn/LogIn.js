import React, { Component } from 'react'
import { Link }             from 'react-router-dom';
// import './Logincss'


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
    console.log('signin');
    const { logIn } = this.props
    const { email, password } = this.state;

    fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    .then(response => {
      if(!response.ok) {
        console.log('signIn');
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
    console.log('signOut');
    this.setState({
      email: '',
      password: '',
      error: ''
    })
    console.log('signOut2');
  }

  welcomeUser(){
    if(!this.props.user.name) {
      console.log('welcomeUser');
    return (
      <div className='login-page'>
        <div className='form'>
          <div className='login-form'>
            <input
              type='text'
              name='email'
              placeholder='username'
              value={ this.state.email }
              onChange={ (e) => this.setState({ email: e.target.value }) }
              />
            <input
              type='password'
              name='password'
              placeholder='password'
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
              />
            <button onClick={ (e) => this.signIn(e) }>Log In</button>
            <p className="message">Not registered? <Link to="/signup"><button> Sign Up</button></Link></p>
          </div>
          { this.state.error && <h2 className='error'>{this.state.error}</h2>}
        </div>
      </div>
      )
    }
    if (this.props.user.name) {
      console.log('welcomeTrue');
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
