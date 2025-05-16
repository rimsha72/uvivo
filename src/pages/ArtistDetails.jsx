import { useState } from "react";
import profile from "../assets/profilee.png"
import { useNavigate } from "react-router-dom";
import Cancelled from "../assets/pending.png"
import booking from "../assets/booking.png"
import users from "../assets/users3.png"
import order from "../assets/order3.png"
import portfolio from "../assets/portfolio.png"
import category from "../assets/category9.png";
import Services from "../components/Services";
import Availability from "../components/Availability";
import OrderTable from "../components/OrderTable";
export default function ArtistDetails() {
    // State to track the active tab
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("Page Details");
    const tabs = ["Page Details", "Services", "Availability", "Portfolio", "Orders", "Verification Details"];
    const [selectedCategory, setSelectedCategory] = useState("Select Status");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const statuses = ["Completed", "Pending", "Cancelled"];
    const tabContent = {
        "Page Details": (
            <div>
                <div>
                    <h1 className="text-sm text-gray-150 font-semibold">Description</h1>
                    <p className="text-gray-250 text-sm mt-4">Lorem ipsum dolor sit amet consectetur. Sed magna purus urna dis magna facilisis tincidunt fermentum arcu. Pellentesque at urna eget risus eget vestibulum mi tincidunt ipsum. Gravida neque auctor praesent feugiat pellentesque sit quis mauris eget. Nunc eget pellentesque vel pharetra leo convallis donec.</p>
                    <p className="text-sm text-gray-250 mb-4">Semper tellus facilisis id et sit mauris bibendum. Vitae eget egestas habitasse lectus cras suspendisse integer. Nunc habitant sit nec nulla.Semper tellus facilisis id et sit mauris bibendum. Vitae eget egestas habitasse lectus cras suspendisse integer. Nunc habitant sit nec nulla</p>
                </div>
                <div>
                    <h1 className="text-sm text-gray-150 font-semibold">Categories</h1>
                    <img src={category} alt="" className="mt-4" />
                </div>
            </div>

        ),
        "Services": (
            <div className="pb-3 bg-white">
                <Services />
            </div>
        ),
        "Availability": (
            <div>
                <Availability />
            </div>
        ),
        "Portfolio": (
            <div>
                <img src={portfolio} alt="" />
            </div>
        ),
        "Orders": (
            <div>
              
                <OrderTable />
            </div>
        ),
        "Verification Details": (
            <div>
                <div>
                    <h1 className="text-sm text-gray-150 font-semibold">License</h1>
                    <div className="lg:w-1/2 flex gap-4 lg:flex-row flex-col mt-4">
                        <div className="w-[314px] h-[166px] rounded-lg border border-[#E7E7E7] bg-[#F7F7F7]">
                        </div>
                        <div className="w-[314px] h-[166px] rounded-lg border border-[#E7E7E7] bg-[#F7F7F7]">
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <h1 className="text-sm text-gray-150 font-semibold">ID Card</h1>
                    <div className="lg:w-1/2 flex gap-4 lg:flex-row flex-col mt-4">
                        <div className="w-[314px] h-[166px] rounded-lg border border-[#E7E7E7] bg-[#F7F7F7]">
                        </div>
                        <div className="w-[314px] h-[166px] rounded-lg border border-[#E7E7E7] bg-[#F7F7F7]">
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <h1 className="text-sm text-gray-150 font-semibold">SSN or Background check</h1>
                    <div className="lg:w-1/2 flex gap-8 lg:flex-row flex-col mt-4 text-base ">
                        <h1 className="text-gray-250">SSN</h1>
                        <p className="text-gray-150 font-semibold">012334578</p>
                    </div>
                </div>
            </div>
        ),
    };
    return (
        <div>
            {/* <Header /> */}
            <div className="max-w-screen-3xl mx-auto">
                <div className="mx-4 sm:mx-4 my-4 space-y-4 font-sans">
                    <div className="lg:px-7 py-7">
                        <button onClick={() => navigate('/artist')} className=" font-bold px-4 py-2 cursor-pointer text-gray-150 text-[30px] flex gap-5 items-center">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.9998 20.42L8.47984 13.9C7.70984 13.13 7.70984 11.87 8.47984 11.1L14.9998 4.58" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            View Profile
                        </button>
                    </div>
                    <div className="flex gap-4 lg:flex-row flex-col lg:pl-12 lg:pr-20 px-4 w-full">
                        <img src={profile} alt="" className="w-[219px] h-[262px] object-cover" />
                        <div className="w-full">
                            <div className="flex lg:flex-row flex-col justify-between gap-4 w-full">
                                <div className="space-y-2">
                                    <h1 className="text-gray-150 font-bold text-[30px]">Profile Name</h1>
                                    <p className="text-gray-250">4.9 star rating</p>
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 text-[#FFCC00] ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg className="w-4 h-4 text-[#FFCC00] ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg className="w-4 h-4 text-[#FFCC00] ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg className="w-4 h-4 text-[#FFCC00] ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg className="w-4 h-4 ms-1 text-[#FFCC00]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex gap-4 text-gray-250 text-sm">
                                    <div>
                                        <p>Address:</p>
                                        <p>Phone Number:</p>
                                        <p>Email Address:</p>
                                        <p>Join date:</p>
                                        <p>Occupation:</p>
                                        <p>Ranking:</p>
                                    </div>
                                    <div>
                                        <p>Lorem ipsum dolor sit amet</p>
                                        <p>000 1234 56789</p>
                                        <p>glamhaus@gmail.com</p>
                                        <p>09 Jan 2025</p>
                                        <p>xyz</p>
                                        <p>Silver</p>
                                    </div>
                                </div>
                            </div>
                            <div className="grid lg:grid-cols-4 md:grid-cols-1 grid-cols-1 gap-3 mt-4">
                                <div className="rounded-[14px] py-4 px-4 bg-white drop-shadow-sm">
                                    <div className="flex justify-between">
                                        <div>
                                            <h1 className="font-sans text-base text-gray-150">Total Bookings</h1>
                                            <p className="font-sans font-bold text-[20px] text-gray-150 mt-2">10,293</p>
                                        </div>
                                        <img src={booking} alt="" className="w-[43px] h-[43px]" />
                                    </div>
                                    <div className="flex gap-2 mt-3">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z" fill="#00B69B" />
                                        </svg>
                                        <p className="font-sans text-[13px] text-green-150">1.3% <span className="text-gray-250">Up from past week</span></p>
                                    </div>
                                </div>
                                <div className="rounded-[14px] py-4 px-4 bg-white drop-shadow-sm">
                                    <div className="flex justify-between">
                                        <div>
                                            <h1 className="font-sans text-base text-gray-150">Completed Bookings</h1>
                                            <p className="font-sans font-bold text-[20px] text-gray-150 mt-2">8,523</p>
                                        </div>
                                        <img src={users} alt="" className="w-[43px] h-[43px]" />
                                    </div>
                                    <div className="flex gap-2 mt-3">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z" fill="#00B69B" />
                                        </svg>
                                        <p className="font-sans text-[13px] text-green-150">8.5% <span className="text-gray-250">Up from past week</span></p>
                                    </div>
                                </div>
                                <div className="rounded-[14px] py-4 px-4 bg-white drop-shadow-sm">
                                    <div className="flex justify-between">
                                        <div>
                                            <h1 className="font-sans text-base text-gray-150">Cancelled Bookings</h1>
                                            <p className="font-sans font-bold text-[20px] text-gray-150 mt-2">2,040</p>
                                        </div>
                                        <img src={Cancelled} alt="" className="w-[43px] h-[43px]" />
                                    </div>
                                    <div className="flex gap-2 mt-3">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z" fill="#00B69B" />
                                        </svg>
                                        <p className="font-sans text-[13px] text-green-150">1.3% <span className="text-gray-250">Up from past week</span></p>
                                    </div>
                                </div>
                                <div className="rounded-[14px] py-4 px-4 bg-white drop-shadow-sm">
                                    <div className="flex justify-between">
                                        <div>
                                            <h1 className="font-sans text-base text-gray-150">Total Earnings</h1>
                                            <p className="font-sans font-bold text-[20px] text-gray-150 mt-2">$89,000</p>
                                        </div>
                                        <img src={order} alt="" className="w-[43px] h-[43px]" />
                                    </div>
                                    <div className="flex gap-2 mt-3">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 18L18.29 15.71L13.41 10.83L9.41 14.83L2 7.41L3.41 6L9.41 12L13.41 8L19.71 14.29L22 12V18H16Z" fill="#F93C65" />
                                        </svg>
                                        <p className="font-sans text-[13px] text-red-250">4.3% <span className="text-gray-250">Down from yesterday </span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 mb-7 lg:px-12 px-4">
                        <div className="border-b border-gray-100 inline-flex flex-wrap">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    className={`py-2 px-6 text-[15px] transition-all duration-300 ${activeTab === tab ? "text-red-150 font-semibold border-b-[2px] border-red-150"
                                        : "text-gray-250 border-b-[3px] border-gray-100"
                                        }`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="mt-2 px-12">{tabContent[activeTab]}</div>
                </div>
            </div>

        </div>
    );
}
