import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "./reducer/useReducer";
import { userApi } from "./api/userAPI";
import { productApi } from "./api/productAPI";
import { productReducer } from "./reducer/productReducer";
import { cartApi } from "./api/cartAPI";
export const store = configureStore({
  reducer: {
    // here calling the slice for global state.
    [userApi.reducerPath]: userApi.reducer,
    [useReducer.name]: useReducer.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [productReducer.name]: productReducer.reducer,
    [cartApi.reducerPath]:cartApi.reducer
  },
  // here we will concatenate all middleware.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([userApi.middleware, productApi.middleware,cartApi.middleware]),
  devTools: true,
});
