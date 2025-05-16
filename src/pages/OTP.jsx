import otp2 from "../assets/otp.png";
import wave from "../assets/forget.png";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function OTP() {
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
    navigate('/new-password');
  };

  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (!/^[0-9]*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, otp.length);
    if (!/^[0-9]{1,4}$/.test(pasteData)) return;
    setOtp([...pasteData.split(""), ...Array(otp.length - pasteData.length).fill("")]);
    inputRefs.current[pasteData.length - 1].focus();
  };

  return (
    <div className="flex overflow-y-auto text-black bg-white font-sans">
      <div className={`hidden lg:flex flex-1 text-white relative transition-transform duration-700 ease-in-out ${isLoaded ? 'translate-x-0' : '-translate-x-full'}`}>
        <img src={otp2} alt="" className={`w-full object-cover ${screenHeight <= 840 ? 'h-full' : 'h-screen'}`} />
        <div className="absolute top-12 px-16 py-8">
          <h1 className="font-bold text-[42px]">Enter Your OTP</h1>
          <p>Please enter the OTP sent to you to recover your password.</p>
        </div>
      </div>
      <div className={`w-full lg:w-[46%] flex items-center justify-center transition-transform duration-700 ease-in-out ${isLoaded ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="max-w-lg w-full p-6">
          <div className="flex justify-center">
            <img src={wave} alt="..." className="w-[90px] h-[90px]" />
          </div>
          <h1 className="lg:text-2xl text-xl font-sans font-semibold mb-3 text-black text-center">Enter OTP</h1>
          <h1 className="text-base text-center text-gray-250 max-w-[449px]">Enter the OTP code we just sent you on your registered Email/Phone number</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center gap-3 my-7">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength="1"
                  className="w-[70px] h-[70px] text-center text-2xl font-extrabold text-slate-900 bg-[#FAFAFA] border border-[#E7E7E7] hover:border-slate-200 rounded-lg p-4 outline-none focus:bg-white focus:border-red-150 focus:ring-2 focus:ring-red-150"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                />
              ))}
            </div>
            <p className="font-sans text-gray-150 my-6 text-center">Did you get OTP? <span className="text-red-150">Send Again</span></p>
            <div>
              <Link to="/new-password">
                <button className="bg-red-150 py-3.5 w-full cursor-pointer rounded-lg text-white lg:text-lg font-inter text-base text-center" type="submit">Verify OTP</button>
              </Link>
            </div>
          </form>
          <p className="mt-9 mb-4 text-center text-xs text-black">©2024, All rights reserved</p>
        </div>
      </div>
    </div>
  );
}