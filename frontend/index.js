import React, { Component } from 'react';

import { NavLink, Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    }
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    if(this.props.isLoggedIn) {
      return <Redirect path="/" />
    }
    return(
      <form onSubmit={(e) => this.props.handleLogin(e, this.state)}>
        <div className="container">
          <h1>Login</h1>
          <p>Please fill in this form to login to your account.</p>

          <label htmlFor="username"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="username" id="username" value={this.state.username} onChange={this.handleInput} required/>

          <label htmlFor="email"><b>Email</b></label>
          <input type="email" placeholder="Enter Email" name="email" id="email" value={this.state.email} onChange={this.handleInput} required/>

          <label htmlFor="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" id="password" value={this.state.password} onChange={this.handleInput} required/>

          <p>By creating an account you agree to our <a href="/">Terms & Privacy</a>.</p>
          <button type="submit" className="registerbtn">Login</button>
        </div>

        <div className="container signin">
          <p>Don't have an account? <NavLink to="/register">Sign up</NavLink>.</p>
        </div>
      </form>
    )
  }

}

export default Login;
