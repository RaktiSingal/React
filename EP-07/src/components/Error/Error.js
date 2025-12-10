import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
    const error = useRouteError();

    console.log('error', error);

    return (
        <div className="errorscreen">
            <h1> We'll be back shortly </h1>
            <div className="italic-subtext">We are fixing a temporary glitch. Sorry for the inconvenience.</div>
            <h4> Error: {error.status} {error.statusText} </h4>
        </div>
    )
};

export default ErrorComponent;
