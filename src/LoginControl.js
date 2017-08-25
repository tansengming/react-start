import React, { Component } from 'react';

class LoginControl extends Component {
  constructor(props) {
    super(props)
    this.state = { loggedIn: false }
    this.toggleLogin = this.toggleLogin.bind(this);
  }

  toggleLogin() {
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn
    }))
  }

  render() {
    return ( this.state.loggedIn ? (
        <LogoutButton onClick={this.toggleLogin} />
      ) : (
        <LoginButton onClick={this.toggleLogin} />
      )
    )
  }
}

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>
}

export default LoginControl
