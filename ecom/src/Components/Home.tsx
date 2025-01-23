// import Navbar from "./Navbar"

// import Header from "./Header"
import Navbar from "./Navbar";
import myIm from "../assets/3.jpg";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLazyTokenBasedLoginQuery } from "../redux/api/userAPI";
import { useDispatch } from "react-redux";
import { selectUser, userExist, userNotExist } from "../redux/reducer/useReducer";
import { useSelector } from "react-redux";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

// 1.here first need to make a quser find user and then store that user on store.
const Home = () => {
  const query = useQuery();
  const token = query.get("token");
  const [trigger, { isLoading, data, error }] = useLazyTokenBasedLoginQuery();
  const dispatch = useDispatch();
  const user=useSelector(selectUser)
  console.log(user,"i am at home page")
  // console.log(token,"i am tokennn..")
  // if token there menas after that neeed to find the user on the basis of of token and
  // if(token){
  // const {data,isLoading}=useTokenBasedLoginQuery({token})
  // trigger(token)
  // }
  useEffect(() => {
    // console.log(token);
    // sending the token.
    if (token !== null) {
      trigger({ token });
    }
  }, [token, trigger]);

  useEffect(() => {
    if (data) {
      dispatch(userNotExist());
      dispatch(userExist(data));
    }
  }, [data, token]);

  return (
    <>
      <Navbar />
      {/* <div className="relative w-full h-screen overflow-hidden"> */}
      <div className="relative w-full h-[calc(100vh-4rem)] overflow-hidden">
        <img
          src={myIm}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
};

export default Home;
