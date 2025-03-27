import  { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate} from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiLogoutCircleFill } from "react-icons/ri";
import { AiOutlineLogin } from "react-icons/ai";
import { useSelector } from "react-redux";
import { selectUser, userNotExist } from "../redux/reducer/useReducer";
import { useLogoutUserMutation } from "../redux/api/userAPI";
import { useDispatch } from "react-redux";
import { emptyCart, selectCart, selectTotal, setCartCount } from "../redux/reducer/cartReducer";
// import { CartItem } from "../redux/types/type";
{/* <AiOutlineLogin /> */}
const Navbar = () => {
  // const[trigger,{data,isError}]=useLazyGetcartByIDQuery()
  const [logoutUser] = useLogoutUserMutation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch()
  const navigate=useNavigate();
  const user=useSelector(selectUser)
  const cartArray=useSelector(selectCart)
  const cartValue=useSelector(selectTotal)


 const handleLogout=async()=>{
  try {
    await logoutUser()
    if(cartArray?.length>=0){

      dispatch(emptyCart());
    }
    if(user){

      dispatch(userNotExist()); 
    }
    localStorage.removeItem("token");
     navigate("/login")
  } catch (err) {

  }
 }

  useEffect(() => {
    if (cartArray?.length >=0) {
      const totalQuantity = cartArray.reduce((sum:number, item) => sum + item?.quantity, 0);
      dispatch(setCartCount(totalQuantity))
    }
    else{
      dispatch(setCartCount(0))
    }
  
  }, [cartArray]);
  
  return (
    <nav className="bg-pink-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">DoorShop</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to={"/"} className="hover:text-gray-300">
              Home
            </Link>
            <Link to={"/products"} className="hover:text-gray-300">
              Products
            </Link>
            <Link to={"/orders"} className="hover:text-gray-300">
              Orders
            </Link>
           
          </div>

          {/* Cart Icon */}
          <div className="flex items-center space-x-4">
          <Link to={user?.name||user?.pic?"/userprofile":"/login"} className="hover:text-gray-300">
          {user?.pic?<div className="w-10 h-10 overflow-hidden rounded-full"><img className="w-full h-full" src={user?.pic}/></div>:user?.name?user.name:<AiOutlineLogin size={24} />  }
          {/* {user?.name?"welcome"+" "+user.name:<AiOutlineLogin size={24} /> } */}
            {/* <AiOutlineLogin size={24} />  */}
            </Link>
            {/* logout */}
            
            {user?.name||user?.pic?<RiLogoutCircleFill onClick={handleLogout} size={23} />:""}
            {user?.acessToken?<Link to="/cart" className="relative hover:text-gray-300">
              <FaShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 inline-block w-5 h-5 bg-red-600 text-white text-xs font-bold rounded-full text-center">
                {cartValue}
              </span>
            </Link>:""
            
}
            
            {/* Hamburger Icon */}
            {/* SCREEN GRATER THEN MD OR EQUAL MD MAKE THIS BUTTON HIDDEN */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden focus:outline-none"
            >
    
              <GiHamburgerMenu/>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-pink-600">
            <Link to="/"
              className="block px-4 py-2 text-white text-sm hover:bg-gray-600 hover:text-gray-300"
            >
              Home
            </Link>
            <Link to="/products"
              className="block px-4 py-2 text-sm hover:bg-gray-600 hover:text-gray-300"
            >
              Products
            </Link>
            <Link
              to="orders"
              className="block px-4 py-2 text-sm hover:bg-gray-600 hover:text-gray-300"
            >
              Orders
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
