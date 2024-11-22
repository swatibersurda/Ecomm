import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen,"I AM")
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
            <Link to="/cart" className="relative hover:text-gray-300">
              <FaShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 inline-block w-5 h-5 bg-red-600 text-white text-xs font-bold rounded-full text-center">
                3
              </span>
            </Link>

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
