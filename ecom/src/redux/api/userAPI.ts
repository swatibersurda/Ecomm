import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { registersentType,RegisterApiResponse,LoginSentType, changePasswordsentType } from "../api/apiResultType";
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000/api/v1/user/",
  }),
  endpoints: (builder) => ({
    register: builder.mutation<RegisterApiResponse, registersentType>({
      query: (user) => ({
        // console.log(user,"user at register api")
        // after base url endpoints
        url: "register",
        method: "POST",
        body: user,
      }),
    }),
    login:builder.mutation<RegisterApiResponse,LoginSentType>({
      query:(userforlogin)=>({
        url:"login",
        method:'POST',
        body:userforlogin
      })
    }),
    tokenBasedLogin:builder.query({
       query:({token})=>{
        return{
          url:"/tokenBasedUser",
          params:{token}
        }
       }
    }),
    // forget password will not return anything because will sent the email to registerd email id
    forgetPassword:builder.mutation<RegisterApiResponse,string>({
      query:(forgetEmail)=>({
        url:"/forgetpassword",
        method:"POST",
        body:forgetEmail
      })
    }),
    changePassword:builder.mutation<RegisterApiResponse,changePasswordsentType>({
      query:({token,payload})=>({
        url:`/resetPassword/${token}`,
        method:"POST",
        body:payload
      })
    })
  })
});

export const { useRegisterMutation,useLoginMutation,useLazyTokenBasedLoginQuery,useForgetPasswordMutation,useChangePasswordMutation } = userApi;
