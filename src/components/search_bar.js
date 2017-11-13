import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// class based component
class SearchBar extends Component {
  // initialize state for a class based component (only class components have state)
  constructor(props) {
    super(props);

    // state is ONLY ever manually updated in a constructor
    this.state = { term: '' }; // can use this to set a default value / state
  }

  render() {
    // bind the on change event to the onInputChange event handler
    // always update state using setState
    // value set by state makes a controlled component, the value only updates when state changes
    // a controlled component always us to avoid using jquery to update elements
    return (
      <div>
        <input 
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}/>
        <br/>
        Value of the input: {this.state.term}
      </div>
    );
  }
}

export default SearchBar;