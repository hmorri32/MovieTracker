import React, { Component } from 'react';

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
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  }

  createUser(e) {
    e.preventDefault();
    const { name, email, password } = this.state;
    if (!this.validateEmail(email)){
      this.setState({
        error: 'Not a valid email'
      })
      return
    }
    fetch('http://localhost:3000/api/users/new', {
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
        this.props.history.push('/')
      }
    })
  }

  render() {
    return(
      <div>
      <form>
         <input onChange={ (e) => this.setState({ name: e.target.value }) } type="text" name="name" />
         <input onChange={ (e) => this.setState({ email: e.target.value }) } type="text" name="email" />
         <input onChange={ (e) => this.setState({ password: e.target.value }) } type="password" name="password" />
         <input onClick={ (e) => this.createUser(e) } type="submit" name="submit" />
      </form>
      { this.state.error && <h2>{this.state.error}</h2>}
    </div>
    )
  }

}
