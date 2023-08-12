import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addItem(state,action){
            state.push(action.payload);
        },
        removeItem(state,action){
            console.log(action.payload);
            state.splice(action.payload,1);
        }
    }
});
export default cartSlice.reducer;
export const {addItem,removeItem} = cartSlice.actions;