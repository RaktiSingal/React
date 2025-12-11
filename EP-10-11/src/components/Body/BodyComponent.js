import { useEffect, useState } from "react";
import { restaurants } from "../../constants.js";
import RestaurantCard, {WithPromotedCard} from "../RestaurantCard/RestaurantCard.js";
import { Link } from "react-router-dom";
import {useUserOnlineStatus} from '../customHooks.js';

// body component
const BodyComponent = () => {
    let [listOfRestaurants, setListRestaurants] = useState([]);
    let [searchValue, setSearchValue] = useState("");

    // use effect is called after whole compoenent is rendered -> only once if we pass empty array in 2nd parameter
    //use effect is generally used for api calls
    useEffect(() => {
        console.log('use effect called body component');
        // we can add api function here
        fetchData();
        setSearchValue("");
    }, []);

    // to be called on every render if 2nd param is missing
    // useEffect(() => {
    //     setSearchValue("");
    // });

    const RestaurantCardPromoted = WithPromotedCard(RestaurantCard);

    const fetchData = async () => {

        const data = await fetch(
            // any api link
            'https://jsonplaceholder.typicode.com/posts'
        );

        const json = await data.json();
        console.log(json, "data fetched from api");
        setListRestaurants(restaurants);
    };

    const searchRestaurants = (searchQuery) => {
        setListRestaurants(
            restaurants.filter((r) => (r.resName.toLowerCase()).includes(searchQuery.toLowerCase()))
        );
    }

    const onlineStatus = useUserOnlineStatus();

    if (!onlineStatus) {
        return <h1>Looks like you are offline</h1>
    }

    return (
        <div className="h-full pad-2">
            <div className="flex justify-center">
                <input
                    type="text"
                    className="p-2 mt-4 w-200 h-10 border-solid border-gray-200 rounded-xl border-1"
                    placeholder='Search restaurants'
                    value={searchValue}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                        // when value is removed then reset
                        if (e.target.value === '') {
                            searchRestaurants('')
                        }
                    }}
                    onKeyDown={() => searchRestaurants(searchValue)}
                    disabled={!listOfRestaurants.length && !searchValue}
                />
            </div>

            {
                (!listOfRestaurants.length && searchValue)
                    ? <h3>No restaurants not found</h3>
                    : (
                        <div>
                            <div className="flex justify-end mr-8">
                                <button
                                    className="bg-orange-500 m-4 text-white border-0 p-2 cursor-pointer rounded-sm"
                                    type="button"
                                    onClick={() => {
                                        //filter logic
                                        setListRestaurants(restaurants.filter((r) => r.star >= 4.5));
                                    }}
                                    disabled={!listOfRestaurants.length}
                                >
                                    Top rated restaurants
                                </button>
                                <button
                                    className="bg-orange-500 m-4 text-white border-0 p-2 cursor-pointer rounded-sm"
                                    type="button"
                                    onClick={() => {
                                        setListRestaurants(restaurants);
                                    }}
                                    disabled={!listOfRestaurants.length}
                                >
                                    Reset
                                </button>
                            </div>
                            {
                                (!listOfRestaurants.length && !searchValue)
                                    ? (
                                        <div className="flex flex-wrap">
                                            <div className="h-90 w-70 p-4 m-9 border-1 border-solid border-gray-100 bg-gray-100 rounded-lg">
                                            </div>
                                            <div className="h-90 w-70 p-4 m-9 border-1 border-solid border-gray-100 bg-gray-100 rounded-lg">
                                            </div>
                                            <div className="h-90 w-70 p-4 m-9 border-1 border-solid border-gray-100 bg-gray-100 rounded-lg">
                                            </div>
                                            <div className="h-90 w-70 p-4 m-9 border-1 border-solid border-gray-100 bg-gray-100 rounded-lg">
                                            </div>
                                            <div className="h-90 w-70 p-4 m-9 border-1 border-solid border-gray-100 bg-gray-100 rounded-lg">
                                            </div>
                                            <div className="h-90 w-70 p-4 m-9 border-1 border-solid border-gray-100 bg-gray-100 rounded-lg">
                                            </div>
                                            <div className="h-90 w-70 p-4 m-9 border-1 border-solid border-gray-100 bg-gray-100 rounded-lg">
                                            </div>
                                            <div className="h-90 w-70 p-4 m-9 border-1 border-solid border-gray-100 bg-gray-100 rounded-lg">
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex flex-wrap">
                                            {
                                                listOfRestaurants.map((r) => {
                                                    return (
                                                        <Link to={"/restaurant/" + r.routerLink} key={r.id}>
                                                            {/* if restaurant is promoted */}
                                                            {
                                                                r.promoted
                                                                ? <RestaurantCardPromoted restaurant={r}/>
                                                                : <RestaurantCard restaurant={r}/>
                                                            }
                                                        </Link>
                                                    );
                                                })
                                            }
                                        </div>
                                    )
                            }
                        </div>
                    )
            }
        </div>
    );
};

export default BodyComponent;
