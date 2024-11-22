// import Navbar from "./Navbar"

// import Header from "./Header"
import Navbar from "./Navbar";
import myIm from "../assets/3.jpg";

const Home = () => {
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
