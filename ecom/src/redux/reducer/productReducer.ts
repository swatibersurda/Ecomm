import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { productIntialState } from "../types/reducersIntialState";
import { Product } from "../types/type";
const initialState:productIntialState={
    dataArray:[],
    loading:true
}
export const productReducer=createSlice({
    name:"productReducer",
    initialState,
    reducers:{
    // here we will right the actions if needed... here type of payload is product type array.
    getProd:(state,action:PayloadAction<Product[]>)=>{
        state.dataArray=action.payload;
        state.loading=false
    }}
})
export const {getProd}=productReducer.actions