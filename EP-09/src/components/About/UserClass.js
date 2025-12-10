import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)

        // state variables

        // function componenets are defined like
        // const [count1] = useState(1);
        // in case of class based component
        this.state = {
            count:1,
            count4: 56
        };
        //updating state variables

        // function -> setCount(3);
        // class based component
        //this.setState({})

    }

    // executed after render
    componentDidMount() {
        console.log('in compomnent did mount');
        // api calls happen here
    }

    componentDidUpdate() {
        // comes here after api call has rendered new ui
    }


    componentWillUnmount() {
        // executed after this ui componenet is removed from ui (like page change)
    }

    render() {
        return (
            <div>
                <div>Hi i am user class {this.props?.name}</div>
                <div>Count : {this.state.count}</div>
                <button
                    className="filter-btn"
                    type="button"
                    onClick={() => {
                        // in react
                        this.setState({
                            count: this.state.count + 1 
                        });
                    }}
                >
                    Increase count
                </button>
            </div>
        );
    }
}

export default UserClass;
