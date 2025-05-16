import forget from "../assets/forget2.png";
import wave from "../assets/forget.png";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ForgetPassword() {
  const navigate = useNavigate();
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
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
    navigate('/otp');
  };

  return (
    <div className="flex overflow-y-auto text-black bg-white font-sans">
      <div className={`hidden lg:flex flex-1 text-white relative transition-transform duration-700 ease-in-out ${isLoaded ? 'translate-x-0' : '-translate-x-full'}`}>
        <img src={forget} alt="" className={`w-full object-cover ${screenHeight <= 840 ? 'h-full' : 'h-screen'}`} />
        <div className="absolute top-12 px-16 py-8">
          <h1 className="font-bold text-[42px]">Forget Password?</h1>
          <p>Recover your password.</p>
        </div>
      </div>
      <div className={`w-full lg:w-[46%] flex items-center justify-center transition-transform duration-700 ease-in-out ${isLoaded ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="max-w-lg w-full p-6">
          <div className="flex justify-center">
            <img src={wave} alt="..." className="w-[90px] h-[90px]" />
          </div>
          <h1 className="lg:text-2xl text-xl font-sans font-semibold mb-3 text-black text-center">Forgot Password</h1>
          <h1 className="text-base text-center text-gray-250">To reset your password enter your registered email</h1>
          <form className="space-y-12 mt-12" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block mb-2 text-[16px] text-black">Email Address/Mobile Number</label>
              <input
                type="email"
                name="email"
                className="w-full rounded-lg border border-gray-250 p-4 text-base placeholder:text-gray-250 focus:outline-none"
                placeholder="Name@gmail.com"
                autoComplete="off"
                required
              />
            </div>
            <div>
              <Link to="/otp">
                <button className="bg-red-150 py-3.5 w-full cursor-pointer rounded-lg text-white lg:text-lg font-inter text-base text-center" type="submit">Submit</button>
              </Link>
            </div>
          </form>
          <p className="mt-9 mb-4 text-center text-xs text-black">©2024, All rights reserved</p>
        </div>
      </div>
    </div>
  );
}