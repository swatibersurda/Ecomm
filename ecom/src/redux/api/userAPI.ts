import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { registersentType,RegisterApiResponse } from "../api/apiResultType";
export const userApi=createApi({
    reducerPath:"userApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:9000/api/v1/user/"
    }),
    endpoints:(builder)=>({
        register:builder.mutation<RegisterApiResponse,registersentType>({
            query: (user) => ({
                // console.log(user,"user at register api")
                // after base url endpoints
                url: "register",
                method: "POST",
                body: user,
              }),
        })
    })
})

export const {useRegisterMutation}=userApi