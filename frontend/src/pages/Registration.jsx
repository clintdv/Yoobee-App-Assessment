// Clint's Code

import Banner from "../components/Banner";
import InputField from "../components/InputField";
import NewsLetter from "../components/NewsLetter";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
  import {toast } from "react-toastify";
function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const handleRegister = async () => {
    const response = await axios.post("http://localhost:4000/addnewuser", {
      email,
      password,
    });
    if (response.data.status === "success") {
      toast.success("You have registered successfully");
      history("/login");
    } else {
      toast.error(response.data.message);
    }

  };

  return (
    <div>
      <Banner title="Register" backgroundimg="Watch.png" />

      <div className="flex flex-col items-left justify-start md:w-[700px] mx-auto my-20">
        <h2 className="text-3xl font-[400] text-black uppercase">Register</h2>
        <InputField
          placeholder="Write your username / email address here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email address"
          type="email"
        />
        <InputField
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          type="password"
        />
        <div className="flex justify-start items-left gap-x-3">
          <input
            type="checkbox"
            id="remember"
            name="remember"
            value="remember"
          />
          <label htmlFor="remember" className="text-base text-gray-600 ">
            Remember me
          </label>
        </div>

        <button
          className="bg-black text-white px-10 py-3 mt-5 w-max"
          onClick={handleRegister}
        >
          Register
        </button>
      </div>

      <NewsLetter />
    </div>
  );
}

export default Registration;
