import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { useLoginMutation } from "../redux/api/userAPI";
import toast from "react-hot-toast";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { RegisterApiResponse } from "../redux/api/apiResultType";
import { useDispatch } from "react-redux";
import { userExist } from "../redux/reducer/useReducer";
import { User } from "../redux/types/type";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(email, password);
  const loginHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const res = await login({
        email,
        password,
      });
      if ("data" in res) {
        // console.log(res.data.data,"i am data")
        dispatch(userExist(res?.data?.data));
        toast.success("Successfully Login");
        navigate("/");
      } else {
        const err = res.error as FetchBaseQueryError;
        const message = (err.data as RegisterApiResponse).message;
        toast.error(message);
      }
    } catch (err) {
      toast.error("Failed to Login");
    }
  };

  // const googleHandler = async () => {
    // console.log("comingHER");
    // trigger();
    // here first google auth hit after that
    
  // };
  const googleHandler = () => {
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=132607250846-fa99jip85k6tcsrtn79jl0mvoq46icka.apps.googleusercontent.com&redirect_uri=http://localhost:9000/api/v1/google/auth/google/callback&scope=profile email`;
    window.location.href = googleAuthUrl;
  };
  
  return (
    <div>
      <h1 className="text-center text-3xl text-pink-400 mt-10 pt-10 sm:pt-10">
        Welcome, Back!
      </h1>
      <div className="max-w-[1200px] mx-auto bg-red-50 rounded px-4 sm:px-6 my-10 lg:px-8 ">
        <h5 className="text-center text-xl text-pink-400 mt-10 pt-10 sm:pt-20">
          <Link to={"/register"}>Don't have an account?Register Now</Link>
        </h5>
        <form className="space-y-6 mt-10">
          {/* Email Field */}
          <div className="max-w-[600px] mx-auto">
            <label
              htmlFor="email"
              className="block text-lg sm:text-2xl font-medium text-gray-700 font-serif"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-base sm:text-lg block w-full p-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            />
          </div>
          {/* Phone Field */}

          {/* Password Field */}
          <div className="max-w-[600px] mx-auto">
            <label
              htmlFor="password"
              className="block text-lg sm:text-2xl font-medium text-gray-700 font-serif"
            >
              Password
            </label>
            <input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="text-base sm:text-lg block w-full p-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            />
          </div>
          {/* login Button */}
          <div className="max-w-[600px] mx-auto border border-red-500 mt-10">
            <button
              onClick={loginHandler}
              type="submit"
              className="text-lg sm:text-2xl font-bold w-full mx-auto p-2 border bg-pink-500 text-white rounded-md hover:bg-pink-600"
            >
              Login
            </button>
          </div>

          {/* google auth  */}
        </form>
        <div className="max-w-[600px] mx-auto my-5 text-center mb-6">
          <button
            onClick={googleHandler}
            className="flex items-center justify-center w-full p-2 bg-pink-500 text-white rounded mb-5 font-bold text-xl hover:bg-pink-600"
          >
            <FaGoogle size={24} className="mr-2" />
            Sign In with Google
          </button>
          <h1 className="text-pink-500 hover:none cursor-pointer pb-5 text-xl">
            <Link to={"/forgetpass"}>Forgot Password?</Link>
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Login;
