import React, { lazy, Suspense, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';

// import {Routes} from './routes.js';
// import GroceriesComponent from './src/components/Groceries/Groceries.js';
import HeaderComponent from './src/components/Header/HeaderComponent.js';
import BodyComponent from './src/components/Body/BodyComponent.js';
import AboutComponent from './src/components/About/About.js';
import ErrorComponent from './src/components/Error/Error.js';
import ContactUsComponent from './src/components/Contact/Contact.js';
import RestaurantMenu from './src/components/RestaurantMenu/RestaurantMenu.js';
import UserContext from './src/UserContext.js';
import CartComponent from './src/components/Header/Cart.js';
import appStore from './src/AppStore.js';

//lazy loading/chunking/dynamic loading/
// suspense is used to load component with lazy loading 
const GroceriesComponent = lazy(() => import('./src/components/Groceries/Groceries.js'));


// app component
const AppComponent = () => {
    const [userLoggedIn, setUser] = useState();

    useEffect(() => {
        setUser({
            name: "Shivam",
            age: 28
        });
    }, []);

    return (
        <Provider store={appStore}>
            <div className="ml-4 mt-2 mb-2 mr-4">
                <UserContext.Provider value={{...userLoggedIn, setUser}}>
                    <HeaderComponent />
                </UserContext.Provider>
                {/* change body to other tag based on path */}
                <Outlet />
            </div>
        </Provider>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppComponent />,
        children: [
            {
                path: '/',
                element: <BodyComponent />,
            },
            {
                path: '/about-us',
                element: <AboutComponent />,
            },
            {
                path: '/contact-us',
                element: <ContactUsComponent />
            },
            {
                path: '/restaurant/:routerLink',
                element: <RestaurantMenu />
            },
            {
                path: '/groceries',
                element: <Suspense fallback={<h1>Loading.......</h1>}><GroceriesComponent /></Suspense>
            },
            {
                path: '/cart',
                element: <CartComponent />
            }
        ],
        errorElement: <ErrorComponent />
    }
]);

root.render(<RouterProvider router={appRouter} />);

export default AppComponent;
