import { useContext } from 'react';
import {STAR_LOGO, LOCATION_PIN_LOGO} from '../../constants.js';
import UserContext from '../../UserContext.js';

const styleForName = {
    fontSize: "larger",
    fontWeight: "bold",
    paddingTop: "5px"
}

const RestaurantCard = ({restaurant}) => {
    const userDetails = useContext(UserContext);
    return (
        <div className="h-90 w-70 p-4 m-9 border-1 border-solid border-gray-100 bg-gray-100 rounded-lg">
            <img
                className="h-50 w-70"
                src={restaurant.imageLink}
            ></img>
            <div className="font-bold text-xl pt-2">{restaurant.resName}</div>
            <div className="flex items-center pt-1">
                <img
                    className="w-7 h-5 pr-2"
                    src={STAR_LOGO}
                ></img>
                <div className="text-xs">{restaurant.star}</div>
            </div>
            <div className="pt-2 italic text-base text-sm truncate">
                {restaurant.cusine}
            </div>
            <div className="flex items-center pt-1">
                <img
                    className="w-5 h-3 pr-2"
                    src={LOCATION_PIN_LOGO}
                ></img>
                <div className="text-sm">{restaurant?.location}</div>
            </div>
        </div>
        // here if we try to use userContext it is having old or default value 
        // user.name
    );
}

//higher order component that will have promoted tag on it (includes restaurant card)

export const WithPromotedCard = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white border-2 border-white rounded-r-md p-1 ml-10">
                    Promoted
                </label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}


export default RestaurantCard;
