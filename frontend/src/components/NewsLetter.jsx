
import InputField from "./InputField";
import { useState } from "react";
function NewsLetter() {
    const [email, setEmail] = useState("");
  return (
    <div className="bg-[url('/newsletter-back.jpg')] bg-cover bg-center h-[350px] w-full justify-center flex-col flex items-center">
      <h1 className="text-4xl font-normal text-white uppercase mb-10">
        sign up for our newsletter
      </h1>
        <div className="md:w-[700px] mx-auto w-full ">
        <InputField
            placeholder="Write your email address here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"    
        />
        <button className="bg-black text-white px-10 py-3 mt-5 w-full " onClick={() => alert("You have registered successfully")}>
          sign up
        </button>
        </div>

    </div>
  );
}

export default NewsLetter