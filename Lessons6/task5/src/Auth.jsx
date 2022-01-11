import React from "react";
import Spinner from "./Spinner";
import { Component } from "react";
import Logout from "./Logout";
import Login from "./Login";

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isState: true
    }
  }

  handelLogin = () => {
    this.setState({
      isState: false,
    });
  };

  handelLoguot = () => {
    this.setState({
      isState: true,
    });
  };

  render() {
    return (
      <>
      {this.state.isState ? (
        <Login onLogin={this.handelLogin}/>
      ) : (
        <Logout onLogout={this.handelLoguot}/>
      )
      }
      </>
    );
  }
}

export default Auth;