import  { FormEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { selectUser, userExist } from '../redux/reducer/useReducer';
import { useAddProfilePicMutation } from '../redux/api/userAPI';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { User } from '../redux/types/type';

const UserProfile = () => {

  const user=useSelector(selectUser)  
  // const [name, setName] = useState("");
  const [email] = useState("");
  // const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [img,setImg]=useState<File|null>(null);
  const [preview,setpreview]=useState<string|null>(null)
  const [addProfilePic]=useAddProfilePicMutation()
  const dispatch=useDispatch();
  const navigate=useNavigate();




const handleChangeImag=(event:React.ChangeEvent<HTMLInputElement>)=>{
  event.preventDefault(); 
const file=event.target.files?.[0];
if(file){
setImg(file)
setpreview(URL.createObjectURL(file))
}
}
const handleSubmit=async(e:FormEvent<HTMLFormElement>)=>{
  e.preventDefault(); 
  const formData=new FormData()
  formData.append("email",email)
  if (user?._id) {
    formData.append("id", user._id);
  } else {
    toast.error("User ID is missing");
    return;
  }
  if(img){

    formData.append("pic",img)
  }
  formData.append("phone",phone)
  try{
    console.log(formData)
const res=await addProfilePic(formData)
// if profile pic saved then should display updated profile pic then trigger userexist
dispatch(userExist(res?.data?.data as User));
 toast.success(res?.data?.message as string);
navigate("/")
  }catch(err){
   toast.error("Error Uploading Pic")
  }
}
useEffect(()=>{
if(user){
  setPhone(user?.phone||"")
}
},[user])
  
  return (
    <div>
      <div className="max-w-[1200px] mx-auto  bg-red-50 rounded px-4 sm:px-6 my-3 lg:px-8">
        <h1 className="text-center text-3xl text-pink-400 mt-10 pt-3 sm:pt-10">
          Add Profile pic Here!!
        </h1>
        <form className="space-y-3 mt-2 max-h-screen overflow-y-auto" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="max-w-[600px] mx-auto">
            <label
              htmlFor="name"
              className="block text-lg sm:text-2xl font-medium text-gray-700 font-serif"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              value={user?.name}
            //   onChange={(e) => setName(e.target.value)}
              className="text-base sm:text-lg block w-full p-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            />
          </div>
          {/* Email Field */}
          <div className="max-w-[600px] mx-auto">
            <label
              htmlFor="email"
              className="block text-lg sm:text-2xl font-medium text-gray-700 font-serif"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={user?.email}
            //   onChange={(e) => setEmail(e.target.value)}
              className="text-base sm:text-lg block w-full p-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            />
          </div>
          {/* Phone Field */}
          <div className="max-w-[600px] mx-auto">
            <label
              htmlFor="phone"
              className="block text-lg sm:text-2xl font-medium text-gray-700 font-serif"
            >
              Phone
            </label>
            <input onChange={(e)=>setPhone(e.target.value)}
              id="phone"
              type="text"
              value={phone}
            //   onChange={(e) => setPhone(e.target.value)}
              className="text-base sm:text-lg block w-full p-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            />
          </div>
          {/* pic uplaod */}
          <div className="max-w-[600px] mx-auto">
         
            <label
              htmlFor="pic"
              className="block text-lg sm:text-2xl font-medium text-gray-700 font-serif"
            >
              Upload Pic
            </label>
            <input
              id="pic"
              type="file"
    
              onChange={handleChangeImag}
              className="text-base sm:text-lg block w-full p-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            />
             {preview && (
        <img
          src={preview}
          alt="Preview"
          className="w-40 h-40 object-cover rounded-full border-2 border-gray-300"
        />
      )}
            {img && <p className="text-sm text-gray-600">{img?.name}</p>}
          </div>
        
          {/* Submit Button */}
          <div className="max-w-[600px] mx-auto pb-1">
            <button
              type="submit"
              className="text-lg sm:text-2xl font-bold block w-full sm:w-[200px] mx-auto p-2 border bg-pink-500 text-white rounded-md  mb-5 hover:bg-pink-600"
            >
              Submit
            </button>
          </div>
          {/* Login Link */}
         
        </form>
      </div>
    </div>
  )
}

export default UserProfile
