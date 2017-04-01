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

  createUser(e) {
    e.preventDefault();
    const { name, email, password } = this.state;
    fetch('http://localhost:3000/api/users/new', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    })
    .then(response => {
      if(!response.ok) {
        this.setState({
          error: 'Email already exists'
        });
      } else {
        this.props.history.push('/')
      }
    })
  }

  render(){
    return(
      <form>
         <input onChange={ (e) => this.setState({ name: e.target.value }) } type="text" name="name" />
         <input onChange={ (e) => this.setState({ email: e.target.value }) } type="text" name="email" />
         <input onChange={ (e) => this.setState({ password: e.target.value }) } type="password" name="password" />
         <input onClick={ (e) => this.createUser(e) } type="submit" name="submit" />
      </form>
    )
  }

}
