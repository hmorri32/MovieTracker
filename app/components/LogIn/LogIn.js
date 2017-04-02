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

  signIn() {
    console.log("before default");
    // e.preventDefault()
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
        console.log('signInFalse');
        this.setState({
          error: 'Email and Password do not match'
        });
      } else {
        console.log('signInTrue');
        response.json().then((user) => {
          console.log("inside response.json");
          logIn(user.data);
        })
        this.props.history.push('/')
      }
    })
  }

  signOut() {
    // e.preventDefault()
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
      console.log('welcomeUserFalse');
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
            <button id='signin-btn' onClick={ () => this.signIn() }>Log In</button>
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
          <button onClick={ () => this.signOut() }> Log Out </button>
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
