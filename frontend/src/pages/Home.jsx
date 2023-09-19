import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import CategoryCard from "../components/CategoryCard";
import CustomSlider from "../components/CustomSlider";
import Brands from "../components/Brands";
import { useState,useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";

function Home() {
  const [products, setProducts] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("http://localhost:4000/productslist");
      setProducts(data);
    };
    fetchProducts();
  }, []);
  const Services = [
    {
      img: "/calendar.png",
      title: "Book an appointment",
      text: "At imperdiet dui accumsan sit amet nulla risus est ultricies quis.",
    },
    {
      img: "/akar-icons_shopping-bag.png",
      title: "Pick up in store",
      text: "At imperdiet dui accumsan sit amet nulla risus est ultricies quis.",
    },
    {
      img: "/akar-icons_gift.png",
      title: "Special Packaging",
      text: "At imperdiet dui accumsan sit amet nulla risus est ultricies quis.",
    },
    {
      img: "/cycle.png",
      title: "Free global returns",
      text: "At imperdiet dui accumsan sit amet nulla risus est ultricies quis.",
    },
  ];

  const Categories = [
    {
      backgroundimg: "image-shop.jpg",
      title: "Shop",
      link: "Shop it now",
    },
    {
      backgroundimg: "imagesell.jpg",
      title: "sell",
      link: "sell it now",
    },
    {
      backgroundimg: "image-create.png",
      title: "Create Account",
      link: "buy and sell now",
    },
  ];

 

  return (
    <div>
      <Hero />
      <div className="grid grid-cols-1  md:grid-cols-4 px-16 max-auto justify-center items-center  my-16">
        {Services.map((service, key) => (
          <ServiceCard
            key={key}
            img={service.img}
            title={service.title}
            text={service.text}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mx-auto justify-center items-center  my-16">
        {Categories.map((category, key) => (
          <CategoryCard
            key={key}
            backgroundimg={category.backgroundimg}
            title={category.title}
            link={category.link}
          />
        ))}
      </div>
      <CustomSlider products={products} />

      <div className="grid grid-cols-1 bg-[#F1F1F0] md:grid-cols-2 max-auto   my-16">
        <img src="/small-banner.jpg" alt="" className="h-[500px] " />

        <div className="flex flex-col items-left justify-center md:px-[50px] ">
          <h6 className="text-black md:text-[50px] font-thin uppercase">
            Classic Spring Collection.
          </h6>
          <p className="text-[18px] text-[#303030] font-[300]">
          Buy & sell pre-loved clothing on our marketplace. Choose from thousands of amazing outfits from your favourite designers.
          </p>
          <button className="bg-black text-white w-max py-2 px-4 uppercase mt-5">
            Shop collection
          </button>
        </div>
      </div>
      <CustomSlider products={products} />

      <div className="my-[100px] bg-[#FFFFFF] max-auto ">
        <Slider {...settings}>
          <div>
            <h3 className="text-black md:text-[50px] font-thin uppercase md:w-[800px] text-center mx-auto">
              “The handbag was delivered in two days, was beautifully packaged, just as shown in the pictures.”
            </h3>
            <p className="text-[18px] text-[#9C9C9C] font-[300] uppercase text-center  mx-auto">
              Colleen M.
            </p>
          </div>
          <div>
            <h3 className="text-black md:text-[50px] font-thin uppercase md:w-[800px] text-center mx-auto">
              “Every detail was meticulously taken care of, ensuring the safe arrival of my purchase.”
            </h3>
            <p className="text-[18px] text-[#9C9C9C] font-[300] uppercase text-center  mx-auto">
              Amanda C.
            </p>
          </div>
        </Slider>
      </div>
      <Brands />
    </div>
  );
}

export default Home;
