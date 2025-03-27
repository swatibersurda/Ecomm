import Navbar from "./Navbar";
import myIm from "../assets/3.jpg";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useTokenBasedLoginMutation } from "../redux/api/userAPI";
import { useDispatch } from "react-redux";
import { selectUser, userExist, userNotExist } from "../redux/reducer/useReducer";
import { useSelector } from "react-redux";
// import Slider from "./Slider";
import Sliderr from "./Slider";
import { Footer } from "./Footer";
import { useLazyGetcartByIDQuery } from "../redux/api/cartAPI";
import { setCart } from "../redux/reducer/cartReducer";


// 1.here first need to make a quser find user and then store that user on store.
const Home = () => {
  
  
  const user=useSelector(selectUser)
  const dispatch = useDispatch();
  const[triggerCart,{data}]=useLazyGetcartByIDQuery()
  const [trigger,{data:userData}]=useTokenBasedLoginMutation()
  const [searchParams]=useSearchParams();
  const token=searchParams.get("token")

    useEffect(()=>{
     trigger(token as string)
  
    },[token])
  useEffect(()=>{
   if(userData){
    dispatch(userNotExist())
    dispatch(userExist(userData?.data))
    localStorage.setItem("token",userData?.data?.acessToken)
   }
  },[userData,dispatch])

  // this useeffect is for the googleauth after getting token we need to save that user on the redux
 


  useEffect(()=>{
    if(user){
      
      triggerCart({id:user?._id})
    }
  },[user])
  
  useEffect(()=>{
      dispatch(setCart(data?.data?.items))

},[data,dispatch])

  return (
    <>
      <Navbar />
      <div className="w-full max-w-[1400px] mx-auto my-5 max-h-[200]">
        <Sliderr />
      </div>
      {/* <div className="relative w-full h-screen overflow-hidden"> */}
      <div className="relative w-full h-[300px] overflow-hidden">
        <img
          src={myIm}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <Footer/>
    </>
  );
};

export default Home;
