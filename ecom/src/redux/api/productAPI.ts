import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RegisterApiResponse } from "./apiResultType";
export const productApi=createApi({
    reducerPath:"productApi",
    baseQuery:fetchBaseQuery({
        // baseUrl:"http://localhost:9000/api/v1/product",
        baseUrl:"https://ecommdoorstep.onrender.com/api/v1/product",

    }),
    endpoints:(builder)=>({
        getAllProducts:builder.query<RegisterApiResponse,void>({
            query:()=>({
                url:"/getProduct",
                method:'GET',
            }),
        }),
    }),
});

export const {useGetAllProductsQuery}=productApi;