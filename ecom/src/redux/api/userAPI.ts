import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { registersentType,RegisterApiResponse,LoginSentType, changePasswordsentType, email } from "../api/apiResultType";
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:9000/api/v1/user/",
    baseUrl: "https://ecommdoorstep.onrender.com/api/v1/user/",
    credentials:"include"
  }),
  endpoints: (builder) => ({
    register: builder.mutation<RegisterApiResponse, registersentType>({
      query: (user) => ({
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
    tokenBasedLogin:builder.mutation<RegisterApiResponse,string>({
       query:(token)=>{
        return{
          url:"/tokenBasedUser",
          method:"POST",
          body:{token}
        }
       }
    }),
    // forget password will not return anything because will sent the email to registerd email id
    forgetPassword:builder.mutation<RegisterApiResponse,email>({
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
    }),
    addProfilePic:builder.mutation<RegisterApiResponse,FormData>({
      query:(formData)=>
      ({
       url:"/addprofile",
       method:"PATCH",
       body:formData
      })
    }),
    logoutUser: builder.mutation<void, void>({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
  
  })
});

export const { useRegisterMutation,useLoginMutation,useTokenBasedLoginMutation,useForgetPasswordMutation,useChangePasswordMutation,useAddProfilePicMutation,useLogoutUserMutation } = userApi;
