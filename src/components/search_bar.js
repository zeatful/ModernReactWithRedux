import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// class based component
class SearchBar extends Component {
  // initialize state for a class based component (only class components have state)
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    // bind the on change event to the onInputChange event handler
    return <input onChange={event => this.setState({ term: event.target.value })}/>;
  }
}

export default SearchBar;