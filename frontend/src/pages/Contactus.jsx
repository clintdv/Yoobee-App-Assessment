import Banner from "../components/Banner";
import InputField from "../components/InputField";
import { useState } from "react";
function Contactus() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");
    const [phone, setPhone] = useState("");
  return (
    <div>
      <Banner title="Contact Us" backgroundimg="contact-banner.png" />

      <div className="flex flex-col justify-center items-center mx-auto my-16 md:max-w-3xl ">
        <h1 className="text-4xl font-thin uppercase">got any questions?</h1>
        <p className="text-[16px] font-light text-[#303030]">
          Use the form below to get in touch with us.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10 w-full">
          <InputField
            type="text"
            label="Your name *"
            placeholder="Name"
            value={name}
            setValue={setName}
          />
          <InputField
            type="email"
            label="Your email *"
            placeholder="Email"
            value={email}
            setValue={setEmail}
          />
          <InputField
            type="text"
            placeholder="Subject"
            label="Subject"
            value={subject}
            setValue={setSubject}
          />
          <InputField
            type="text"
            placeholder="Phone"
            label="Phone"
            value={phone}
            setValue={setPhone}
          />
        </div>
        <div className="flex flex-col w-full justify-center items-center">
            <p className="text-[18px] text-left w-full font-light ">Message</p>
          <textarea
            className="w-full h-40 border-[1px] border-[#b7b7b7] p-5"
            placeholder="Message"
            
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button className="bg-black text-white px-4 py-2 w-max my-4">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contactus