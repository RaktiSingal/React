let heading = React.createElement('h1', {}, "Hello react");

//creating heading with some attributes
heading = React.createElement('h1', {style: {color: "red"}}, "Hello react");
let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);



// create nested elements in React 

/*

<div id="parent1">
    <div id="parent2">
        <span id="child">
            <p>hi this is my paragraphh</p>
        </span>
    </div>
</div>
*/

let nestedElements = React.createElement(
    "div",
    {id: "parent1"},
    React.createElement(
        "div",
        {id: "parent2"},
        React.createElement(
            "span",
            {id: "child"},
            React.createElement(
                "p",
                {},
                "hi this is a pargraph"
            )
        )
    )
);

root = ReactDOM.createRoot(document.getElementById("root"));

root.render(nestedElements);

// create one element with 2 child elements

/*
    <div id="parent">
        <h1> H1 heading</h1>
        <h2> H2 Heading</h2>
    </div>

*/

let multipleChild = React.createElement(
    "div",
    {id: "parent"},
    [
        React.createElement("h1", {}, "H1 Heading"),
        React.createElement("h2", {}, "h2 tag")
    ]
);

root.render(multipleChild);

