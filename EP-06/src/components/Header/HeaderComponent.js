import {navItems, APP_LOGO, CART_LOGO} from '../../constants.js';

// header component
const HeaderComponent = () => {
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
                            return <li key={item.id}>{item.name}</li>;
                        })
                    }
                </ul>
                <img
                    className="cart-logo"
                    src={CART_LOGO}
                ></img>
            </div>
        </div>
    );
};

export default HeaderComponent;
