import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="max-w-[1200px] mx-auto bg-red-50 rounded">
      <h1 className=" text-center text-3xl text-pink-400  mt-10 pt-20">
        Register Here
      </h1>
      <form className="space-y-6 mt-10">
        {/* <!-- Form Group --> */}
        <div className="max-w-[600px] mx-auto">
          <label className="block text-2xl font-medium text-gray-700 font-serif">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="text-2l  block w-full p-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
          />
        </div>
        <div className="max-w-[600px] mx-auto">
          <label className="block text-2xl font-medium text-gray-700 font-serif">
            Email
          </label>
          <input
            id="name"
            type="text"
            className="text-2l  block w-full p-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
          />
        </div>
        <div className="max-w-[600px] mx-auto">
          <label className="block text-2xl font-medium text-gray-700 font-serif">
            Phone
          </label>
          <input
            id="name"
            type="text"
            className="text-2l  block w-full p-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
          />
        </div>
        <div className="max-w-[600px] mx-auto">
          <label className="block text-2xl font-medium text-gray-700 font-serif">
            Password
          </label>
          <input
            id="name"
            type="text"
            className="text-2l  block w-full p-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
          />
        </div>
        <div className="max-w-[600px] mx-auto">
          <input
            id="name"
            type="Submit"
            className="text-2xl font-bold block w-[200px] p-2 border bg-pink-400 text-white mb-5"
          />
        </div>
        <div className="max-w-[600px] mx-auto pb-3">
          <Link to={"/"} className="hover:text-[black]">
          <h4 className="block w-[700px] text-xl pb-2 text-pink-600">Already Register? Login Here</h4>
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Register;
