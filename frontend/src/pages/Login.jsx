// Anthea's Code

import Banner from "../components/Banner";
import InputField from "../components/InputField";
import NewsLetter from "../components/NewsLetter";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const handleLogin = async () => {
    const response = await axios.post("http://localhost:4000/login", {
      email,
      password,
    });
    if (response.data.token) {
      toast.success("You have logged in successfully");
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("uid", response.data.user._id);
      history("/addlisting");
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div>
      <Banner title="Login" backgroundimg="Watch.png" />

      <div className="flex flex-col items-left justify-start md:w-[700px] mx-auto my-20">
        <h2 className="text-3xl font-[400] text-black uppercase">login</h2>
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
          onClick={handleLogin}
        >
          Login
        </button>

        <div className="flex flex-col  gap-5 mt-5">
          <a href="#" className="text-base text-gray-600 hover:underline">
            Lost your password?
          </a>
          <p href="#" className="text-base text-gray-600 ">
            Do not have an account?
            <Link
              to="/signup"
              className="text-black hover:underline hover:cursor-pointer"
            >
              Register with us
            </Link>
          </p>
        </div>
      </div>

      <NewsLetter />
    </div>
  );
}

export default Login;
