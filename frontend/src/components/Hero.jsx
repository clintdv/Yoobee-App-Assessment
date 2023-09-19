// Clint's Code

//Header Hero Image

import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();

  return (
    <div className=" bg-[url('/banner-main.jpg')] bg-cover bg-center h-[100vh] w-full justify-center flex-col flex items-center">
      <div className="flex flex-col justify-start items-left md:ml-[200px] ">
        <h1 className="text-[3rem] font-thin text-white uppercase">
          Shop. sell. repeat.
        </h1>
        <p className="text-[14px] text-white">
          Where luxury legacy brands live longer.
        </p>
        <button className="bg-white text-black px-4 py-2 mt-4 uppercase w-max" onClick={()=>navigate("/shop")}>
          shop collection
        </button>
      </div>
   
    </div>
  );
}

export default Hero;
