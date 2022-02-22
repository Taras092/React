import React, { Component } from 'react';
import Pagination from './Pagination';
import UserList from './UserList';

class App extends Component {
  state = {
    pageNumber: 1,
  };

  prevBtnHandler = () => {
    this.setState({
      pageNumber: this.state.pageNumber - 1,
    })
  };

  nextBtnHandler = () => {
        this.setState({
          pageNumber: this.state.pageNumber + 1,
        });
  };

  render() {
    const { pageNumber } = this.state;
    const itemPerpage = 3;

    const startIndex = (pageNumber - 1) * itemPerpage;
    const endindex = startIndex + itemPerpage;
    const userToRender = this.props.users.slice(startIndex, endindex);


    return (
      <div>
        <Pagination
          pageNumber={this.state.pageNumber}
          onPrevBtn={this.prevBtnHandler}
          onNextBtn={this.nextBtnHandler}
          usersCount={10}
          itemsPerPage={3}
        />
        <UserList users={userToRender} />
      </div>
    );
  }
}

export default App;
