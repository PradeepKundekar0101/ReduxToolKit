import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:"product",
    initialState:[],
    reducers:{
        addProduct(state,action){
            state.push(action.payload);
        }
    }
});
export default productSlice;
export const {addProduct} = productSlice.actions;