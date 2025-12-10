import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// import {Routes} from './routes.js';
// import GroceriesComponent from './src/components/Groceries/Groceries.js';
import HeaderComponent from './src/components/Header/HeaderComponent.js';
import BodyComponent from './src/components/Body/BodyComponent.js';
import AboutComponent from './src/components/About/About.js';
import ErrorComponent from './src/components/Error/Error.js';
import ContactUsComponent from './src/components/Contact/Contact.js';
import RestaurantMenu from './src/components/RestaurantMenu/RestaurantMenu.js';

//lazy loading/chunking/dynamic loading/
// suspense is used to load component with lazy loading 
const GroceriesComponent = lazy(() => import('./src/components/Groceries/Groceries.js'));


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
                path: '/restaurant/:routerLink',
                element: <RestaurantMenu />
            },
            {
                path: '/groceries',
                element: <Suspense fallback={<h1>Loading.......</h1>}><GroceriesComponent /></Suspense>
            }
        ],
        errorElement: <ErrorComponent />
    }
]);

root.render(<RouterProvider router={appRouter} />);

export default AppComponent;
