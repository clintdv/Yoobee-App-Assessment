// Clint's Code

import Slider from "react-slick";
import {PropTypes} from "prop-types";
function CustomSlider({ products }) {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive:[
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };
  return (
    <div className="md:w-[85%] mx-auto">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product._id}>
            <img
              src={product.imageURL}
              alt={product.name}
              className=" h-[400px] object-cover"
            />
            <div className="flex flex-col  items-left">
              <p className=" uppercase">{product.title}</p>
              <p className="text-[#CA7A7A]">${product.sellingPrice}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CustomSlider;
CustomSlider.propTypes = {
  products: PropTypes.array.isRequired,
};