import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    //name of a slice
    name: "Cart",
    // data inside the cart slice
    initialState: {
        items: [],
        restaurant: {},
    },
    // reducers functions modify the slice
    reducers: {
        addItem: (state, action) => {
            // updating value in state items
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((i) => {
                return i.id != action.payload.id;
            });
        },
        clearCart: (state) => {
            state.items = [];
            state.restaurant = null;
        },
        setRestaurant: (state, action) => {
            state.restaurant = action.payload;
        }
    }
});

// export actions and reducers
export const {addItem, removeItem, clearCart, setRestaurant} = CartSlice.actions;

export default CartSlice.reducer;
