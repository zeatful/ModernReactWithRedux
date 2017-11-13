import React from 'react'; // used to create and manage components
import ReactDOM from 'react-dom'; // used to manipulate the DOM

// create a new component, This component should produce some html
const App = function() {
  return <div>Hi!</div>;
}

// Take this component's generated HTML and display it 
// on the page (put it in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
