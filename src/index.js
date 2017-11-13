import React, { Component } from 'react'; // used to create and manage components
import ReactDOM from 'react-dom'; // used to manipulate the DOM
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyBwpPCSpfbb7ihQJe02ci1Ab__fVRow9Z4';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, videos => {
      // ES6, if key and property are same variable name, reduces to just the key
      this.setState({ videos });
    });
  }
  
  // pass videos property to property list
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated HTML and display it 
// on the page (put it in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));