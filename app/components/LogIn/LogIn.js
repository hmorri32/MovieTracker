import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: ''
    }
  }

  signIn(e) {
    e.preventDefault()
    console.log(this.props);
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
        response.json().then(user => logIn(user))
      }
    })
  }

  
  render(){
    return (
      <div>
        <form>
          <input
            type='email'
            name='email'
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
            ></input>
          <input
            type='password'
            name='password'
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
            ></input>
          <button onClick={ (e) => this.signIn(e) }></button>
        </form>
      </div>
    )
  }
}



export default LogIn;