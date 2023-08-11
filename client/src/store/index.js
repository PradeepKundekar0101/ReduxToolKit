import {configureStore} from '@reduxjs/toolkit';
import productSlice from './slices/product';
import cartSlice from './slices/cart';
const store = configureStore({
    reducer:{
        product: productSlice,
        cart:cartSlice
    }
})
export default store;