import login from "../assets/loginn.png"
import wave from "../assets/Wave.png"
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"

export default function Login({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    setIsLoaded(true); // Trigger animation when component mounts

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const dummyEmail = "uvivoadmin@gmail.com";
    const dummyPassword = "Admin@123";

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === dummyEmail && password === dummyPassword) {
      localStorage.setItem("isAuthenticated", "true");
      setIsAuthenticated(true);
      navigate("/", { replace: true });
    }
  };

  return (
    <div className="flex overflow-y-auto text-black bg-white font-sans">
      <div className={`hidden lg:flex flex-1 text-white relative transition-transform duration-700 ease-in-out ${isLoaded ? 'translate-x-0' : '-translate-x-full'}`}>
        <img src={login} alt="" className={`w-full object-cover ${screenHeight <= 840 ? 'h-full' : 'h-screen'}`} />
        <div className="absolute top-12 px-16 py-8">
          <h1 className="font-bold text-[42px]">Sign up</h1>
          <p>If you already have an account you can Sign in!</p>
        </div>
      </div>
      <div className={`w-full lg:w-[46%] flex items-center justify-center transition-transform duration-700 ease-in-out ${isLoaded ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="max-w-lg w-full p-6">
          <div className="flex justify-center">
            <img src={wave} alt="..." className="w-[90px] h-[90px]" />
          </div>
          <h1 className="lg:text-2xl text-xl font-sans font-semibold mb-3 text-black text-center">Sign in</h1>
          <h1 className="text-base text-center text-gray-250">Enter your credential to access your account.</h1>
          <form className="space-y-5 mt-12" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block mb-2 text-[16px] text-black">Email Address/Mobile Number</label>
              <input
                type="email"
                name="email"
                className="w-full rounded-lg border border-gray-250 p-4 text-base placeholder:text-gray-250 focus:outline-none"
                placeholder="Name@gmail.com"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-[16px] text-black">Password</label>
              <input
                type="password"
                name="password"
                className="w-full rounded-lg border border-gray-250 p-4 text-base placeholder:text-gray-250 focus:outline-none"
                placeholder="Password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex justify-end">
              <Link className="underline flex justify-end text-base text-red-150" to="/forget-password">Forget Password?</Link>
            </div>

            <button className="bg-red-150 py-3.5 cursor-pointer w-full rounded-lg text-white lg:text-lg font-inter text-base text-center" type="submit">Login</button>
          </form>
          <p className="mt-9 mb-4 text-center text-xs text-black">©2024, All rights reserved</p>
        </div>
      </div>
    </div>
  );
}