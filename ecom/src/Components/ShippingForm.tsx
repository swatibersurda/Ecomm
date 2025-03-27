import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../redux/reducer/useReducer";
// import { usePlaceOrderMutation } from "../redux/api/orderApi";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { addAddress } from "../redux/reducer/shippingReducer";
import { useDispatch } from "react-redux";

const ShippingForm = () => {
  const user=useSelector(selectUser);
  const navigate=useNavigate();
  // const [placeOrder]=usePlaceOrderMutation()
  const [address,setAddress]=useState("")
  const[city,setCity]=useState("")
  const [state,setState]=useState("")
  const [country,setCountry]=useState("")
  const [pin,setPin]=useState("")
  const dispatch=useDispatch()
    const handleBuy=(e:React.FormEvent)=>{

      e.preventDefault();
      if (!user?._id) {
        toast.error("User not logged in");
        return;
      }
     const payload={
      userId:user?._id,
      shippingInfo: {
        address ,  
         city,
        state,
        country,
        pinCode:pin
      }
    }
     dispatch(addAddress(payload))
     navigate("/orders")
  }

  return (
    <div>
      <div className="max-w-[1200px] mx-auto  bg-red-50 rounded px-4 sm:px-6 my-6 lg:px-8">
        <h1 className="text-center text-2xl md:text-3xl text-pink-400 mt-1 pt-10 sm:pt-10 ">
          Shipping Information !!
        </h1>
        <form className="space-y-6 mt-2 pb-2">
          {/* Field */}
          <div className="max-w-[600px] mx-auto">
            <label
              htmlFor="add"
              className="block text-lg sm:text-2xl font-medium text-gray-700 font-serif"
            >
              Address
            </label>
            <input onChange={(e)=>setAddress(e.target.value)} value={address}
              id="add"
              type="text"
              className="text-base sm:text-lg block w-full p-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            />
          </div>
          {/*  Field */}
          <div className="max-w-[600px] mx-auto">
            <label
              htmlFor="city"
              className="block text-lg sm:text-2xl font-medium text-gray-700 font-serif"
            >
              City
            </label>
            <input onChange={(e)=>setCity(e.target.value)} value={city}
              id="city"
              type="text"
              className="text-base sm:text-lg block w-full p-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            />
          </div>
          {/*  Field */}
          <div className="max-w-[600px] mx-auto">
            <label
              htmlFor="state"
              className="block text-lg sm:text-2xl font-medium text-gray-700 font-serif"
            >
              State
            </label>
            <input onChange={(e)=>setState(e.target.value)} value={state}
              id="state"
              type="text"
              className="text-base sm:text-lg block w-full p-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            />
          </div>
          {/* Field */}
          <div className="max-w-[600px] mx-auto">
            <label
              htmlFor="country"
              className="block text-lg sm:text-2xl font-medium text-gray-700 font-serif"
            >
              Country
            </label>
            <input onChange={(e)=>setCountry(e.target.value)} value={country}
              id="country"
              type="text"
              className="text-base sm:text-lg block w-full p-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            />
          </div>
          {/* pincode */}
          <div className="max-w-[600px] mx-auto">
            <label
              htmlFor="pincode"
              className="block text-lg sm:text-2xl font-medium text-gray-700 font-serif"
            >
              Pincode
            </label>
            <input  onChange={(e)=>setPin(e.target.value)} value={pin}
              id="pincode"
              type="text"
              className="text-base sm:text-lg block w-full p-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            />
          </div>

          {/* on thid button stripe api cod Button */}
          <div className="max-w-[600px] mx-auto ">
            <button onClick={handleBuy}
              type="submit"
              className="text-lg sm:text-2xl font-bold block w-full sm:w-[200px] mx-auto p-2 border bg-pink-500 text-white rounded-md  mb-5 hover:bg-pink-600"
            >
              Checkout
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
};
export default ShippingForm;

