import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// import {Routes} from './routes.js';
import HeaderComponent from './src/components/Header/HeaderComponent.js';
import BodyComponent from './src/components/Body/BodyComponent.js';
import AboutComponent from './src/components/About/About.js';
import ErrorComponent from './src/components/Error/Error.js';
import ContactUsComponent from './src/components/Contact/Contact.js';
import RestaurantMenu from './src/components/RestaurantMenu/RestaurantMenu.js';

// app component
const AppComponent = () => (
    <div className="app">
        {/* reuse the header */}
        <HeaderComponent />
        {/* change body to other tag based on path */}
        <Outlet />
    </div>
);

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
                path: '/:routerLink',
                element: <RestaurantMenu />
            }
        ],
        errorElement: <ErrorComponent />
    }
]);

root.render(<RouterProvider router={appRouter} />);

export default AppComponent;
