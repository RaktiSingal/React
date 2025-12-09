import React from 'react';
import ReactDOM from 'react-dom/client';

// let heading = React.createElement('h1', {}, "Hello react"); // returns an object



//JSX (Javascript xml) - HTML syntax
const jsxHeading = <h1> Hi i am created by jsx</h1>; // contains same object as React.createElement
// this is not understood by browser
// parcel  (acts as manager to) -> Babel (package) transpiled (converted to code that React/JS understand) before it reaches JS engine



let root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading); // returns an html and replaces the existing



root.render(jsxHeading); // works same as upper line



// Components -> class and function components
//class component -> old
// function component -> new


// functional component -> function that returns react component

const headingFunctional1 = () => {
    return <h1> This is functional component</h1>;
};

// React Component VS React Element

// react component
const HeadingFunctional2 = () => (
    <div id = "parent">
        <span>Hi am span</span>
        <h1>test for new syntax via component</h1>
    </div>
);

// react element
const headingElement = (
    <div id = "parent">
        <span>Hi am span</span>
        <h1>test for new syntax via element</h1>
    </div>
);


//render a component
root.render(<HeadingFunctional2/>);

//render an element
root.render(headingElement);



// render comp1 inside comp2 -> Component composition

const Comp1 = () => (
    <div> Hi i am comp 1</div>
);

const Comp2 = () => (
    <div>
        Inside comp 2 currently
        <Comp1 />
    </div>
);

root.render(<Comp2 />);

// Render an element inside an component

const element2 = (
    <div>Hi am elmeent to be rendered inside component</div>
);

const ComponentWithElement = () => (
    <div>
        I am a compoent trying to render an element
        {element2}
    </div>
);

root.render(<ComponentWithElement />);


//render compoent inside an element

const number = 800000000;

const ComponentInsideElement = () => (
    <div>
        I am a compoent trying to be render inside an element {number}
    </div>
);

const element3 = (
    <div> 
        i AM element with compoenent inside me 
        <ComponentInsideElement />
    </div>
);

root.render(element3);


//rendering component inside component/element 3 ways

const Title = () => (
    <div> I am component</div>
);

const element = (
    <div>
        i am element {45 + 10000}
        {Title()}
        <Title />
        <Title></Title>
    </div>
)

const Component5 = () => (
    <div>
        i am component {4589 + 10000}
        {Title()}
        <Title />
        <Title></Title>
    </div>
)

root.render(element);
root.render(<Component5 />);



