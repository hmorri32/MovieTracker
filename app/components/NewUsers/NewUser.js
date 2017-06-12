import React, { Component } from 'react';
// import './NewUserscss'

export default class NewUser extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      error: ''
    }
  }

  validateEmail(email) {
    const checkIt = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return checkIt.test(email);
  }

  createUser(e) {
    e.preventDefault()
    const { name, email, password } = this.state;
    if (!this.validateEmail(email)){
      return this.setState({
        error: 'Not a valid email'
      })
    }
    fetch('/api/users/new', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    })
    .then(response => {
      if(!response.ok) {
        this.setState({
          error: 'Email has already been used'
        });
      } else {
        this.props.history.push('/login')
      }
    })
  }

  render() {
    return(
      <div className='login-page'>
        <div className='form'>
          <form>
            <input type="text"
                   name="name"
                   placeholder='name'
                   onChange={ (e) => this.setState({ name: e.target.value }) }
              />
            <input type="text"
                   name="email"
                   placeholder='email'
                   onChange={ (e) => this.setState({ email: e.target.value }) }
              />
            <input type="password"
                   name="password"
                   placeholder='password'
                   onChange={ (e) => this.setState({ password: e.target.value }) }
              />
            <button name="submit"
                    onClick={ (e) => this.createUser(e) } > Submit
            </button>
          </form>
          { this.state.error && <h2 className='error'>{this.state.error}</h2>}
        </div>
      </div>
    )
  }
}
