import React from "react";
import Spinner from "./Spinner";
import { Component } from "react";
import Logout from "./Logout";
import Login from "./Login";

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoadding: false,
      isLoggedIn: false
    }
  }

  handelLogin = () => {
    this.setState({
      isLoadding: true,
    });
    setTimeout(() => {
      this.setState({
        isLoadding: false,
        isLoggedIn: true
      })
    }, 2000)
    // await login();
    // this.setState({
    //   isLoadding: false,
    //   isLoggedIn: true
    // })
  };

  handelLoguot = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const { isLoggedIn, isLoadding } = this.state;
    if(isLoadding) {
      return <Spinner size={100}/>
    }
    if(isLoggedIn) {
      return <Logout onLogout={this.handelLoguot}/>
    }
    return <Login onLogin={this.handelLogin}/>
  }
}

// async function login() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       return resolve();
//     }, 2000)
//   })
// } 

export default Auth;