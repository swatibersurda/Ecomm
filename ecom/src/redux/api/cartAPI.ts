import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { addToCartSentType, RegisterApiResponse } from "./apiResultType";
export const cartApi=createApi({
    reducerPath:"cartApi",
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:9000/api/v1/cart',
    }),
    endpoints:(builder)=>({
        addToCart:builder.mutation<RegisterApiResponse,addToCartSentType>({
        query:(payload)=>({
            url:"/addtocart",
            method:"POST",
            body:payload
        })
        })
    })
})

export const {useAddToCartMutation}=cartApi