import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({

    name:'cart',
    initialState:{
        items:[],
        price:0
    },
    reducers:{

        addItem:(state,action)=>{
            state.items.push(action.payload);
            state.price= state.price + action.payload.card.info.price/100;
        },
        removeItem :(state,action)=>{
           
           state.items = state.items.filter((item) => {
             
            return item.card.info.id != action.payload.card.info.id
           })
           state.price=state.price - action.payload.card.info.price/100;
        },
        clearCart : (state) =>{
            state.items=[];
            state.price=0;
        }

    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;