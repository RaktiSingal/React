import React from 'react';
import ReactDOM from 'react-dom/client';

import HeaderComponent from './src/components/Header/HeaderComponent.js';
import BodyComponent from './src/components/Body/BodyComponent.js';

// header -> logo component, nav item, 
// body -> search, cards  -> card
// footer -> copyright and links

// app component
const AppComponent = () => (
    <div className="app">
        <HeaderComponent />
        <BodyComponent />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppComponent />);
