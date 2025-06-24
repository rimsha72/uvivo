import React, { useEffect, useState } from "react";
import { db } from "../../firebase"
import { collection, getDocs } from "firebase/firestore";
import Chart1 from "../components/Chart1";
import Chart2 from "../components/Chart2";
import Chart6 from "../components/Chart6";
import Earnings from "../components/Earnings";
import UserRegistered from "../components/UserRegistered";

export default function Home() {
    const [activeUsers, setActiveUsers] = useState(0); 
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        const fetchActiveUsers = async () => {
            try {
                setIsLoading(true);
                const usersCollection = collection(db, "app_users");
                const usersSnapshot = await getDocs(usersCollection);

                const now = new Date();
                const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
                const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999).getTime();

                let activeCount = 0;
                usersSnapshot.forEach((doc) => {
                    const data = doc.data();
                    const lastActive = data.lastActive; 
                    if (lastActive >= startOfMonth && lastActive <= endOfMonth) {
                        activeCount++;
                    }
                });

                setActiveUsers(activeCount);
            } catch (error) {
                console.error("Error fetching active users:", error);
                setActiveUsers(0); // Fallback to 0 on error
            } finally {
                setIsLoading(false);
            }
        };

        fetchActiveUsers();
    }, []);

    return (
        <div>
            <div className="max-w-screen-3xl mx-auto font-sans">
                <div className="mx-4 sm:mx-8 my-4 space-y-4">
                    <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-3 mt-8">
                        <div className="rounded-lg py-4 px-7 bg-white border border-gray-150">
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <select
                                        className="font-sans text-xs px-3 py-1.5 font-semibold text-gray-250 bg-white border border-gray-150 rounded-md outline-none"
                                    >
                                        <option>Last Month</option>
                                    </select>
                                </div>
                                <div className="flex gap-2">
                                    <svg
                                        width="16"
                                        height="17"
                                        viewBox="0 0 16 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M14.5325 7.2245L8.53247 1.2245C8.46279 1.15458 8.38 1.0991 8.28883 1.06125C8.19767 1.02339 8.09993 1.00391 8.00122 1.00391C7.90251 1.00391 7.80477 1.02339 7.7136 1.06125C7.62244 1.0991 7.53965 1.15458 7.46997 1.2245L1.46997 7.2245C1.36488 7.32947 1.29333 7.46327 1.26438 7.60895C1.23543 7.75463 1.25039 7.90563 1.30736 8.0428C1.36433 8.17996 1.46075 8.29713 1.58438 8.37944C1.70802 8.46174 1.85331 8.50549 2.00184 8.50512H4.25184V8.75512C4.25184 8.95404 4.33086 9.1448 4.47151 9.28545C4.61216 9.42611 4.80293 9.50512 5.00184 9.50512H11.0018C11.2008 9.50512 11.3915 9.42611 11.5322 9.28545C11.6728 9.1448 11.7518 8.95404 11.7518 8.75512V8.50512H14.0018C14.1503 8.50524 14.2954 8.46132 14.4188 8.37891C14.5423 8.29651 14.6385 8.17933 14.6953 8.04222C14.7521 7.9051 14.767 7.75421 14.738 7.60864C14.709 7.46308 14.6375 7.32939 14.5325 7.2245ZM11.0018 7.00512C10.8029 7.00512 10.6122 7.08414 10.4715 7.22479C10.3309 7.36545 10.2518 7.55621 10.2518 7.75512V8.00512H5.75184V7.75512C5.75184 7.55621 5.67282 7.36545 5.53217 7.22479C5.39152 7.08414 5.20075 7.00512 5.00184 7.00512H3.81434L8.00184 2.81762L12.1893 7.00512H11.0018ZM11.7518 13.7551C11.7518 13.954 11.6728 14.1448 11.5322 14.2855C11.3915 14.4261 11.2008 14.5051 11.0018 14.5051H5.00184C4.80293 14.5051 4.61216 14.4261 4.47151 14.2855C4.33086 14.1448 4.25184 13.954 4.25184 13.7551C4.25184 13.5562 4.33086 13.3654 4.47151 13.2248C4.61216 13.0841 4.80293 13.0051 5.00184 13.0051H11.0018C11.2008 13.0051 11.3915 13.0841 11.5322 13.2248C11.6728 13.3654 11.7518 13.5562 11.7518 13.7551ZM11.7518 11.2551C11.7518 11.454 11.6728 11.6448 11.5322 11.7855C11.3915 11.9261 11.2008 12.0051 11.0018 12.0051H5.00184C4.80293 12.0051 4.61216 11.9261 4.47151 11.7855C4.33086 11.6448 4.25184 11.454 4.25184 11.2551C4.25184 11.0562 4.33086 10.8654 4.47151 10.7248C4.61216 10.5841 4.80293 10.5051 5.00184 10.5051H11.0018C11.2008 10.5051 11.3915 10.5841 11.5322 10.7248C11.6728 10.8654 11.7518 11.0562 11.7518 11.2551Z"
                                            fill="#24BC73"
                                        />
                                    </svg>
                                    <p className="font-poppin text-xs text-green-150">30.5626%</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h1 className="font-sans text-base text-black font-medium">Active Users</h1>
                                    {isLoading ? (
                                        <div className="flex items-center mt-2">
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
                                    ) : (
                                        <p className="font-sans font-bold text-[26px] text-black mt-2">{activeUsers}</p>
                                    )}
                                </div>
                                <div>
                                    <Chart1 />
                                </div>
                            </div>
                            <div>
                                <span className="text-gray-250 text-xs">This month</span>
                            </div>
                        </div>
                        <div className="rounded-lg py-4 px-7 bg-white border border-gray-150">
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <select className="font-sans text-xs px-3 py-1.5 font-semibold text-gray-250 bg-white border border-gray-150 rounded-md outline-none">
                                        <option>Last Month</option>
                                    </select>
                                </div>
                                <div className="flex gap-2">
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.5325 7.2245L8.53247 1.2245C8.46279 1.15458 8.38 1.0991 8.28883 1.06125C8.19767 1.02339 8.09993 1.00391 8.00122 1.00391C7.90251 1.00391 7.80477 1.02339 7.7136 1.06125C7.62244 1.0991 7.53965 1.15458 7.46997 1.2245L1.46997 7.2245C1.36488 7.32947 1.29333 7.46327 1.26438 7.60895C1.23543 7.75463 1.25039 7.90563 1.30736 8.0428C1.36433 8.17996 1.46075 8.29713 1.58438 8.37944C1.70802 8.46174 1.85331 8.50549 2.00184 8.50512H4.25184V8.75512C4.25184 8.95404 4.33086 9.1448 4.47151 9.28545C4.61216 9.42611 4.80293 9.50512 5.00184 9.50512H11.0018C11.2008 9.50512 11.3915 9.42611 11.5322 9.28545C11.6728 9.1448 11.7518 8.95404 11.7518 8.75512V8.50512H14.0018C14.1503 8.50524 14.2954 8.46132 14.4188 8.37891C14.5423 8.29651 14.6385 8.17933 14.6953 8.04222C14.7521 7.9051 14.767 7.75421 14.738 7.60864C14.709 7.46308 14.6375 7.32939 14.5325 7.2245ZM11.0018 7.00512C10.8029 7.00512 10.6122 7.08414 10.4715 7.22479C10.3309 7.36545 10.2518 7.55621 10.2518 7.75512V8.00512H5.75184V7.75512C5.75184 7.55621 5.67282 7.36545 5.53217 7.22479C5.39152 7.08414 5.20075 7.00512 5.00184 7.00512H3.81434L8.00184 2.81762L12.1893 7.00512H11.0018ZM11.7518 13.7551C11.7518 13.954 11.6728 14.1448 11.5322 14.2855C11.3915 14.4261 11.2008 14.5051 11.0018 14.5051H5.00184C4.80293 14.5051 4.61216 14.4261 4.47151 14.2855C4.33086 14.1448 4.25184 13.954 4.25184 13.7551C4.25184 13.5562 4.33086 13.3654 4.47151 13.2248C4.61216 13.0841 4.80293 13.0051 5.00184 13.0051H11.0018C11.2008 13.0051 11.3915 13.0841 11.5322 13.2248C11.6728 13.3654 11.7518 13.5562 11.7518 13.7551ZM11.7518 11.2551C11.7518 11.454 11.6728 11.6448 11.5322 11.7855C11.3915 11.9261 11.2008 12.0051 11.0018 12.0051H5.00184C4.80293 12.0051 4.61216 11.9261 4.47151 11.7855C4.33086 11.6448 4.25184 11.454 4.25184 11.2551C4.25184 11.0562 4.33086 10.8654 4.47151 10.7248C4.61216 10.5841 4.80293 10.5051 5.00184 10.5051H11.0018C11.2008 10.5051 11.3915 10.5841 11.5322 10.7248C11.6728 10.8654 11.7518 11.0562 11.7518 11.2551Z" fill="#24BC73" />
                                    </svg>
                                    <p className="font-poppin text-xs text-green-150">30.5626%</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h1 className="font-sans text-base text-black font-medium">Total Gift Profit</h1>
                                    <p className="font-sans font-bold text-[26px] text-black mt-2">10K+</p>
                                </div>
                                <div >
                                    <Chart2 />
                                </div>
                            </div>
                            <div>
                                <span className="text-gray-250 text-xs">Overall last month</span>
                            </div>
                        </div>
                        <div className="rounded-lg py-4 px-7 bg-white border border-gray-150">
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <select className="font-sans text-xs px-3 py-1.5 font-semibold text-gray-250 bg-white border border-gray-150 rounded-md outline-none">
                                        <option>Last Month</option>
                                    </select>
                                </div>
                                <div className="flex gap-2">
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.5325 7.2245L8.53247 1.2245C8.46279 1.15458 8.38 1.0991 8.28883 1.06125C8.19767 1.02339 8.09993 1.00391 8.00122 1.00391C7.90251 1.00391 7.80477 1.02339 7.7136 1.06125C7.62244 1.0991 7.53965 1.15458 7.46997 1.2245L1.46997 7.2245C1.36488 7.32947 1.29333 7.46327 1.26438 7.60895C1.23543 7.75463 1.25039 7.90563 1.30736 8.0428C1.36433 8.17996 1.46075 8.29713 1.58438 8.37944C1.70802 8.46174 1.85331 8.50549 2.00184 8.50512H4.25184V8.75512C4.25184 8.95404 4.33086 9.1448 4.47151 9.28545C4.61216 9.42611 4.80293 9.50512 5.00184 9.50512H11.0018C11.2008 9.50512 11.3915 9.42611 11.5322 9.28545C11.6728 9.1448 11.7518 8.95404 11.7518 8.75512V8.50512H14.0018C14.1503 8.50524 14.2954 8.46132 14.4188 8.37891C14.5423 8.29651 14.6385 8.17933 14.6953 8.04222C14.7521 7.9051 14.767 7.75421 14.738 7.60864C14.709 7.46308 14.6375 7.32939 14.5325 7.2245ZM11.0018 7.00512C10.8029 7.00512 10.6122 7.08414 10.4715 7.22479C10.3309 7.36545 10.2518 7.55621 10.2518 7.75512V8.00512H5.75184V7.75512C5.75184 7.55621 5.67282 7.36545 5.53217 7.22479C5.39152 7.08414 5.20075 7.00512 5.00184 7.00512H3.81434L8.00184 2.81762L12.1893 7.00512H11.0018ZM11.7518 13.7551C11.7518 13.954 11.6728 14.1448 11.5322 14.2855C11.3915 14.4261 11.2008 14.5051 11.0018 14.5051H5.00184C4.80293 14.5051 4.61216 14.4261 4.47151 14.2855C4.33086 14.1448 4.25184 13.954 4.25184 13.7551C4.25184 13.5562 4.33086 13.3654 4.47151 13.2248C4.61216 13.0841 4.80293 13.0051 5.00184 13.0051H11.0018C11.2008 13.0051 11.3915 13.0841 11.5322 13.2248C11.6728 13.3654 11.7518 13.5562 11.7518 13.7551ZM11.7518 11.2551C11.7518 11.454 11.6728 11.6448 11.5322 11.7855C11.3915 11.9261 11.2008 12.0051 11.0018 12.0051H5.00184C4.80293 12.0051 4.61216 11.9261 4.47151 11.7855C4.33086 11.6448 4.25184 11.454 4.25184 11.2551C4.25184 11.0562 4.33086 10.8654 4.47151 10.7248C4.61216 10.5841 4.80293 10.5051 5.00184 10.5051H11.0018C11.2008 10.5051 11.3915 10.5841 11.5322 10.7248C11.6728 10.8654 11.7518 11.0562 11.7518 11.2551Z" fill="#24BC73" />
                                    </svg>
                                    <p className="font-poppin text-xs text-green-150">30.5626%</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h1 className="font-sans text-base text-black font-medium">Total Subscription Profit</h1>
                                    <p className="font-sans font-bold text-[26px] text-black mt-2">$900K</p>
                                </div>
                                <div >
                                    <Chart6 />
                                </div>
                            </div>
                            <div>
                                <span className="text-gray-250 text-xs">Overall last month</span>
                            </div>
                        </div>
                    </div>
                    <Earnings />
                    <UserRegistered />
                </div>
            </div>
        </div>
    )
}
