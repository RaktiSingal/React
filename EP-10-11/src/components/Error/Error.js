import { useRouteError, Link } from "react-router-dom";

const ErrorComponent = () => {
    const error = useRouteError();

    console.log('error', error);

    return (
        <div className="flex justify-center flex-col items-center mt-60">
            <h1> We'll be back shortly </h1>
            <div className="italic text-gray-400">We are fixing a temporary glitch. Sorry for the inconvenience.</div>
            <h4> Error: {error.status} {error.statusText} </h4>
            <Link to="/">
                <button
                    className="bg-orange-500 m-4 text-white border-0 p-2 cursor-pointer rounded-sm"
                    type="button"
                >Go Back To Homepage</button>
            </Link>
        </div>
    )
};

export default ErrorComponent;
