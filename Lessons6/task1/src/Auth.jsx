import React from "react";
import Greeting from "./Greeting";
import { Component } from "react";
import Logout from "./Logout";
import Login from "./Login";

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  handelLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  handelLoguot = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  // render() {
  //   const { isLoggedIn } = this.state;
  //   let button;

  //   if (isLoggedIn) {
  //     button = <Logout onLogout={this.handleLogoutClick} />;
  //   } else {
  //     button = <Login onLogin={this.handleLoginClick} />;
  //   }

  //   return (
  //     <div className="panel">
  //       <Greeting isLoggedIn={isLoggedIn} />
  //       {button}
  //     </div>
  //   );
  // }

  render() {
    // const button = this.state.isLoggedIn ? (
    //   <button onClick={this.handelLoguot}>Logout</button>
    // ) : (
    //   <button onClick={this.handelLogin}>Login</button>
    // );

    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn ? (
          <Logout onClick={this.handelLoguot}/>
        ) : (
          <Login onClick={this.handelLogin}/>
        )}
      </div>
    );
  }
}

export default Auth;
