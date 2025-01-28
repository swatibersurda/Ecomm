// import React, { useEffect } from "react";
// import Navbar from "./Navbar";
// import { FaShoppingBag } from "react-icons/fa";
// import { useGetAllProductsQuery } from "../redux/api/productAPI";
// import { getProd } from "../redux/reducer/productReducer";
// import { Product } from "../redux/types/type";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { selectUser } from "../redux/reducer/useReducer";
// import { useAddToCartMutation } from "../redux/api/cartAPI";

// const Products = () => {
//   const { data, error, isLoading } = useGetAllProductsQuery();
//   const {trigger,{data,error,loding}}=useAddToCartMutation()
//   const user=useSelector(selectUser)
//   // console.log(user,"i am product user.nmcbbc")
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (data?.data?.length > 0) {
//       dispatch(getProd(data.data as Product[]));
//     }
//   }, [data, dispatch]);

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error loading products.</p>;
//   const addToCartHandler=async(productid:string)=>{
//   //  userid,productid,quantity
//   const payload={
//    userId:user?._id,
//    productId:productid,
//    quantity:1
//   }
//    trigger(payload)
//   }

//   return (
//     <div>
//       <Navbar />
//       <div className="max-w-full px-10 mt-12 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5">
//         {data?.data?.map((item: Product) => (
//           <div key={item._id} className="text-center shadow-lg">
//             <div className="overflow-hidden">
//               <img src={item.pic} alt={item.name} className="hover:scale-125 duration-1000" />
//             </div>
//             <h3 className="py-1 text-xl font-bold">{item.name}</h3>
//             <p className="py-1">Rs {item.price}</p>
//             <div className="mb-0 w-full mx-auto items-center">
//               <button className="bg-pink-500 px-1 py-1 w-full items-center rounded text-white flex justify-center gap-2 hover:bg-pink-800" onClick={addToCartHandler(item._id)}>
//                 <FaShoppingBag size={20} className="items-center" /> Add Product
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { FaShoppingBag } from "react-icons/fa";
import { useGetAllProductsQuery } from "../redux/api/productAPI";
import { getProd } from "../redux/reducer/productReducer";
import { Product } from "../redux/types/type";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/reducer/useReducer";
import { useAddToCartMutation } from "../redux/api/cartAPI";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const [
    addToCart,
    { data: cartData, error: cartError, isLoading: cartLoading },
  ] = useAddToCartMutation(); // Destructure the mutation hook
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [productsLimitAddCount, setproductLimitaddCount] = useState<{
    [key: string]: number;
  }>({});
  console.log(productsLimitAddCount, "i am");

  useEffect(() => {
    if (data?.data?.length > 0) {
      dispatch(getProd(data.data as Product[]));
    }
  }, [data, dispatch]);

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products.</p>;

  // Add to cart handler
  const addToCartHandler = async (productId: string) => {
    if (!user?._id) {
      toast.error("Please Login First");
      navigate("/login");
      return;
    }
    const currentCount = productsLimitAddCount[productId] || 0;

    if (currentCount >= 2) {
      toast.error("you can not add more then two values ");
      return;
    }
    setproductLimitaddCount((prev) => ({
      ...prev,
      [productId]: currentCount + 1,
    }));
    // Create payload with userId and productId
    const payload = {
      userId: user?._id,
      productId: productId,
      quantity: 1, // Default quantity as 1
    };

    try {
      await addToCart(payload); // unwrap will give you the response directly
      console.log("Product added to cart successfully");
    } catch (error) {
      console.error("Failed to add product to cart", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-full px-10 mt-12 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5">
        {data?.data?.map((item: Product) => (
          <div key={item._id} className="text-center shadow-lg">
            <div className="overflow-hidden">
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
                onClick={() => addToCartHandler(item._id)}
                disabled={(productsLimitAddCount[item?._id] || 0) >= 2} // Passing the product ID correctly
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
