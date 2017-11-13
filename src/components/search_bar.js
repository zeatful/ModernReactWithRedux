import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// class based component
class SearchBar extends Component {
  render() {
    // bind the on change event to the onInputChange event handler
    return <input onChange={event => console.log(event.target.value)}/>;
  }
}

export default SearchBar;