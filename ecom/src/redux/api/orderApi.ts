import {createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { placeOrderResponse, placeOrerSentType } from "./apiResultType";

export const orderApi=createApi({
    reducerPath:"orderApi",
    baseQuery:fetchBaseQuery({
        // baseUrl:'http://localhost:9000/api/v1/order'
        baseUrl:'https://ecommdoorstep.onrender.com/api/v1/order'
    }),
    endpoints:(builder)=>({
           placeOrder :builder.mutation<placeOrderResponse,placeOrerSentType>({
               
            query:(payload)=>{
               return {
                url:"/placeOrder",
                method:"POST",
                body:payload
            }}
    
})
})
})
export const {usePlaceOrderMutation}=orderApi