import Navbar from "./Navbar";
import myIm from "../assets/2.jpg";
import { FaDeleteLeft } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { IoIosRemove } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useAddToCartMutation, useGetcartByIDQuery, useLazyGetcartByIDQuery, useRemoveFromeCartMutation } from "../redux/api/cartAPI";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/reducer/useReducer";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Product } from "../redux/types/type";

const Cart = () => {
  const [trigger,{data,isError,isLoading}]=useLazyGetcartByIDQuery()

  const [addToCart]=useAddToCartMutation()
  const [removeFromCart]=useRemoveFromeCartMutation()
  const naviagate=useNavigate();
  const user=useSelector(selectUser);
  console.log("user",user?._id)
  // console.log(user,"i am user at cart pagee...")
  console.log(data,"iam at cart data")
  if(!user){
  toast.error("login first")
  naviagate("/login")
  }
  

// add cart
const handleAddProduct=async(productId:string)=>{
  console.log(productId,"i am product is")
  const payload={
    userId:user?._id,
    productId:productId,
    quantity:1
  }
try{
const res=await addToCart(payload)
console.log(res,"iam res at addtocart")
toast.success(res?.data?.message)
await trigger({id:user?._id})
}catch(err){
  toast.error(res?.data?.err)
}
}
// remove one quantity from cart
const handleRemoveOneFromCart=async(productId:string)=>{
  console.log(productId,"i am product at removee...")
  const payload={
    userId:user?._id,
    productId:productId,
    quantity:1
  }
  try{
    const res=await removeFromCart(payload)
    console.log(res,"i am res at remove carttt")
    toast.success(res?.data?.message)
    trigger({id:user?._id})
  }catch(err){
    console.log(err,"i am errr")
  }

}

const deleteFromCart=async(productId:string)=>{
 const payload={
  userId:user?._id,
  productId:productId,
  quantity:null
 } 
 try {
  const res=await removeFromCart(payload)
  console.log(res,"i am res at delete")
  trigger({id:user?._id})
 } catch (error) {
  console.log(error)
 }
}

useEffect(()=>{
  
 if(user._id){
  trigger({id:user?._id})
 }
 else{
  toast.error("Please Login First")
  naviagate("/login")
 }
},[user?._id,addToCart])

return (
    <>
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
     

    {data?.data?.items.map((item)=>(

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
