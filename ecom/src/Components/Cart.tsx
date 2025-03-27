import Navbar from "./Navbar";
import { IoMdAdd } from "react-icons/io";
import { IoIosRemove } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useAddToCartMutation, useLazyGetcartByIDQuery, useRemoveFromeCartMutation } from "../redux/api/cartAPI";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/reducer/useReducer";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { setCart } from "../redux/reducer/cartReducer";
import { useDispatch } from "react-redux";
// import { apiError } from "../redux/api/apiResultType";
import { CartItem } from "../redux/types/type";

const Cart = () => {
  const [trigger,{data}]=useLazyGetcartByIDQuery()
  const [addToCart]=useAddToCartMutation()
  const [removeFromCart]=useRemoveFromeCartMutation()
  const naviagate=useNavigate();
  const user=useSelector(selectUser);
  const dispatch=useDispatch();
  

  
  const handleAddProduct=async(productId:string)=>{
    if (!user?._id) return toast.error("User not logged in");
  const payload={
    userId:user?._id,
    productId:productId,
    quantity:1
  }
try{
const res=await addToCart(payload)
toast.success(res?.data?.message as string)
await trigger({id:user?._id})
}catch(err){
  toast.error("Not added")
}
}
// remove one quantity from cart
const handleRemoveOneFromCart=async(productId:string)=>{
  if (!user?._id) return toast.error("User not logged in");

  const payload={
    userId:user?._id,
    productId:productId,
    quantity:1
  }
  try{
    const res=await removeFromCart(payload)
    toast.success(res?.data?.message as string)
    trigger({id:user?._id})
  }catch(err){
    toast.error("Error while removing")
  }

}

const deleteFromCart=async(productId:string)=>{
  if (!user?._id) return toast.error("User not logged in");
 const payload={
  userId:user?._id,
  productId:productId,
  quantity:null
 } 
 try {
  await removeFromCart(payload)
  trigger({id:user?._id})
 } catch (error) {
  toast.error("Failed to delete")
 }
}
const handleBuy=()=>{
  naviagate("/shipping")
}

useEffect(()=>{
   trigger({id:user?._id})

},[user?._id,addToCart])

useEffect(()=>{
 dispatch(setCart(data?.data?.items))
},[data])

return (
    <>
      <Navbar />
      <h3 className="text-3xl text-pink-600 text-center mt-5">Your Cart !</h3>
      <h3 className="text-3xl text-pink-600 text-center mt-10">
        Subtotal {data?.data?.totalAmount}
      </h3>
      <div className="w-full mx-auto">
        <h3 className="text-xl text-black-600 text-center mt-1">
          Emi Available
        </h3>
      </div>
      <div className="w-full flex items-center justify-center mt-2">
        <button className="bg-pink-500 rounded-full px-4 py-4 text-white" onClick={handleBuy}>
          Proceed to Buy
        </button>
      </div>
     

    {data?.data?.items.map((item:CartItem)=>(

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
  {" "}
  {/* delete and add qty div */}

  <IoMdAdd size={30} onClick={item?.quantity>=2?undefined:()=>handleAddProduct(item?.productId?._id)}/>
  <IoIosRemove size={30} onClick={item?.quantity===1?undefined:()=>handleRemoveOneFromCart(item?.productId?._id)}/>
</div>
{/* delete div */}
<div className="sm:w-full  flex gap-3 items-center">
  {" "}
  {/* delete and add qty div */}
  <MdDeleteForever onClick={()=>deleteFromCart(item?.productId?._id)} size={30} />
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

      </>


  );
};
export default Cart;
