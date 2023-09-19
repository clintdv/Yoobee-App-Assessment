import Banner from "../components/Banner";
import InputField from "../components/InputField";
import { useState } from "react";
function OrderTracking() {
  const [orderid, setOrderid] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div>
      <Banner title="Order Tracking" backgroundimg="tracking-banner.png" />

      <div className="container mx-auto md:max-w-xl mb-10">
        <h1 className="text-[2rem] font-thin text-black uppercase md:my-5">
          Track your order
        </h1>
        <p className="text-base font-thin text-black md:mt-5 ">
          Please enter your Order ID and press the “Track” button. This was
          given to you on your receipt and in the confirmation email you should
          have received.
        </p>

        <InputField
          type="text"
          placeholder="Enter your order id"
          value={orderid}
          label="Order ID *"
          onChange={(e) => setOrderid(e.target.value)}
        />
        <InputField
          type="text"
          placeholder="Enter your email"
          value={email}
          label="Email *"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="bg-black text-white px-5 py-2 mt-5 w-max">
          Track Order
        </button>
      </div>
    </div>
  );
}

export default OrderTracking;
