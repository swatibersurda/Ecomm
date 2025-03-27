// // import { useSelector } from "react-redux";
// import { Navigate, Outlet } from "react-router-dom";
// // import { selectUser } from "../redux/reducer/useReducer";


// export const IsProtectedRoute = ({ isAuthenticated}) => {

//     if(isAuthenticated===null) return null;
//   return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace ={true}/>;
// };


import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  isAuthenticated: boolean | null;
}

export const IsProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAuthenticated }) => {
  if (isAuthenticated === null) return null;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace={true} />;
};
