import React, { Component } from 'react';
import './styles.scss';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    })
  }

  search = (event) => {
    event.preventDefault();
    alert(`Search text: ${this.state.value}`);
    // this.setState({
    //   value: '',
    // })
  }

  render() {
    return (
      <form 
      className="search" 
      onSubmit={this.search}
      >
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
          className="search__input"
        />
        <button 
        className="search__button" 
        type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default Search;
