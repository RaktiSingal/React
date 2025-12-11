import UserClass from './UserClass.js';
import { useEffect } from 'react';

const AboutComponent = () => {
    // componentDidMount, componentWillUnmount
    useEffect(() => {
        console.log("will be called while mount");
    });

    //componenetDidUpdate
    useEffect(() => {
        console.log("will be called during updates");

        // interval created
        // does not finished even if we switch the componenet
        const interval = setInterval(() => {
            console.log('interval rendering')
        }, 1000);

        // this get's executed after we switch the component so interval stops
        return () => {
            clearInterval(interval);
        };

    }, []);

    return (
        <div className="ml-30 mr-30 mt-10 mb-10">
            <UserClass/>
        </div>
    );
};

export default AboutComponent;
