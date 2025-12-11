
export const STAR_LOGO = 'https://img.icons8.com/?size=100&id=81443&format=png&color=000000';

export const APP_LOGO = 'https://icon-library.com/images/food-app-icon/food-app-icon-8.jpg';

export const CART_LOGO = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoPC55O_ZCCZhj58qwrGZ9B0VRWdEvT8uhqw&s';

export const LOGIN_LOGO = 'https://img.icons8.com/?size=100&id=15263&format=png&color=000000';

export const GREEN_STAR_LOGO = 'https://img.icons8.com/?size=100&id=85389&format=png&color=40C057';

export const LOCATION_PIN_LOGO = 'https://img.icons8.com/?size=100&id=13800&format=png&color=000000';

export const OFFLINE_LOGO = '🔴';

export const ONLINE_LOGO = '✅';

export const navItems = [
    {
        id: 1,
        name: "Homepage",
        link: '/',
    },
    {
        id: 2,
        name: "About",
        link: '/about-us',
    },
    {
        id: 3,
        name: "Contact us",
        link: '/contact-us'
    },
    {
        id: 4,
        name: "Groceries",
        link: '/groceries'
    }
];

export const restaurants = [
    {
        id: 1,
        resName: 'Meghna foods',
        routerLink: 'meghna-foods',
        imageLink: 'https://www.shutterstock.com/shutterstock/photos/2498792093/display_1500/stock-photo-chicken-biryani-in-a-wooden-bowl-on-a-white-background-2498792093.jpg',
        star: '4.4 (11k) · 35 mins · ₹300 for two',
        promoted: true,
        location: "Indiranagar, Bangalore",
        cusine: "Biryani, North indian, South indian"
    },
    {
        id: 2,
        resName: 'KFC',
        routerLink: 'kfc',
        imageLink: 'https://www.shutterstock.com/shutterstock/photos/2234412247/display_1500/stock-photo-minsk-belarus-december-black-background-night-lots-of-hot-wings-or-strips-of-kfc-2234412247.jpg',
        star: '4.5 (9k) · 25 mins · ₹400 for two',
        location: "Koramangala, Bangalore",
        cusine: "Burgers, American"
    },
    {
        id: 3,
        resName: 'MC Donalds',
        routerLink: 'mc-donalds',
        imageLink: 'https://www.shutterstock.com/shutterstock/photos/2138389709/display_1500/stock-photo-ayutthaya-thailand-mar-mcdonald-s-restaurant-in-ayutthaya-thailand-mcdonald-s-is-an-2138389709.jpg',
        star: '4.4 (12k) · 30 mins · ₹350 for two',
        location: "MG Road, Bangalore",
        cusine: "Burgers, American"
    },
    {
        id: 4,
        resName: 'Pizza Bakery',
        routerLink: 'pizza-bakery',
        imageLink: 'https://www.shutterstock.com/shutterstock/photos/2630922431/display_1500/stock-photo-tasty-pizza-margarita-on-dark-background-2630922431.jpg',
        star: '4.6 (5.2k) · 40 mins · ₹600 for two',
        promoted: true,
        location: "Church Street, Bangalore",
        cusine: "Pizza, Breads, Italian"
    },
    {
        id: 5,
        resName: 'Third wave coffee',
        routerLink: 'third-wave-coffee',
        imageLink: 'https://www.shutterstock.com/shutterstock/photos/2628386007/display_1500/stock-photo-coffee-cup-and-coffee-beans-at-dark-table-top-view-image-with-copy-space-2628386007.jpg',
        star: '3.9 (3.1k) · 20 mins · ₹450 for two',
        location: "HSR Layout, Bangalore",
        cusine: 'Beverages, Bakery, Continental'
    },
    {
        id: 6,
        resName: 'Paradise biryani',
        routerLink: 'paradise-biryani',
        imageLink: 'https://www.shutterstock.com/shutterstock/photos/2414223599/display_1500/stock-photo-a-plate-of-arabian-biriyani-2414223599.jpg',
        star: '4.5 (14k) · 38 mins · ₹500 for two',
        location: "Bellandur, Bangalore",
        cusine: "Biryani, North indian, South indian, Rolls, Desserts"
    },
    {
        id: 7,
        resName: 'Burger king',
        routerLink: 'burger-king',
        imageLink: 'https://www.shutterstock.com/shutterstock/photos/1298838106/display_1500/stock-photo-moscow-russia-january-burger-king-logo-on-crown-paper-burger-king-crown-on-wooden-table-1298838106.jpg',
        star: '3.8 (7.4k) · 22 mins · ₹300 for two',
        location: "BTM Layout, Bangalore",
        cusine: "Burgers, American, Shakes"
    },
    {
        id: 8,
        resName: 'Udupi Shanti Sagar',
        routerLink: 'udupi-shanti-sagar',
        imageLink: 'https://www.shutterstock.com/shutterstock/photos/1932850382/display_1500/stock-photo-ghee-roast-dosa-south-indian-main-breakfast-item-which-is-beautifully-arranged-like-a-smile-face-1932850382.jpg',
        star: '4.4 (4.7k) · 18 mins · ₹200 for two',
        promoted: true,
        location: "Jayanagar, Bangalore",
        cusine: "South indian, Beverages"
    },
    {
        id: 9,
        resName: 'Chinese Wok',
        routerLink: 'chinese-wok',
        imageLink: 'https://www.shutterstock.com/shutterstock/photos/2456792081/display_1500/stock-photo-stir-fry-with-soba-noodles-meat-and-vegetables-on-dark-background-with-napkin-asian-fast-and-2456792081.jpg',
        star: '4.6 (8.9k) · 32 mins · ₹350 for two',
        location: "Whitefield, Bangalore",
        cusine: "Chinese, Fast Food, Asian, Tibetan"
    },
    {
        id: 10,
        resName: 'Subway',
        routerLink: 'subway',
        imageLink: 'https://www.shutterstock.com/shutterstock/photos/1734132101/display_1500/stock-photo-singapore-mar-front-entrance-to-subway-restaurant-in-singapore-shopping-mall-1734132101.jpg',
        star: '4.8 (6.1k) · 28 mins · ₹250 for two',
        location: "Marathahalli, Bangalore",
        cusine: 'Sandwitch, Salad, Wrap, Healthy'
    }
];


