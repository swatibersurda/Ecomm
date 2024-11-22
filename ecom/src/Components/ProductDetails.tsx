import Navbar from "./Navbar";

const ProductDetails = () => {
  // this data will also come from fetching the product by id come from params and that id will be fetched by rtk and will be setteled here.
  return (
    <div>
      <Navbar />
      <div className="max-w-full border border-pink-900 flex justify-center items-center gap-5 py-4 px-10">
        <div className="w-1/2  border border-green-150 mt-20 bg-gray-500" >
        </div>
        <div className="w-1/2 border border-red-450 mt-20">i am</div>
      </div>
    </div>
  );
};

export default ProductDetails;
