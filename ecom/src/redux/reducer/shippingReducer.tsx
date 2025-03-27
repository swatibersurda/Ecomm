import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { shippingInitialState } from "../types/reducersIntialState";
import { placeOrerSentType } from "../api/apiResultType";
import { RootState } from "../store";
const initialState:shippingInitialState={
    userId:null,
    shippingInfo:{
        address: "",
        city: "",
        state:"",
        country:"",
        pinCode:""
    }
}
export const shippingReducer=createSlice({
    name:"shippingReducer",
    initialState,
    reducers:{
        addAddress:(state,action:PayloadAction<placeOrerSentType>)=>{
            state.userId=action.payload.userId;
            state.shippingInfo=action.payload.shippingInfo

        }}
})
export const {addAddress}=shippingReducer.actions
// export const selectShippingInfo=(state:shippingInitialState)=>state?.shippingReducer?.shippingInfo
export const selectShippingInfo=(state:RootState)=>state?.shippingReducer?.shippingInfo