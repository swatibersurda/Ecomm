import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "./reducer/useReducer";
import { userApi } from "./api/userAPI";
import { productApi } from "./api/productAPI";
import { productReducer } from "./reducer/productReducer";
import { cartApi } from "./api/cartAPI";
import { orderApi } from "./api/orderApi";
import { shippingReducer } from "./reducer/shippingReducer";
import { cartReducer } from "./reducer/cartReducer";
export const store = configureStore({
  reducer: {
    // here calling the slice for global state.
    [userApi.reducerPath]: userApi.reducer,
    [useReducer.name]: useReducer.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [productReducer.name]: productReducer.reducer,
    [cartApi.reducerPath]:cartApi.reducer,
    [cartReducer.reducerPath]:cartReducer.reducer,
    [orderApi.reducerPath]:orderApi.reducer,
    [shippingReducer.name]:shippingReducer.reducer
  },
  // here we will concatenate all middleware.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([userApi.middleware, productApi.middleware,cartApi.middleware,orderApi.middleware]),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
