import  { useEffect} from "react";
import Navbar from "./Navbar";
import { FaShoppingBag } from "react-icons/fa";
import { useGetAllProductsQuery } from "../redux/api/productAPI";
// import { getProd } from "../redux/reducer/productReducer";
import { Product } from "../redux/types/type";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/reducer/useReducer";
import { useAddToCartMutation, useLazyGetcartByIDQuery } from "../redux/api/cartAPI";
import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
import {setCart } from "../redux/reducer/cartReducer";

const Products = () => {
  const { data } = useGetAllProductsQuery();
  console.log(data,data?.data,"i am prouct ata")
  const [trigger,{data:cartdata,}]=useLazyGetcartByIDQuery()
  const [addToCart] = useAddToCartMutation(); 
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const user = useSelector(selectUser);
  // const cartArray=useSelector(selectCart)
  

  // Add to cart handler
  const addToCartHandler = async (productId: string) => {
    if (!user?._id) {
      toast.error("User not logged in");
      return;
    }
    const payload = {
      userId: user?._id,
      productId: productId,
      quantity: 1, // Default quantity as 1
    };

    try {
      const res=await addToCart(payload);
      if(res?.error){
        toast.error("failed to add to cart")
      }
      else{
        trigger({id:user?._id});
        toast.success(res?.data?.message)
        if(cartdata){
          dispatch(setCart(cartdata?.data?.items))
        }
        
      }
      
    } catch (error) {
      toast.error("Failed to add product to cart");
    }
  };
  

  
  useEffect(()=>{
    trigger({id:user?._id})
  },[user?._id])
  
  useEffect(()=>{
    dispatch(setCart(cartdata?.data?.items))

},[cartdata,dispatch])


  return (
    <div>
      <Navbar />
      <div className="max-w-full px-10 mt-12 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5">
        {Array.isArray(data?.data)&&data?.data?.map((item: Product) => (
          <div key={item._id} className="text-center shadow-lg">
            <div className="overflow-hidden w-full h-[250px] flex items-center justify-center">
              <img
                src={item.pic}
                alt={item.name}
                className="hover:scale-125 duration-1000"
              />
            </div>
            <h3 className="py-1 text-xl font-bold">{item.name}</h3>
            <p className="py-1">Rs {item.price}</p>
            <div className="mb-0 w-full mx-auto items-center">
              {/* Fix the onClick to call the function with the correct argument */}
              <button
                className="bg-pink-500 px-1 py-1 w-full items-center rounded text-white flex justify-center gap-2 hover:bg-pink-800"
                onClick={() => addToCartHandler(item._id)} // Passing the product ID correctly
              >
                <FaShoppingBag size={20} className="items-center" /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
