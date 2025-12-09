import React from 'react';
import ReactDOM from 'react-dom/client';

// header -> logo component, nav item, 
// body -> search, cards  -> card
// footer -> copyright and links
const navItems = [
    {
        id: 1,
        name: "Homepage",
    },
    {
        id: 2,
        name: "About",
    },
    {
        id: 3,
        name: "Contact us",
    },
];

const restaurants = [
    {
        id: 1,
        resName: 'Meghna foods',
        imageLink: 'https://www.shutterstock.com/shutterstock/photos/2498792093/display_1500/stock-photo-chicken-biryani-in-a-wooden-bowl-on-a-white-background-2498792093.jpg',
        star: 4.4,
        cusine: "Biryani, North indian, south indian"
    },
    {
        id: 2,
        resName: 'KFC', 
        imageLink: 'https://www.shutterstock.com/shutterstock/photos/2234412247/display_1500/stock-photo-minsk-belarus-december-black-background-night-lots-of-hot-wings-or-strips-of-kfc-2234412247.jpg',
        star: 4.5,
        cusine: "Burgers, American"
    },
    {
        id: 3,
        resName: 'MC Donalds',
        imageLink: 'https://www.shutterstock.com/shutterstock/photos/2138389709/display_1500/stock-photo-ayutthaya-thailand-mar-mcdonald-s-restaurant-in-ayutthaya-thailand-mcdonald-s-is-an-2138389709.jpg',
        star: 4.4,
        cusine: "Burgers, American"
    },
    {
        id: 4,
        resName: 'Chinese Wok',
        imageLink: 'https://www.shutterstock.com/shutterstock/photos/2456792081/display_1500/stock-photo-stir-fry-with-soba-noodles-meat-and-vegetables-on-dark-background-with-napkin-asian-fast-and-2456792081.jpg',
        star: 4.6,
        cusine: "Chinese, fast food, Asian, Tibetan"
    },
    {
        id: 5,
        resName: 'Third wave coffee',
        imageLink: 'https://www.shutterstock.com/shutterstock/photos/2628386007/display_1500/stock-photo-coffee-cup-and-coffee-beans-at-dark-table-top-view-image-with-copy-space-2628386007.jpg',
        star: 4.0,
        cusine: 'Beverages, Bakery, Continental'
    }
]

// header component
const HeaderComponent = () => (
    <div className="header">
        <div className="logo-container">
            <img
                className="logo"
                src="https://images.seeklogo.com/logo-png/63/1/swiggy-logo-png_seeklogo-634077.png"
            ></img>
        </div>
        <div className="nav-items">
            <ul>
                {
                    navItems.map((item) => {
                        return <li key={item.id}>{item.name}</li>;
                    })
                }
            </ul>
            <img
                className="cart-logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoPC55O_ZCCZhj58qwrGZ9B0VRWdEvT8uhqw&s"
            ></img>
        </div>
    </div>
);

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
                src="https://img.icons8.com/?size=100&id=81443&format=png&color=000000"
            ></img>
            <div>{restaurant.star}</div>
        </div>
        <div className="cusine">
            {restaurant.cusine}
        </div>
    </div>
);

// body component
const BodyComponent = () => (
    <div className="body">
        <div className="cards">
            {
                restaurants.map((r) => {
                    return <RestaurantCard restaurant={r} key={r.id}/>;
                })
            }
        </div>
    </div>
);

// app component
const AppComponent = () => (
    <div className="app">
        <HeaderComponent />
        <BodyComponent />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppComponent />);
