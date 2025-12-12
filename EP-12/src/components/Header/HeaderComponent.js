import { Link } from 'react-router-dom';
import {navItems, APP_LOGO, CART_LOGO, LOGIN_LOGO, OFFLINE_LOGO, ONLINE_LOGO} from '../../constants.js';
import { useContext, useEffect, useState } from 'react';
import {useUserOnlineStatus} from '../customHooks.js';
import UserContext from '../../UserContext.js';
import { useSelector } from 'react-redux';

// header component
const HeaderComponent = () => {
    let [loginLogoutButton, setLoginLogoutButton] = useState("Login");
    const userDetails = useContext(UserContext);
    // console.log(userDetails)

    // called everytime when loginButton text is updated
    useEffect(() => {
        console.log('header effect called');
    }, [loginLogoutButton]);

    // get cart items by subscribing to store
    const cartItems = useSelector((store) => store.Cart.items);

    return (
        <div className="flex justify-between pb-10">
            <Link to="/">
                <img
                    className="h-15 w-15"
                    src={APP_LOGO}
                ></img>
            </Link>
            <div className="flex items-center">
                {/* <input
                    className="p-2 mt-4 w-70 h-10 border-solid border-gray-200 rounded-xl border-1 mr-5"
                    type="text"
                    placeholder="Enter username here"
                    onChange={(e) => {
                        if (e.target.value) {
                            userDetails.setUser({
                                name: e.target.value,
                                age: 52
                            });
                        } else {
                            userDetails.setUser({
                                name: 'Shivam',
                                age: 28
                            });
                        }
                    }}
                /> */}
                <ul className="flex items-center">
                    {
                        navItems.map((item) => {
                            return (
                                <li
                                    className="pr-4 mr-4 list-none"
                                    key={item.id}
                                >
                                    {/* don't use anchortag for redirect as it reloads whole app */}
                                    {/* <a href={item.link}>{item.name}</a> */}
                                    <Link to={item.link}>{item.name}</Link>
                                </li>
                            );
                        })
                    }
                </ul>
                <Link to="/cart">
                    <div className="relative mr-2">
                        <img
                            className="h-10 w-10"
                            src={CART_LOGO}
                            alt="cart"
                        />
                        <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                            {cartItems.length}
                        </div>
                    </div>
                </Link>

                <div className="flex justify-between flex-col">
                    <img
                        className="h-10 w-10 ml-4 mr-2 mt-2"
                        type="button"
                        src={LOGIN_LOGO}
                        onClick={() => {
                            // login clicked
                            loginLogoutButton === 'Login'
                                ? setLoginLogoutButton('Logout')
                                : setLoginLogoutButton('Login')
                        }}
                    />
                    <div className="flex justify-center flex-1 pad-l-10 items-center">
                        {/* {userDetails ? <span>{userDetails.name}</span> : <span>{loginLogoutButton}</span>} */}
                        { loginLogoutButton === 'Login' ? <span>{userDetails?.name}</span> : <span>{loginLogoutButton}</span>}
                    </div>
                </div>
                <div className="h-10 w-10 ml-4 mr-2 mt-2">
                    {useUserOnlineStatus() ? ONLINE_LOGO : OFFLINE_LOGO}
                </div>
            </div>
        </div>
    );
};

export default HeaderComponent;
