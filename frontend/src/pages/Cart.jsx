import { useGlobalContext } from "../utils/ContextProvider";
import { useEffect ,useState} from "react";
import axios from "axios";
import InputField from "../components/InputField";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [state, setState] = useState("");
  const navigate = useNavigate();
  const {
    setMyCart,
    myCart,
    getTotal,
    removeFromCart,
    addToCart,
    removeSingleItem,
  } = useGlobalContext();
  useEffect(() => {
    const userid = localStorage.getItem("uid");
    const token = localStorage.getItem("token");
    if (!token || !userid) {
      return;
    }
    axios
      .get(`http://localhost:4000/users/${userid}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((res) => {
        if (res.data.cart !== undefined && res.data.cart.length > 0) {
          setMyCart(res.data.cart);
          console.log(res.data.cart);
        }
      });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userid = localStorage.getItem("uid");
    if (!token) {
      return;
    }
    axios
      .post(
        `http://localhost:4000/updateusercart`,
        { userid, cart: myCart },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      });
  }, [myCart]);

  return (
    <div>
      <div className="container mx-auto max-w-6xl my-16 ">
        <div className="col-span-12 md:col-span-12 my-5">
          <h1 className="text-[2rem] font-thin text-black uppercase md:my-5">
            Cart
          </h1>

          <div className="md:grid hidden grid-cols-12 gap-4 border-b border-gray-300 pb-5">
            <div className="col-span-12 md:col-span-6 flex items-center ">
              <div className="flex flex-row items-center justify-between gap-2 w-full">
                <p className="text-[18px] font-light uppercase">Product</p>
                <p className="text-[18px] font-light uppercase"> Unit Price</p>
              </div>
            </div>

            <div className="col-span-12 md:pl-10 md:col-span-3 flex items-center">
              <div className="flex flex-row items-center justify-between gap-2 w-full">
                <p className="text-[18px] font-light uppercase">quantity</p>
                <p className="text-[18px] font-light uppercase"> Total</p>
              </div>
            </div>
          </div>

          {myCart.map((item, index) => {
            return (
              <div className="grid grid-cols-12 gap-4 my-10" key={index}>
                <div className="col-span-12 md:col-span-6 flex items-center">
                  <div className="flex flex-row items-center justify-between gap-2 w-full">
                    <img
                      src={item.imageURL}
                      alt={item.name}
                      className="w-20 h-20 object-cover"
                    />

                    <p className="text-[18px] font-light">{item.title}</p>

                    <div className="flex flex-row items-center justify-between">
                      <h2 className="text-base">{item.name}</h2>
                      <p className="text-base">$ {item.sellingPrice}</p>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-6 md:mx-10 flex items-center justify-between">
                  <div className="flex flex-row items-center justify-between">
                    <button
                      className="bg-gray-200 text-gray-500 px-3 py-2 mr-3"
                      onClick={() => removeSingleItem(item)}
                    >
                      -
                    </button>
                    <p className="text-lg">{item.quantity}</p>
                    <button
                      className="bg-gray-200 text-gray-500 px-3 py-2 ml-3"
                      onClick={() => addToCart(item)}
                    >
                      +
                    </button>
                  </div>

                  <div className="flex flex-row items-center justify-evenly w-full">
                    <p className="text-lg">
                      $ {item.quantity * item.sellingPrice}
                    </p>
                    <button
                      className="bg-gray-200 text-gray-500 px-3 py-2"
                      onClick={() => removeFromCart(item)}
                    >
                      X
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="border border-gray-300 p-5">
          <h1 className="text-[2rem] font-thin text-black uppercase md:my-5">
            Cart Summary
          </h1>
          <div className="flex flex-col justify-start items-left my-5">
            <div className="flex flex-row w-max justify-between items-center">
              <p className="text-lg uppercase">subtotal</p>
              <p className="text-lg ml-10">$ {getTotal()}</p>
            </div>

            <div className="flex flex-col md:flex-row w-full justify-between items-center mt-10">
              <p className="text-lg uppercase">shipping</p>
              <div className="flex flex-col justify-start items-left w-full md:ml-10">
                <p className="text-base font-light text-black ">
                  Enter your address to view shipping options. <br />
                  <span className="text-[#CA7A7A] hover:underline hover:cursor-pointer">
                  Calculate
                  shipping
                  </span>
                </p>
                <InputField
                  type="text"
                  placeholder="New Zealand"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
                <InputField
                  type="text"
                  placeholder="Auckland"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
                <InputField
                  type="text"
                  placeholder="Your City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <InputField
                  type="text"
                  placeholder="Zipcode"
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-row w-max justify-between items-center">
              <p className="text-lg uppercase">total</p>
              <p className="text-lg ml-16">$ {getTotal()}</p>
            </div>
          </div>


          <button className="bg-black text-white w-max px-5 py-2 mt-5"
          onClick={()=>navigate("/checkout")}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
