import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import category from "../assets/category10.png"
import portfolio from "../assets/portfolio1.png"
import { MdOutlineCheckCircle } from "react-icons/md";
import { GoCheckCircle } from "react-icons/go";
export default function OrderDetail() {
    // State to track the active tab
    const navigate = useNavigate();
    const location = useLocation();

    console.log('Order Status from Navigation:', location.state?.orderStatus);

    const status = location.state?.orderStatus || "Pending";



    const getStatusStyles = (status) => {
        switch (status) {
            case "In-Process":
                return { bg: "bg-yellow-100", text: "text-yellow-600" };
            case "Completed":
                return { bg: "bg-green-100", text: "text-green-600" };
            case "Cancelled":
                return { bg: "bg-red-100", text: "text-red-600" };
            default:
                return { bg: "bg-gray-100", text: "text-gray-600" };
        }
    };

    const { bg, text } = getStatusStyles(status);
    return (
        <div>
            {/* <Header /> */}
            <div className="max-w-screen-3xl mx-auto">
                <div className="mx-4 sm:mx-4 my-4 space-y-4 font-sans">
                    <div className="lg:px-7 py-7">
                        <button onClick={() => navigate('/order')} className=" font-bold px-4 py-2 cursor-pointer text-gray-150 text-[30px] flex gap-5 items-center">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.9998 20.42L8.47984 13.9C7.70984 13.13 7.70984 11.87 8.47984 11.1L14.9998 4.58" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            View Order
                        </button>
                        <img src={category} alt="" className="h-[310px] mt-6 lg:px-7 px-4 w-full" />
                    </div>
                    <div className="w-full lg:px-12 px-4">
                        <div className="space-y-2">
                            <div className="flex justify-between gap-3">
                                <h1 className="text-gray-150 font-bold text-[30px]">Title</h1>
                                <div className={`flex gap-2 rounded-full px-3 py-0.5 items-center ${bg} ${text} font-medium`}>
                                <GoCheckCircle />
                                {status}
                            </div>
                            </div>
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
                        <p className="mt-4 text-gray-150 max-w-[874px]">Lorem ipsum dolor sit amet consectetur. Ut amet laoreet consectetur quisque facilisi massa sed. Mi pretium tellus amet faucibus. Eu vivamus facilisi blandit eu cum turpis praesent ullamcorper. Quis ut pellentesque at nec blandit augue faucibus malesuada arcu. Ipsum semper tortor dignissim ac. Congue pharetra aliquam urna sed quis. Ut.</p>
                        <div className="flex gap-4 text-gray-250 text-sm justify-between mt-4">
                            <div className="space-y-3">
                                <p>Order Id</p>
                                <p>Customer name</p>
                                <p>Service title</p>
                                <p>Service category</p>
                                <p>Scheduled time</p>
                                <p>Price</p>
                                <p>Rating</p>
                                <p>Order Status</p>
                            </div>
                            <div className="text-gray-150 text-sm space-y-3">
                                <p>#01</p>
                                <p>Olivia Dalddario</p>
                                <p>Hair Trimming</p>
                                <p>Hair Trimming</p>
                                <p>11:00 AM - Jan 13 2025</p>
                                <p>$100</p>
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
                                <div className={`flex gap-2 rounded-full px-3 py-0.5 items-center ${bg} ${text} font-medium`}>
                                    <GoCheckCircle />
                                    
                                    {status}
                                </div>
                            </div>
                        </div>
                        <h1 className="text-gray-150 font-semibold text-base my-4">Add-Ons</h1>
                        <div className="flex gap-4 text-gray-250 text-sm justify-between mt-4">
                            <div className="space-y-3">
                                <p>Nail Polishing</p>
                                <p>Hairs Straightening</p>
                                <p>Hair Wash</p>
                                <p>Sub Total</p>
                            </div>
                            <div className="text-gray-150 text-sm space-y-3">
                                <p>$50</p>
                                <p>$50</p>
                                <p>$50</p>
                                <p>$150</p>
                            </div>
                        </div>
                        <h1 className="text-gray-150 font-semibold text-base my-4">Pictures</h1>
                        <img src={portfolio} alt="" className="lg:w-[336px] lg:h-[353px]" />

                    </div>
                </div>

            </div>

        </div>
    );
}
