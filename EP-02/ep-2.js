import React from 'react';
import ReactDOM from 'react-dom/client';

let heading = React.createElement('h1', {}, "Hello react");

//creating heading with some attributes
heading = React.createElement('h1', {}, "Hello react"); // returns an object
let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);
