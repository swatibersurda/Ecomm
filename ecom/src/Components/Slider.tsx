import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://img.freepik.com/free-photo/happy-asian-teen-woman-sitting-sofa-with-shopping-bags-gift-box-holding-smartphone_74952-4130.jpg?text=Slide+1",
  "https://img.freepik.com/premium-photo/shopping-promotions-advertisement-pink-isolate-background_1151178-9441.jpg?text=Slide+2",
  "https://img.freepik.com/free-photo/stylish-woman-with-shopping-bags_23-2148733286.jpg?text=Slide+3",
];

const Sliderr = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((img, index) => (
        <div key={index}>
          <img src={img} alt={`Slide ${index + 1}`} className="w-full h-[300px]" />
        </div>
      ))}
    </Slider>
  );
};

export default Sliderr;
