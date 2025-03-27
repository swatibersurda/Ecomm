import { lazy, Suspense } from "react";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Cookies from "js-cookie";
import Loader from "./Components/Loader";
import { useSelector } from "react-redux";
import { selectUser } from "./redux/reducer/useReducer";
import { IsProtectedRoute } from "./Components/IsProtectedRoute";
const Home = lazy(() => import("./Components/Home"));
const Register = lazy(() => import("./Components/Register"));
const Login = lazy(() => import("./Components/Login"));
const Cart = lazy(() => import("./Components/Cart"));
const Order = lazy(() => import("./Components/Order"));
const ForgetPassword = lazy(() => import("./Components/ForgetPassword"));
const ChangedPassword = lazy(() => import("./Components/ChangedPassword"));
const Products = lazy(() => import("./Components/Products"));
const ShippingForm = lazy(() => import("./Components/ShippingForm"));
const SucessPage = lazy(() => import("./Components/SucessPage"));
const Userprofilepage = lazy(() => import("./Components/UserProfile"));

function App() {
  const user = useSelector(selectUser)
  const isAuth = user?.acessToken || localStorage.getItem("token") ? true : false;

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetpass" element={<ForgetPassword />} />
          <Route element={<IsProtectedRoute isAuthenticated={isAuth} />}>
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route element={<IsProtectedRoute isAuthenticated={isAuth} />}>
            <Route path="/orders" element={<Order />} />
          </Route>

          <Route path="/changepass/:token" element={<ChangedPassword />} />
          <Route element={<IsProtectedRoute isAuthenticated={isAuth} />}>
            <Route path="/products" element={<Products />} />
          </Route>

          <Route element={<IsProtectedRoute isAuthenticated={isAuth} />}>
            <Route path="/shipping" element={<ShippingForm />} />
          </Route>
          <Route element={<IsProtectedRoute isAuthenticated={isAuth} />}>
            <Route path="/userprofile" element={<Userprofilepage />} />
          </Route>
          <Route element={<IsProtectedRoute isAuthenticated={isAuth} />}>
            <Route path="/success" element={<SucessPage />} />
          </Route>
        </Routes>
      </Suspense>
      <Toaster position="top-left" />
    </BrowserRouter>
  );
}

export default App;
