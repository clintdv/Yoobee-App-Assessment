import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'

function Options() {
  const [currentURL, setCurrentURL] = useState("");
  useEffect(() => {
    setCurrentURL(window.location.pathname);
  }
  , [currentURL]);

    const options = [
      // 'profile',
      // 'listings',
      // 'purchases',
      // 'sales',
      {
        name: "Profile",
        link: "/addlisting",
      },
      {
        name: "Listings",
        link: "/mylistings",
      },
      {
        name: "Purchases",
        link: "#",
      },
      {
        name: "Sales",
        link: "#",
      },
    ];


  return (
    <div className="flex flex-col justify-center items-center h-max">
      {options.map((option, key) => (
        <div
          key={key}
          className="md:w-[200px] w-full py-1 justify-center text-center border-[1px] border-black hover:cursor-pointer hover:bg-gray-100"
        >
          <Link
            to={option.link}
            className={`text-[14px] font-normal  uppercase ${
              currentURL === option.link ? "text-[#CA7A7A]" : "text-black"
            }`}
          >
            {option.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Options