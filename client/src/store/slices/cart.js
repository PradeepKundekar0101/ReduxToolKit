import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addItem(state,action){
            state.push(action.payload);
        },
        removeItem(state,action){
            state.slice(action.payload,1);
        }
    }
});
export default cartSlice;
export const {addItem,removeItem} = cartSlice.actions;