import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
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
              type="password"
              className="text-base sm:text-lg block w-full p-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            />
          </div>
          {/* login Button */}
          <div className="max-w-[600px] mx-auto border border-red-500 mt-10">
            <button
              type="submit"
              className="text-lg sm:text-2xl font-bold w-full mx-auto p-2 border bg-pink-500 text-white rounded-md hover:bg-pink-600"
            >
              Login
            </button>
          </div>

          {/* google auth  */}
        </form>
        <div className="max-w-[600px] mx-auto my-5 text-center mb-6">
          <button className="flex items-center justify-center w-full p-2 bg-pink-500 text-white rounded mb-5 font-bold text-xl hover:bg-pink-600">
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
