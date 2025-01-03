import { lazy, Suspense } from "react";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./Components/Loader";
const Home = lazy(() => import("./Components/Home"));
const Register = lazy(() => import("./Components/Register"));
const Login = lazy(() => import("./Components/Login"));
const Cart = lazy(() => import("./Components/Cart"));
const Order = lazy(() => import("./Components/Order"));
const ForgetPassword=lazy(()=>import("./Components/ForgetPassword"))
const ChangedPassword=lazy(()=>import("./Components/ChangedPassword"))
const Products=lazy(()=>import("./Components/Products"))
const ProductDetails=lazy(()=>import("./Components/ProductDetails"))
const ShippingForm=lazy(()=>import("./Components/ShippingForm"))
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/forgetpass" element={<ForgetPassword />} />
          <Route path="/changepass" element={<ChangedPassword />} />
          <Route path="/products" element={<Products/>}/>
          <Route path="/product/:id" element={<ProductDetails/>}/>
          <Route path="/shipping" element={<ShippingForm/>}/>
        </Routes>
      </Suspense>
      <Toaster position="top-left"/>
    </BrowserRouter>
  );
}

export default App;
