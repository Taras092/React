import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

// algo
// 1.show Login by default
// 2. after login click - show Spinner for 2 seconds
// 3. after 2 seconds - show logout
// 4. after logout click - show login

class Auth extends Component {
  // isLoggedIn: boolean
  // isLoggin: boolean

  constructor(props) {
    super(props);

    this.state = {
      isLoadding: false,
      isLoggedIn: false,
    };
  }

  handleLoginClick = () => {
    this.setState({
      isLoadding: true,
    });
    setTimeout(() => {
      this.setState({
        isLoadding: false,
        isLoggedIn: true,
      });
    }, 2000);
  };

  handleLogoutClick = () => {
    this.setState({
      isLoggedIn: false,
    })
  }

  render() {
    const { isLoadding, isLoggedIn } = this.state;

    if (isLoadding) {
      return <Spinner />;
    }

    if (isLoggedIn) {
      return <Logout onLogout={this.handleLogoutClick}/>;
    }
    return <Login onLogin={this.handleLoginClick} />;
  }
}

export default Auth;

// REACT APPROACH
// 0. make a layout
// 1. split acomponents
// 2. static version in React
// 3. declare state and props
// 4. write logic
