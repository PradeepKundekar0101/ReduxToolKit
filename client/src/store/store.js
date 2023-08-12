import {configureStore} from '@reduxjs/toolkit';
import productSlice from './slices/product';
import cartSlice from './slices/cart';

const store = configureStore({
    reducer:{
        cart:cartSlice,
        products: productSlice,
    }
})
export default store;