import Navbar from "./Navbar";
import myIm from "../assets/2.jpg";
import { FaDeleteLeft } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { IoIosRemove } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const Cart = () => {
  const hi = () => {
    console.log("hii");
  };
  return (
    <div>
      <Navbar />
      <h3 className="text-3xl text-pink-600 text-center mt-5">Your Cart !</h3>
      <h3 className="text-3xl text-pink-600 text-center mt-10">
        Subtotal 1233455
      </h3>
      <div className="w-full mx-auto">
        <h3 className="text-xl text-black-600 text-center mt-1">
          Emi Available
        </h3>
      </div>
      <div className="w-full flex items-center justify-center mt-2">
        <button className="bg-pink-500 rounded-full px-4 py-4 text-white">
          Proceed to Buy(cart items length)
        </button>
      </div>

      {/* map doing cart get from backensdd */}
      <div className="max-w-[800px]  flex flex-col md:flex-row mx-auto gap-2 md:gap-12 mt-12 py-2 px-2 shadow-lg border border-pink-600">
        <div className="sm:w-full md:w-2/4">
          <img
            src={myIm}
            width={"100%"}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="sm:w-full md:w-1/10  ml-1">
          <h5 className="font-bold text-lg">Jeans vcxscxvscxvs</h5>
          <p className="font-serif ">qty:2</p>
        </div>
        <div className="sm:w-full  flex gap-3 items-center">
          {" "}
          {/* delete and add qty div */}
          <IoMdAdd size={30} />
          <IoIosRemove size={30} />
        </div>
        {/* delete div */}
        <div className="sm:w-full  flex gap-3 items-center">
          {" "}
          {/* delete and add qty div */}
          <MdDeleteForever onClick={hi} size={30} />
        </div>
        {/* price and qty multiply div */}
        <div className="sm:w-full  flex gap-3 items-center">
          {" "}
          {/* delete and add qty div */}
          {200} <RxCross2 size={20} /> {1}
        </div>
        <div className="sm:w-full">
          {" "}
          <h5 className="font-serif text-xl py-2 mt-0 md:mt-4">9000 Rs</h5>{" "}
        </div>
      </div>
      {/* secong poduct */}
      <div className="max-w-[800px]  flex flex-col md:flex-row mx-auto gap-2 md:gap-12 mt-12 py-2 px-2 shadow-lg border border-pink-600">
        <div className="sm:w-full md:w-2/4">
          <img
            src={myIm}
            width={"100%"}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="sm:w-full md:w-1/10  ml-1">
          <h5 className="font-bold text-lg">Jeans vcxscxvscxvs</h5>
          <p className="font-serif ">qty:2</p>
        </div>
        <div className="sm:w-full  flex gap-3 items-center">
          {" "}
          {/* delete and add qty div */}
          <IoMdAdd size={30} />
          <IoIosRemove size={30} />
        </div>
        {/* delete div */}
        <div className="sm:w-full  flex gap-3 items-center">
          {" "}
          {/* delete and add qty div */}
          <MdDeleteForever onClick={hi} size={30} />
        </div>
        {/* price and qty multiply div */}
        <div className="sm:w-full  flex gap-3 items-center">
          {" "}
          {/* delete and add qty div */}
          {200} <RxCross2 size={20} /> {1}
        </div>
        <div className="sm:w-full">
          {" "}
          <h5 className="font-serif text-xl py-2 mt-0 md:mt-4">9000 Rs</h5>{" "}
        </div>
      </div>
    </div>
  );
};
export default Cart;
