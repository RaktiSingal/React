import React from "react";
import UserContext from "../../UserContext";

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
                <div>
                    <UserContext.Consumer>
                        {
                            (user) => {
                                return (
                                    <div>
                                        <h1>{user.name}</h1>
                                        <h2>{user.age}</h2>
                                    </div>
                                )
                            }
                        }
                    </UserContext.Consumer>
                </div>
                <div>Count : {this.state.count}</div>
                <button
                    className="bg-orange-500 m-4 text-white border-0 p-2 cursor-pointer rounded-sm"
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
