import { useParams } from "react-router-dom";

import { restaurants } from "../../constants";

const RestaurantMenu = () => {
    const {routerLink} = useParams();

    const restaurant = restaurants.filter((r) => r.routerLink === routerLink)[0];

    return (
        <div>
            This is a restaurant name --- {restaurant?.resName}
        </div>
    );
};

export default RestaurantMenu;
