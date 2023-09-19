import { useState } from "react";
import InputField from "../components/InputField";
import { useGlobalContext } from "../utils/ContextProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Checkout() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [country, setCountry] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
const navigate = useNavigate();
  const { myCart, getTotal, setMyCart } = useGlobalContext();

  const placeOrder = () => {
    const token = localStorage.getItem("token");
    const userid = localStorage.getItem("uid");
    if (!token) {
      return;
    }
    axios
      .post(
        `http://localhost:4000/updateusercart`,
        { userid, cart: [] },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setMyCart([]);
            navigate("/ordertracking");

      }).catch((err) => {
        console.log(err);
      }
        );
    };
  return (
    <div>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8  grid grid-cols-1 md:grid-cols-2 gap-x-5">
        <div className="col-span-1  items-left">
          <h1 className="text-[1.5rem] font-thin text-black uppercase md:my-5">
            Billing details
          </h1>

          <div className="flex flex-col justify-start items-left my-5">
            <InputField
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              label="First Name *"
            />
            <InputField
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              label="Last Name *"
            />
            <InputField
              type="text"
              placeholder="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              label="Company Name"
            />
            <InputField
              type="text"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              label="Country *"
            />
            <InputField
              type="text"
              placeholder="Street Address"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
              label="Street Address *"
            />
            <InputField
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              label="City *"
            />
            <InputField
              type="text"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
              label="State *"
            />
            <InputField
              type="text"
              placeholder="Zipcode"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
              label="Zipcode *"
            />
            <InputField
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              label="Phone *"
            />
            <InputField
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email *"
            />
          </div>
        </div>
        <div className="col-span-1 ">
          <h1 className="text-[1.5rem] font-thin text-black uppercase md:my-5">
            Additional information
          </h1>
          <p className="text-base font-thin text-black md:mt-5 ">
            Order notes (optional)
          </p>
          <textarea
            className="w-full h-40 border border-gray-300 p-5 mt-2"
            placeholder="Notes about your order, e.g. special notes for delivery."
          ></textarea>
        </div>
      </div>
      <div className=" max-w-7xl mx-auto">
        <h1 className="text-[1.5rem] font-thin text-black uppercase md:my-5">
          Your order
        </h1>
      </div>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8   grid grid-cols-1 md:grid-cols-2 gap-x-5">
        <div className="col-span-12  items-left">
          <div className="flex flex-row justify-between items-center">
            <p className="text-lg uppercase">product</p>
            <p className="text-lg uppercase">total</p>
          </div>
          <div className="flex flex-col justify-start items-left my-5">
            {myCart?.map((item, index) => {
              return (
                <div
                  className="flex flex-row w-full justify-between items-center"
                  key={index}
                >
                  <div className="flex flex-row w-full justify-between items-center">
                    <img
                      src={item.imageURL}
                      alt={item.title}
                      className="w-20 h-20 object-cover"
                    />
                    <div className="flex flex-col justify-start items-left w-full md:ml-10">
                      <p className="text-base font-thin text-black ">
                        {item.title} x {item.quantity}
                      </p>
                      <p className="text-base font-thin text-black ">
                        ${item.sellingPrice}
                      </p>
                    </div>
                  </div>
                  <p className="text-lg ml-10">
                    ${item.quantity * item.sellingPrice}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="flex flex-row justify-between items-center">
            <p className="text-lg uppercase">subtotal</p>
            <p className="text-lg uppercase">${getTotal()}</p>
          </div>
        </div>
        <button
          className="bg-black text-white px-5 py-2 mt-5 w-max"
          onClick={placeOrder}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;
