import { useEffect, useState } from "react";
import { restaurants } from "../../constants.js";
import RestaurantCard from "../RestaurantCard/RestaurantCard.js";
import { Link } from "react-router-dom";

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

    return (
        <div className="body">
            <div className="search-box">
                <input
                    type="text"
                    className="search-bar"
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
                            <div className="filter">
                                <button
                                    className="filter-btn"
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
                                    className="filter-btn"
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
                                        <div className="cards">
                                            <div className="empty-cards">
                                            </div>
                                            <div className="empty-cards">
                                            </div>
                                            <div className="empty-cards">
                                            </div>
                                            <div className="empty-cards">
                                            </div>
                                            <div className="empty-cards">
                                            </div>
                                            <div className="empty-cards">
                                            </div>
                                            <div className="empty-cards">
                                            </div>
                                            <div className="empty-cards">
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="cards">
                                            {
                                                listOfRestaurants.map((r) => {
                                                    return (
                                                        <Link to={r.routerLink} key={r.id}>
                                                            <RestaurantCard restaurant={r} key={r.id}/>
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
