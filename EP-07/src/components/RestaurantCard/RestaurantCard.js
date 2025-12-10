import {STAR_LOGO} from '../../constants.js';

const styleForName = {
    fontSize: "larger",
    fontWeight: "bold",
    paddingTop: "5px"
}

const RestaurantCard = ({restaurant}) => (
    <div className="restaurant-card">
        <img
            className="restaurant-card-logo"
            src={restaurant.imageLink}
        ></img>
        <div style={styleForName}>{restaurant.resName}</div>
        <div className="star-rating">
            <img
                className="star-logo"
                src={STAR_LOGO}
            ></img>
            <div>{restaurant.star}</div>
        </div>
        <div className="cusine">
            {restaurant.cusine}
        </div>
    </div>
);

export default RestaurantCard;
