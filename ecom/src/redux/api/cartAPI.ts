import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  addToCartSentType,
  RegisterApiResponse,
  removeFromcart,
} from "./apiResultType";
export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    // /api/v1/product/getProduct
    // baseUrl:'http://localhost:9000/api/v1/cart',
    baseUrl: "https://ecommdoorstep.onrender.com/api/v1/cart",
  }),
  endpoints: (builder) => ({
    addToCart: builder.mutation<RegisterApiResponse, addToCartSentType>({
      query: (payload) => ({
        url: "/addtocart",
        method: "POST",
        body: payload,
      }),
    }),
    removeFromeCart: builder.mutation<RegisterApiResponse, removeFromcart>({
      query: (payload) => ({
        url: "/removefromcart",
        method: "POST",
        body: payload,
      }),
    }),
    getcartByID: builder.query({
      query: ({ id }) => {
        return {
          url: `/${id}`,
        };
      },
    }),
  }),
});

export const {
  useAddToCartMutation,
  useRemoveFromeCartMutation,
  useLazyGetcartByIDQuery,
} = cartApi;
