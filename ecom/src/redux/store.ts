import {configureStore} from "@reduxjs/toolkit";
import { useReducer } from "./reducer/useReducer";
import {userApi} from "./api/userAPI"
export const store=configureStore({
    reducer:{
        // here calling the slice for global state.
        [userApi.reducerPath]:userApi.reducer,
        [useReducer.name]:useReducer.reducer
    },
    // here we will concatenate all middleware.
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat([userApi.middleware]),
    devTools:true,
    
})