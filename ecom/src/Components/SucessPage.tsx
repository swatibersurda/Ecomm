import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTokenBasedLoginMutation } from '../redux/api/userAPI'
import { selectUser, userExist, userNotExist } from '../redux/reducer/useReducer'
import { useLazyGetcartByIDQuery } from '../redux/api/cartAPI'
import { useSelector } from 'react-redux'
import { setCart } from '../redux/reducer/cartReducer'
import Navbar from './Navbar'

const SucessPage = () => {
  const token=localStorage.getItem("token")
  const [trigger,{data:userData}]=useTokenBasedLoginMutation()
  const[triggerCart,{data}]=useLazyGetcartByIDQuery()
  const dispatch=useDispatch();
  const user=useSelector(selectUser)

  useEffect(()=>{
   if(token){
    trigger(token)
    // token based user get 
   }
  },[token])


   useEffect(()=>{
     if(userData){
      dispatch(userNotExist())
      dispatch(userExist(userData?.data))
      localStorage.setItem("token",userData?.data?.acessToken)
     }
    },[userData,dispatch])

     useEffect(()=>{
        if(user){
          
          triggerCart({id:user?._id})
        }
      },[user])
      
      useEffect(()=>{
          dispatch(setCart(data?.data?.items))
    
    },[data,dispatch])
  
  return (
    <div>
      <Navbar/>
      <div className="absolute inset-0 opacity-10 flex justify-center items-center pointer-events-none">
        <p className="text-[120px] font-extrabold text-pink-300 select-none">DoorSHOP</p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center h-[80vh] z-10 relative">
        <h1 className="text-pink-600 font-bold text-6xl text-center">
          Thanks for shopping
        </h1>
      </div>
    </div>
  )
}

export default SucessPage
