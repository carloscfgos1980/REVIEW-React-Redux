import { configureStore } from '@reduxjs/toolkit';
import groceryReducer from './grocerySlice';
import cartReducer from './cartSlice';

export default configureStore({
    reducer: {
        grocery: groceryReducer,
        cart: cartReducer,
    }
})