import React from 'react'; // used to create and manage components
import ReactDOM from 'react-dom'; // used to manipulate the DOM
import YTSearch from 'youtube-api-search';

// ./ represents current directory
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBwpPCSpfbb7ihQJe02ci1Ab__fVRow9Z4';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
  console.log(data);
});

// React Term: Downwards Dataflow, means the parent component should manage data
// this is a functional based component
// create a new component, This component should produce some html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and display it 
// on the page (put it in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));