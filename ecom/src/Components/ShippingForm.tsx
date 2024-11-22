import { Link } from "react-router-dom";

const ShippingForm = () => {
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
            <input
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
            <input
              id="city"
              type="email"
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
            <input
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
            <input
              id="country"
              type="password"
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
            <input
              id="pincode"
              type="password"
              className="text-base sm:text-lg block w-full p-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            />
          </div>

          {/* on thid button stripe api cod Button */}
          <div className="max-w-[600px] mx-auto ">
            <button
              type="submit"
              className="text-lg sm:text-2xl font-bold block w-full sm:w-[200px] mx-auto p-2 border bg-pink-500 text-white rounded-md  mb-5 hover:bg-pink-600"
            >
              Checkout
            </button>
          </div>
          {/* Login Link */}
          {/* <div className="max-w-[600px] mx-auto pb-3 text-center">
            <Link to="/login" className="hover:text-black">
              <h4 className="block text-lg sm:text-xl pb-2 text-pink-600">
                Already Registered? Login Here
              </h4>
            </Link>
          </div> */}
        </form>
      </div>
    </div>
  );
};
export default ShippingForm;

const Xyz = () => {};
