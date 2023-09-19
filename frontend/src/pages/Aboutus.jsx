// Anthea's Code 

import Banner from "../components/Banner";
import ServiceCard from "../components/ServiceCard";
import NewsLetter from "../components/Newsletter";

// Callouts
function Aboutus() {
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

  // Info

  return (
    <div>
      <Banner title="About Us" backgroundimg="about-banner.jpg" />

      <div className="flex flex-col justify-center items-center md:px-[100px] mx-auto my-16">
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

        <div className="grid grid-cols-1 gap-x-5 md:grid-cols-2 px-16 max-auto justify-center items-center  my-10">
          <img src="/shoes.jpg" alt="shoes" className="w-full h-full" />
          <div className="flex flex-col justify-center items-left space-y-5">
            <h2 className="text-4xl font-thin uppercase">Who We are</h2>
            <p className="text-[16px] font-light text-[#303030]">
              The Lux Portal is an online portal where the confluence of style,
              authenticity, opulence, craftsmanship and the finest in the world
              merge to offer you the fine things in life. Whether you are a
              discerning collector seeking to add to your collection with that
              missing piece or a first time buyer looking to acquire a genuine
              pre loved high end item, The Lux Portal is your genesis.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-5 md:grid-cols-2 px-16 max-auto justify-center items-center  my-10">
          <div className="flex flex-col justify-center items-left space-y-5">
            <h2 className="text-4xl font-thin uppercase">What we offer</h2>
            <p className="text-[16px] font-light text-[#303030]">
              Our minimum standard is high end, luxurious, exclusive, sort
              after, highly collectable, designer clothing and accessories
              incorporating items such as shoes, bags, belts, gowns, jewellery,
              watches, sunglasses among others. If you believe it meets the
              criteria and specification of our offering, we invite you to
              contact us to explore the viability of offering any item on our
              platform. Items which are mass produced, fake, counterfeit or
              without proof of ownership will definitely not be considered.
            </p>
          </div>
          <img src="/jackets.jpg" alt="shoes" className="w-full h-full" />
        </div>

        <div className="grid grid-cols-1 gap-x-5 md:grid-cols-2 px-16 max-auto justify-center items-center  my-10">
          <img src="/bag.jpg" alt="shoes" className="w-full h-full" />
          <div className="flex flex-col justify-center items-left space-y-5">
            <h2 className="text-4xl font-thin uppercase">selling</h2>
            <p className="text-[16px] font-light text-[#303030]">
              The Lux Portal allows you two ways in which to sell your luxury
              goods. One is for you to handle the control of the sale by
              preparing the item for sale, taking photographs and uploading them
              with the details to your profile and making sure the item gets
              dispatched upon a sale to our offices for verification and final
              dispatch. The other is for The Lux Portal to undertake everything,
              we will even arrange a courier to collect your items.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-5 md:grid-cols-2 px-16 max-auto justify-center items-center  my-10">
          <div className="flex flex-col justify-center items-left space-y-5">
            <h2 className="text-4xl font-thin uppercase">Our Guarantee</h2>
            <p className="text-[16px] font-light text-[#303030]">
              Items which are mass produced, fake, counterfeit or without proof
              of ownership will definitely not be considered. All items will the
              authenticated by ourselves or reputable companies. If you are
              selling via our platform the item will be couriered to out offices
              and will be thoroughly checked before any payment is released.
            </p>
          </div>
          <img src="/belt.jpg" alt="shoes" className="w-full h-full" />
        </div>
      </div>
      <NewsLetter />
    </div>
  );
}

export default Aboutus;
