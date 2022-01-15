import React, { Component } from 'react';
import User from './User';
import './index.scss';
import Filter from './Filter';

class UserList extends Component {
  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    let usersList = this.props.users;
    const newUserList = usersList.filter(user => {
      if (user.name.toLowerCase().includes(this.state.value.toLowerCase())) {
        return user;
      }
    });

    return (
      <div>
        <Filter
          filterText={this.state.value}
          count={newUserList.length}
          onChange={this.handleChange}
        />
        <ul className="users">
          {newUserList.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;
