import React from 'react';
import User from './User';

// input: users[]
// output:

const UserList = ({ users })=> {
  return (
    <ul className="users">
      {users.map(user => (
        <User key={user.id} {...user} />
      ))}
    </ul>
  );
};

export default UserList;
