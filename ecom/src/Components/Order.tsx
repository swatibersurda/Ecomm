import Navbar from "./Navbar";
// import myIm from "../assets/2.jpg";
// import { FaDeleteLeft } from "react-icons/fa6";
// import { IoMdAdd } from "react-icons/io";
// import { IoIosRemove } from "react-icons/io";
// import { MdDeleteForever } from "react-icons/md";
// import { RiDeleteBack2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import {useLazyGetcartByIDQuery } from "../redux/api/cartAPI";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/reducer/useReducer";
import { useEffect } from "react";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
import { CartItem } from "../redux/types/type";
import { loadStripe } from "@stripe/stripe-js";
import { usePlaceOrderMutation } from "../redux/api/orderApi";
import { selectShippingInfo } from "../redux/reducer/shippingReducer";
import toast from "react-hot-toast";

const Order = () => {
  const [trigger,{data}]=useLazyGetcartByIDQuery()
  // const [addToCart]=useAddToCartMutation()
  // const [removeFromCart]=useRemoveFromeCartMutation()
  // const naviagate=useNavigate();
  const user=useSelector(selectUser);
  const shippingInfo=useSelector(selectShippingInfo)
  const [placeOrder]=usePlaceOrderMutation()


const hanlebuy=async()=>{
  if (!user?._id) {
    toast.error("User not logged in");
    return;
  }
  const stripe=await loadStripe("pk_test_51MjMvkSEqzRLL0RKUKRuu2mt2whRwwAwBetiOS0h1cYcQIppLjK0nvp9FtlUMnZpbGpGm5rpmlvehTV6kfvTZm1H00YdxaFr6d")
  const payload={
    userId:user?._id,
    shippingInfo
   
  }
   const res=await placeOrder(payload)
  //  const data=stripe?.redirectToCheckout({
  //   sessionId:res?.data?.data?.id
  //  })
  const sessionId = res?.data?.data?.id;

  if (stripe && sessionId) {
    await stripe.redirectToCheckout({ sessionId });
  } else {
    // fallback: show error toast or log
    toast.error("Checkout session not available");
  }
  }
  
useEffect(()=>{
  

   trigger({id:user?._id})
 
},[user?._id])

return (
    <>
      <Navbar />
      <h3 className="text-3xl text-pink-600 text-center mt-5">Your Order !</h3>
      <h3 className="text-3xl text-pink-600 text-center mt-10">
        Subtotal {data?.data?.totalAmount}
      </h3>
      <div className="w-full mx-auto">
        <h3 className="text-xl text-black-600 text-center mt-1">
          Emi Available
        </h3>
      </div>
      <div className="w-full flex items-center justify-center mt-2">
        <button className="bg-pink-500 rounded-full px-4 py-4 text-white" onClick={hanlebuy}>
          Place Order
        </button>
      </div>
     {data?.data?.items.length>0?<> {data?.data?.items.map((item:CartItem)=>(

<div className="max-w-[800px]  flex flex-col md:flex-row mx-auto gap-2 md:gap-12 mt-12 py-2 px-2 shadow-lg border border-pink-600">
<div className="sm:w-full md:w-2/4">
  <img
    src={item?.productId?.pic}
    width={"100%"}
    className="w-full h-full object-cover"
  />
</div>
<div className="sm:w-full md:w-1/10  ml-1">
  <h5 className="font-bold text-lg">{item.productId?.name}</h5>
  <p className="font-serif ">qty:{item?.quantity}</p>
</div>
<div className="sm:w-full  flex gap-3 items-center">
</div>
{/* price and qty multiply div */}
<div className="sm:w-full  flex gap-3 items-center">
  {" "}
  {/* delete and add qty div */}
  {item?.productId?.price} <RxCross2 size={20} /> {item?.quantity}
</div>
<div className="sm:w-full flex items-center gap-1">
  {" "}
  <h6 className="font-serif text-xl">{item?.productId?.price*item?.quantity} </h6>{" "}
  <span className="text-xl">Rs</span>
</div>
</div>
    
    ))}

     </>:  <div className="text-center text-pink-600 font-bold mt-10">
    Your cart is empty. Go shop something!
  </div>

     }

   
      </>


  );
};
export default Order;
