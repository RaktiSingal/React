import {configureStore} from '@reduxjs/toolkit';
import CartReducer from './CartSlice';

const appStore = configureStore({
    reducer: {
        //name of slice and it's reducer
        Cart: CartReducer
    }
});

export default appStore;
