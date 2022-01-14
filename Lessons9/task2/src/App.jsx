import React, { Component } from 'react';
import './index.scss';
import UserForm from './UserForm';

class App extends Component {
  createUser = user => {
    event.preventDefault();
    console.log(user);
  };

  render() {
    return (
      <>
        <UserForm onSubmit={this.createUser} />
      </>
    );
  }
}

export default App;
