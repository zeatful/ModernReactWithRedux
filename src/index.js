import React, { Component } from 'react'; // used to create and manage components
import ReactDOM from 'react-dom'; // used to manipulate the DOM
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBwpPCSpfbb7ihQJe02ci1Ab__fVRow9Z4';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term){
    YTSearch({ key: API_KEY, term: term }, videos => {
      // ES6, if key and property are same variable name, reduces to just the key
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  
  // pass videos property to video list
  render() {
    // debounce returns a new function that wraps the supplied which can only be called every 300 milliseconds
    const videoSearch = _.debounce(term => { this.videoSearch(term)}, 300);
    
    return (
      <div>
        <SearchBar onSearchTermChange={ videoSearch }/>
        <VideoDetail video={ this.state.selectedVideo }/>
        <VideoList 
          onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
          videos={ this.state.videos } />
      </div>
    );
  }
}

// Take this component's generated HTML and display it 
// on the page (put it in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));