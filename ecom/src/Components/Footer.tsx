// import React from 'react';

export const Footer = () => {
  return (
    <div className="flex flex-row gap-5 w-full bg-pink-600 justify-center p-5 text-white">
      <div className="w-[300px] text-center">
        <ul className="space-y-2">
          <li>About</li>
          <li>Order</li>
          <li>Cart</li>
        </ul>
      </div>
      <div className="w-[300px] text-center">
        <ul className="space-y-2">
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="w-[300px] text-center">
        <ul className="space-y-2">
          <li>Support</li>
          <li>FAQs</li>
          <li>Blog</li>
        </ul>
      </div>
    </div>
  );
};
