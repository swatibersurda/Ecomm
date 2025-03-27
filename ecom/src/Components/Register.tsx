import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../redux/api/userAPI";
import toast from "react-hot-toast";
import {RegisterApiResponse} from "../redux/api/apiResultType";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [register] = useRegisterMutation();
  const navigate = useNavigate();

  const registerHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await register({
        name,
        email,
        phone,
        password,
      });
      if ("data" in res) {
        toast.success("SucessFully Register");
        navigate("/login");
      } else {
        const eror = res.error as FetchBaseQueryError;
        const message = (eror.data as RegisterApiResponse).message;
        toast.error(message);
      }
    } catch (error) {
      toast.error("Registration Fail");
    }
  };
  return (
    <div>
      <div className="max-w-[1200px] mx-auto  bg-red-50 rounded px-4 sm:px-6 my-10 lg:px-8">
        <h1 className="text-center text-3xl text-pink-400 mt-10 pt-10 sm:pt-10">
          Register Here
        </h1>
        <form className="space-y-6 mt-10">
          {/* Name Field */}
          <div className="max-w-[600px] mx-auto">
            <label
              htmlFor="name"
              className="block text-lg sm:text-2xl font-medium text-gray-700 font-serif"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-base sm:text-lg block w-full p-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            />
          </div>
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
          <div className="max-w-[600px] mx-auto">
            <label
              htmlFor="phone"
              className="block text-lg sm:text-2xl font-medium text-gray-700 font-serif"
            >
              Phone
            </label>
            <input
              id="phone"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="text-base sm:text-lg block w-full p-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            />
          </div>
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
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-base sm:text-lg block w-full p-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            />
          </div>
          {/* Submit Button */}
          <div className="max-w-[600px] mx-auto">
            <button
              onClick={registerHandler}
              type="submit"
              className="text-lg sm:text-2xl font-bold block w-full sm:w-[200px] mx-auto p-2 border bg-pink-500 text-white rounded-md  mb-5 hover:bg-pink-600"
            >
              Submit
            </button>
          </div>
          {/* Login Link */}
          <div className="max-w-[600px] mx-auto pb-3 text-center">
            <Link to="/login" className="hover:text-black">
              <h4 className="block text-lg sm:text-xl pb-2 text-pink-600">
                Already Registered? Login Here
              </h4>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