export const RestaurantMenuOptions = [
    {
        type: "Recommended",
        cards: [
            {
                id: "1",
                name: "MC Puff",
                price: "64",
                rating: "4.3 (1.1k)",
                description: "A crispy golden puff filled with a mildly spiced vegetable mix. Light, flavorful and perfect for an anytime snack.",
                photoLink: "https://www.shutterstock.com/shutterstock/photos/1899942394/display_1500/stock-photo--chandigarh-india-january-friday-veg-pizza-mcpuff-1899942394.jpg"
            },
            {
                id: "2",
                name: "Veg Pizza",
                price: "349",
                rating: "4.6 (3.4k)",
                description: "A cheesy delight loaded with fresh veggies and aromatic Italian herbs. Baked to perfection with a soft base and crisp edges.",
                photoLink: "https://www.shutterstock.com/shutterstock/photos/2043644255/display_1500/stock-photo-delicious-exotic-veg-pizza-stock-photo-anand-gujrat-india-2043644255.jpg"
            },
            {
                id: "3",
                name: "Masala Dosa",
                price: "120",
                rating: "4.4 (2.1k)",
                description: "A crispy South Indian dosa stuffed with mildly spiced potato masala. Served hot for a satisfying, traditional experience.",
                photoLink: "https://www.shutterstock.com/shutterstock/photos/2481587779/display_1500/stock-photo-south-indian-food-serve-on-banana-leaf-2481587779.jpg"
            },
            {
                id: "4",
                name: "Filter Coffee",
                price: "99",
                rating: "4.8 (5.8k)",
                description: "Authentic South Indian filter coffee with rich aroma and smooth froth. A perfect energizing drink to refresh your senses.",
                photoLink: "https://www.shutterstock.com/shutterstock/photos/2482760953/display_1500/stock-photo-south-indian-filter-coffee-or-tea-brass-or-stainless-steel-2482760953.jpg"
            }
        ]
    },

    {
        type: "Newly added",
        cards: [
            {
                id: "1",
                name: "Hashbrown",
                price: "79",
                rating: "4.1 (740)",
                description: "Crispy on the outside and soft inside, this golden hashbrown makes the perfect breakfast bite. Simple, crunchy and delicious.",
                photoLink: "https://www.shutterstock.com/shutterstock/photos/1606912198/display_1500/stock-photo-potato-patties-or-hash-browns-oval-shaped-isolated-on-white-background-1606912198.jpg"
            },
            {
                id: "2",
                name: "Mysuru masala dosa",
                price: "135",
                rating: "4.5 (2.7k)",
                description: "A special Mysuru-style dosa layered with red chutney and stuffed with flavorful potato filling. Rich, aromatic and uniquely delicious.",
                photoLink: "https://www.shutterstock.com/shutterstock/photos/1707142336/display_1500/stock-photo-mysore-masala-dosa-served-with-sambar-and-chutney-1707142336.jpg"
            },
            {
                id: "3",
                name: "Chole bhature",
                price: "199",
                rating: "4.2 (3.1k)",
                description: "A classic North Indian combo of fluffy bhature served with spicy, tangy chole. A hearty and indulgent meal loved by all.",
                photoLink: "https://www.shutterstock.com/shutterstock/photos/2661421607/display_1500/stock-photo-chole-bhature-a-popular-indian-breakfast-with-chickpea-curry-fried-bread-and-side-garnishes-2661421607.jpg"
            },
            {
                id: "4",
                name: "Croissants",
                price: "250",
                rating: undefined,   // ⭐ intentionally no rating
                description: "Buttery, flaky and freshly baked croissants with delicate layers. A perfect treat for breakfast or an evening snack.",
                photoLink: "https://www.shutterstock.com/shutterstock/photos/2672696369/display_1500/stock-photo-buttered-croissant-isolated-on-white-background-closeup-of-fresh-baked-croissant-roll-bread-2672696369.jpg"
            },
            {
                id: "5",
                name: "Panner biryani",
                price: "345",
                rating: "4.7 (1.8k)",
                description: "A fragrant biryani loaded with marinated paneer cubes and aromatic spices. Rich, flavorful and cooked to perfection.",
                photoLink: "https://www.shutterstock.com/shutterstock/photos/2007877670/display_1500/stock-photo-vegetable-panner-biryani-food-photoshoot-against-rugged-background-of-wood-and-jute-2007877670.jpg"
            }
        ]
    },

    {
        type: "Main course",
        cards: [
            {
                id: "1",
                name: "MC Aloo tikki",
                price: "134",
                rating: "4.0 (1.6k)",
                description: "A crispy aloo tikki patty layered with fresh veggies and tangy sauces. A wholesome burger that delivers comfort and flavor.",
                photoLink: "https://www.shutterstock.com/shutterstock/photos/1330074035/display_1500/stock-photo-bergamo-italy-february-classic-hamburger-1330074035.jpg"
            },
            {
                id: "2",
                name: "KFC Chicken burger",
                price: "129",
                rating: "4.3 (6.9k)",
                description: "A juicy chicken fillet coated in KFC’s signature crispy batter, tucked inside a soft bun. Crunchy, flavorful and satisfying.",
                photoLink: "https://www.shutterstock.com/shutterstock/photos/2431240867/display_1500/stock-photo-lopburi-thailand-february-kfc-fried-chicken-hamburger-set-with-refill-drink-2431240867.jpg"
            },
            {
                id: "3",
                name: "Idli (Button)",
                price: "129",
                rating: undefined, // ⭐ intentionally no rating
                description: "Soft and fluffy mini idlis served with sambar and chutney. A light, healthy and comforting South Indian staple.",
                photoLink: "https://www.shutterstock.com/shutterstock/photos/2170561275/display_1500/stock-photo-mini-idli-or-idlies-with-sambar-and-coconut-chutney-south-indian-breakfast-2170561275.jpg"
            },
            {
                id: "4",
                name: "Chicken Biryani",
                price: "344",
                rating: "4.6 (4.2k)",
                description: "Aromatic basmati rice cooked with marinated chicken, herbs and spices. Rich, flavorful and a complete delight for biryani lovers.",
                photoLink: "https://www.shutterstock.com/shutterstock/photos/2497040151/display_1500/stock-photo-hyderabadi-chicken-biryani-an-aromatic-and-flavorful-dish-with-marinated-chicken-fragrant-basmati-2497040151.jpg"
            },
            {
                id: "5",
                name: "Poha",
                price: "110",
                rating: "4.1 (580)",
                description: "Light, fluffy poha cooked with onions, potatoes and mild spices. A simple, comforting and nutritious breakfast option.",
                photoLink: "https://www.shutterstock.com/shutterstock/photos/1282013161/display_1500/stock-photo-aloo-kanda-poha-or-tarri-pohe-with-spicy-chana-masala-curry-selective-focus-1282013161.jpg"
            },
            {
                id: "6",
                name: "Salad",
                price: "259",
                rating: undefined, // ⭐ no rating
                description: "A refreshing mix of fresh vegetables tossed with olives and a light dressing. Healthy, colorful and full of natural flavors.",
                photoLink: "https://www.shutterstock.com/shutterstock/photos/2416530053/display_1500/stock-photo-classic-vegetable-salad-with-fresh-olives-tomatoes-cucumbers-and-olive-oil-on-gray-background-2416530053.jpg"
            }
        ]
    }
];
