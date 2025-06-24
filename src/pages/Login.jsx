// Login.jsx
import login from "../assets/loginn.png";
import wave from "../assets/Wave.png";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase"; 
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export default function Login({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); 

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    setIsLoaded(true);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true); // Start loading

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const adminDocRef = doc(db, "admin", user.uid);
      const adminDoc = await getDoc(adminDocRef);

      if (adminDoc.exists()) {
        const adminData = adminDoc.data();
        
        if (adminData.email === email) {
          localStorage.setItem("isAuthenticated", "true");
          setIsAuthenticated(true);
          navigate("/", { replace: true });
        } else {
          setError("Email does not match admin record");
          await auth.signOut();
        }
      } else {
        setError("No admin record found");
        await auth.signOut();
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Invalid email or password");
    } finally {
      setIsLoading(false); // Stop loading
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
          
          {error && (
            <div className="text-red-500 text-center mb-4">
              {error}
            </div>
          )}

          <form className="space-y-5 mt-12" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block mb-2 text-[16px] text-black">Email Address</label>
              <input
                type="email"
                name="email"
                className="w-full rounded-lg border border-gray-250 p-4 text-base placeholder:text-gray-250 focus:outline-none"
                placeholder="Name@gmail.com"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading} // Disable input during loading
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
                disabled={isLoading} // Disable input during loading
              />
            </div>

            <div className="flex justify-end">
              <Link className="underline flex justify-end text-base text-red-150" to="/forget-password">Forget Password?</Link>
            </div>

            <button 
              className="bg-red-150 py-3.5 cursor-pointer w-full rounded-lg text-white lg:text-lg font-inter text-base text-center flex items-center justify-center"
              type="submit"
              disabled={isLoading} // Disable button during loading
            >
              {isLoading ? (
                <div className="flex items-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Logging in...
                </div>
              ) : (
                "Login"
              )}
            </button>
          </form>
          <p className="mt-9 mb-4 text-center text-xs text-black">©2024, All rights reserved</p>
        </div>
      </div>
    </div>
  );
}