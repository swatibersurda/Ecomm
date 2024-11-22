import Navbar from "./Navbar"
import myIm from "../assets/2.jpg"


 const Cart = () => {
  return (
    <div>
     <Navbar/>
     <h3 className="text-3xl text-pink-600 text-center mt-20">Your Cart !</h3>
     {/* map doing cart get from backensdd */}
     <div className="max-w-[800px] border border-red-700 flex flex-col md:flex-row mx-auto gap-2 md:gap-12 mt-12 py-1 px-1">
      <div className="sm:w-full md:w-1/4  border border-yellow-400">
      <img src={myIm} width={"100%"} className="w-full h-full object-cover"/>
      </div>
      <div className="sm:w-full md:w-1/10 border border-red-400 ml-1">
      <h5 className="font-bold text-lg">Jeans vcxscxvscxvs</h5> 
      <p className="font-serif ">qty:2</p>
      </div>
      <div className="sm:w-full  border border-green-400"> <h5 className="font-serif text-lg">9000 Rs</h5> </div>
     
     </div>
     {/* secong poduct */}
     <div className="max-w-[800px] border border-red-700 flex flex-col md:flex-row mx-auto gap-2 md:gap-12 mt-12 py-1 px-1">
      <div className="sm:w-full md:w-1/4  border border-yellow-400">
      <img src={myIm} width={"100%"} className="w-full h-full object-cover"/>
      </div>
      <div className="sm:w-full md:w-1/10 border border-red-400 ml-1">
      <h5 className="font-bold text-lg">Jeans vcxscxvscxvs</h5> 
      <p className="font-serif ">qty:2</p>
      </div>
      <div className="sm:w-full  border border-green-400"> <h5 className="font-serif text-lg">9000 Rs</h5> </div>
     
     </div>
    </div>
  )
}
export default Cart

