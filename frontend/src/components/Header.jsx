// Clint's Code

// Header
import { useGlobalContext } from "../utils/ContextProvider";
import {useState} from 'react'
import { Link } from "react-router-dom";

function Header() {
  const { myCart} = useGlobalContext();
  const [toggleHeader, setToggleHeader] = useState(false)

    const HeaderLinks = [
      {
        title: "Home",
        link: "/",
      },
      {
        title: "About",
        link: "/about",
      },
      {
        title: "Shop",
        link: "/shop",
      },
      {
        title: "Sell",
        link: "/addlisting",
      },
      {
        title: "Contact",
        link: "/contact",
      },
    ];

  return (
    <div className="header h-16 flex-row py-5  text-white flex items-center justify-between px-4 z-100">
      <img
        src="/tlp-logo.png"
        alt="logo"
        height={18}
        width={180}
        className="md:block hidden"
      />
      <img
        src="/tlp-logo.png"
        alt="logo"
        height={18}
        width={120}
        className="md:hidden block"
      />

      <div
        className={`md:flex hidden flex-row items-center space-x-7 bg-white`}
      >
        {HeaderLinks.map((link, key) => (
          <div key={key}>
            <Link
              className="uppercase hover:underline text-black"
              to={link.link}
            >
              {link.title}
            </Link>
          </div>
        ))}
      </div>

      <div
        className={`md:hidden flex flex-col overflow-hidden items-center space-y-2   absolute top-16 left-0 w-full bg-white  transition-all ease-in-out duration-500
        ${toggleHeader ? "h-40" : "h-0"}`}
        style={{ zIndex: 10 }}
      >
        {HeaderLinks.map((link, key) => (
          <div key={key}>
            <a
              className="uppercase hover:underline text-black"
              href={link.link}
            >
              {link.title}
            </a>
          </div>
        ))}
      </div>

      <div className="flex flex-row items-center space-x-4">
        <Link className="uppercase text-black" to="/mycart">CART 
        ( {myCart.length} )</Link>
        <div className="hover:cursor-pointer">
          <img src="/la_user.png" alt="bars" height={25} width={25} />
        </div>
        <div className="hover:cursor-pointer">
          <img src="/la_search.png" alt="bars" height={25} width={25} />
        </div>
        <div className="hover:cursor-pointer">
          <img
            src="/la_bars.png"
            alt="bars"
            height={25}
            width={25}
            onClick={() => setToggleHeader(!toggleHeader)}
          />
        </div>
      </div>
    </div>
  );
}

export default Header