import React from 'react'; // used to create and manage components
import ReactDOM from 'react-dom'; // used to manipulate the DOM

// ./ represents current directory
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCdV0TbjirYmfYre-nYFgc4Wz-8xSFKqBk';

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