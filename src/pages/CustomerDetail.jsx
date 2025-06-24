// CustomerDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import profile from "../assets/profile10.png";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import FreezeModal from "../components/FreezeModal";
import BlockModal from "../components/BlockModal";
import WarningModal from "../components/WarningModal";

export default function CustomerDetail() {
  const { customerId } = useParams(); // Get user ID from URL parameters
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Photos");
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFreezeModalOpen, setIsFreezeModalOpen] = useState(false);
  const [isBlockModalOpen, setIsBlockModalOpen] = useState(false);
  const [isWarningModalOpen, setIsWarningModalOpen] = useState(false);

  const tabs = ["Photos", "Videos", "Gifts", "Earnings & Withdraws", "Content Reports", "Subscriptions"];

  const tabContent = {
    "Photos": (
      <div className="grid grid-cols-5 gap-4">
        {["photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg", "photo5.jpg"].map((photo, index) => (
          <div key={index} className="w-full h-40 bg-gray-300 rounded-lg"></div>
        ))}
      </div>
    ),
    "Videos": (
      <div className="grid grid-cols-4 gap-4">
        {["video1.jpg", "video2.jpg", "video3.jpg", "video4.jpg"].map((video, index) => (
          <div key={index} className="w-full h-40 bg-gray-300 rounded-lg"></div>
        ))}
      </div>
    ),
    "Gifts": (
      <div className="grid grid-cols-4 gap-4">
        {["gift1.jpg", "gift2.jpg", "gift3.jpg", "gift4.jpg"].map((gift, index) => (
          <div key={index} className="w-full h-40 bg-gray-300 rounded-lg"></div>
        ))}
      </div>
    ),
    "Earnings & Withdraws": (
      <div className="grid grid-cols-4 gap-4">
        {["earning1.jpg", "earning2.jpg", "earning3.jpg", "earning4.jpg"].map((earning, index) => (
          <div key={index} className="w-full h-40 bg-gray-300 rounded-lg"></div>
        ))}
      </div>
    ),
    "Content Reports": (
      <div className="grid grid-cols-4 gap-4">
        {["report1.jpg", "report2.jpg", "report3.jpg", "report4.jpg"].map((report, index) => (
          <div key={index} className="w-full h-40 bg-gray-300 rounded-lg"></div>
        ))}
      </div>
    ),
    "Subscriptions": (
      <div className="grid grid-cols-4 gap-4">
        {["sub1.jpg", "sub2.jpg", "sub3.jpg", "sub4.jpg"].map((subscription, index) => (
          <div key={index} className="w-full h-40 bg-gray-300 rounded-lg"></div>
        ))}
      </div>
    ),
  };

  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true);
      try {
        const userDoc = await getDoc(doc(db, "app_users", customerId));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        } else {
          setUserData(null); // Handle user not found
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUserData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [customerId]);

  const handleStatusChange = (newStatus) => {
    setUserData((prev) => prev && { ...prev, status: newStatus });
  };

  if (isLoading) {
    return (
      <div className="max-w-screen-3xl mx-auto p-6 flex items-center justify-center h-screen">
        <div className="flex items-center">
          <svg
            className="animate-spin h-5 w-5 mr-2 text-black"
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
          <span>Loading...</span>
        </div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="max-w-screen-3xl mx-auto p-6">
        <p className="text-center text-red-500">User not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-screen-3xl mx-auto p-6">
      <div className="mx-4 sm:mx-4 my-4 space-y-6 font-sans">
        <button
          onClick={() => navigate("/customer")}
          className="flex items-center gap-2 text-black font-medium text-lg"
        >
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.9998 20.42L8.47984 13.9C7.70984 13.13 7.70984 11.87 8.47984 11.1L14.9998 4.58" stroke="#000000" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          User Profile
        </button>
        <div className="flex lg:flex-row flex-col justify-between">
          <div className="flex flex-col lg:flex-row lg:gap-8 gap-4">
            <img src={profile} alt="Profile" className="w-[208px] h-[208px] object-cover rounded-lg border-4 border-dashed border-[#18A006]" />
            <div className="flex lg:gap-24 gap-4">
              <div>
                <p className="text-black font-semibold">Username:</p>
                <p className="text-gray-250 flex gap-2 mt-1">
                  @{userData.userName || userData.displayName || "N/A"}{" "}
                  {userData.userBio && (
                    <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.2133 13.8191C19.1446 14.0575 18.9933 14.25 18.7779 14.3737L17.3021 15.1987V16.8854C17.3021 17.3895 16.8896 17.802 16.3854 17.802H14.6942L13.8738 19.2779C13.75 19.4933 13.5575 19.6445 13.3192 19.7133C13.0854 19.7775 12.8379 19.75 12.6225 19.6308L11 18.7233L9.37751 19.6308C9.23543 19.7087 9.08418 19.7454 8.92835 19.7454C8.84585 19.7454 8.76335 19.7362 8.68085 19.7133C8.44251 19.6445 8.25001 19.4933 8.12626 19.2779L7.30585 17.802H5.6146C5.11043 17.802 4.69793 17.3895 4.69793 16.8854V15.1987L3.2221 14.3737C3.00668 14.25 2.85543 14.0575 2.78668 13.8191C2.72251 13.5854 2.75001 13.3379 2.86918 13.1225L3.77668 11.5L2.86918 9.87745C2.62168 9.43287 2.7821 8.8737 3.2221 8.6262L4.69793 7.8012V6.11453C4.69793 5.61037 5.11043 5.19787 5.6146 5.19787H7.30585L8.12626 3.72203C8.25001 3.50662 8.44251 3.35537 8.68085 3.28662C8.9146 3.22245 9.1621 3.24995 9.37751 3.36912L11 4.27662L12.6225 3.36912C12.8379 3.24995 13.0854 3.22245 13.3192 3.28662C13.5575 3.35537 13.75 3.50662 13.8738 3.72203L14.6942 5.19787H16.3854C16.8896 5.19787 17.3021 5.61037 17.3021 6.11453V7.8012L18.7779 8.6262C19.2179 8.8737 19.3783 9.43287 19.1308 9.87745L18.2233 11.5L19.1308 13.1225C19.25 13.3379 19.2775 13.5854 19.2133 13.8191Z" fill="#18A006" />
                      <path d="M10.0834 14.2498C10.0232 14.2498 9.96358 14.238 9.90797 14.215C9.85236 14.1919 9.80185 14.1581 9.75935 14.1155L7.46768 11.8238C7.42391 11.7815 7.38899 11.731 7.36497 11.675C7.34095 11.6191 7.3283 11.559 7.32778 11.4981C7.32725 11.4373 7.33884 11.3769 7.36189 11.3206C7.38493 11.2643 7.41897 11.2131 7.462 11.1701C7.50504 11.127 7.55621 11.093 7.61254 11.0699C7.66887 11.0469 7.72922 11.0353 7.79007 11.0358C7.85093 11.0364 7.91107 11.049 7.96699 11.073C8.02291 11.097 8.07349 11.132 8.11577 11.1757L10.0834 13.1434L14.3427 8.88406C14.385 8.84029 14.4355 8.80537 14.4915 8.78135C14.5474 8.75733 14.6075 8.74469 14.6684 8.74416C14.7292 8.74363 14.7896 8.75523 14.8459 8.77827C14.9022 8.80132 14.9534 8.83535 14.9964 8.87838C15.0395 8.92142 15.0735 8.97259 15.0966 9.02892C15.1196 9.08525 15.1312 9.1456 15.1307 9.20646C15.1301 9.26731 15.1175 9.32746 15.0935 9.38337C15.0695 9.43929 15.0345 9.48987 14.9908 9.53215L10.4074 14.1155C10.3649 14.1581 10.3144 14.1919 10.2588 14.215C10.2032 14.238 10.1436 14.2498 10.0834 14.2498Z" fill="white" />
                    </svg>
                  )}
                </p>
                <p className="text-black font-semibold mt-4">Followers:</p>
                <p className="text-gray-250 mt-1">1000</p>
                <p className="text-black font-semibold mt-4">Total Posts:</p>
                <p className="text-gray-250 mt-1">10k</p>
              </div>
              <div>
                <p className="text-black font-semibold">Total earnings:</p>
                <p className="text-gray-250 mt-1">$1000</p>
                <p className="text-black font-semibold mt-4">Account status:</p>
                <p className="text-gray-250 mt-1">{userData.status || "N/A"}</p>
                <p className="text-black font-semibold mt-4">Join date:</p>
                <p className="text-gray-250 mt-1">
                  {userData.createdAt ? new Date(userData.createdAt).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }) : "N/A"}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 font-semibold">
            <button className="px-4 py-2 bg-red-150 text-white rounded-lg">Send Cash</button>
            <button
              onClick={() => setIsWarningModalOpen(true)}
              className="px-4 py-2 bg-[#FFBE0A] text-white rounded-lg"
            >
              Warning
            </button>
            <button
              onClick={() => setIsFreezeModalOpen(true)}
              className="px-4 py-2 bg-[#B74508] text-white rounded-lg"
            >
              Freeze Account
            </button>
            <button
              onClick={() => setIsBlockModalOpen(true)}
              className="px-4 py-2 bg-[#DD2025] text-white rounded-lg"
            >
              Block Account
            </button>
          </div>
        </div>
        <div className="mt-6">
          <div className="border-b border-gray-200 flex space-x-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`py-2 px-4 text-sm font-medium ${activeTab === tab ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="mt-4">{tabContent[activeTab]}</div>
        </div>
      </div>
      <FreezeModal
        isOpen={isFreezeModalOpen}
        onClose={() => setIsFreezeModalOpen(false)}
        userId={customerId}
        onStatusChange={handleStatusChange}
      />
      <BlockModal
        isOpen={isBlockModalOpen}
        onClose={() => setIsBlockModalOpen(false)}
        userId={customerId}
        onStatusChange={handleStatusChange}
      />
      <WarningModal
        isOpen={isWarningModalOpen}
        onClose={() => setIsWarningModalOpen(false)}
        userId={customerId}
      />
    </div>
  );
}