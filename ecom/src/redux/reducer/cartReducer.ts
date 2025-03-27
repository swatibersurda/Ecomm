import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cartIntialState} from "../types/reducersIntialState";
import { CartItem,} from "../types/type";
import { RootState } from "../store";
// import { FaLeaf } from "react-icons/fa";
const initialState:cartIntialState={
    cartArray:[],
    loading:true,
    totalCountCart:0
}
export const cartReducer=createSlice({
    name:"cartReducer",
    initialState,
    reducers:{
        setCart:(state,action:PayloadAction<CartItem[]>)=>{
            state.cartArray=action.payload;
            state.loading=false
        },
        setCartCount:(state,action:PayloadAction<number>)=>{
            state.totalCountCart=action.payload
        },
        emptyCart:(state)=>{
            state.cartArray=[];
            state.loading=false
            state.totalCountCart=0;
        }

    }
})
export const {setCart,setCartCount,emptyCart}=cartReducer.actions
// export const selectCart=(state:cartIntialState)=>state?.cartReducer?.cartArray
// export const selectTotal=(state:cartIntialState)=>state?.cartReducer?.totalCountCart
export const selectCart=(state:RootState)=>state?.cartReducer?.cartArray
export const selectTotal=(state:RootState)=>state?.cartReducer?.totalCountCart
