import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:"products",
    initialState:[],

    reducers:{
        addProduct(state,action){
                state.push(action.payload)
        }
    }
});
export default productSlice.reducer;
export const {addProduct} = productSlice.actions;