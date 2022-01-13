import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  renfer() {
    return (
      <form class="search">
        <input type="text" class="search__input" />
        <button class="search__button">Search</button>
      </form>
    );
  }
}

export default Search;