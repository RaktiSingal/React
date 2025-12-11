import { useParams } from "react-router-dom";
import { useState } from "react";

import { restaurants, RestaurantMenuOptions, STAR_LOGO, LOCATION_PIN_LOGO } from "../../constants";
import RestaurantCategoryComponent from '../RestaurantCategory/RestaurantCategory.js'

const RestaurantMenu = () => {
    const {routerLink} = useParams();
    const [colapse, setColapse] = useState(0);

    const restaurant = restaurants.filter((r) => r.routerLink === routerLink)[0];
    const RestaurantMenuOptionsCategory = RestaurantMenuOptions;
    // keeping same menu for all restaurants we can make it customise also

    return (
        // all details about restaurant as header
        <div className="w-full min-h-screen flex flex-col items-center">
            <div className="flex justify-center border-b-1 p-4 border-gray-100">
                <div className="flex justify-between gap-x-90">
                    <div>
                        <div className="font-bold text-4xl">
                            {restaurant?.resName}
                        </div>
                        <div className="flex items-center pt-1">
                            <img
                                className="w-7 h-5 pr-2"
                                src={STAR_LOGO}
                            ></img>
                            <div className="text-sm">{restaurant?.star}</div>
                        </div>
                        <div className="pt-2 italic text-base text-gray-500">
                            {restaurant?.cusine}
                        </div>
                        <div className="flex items-center pt-1">
                            <img
                                className="w-7 h-5 pr-2"
                                src={LOCATION_PIN_LOGO}
                            ></img>
                            <div className="text-sm">{restaurant?.location}</div>
                        </div>
                    </div>
                    <img
                        className="h-50 w-50"
                        src={restaurant.imageLink}
                    ></img>
                </div>
            </div>
            <div
                className="mt-8 w-full flex flex-col items-center "
            >
                ⍅ M E N U ⍆
            </div>
            <div className="mt-8 w-full flex flex-col items-center">
                {RestaurantMenuOptionsCategory.map((category, index) => {
                    return (
                        // controlled component
                        <RestaurantCategoryComponent
                            category={category}
                            key={category.type}
                            colapse={index===colapse}
                            setColapse={() => setColapse(index)}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default RestaurantMenu;
