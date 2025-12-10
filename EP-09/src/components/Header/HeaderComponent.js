import { Link } from 'react-router-dom';
import {navItems, APP_LOGO, CART_LOGO, LOGIN_LOGO, OFFLINE_LOGO, ONLINE_LOGO} from '../../constants.js';
import { useEffect, useState } from 'react';
import {useUserOnlineStatus} from '../customHooks.js';

// header component
const HeaderComponent = () => {
    let [loginLogoutButton, setLoginLogoutButton] = useState("Login");

    // called everytime when loginButton text is updated
    useEffect(() => {
        console.log('header effect called');
    }, [loginLogoutButton]);

    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src={APP_LOGO}
                ></img>
            </div>
            <div className="nav-items">
                <ul>
                    {
                        navItems.map((item) => {
                            return (
                                <li
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
                <img
                    className="header-logo"
                    src={CART_LOGO}
                ></img>
                <div className='login'>
                    <img
                        className="header-logo"
                        type="button"
                        src={LOGIN_LOGO}
                        onClick={() => {
                            // login clicked
                            loginLogoutButton === 'Login'
                                ? setLoginLogoutButton('Logout')
                                : setLoginLogoutButton('Login')
                        }}
                    />
                    <div className="login-text">{loginLogoutButton}</div>
                </div>
                <div className='header-logo'>
                    {useUserOnlineStatus() ? ONLINE_LOGO : OFFLINE_LOGO}
                </div>
            </div>
        </div>
    );
};

export default HeaderComponent;
