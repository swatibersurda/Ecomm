import React from "react";
import { useLocation, useParams } from "react-router-dom";


const ChangedPassword = () => {
  // const query=useQuery()
  // const id=query.get("id")
  // console.log(id,"i am token")
  const {token}=useParams()
  console.log(token)

  
  return (
    <div className="h-screen flex justify-center items-center bg-cover bg-center bg-[url('https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
      <div className="w-full max-w-[1000px] p-8 border border-red-600 shadow-xl bg-white rounded-md">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-pink-500">Change Password</h1>
          <p className="mt-2 text-sm font-bold text-gray-600">
            Enter the email associated with the account and new Password
          </p>
        </div>
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
            className="text-base sm:text-lg block w-full p-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
          />
        </div>
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
            className="text-base sm:text-lg block w-full p-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
          />
        </div>
        <div className="max-w-[600px] mx-auto mt-4">
          <button
            type="submit"
            className="text-lg sm:text-2xl font-bold w-full mx-auto p-2 border bg-pink-500 text-white rounded-md hover:bg-pink-600"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangedPassword;
