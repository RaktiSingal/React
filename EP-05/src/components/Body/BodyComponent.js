import { useState } from "react";
import { restaurants } from "../../constants.js";
import RestaurantCard from "../RestaurantCard/RestaurantCard.js";

// body component
const BodyComponent = () => {
    // normal js variable
    // let listOfRestaurants = restaurants;

    //react super powerful variable - state variable
    //whenever state variable updates it re-renders ui

    let [listOfRestaurants, setListRestaurants] = useState(restaurants);
    // can be used for normal variable any datatype
    // let [variable, setVariable] = useState(10);

    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    type="button"
                    onClick={() => {
                        //filter logic
                        setListRestaurants(restaurants.filter((r) => r.star >= 4.5));
                    }}
                >
                    Top rated restaurants
                </button>
                <button
                    className="filter-btn"
                    type="button"
                    onClick={() => {
                        setListRestaurants(restaurants);
                    }}
                >
                    Reset
                </button>
            </div>
            <div className="cards">
                {
                    listOfRestaurants.map((r) => {
                        return <RestaurantCard restaurant={r} key={r.id}/>;
                    })
                }
            </div>
        </div>
    );
};

export default BodyComponent;
