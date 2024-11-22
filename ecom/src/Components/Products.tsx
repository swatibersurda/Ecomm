import React from 'react'
import myIm from "../assets/2.jpg"
import Navbar from './Navbar'
import { FaShoppingBag } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div>
      <Navbar/>
      <div className='max-w-full px-10 mt-12 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 '>
        <div className='text-center shadow-lg'>
            
            <div className='overflow-hidden'>
            <img src={myIm} className='hover:scale-125 duration-1000'/>

            </div>
            <h3 className='py-1 text-xl font bold'>Jeans</h3>
            <p className='py-1'>Rs 8000</p>
            <div className='mb-0 w-full mx-auto items-center'>

            <button className='bg-pink-500 px-1 py-1 w-full items-center rounded text-white flex  justify-center gap-2 hover:bg-pink-800'><FaShoppingBag size={20} className='items-center'/> Cart</button>
            </div>
        </div>
        <div className='text-center shadow-lg'>
            
            <div className='overflow-hidden'>
            <img src={myIm} className='hover:scale-125 duration-1000'/>

            </div>
            <h3 className='py-1 text-xl font bold'>Jeans</h3>
            <p className='py-1'>Rs 8000</p>
            <div className='mb-0 w-full mx-auto items-center'>

            <button className='bg-pink-500 px-1 py-1 w-full items-center rounded text-white flex  justify-center gap-2 hover:bg-pink-800'><FaShoppingBag size={20} className='items-center'/> Cart</button>
            </div>
        </div>
        <div className='text-center shadow-lg'>
            
            <div className='overflow-hidden'>
            <img src={myIm} className='hover:scale-125 duration-1000'/>

            </div>
            <h3 className='py-1 text-xl font bold'>Jeans</h3>
            <p className='py-1'>Rs 8000</p>
            <div className='mb-0 w-full mx-auto items-center'>

            <button className='bg-pink-500 px-1 py-1 w-full items-center rounded text-white flex  justify-center gap-2 hover:bg-pink-800'><FaShoppingBag size={20} className='items-center'/> Cart</button>
            </div>
        </div>
        <div className='text-center shadow-lg'>
            
            <div className='overflow-hidden'>
            <img src={myIm} className='hover:scale-125 duration-1000'/>

            </div>
            <h3 className='py-1 text-xl font bold'>Jeans</h3>
            <p className='py-1'>Rs 8000</p>
            <div className='mb-0 w-full mx-auto items-center'>

            <button className='bg-pink-500 px-1 py-1 w-full items-center rounded text-white flex  justify-center gap-2 hover:bg-pink-800'><FaShoppingBag size={20} className='items-center'/> Cart</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Products
