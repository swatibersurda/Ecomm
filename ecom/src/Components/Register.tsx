import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto  bg-red-50 rounded px-4 sm:px-6 my-10 lg:px-8">
        <h1 className="text-center text-3xl text-pink-400 mt-10 pt-10 sm:pt-20">
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
              className="text-base sm:text-lg block w-full p-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            />
          </div>
          {/* Submit Button */}
          <div className="max-w-[600px] mx-auto">
            <button
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
