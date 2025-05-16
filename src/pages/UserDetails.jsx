import { useState } from "react";
import avatar from "../assets/Avatar.png";
import profile from "../assets/profile2.png"
import { useNavigate } from "react-router-dom";
import OrderTable from "../components/OrderTable";
export default function UserDetails() {
    // State to track the active tab
    const [activeTab, setActiveTab] = useState("personal");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const navigate = useNavigate();


    // Handle tab click
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openModal2 = () => {
        setIsModalOpen2(true);
    };

    // Function to close the modal
    const closeModal2 = () => {
        setIsModalOpen2(false);
    };

    return (
        <div>
            {/* <Header /> */}
            <div className="max-w-screen-3xl mx-auto">
                <div className="mx-4 sm:mx-4 my-4 space-y-4 font-sans">
                    <div className="lg:px-7 py-7">
                        <div className="flex gap-4 items-center font-sans text-base font-medium">
                            <button onClick={() => navigate('/users')} className=" border cursor-pointer border-gray-300 rounded-lg font-medium px-4 py-2 text-gray-700 text-sm flex gap-2 items-center">
                                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.66211 3.85254L6.03711 7.47754L9.66211 11.1025" stroke="#344054" strokeWidth="1.21075" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Back
                            </button>
                            <p className="text-gray-990">Users</p> |  <p className="text-black">Details</p>
                        </div>
                        <div className="lg:px-7 my-12">
                            <img src={avatar} alt='' className="w-[91px] h-[89px]" />
                            <div className="text-2xl mt-4 flex items-center gap-4 font-bold text-[#2B2B2B]">Daniel J<span className="px-2 py-1 bg-green-150/10 font-medium text-xs rounded-full ml-2font-inter text-green-150">Customer</span></div>
                            <p></p>
                            <p className="font-medium text-base text-gray-400 mt-2">UID - <span className="text-black">IU9887SDAS</span></p>
                            <div className="flex justify-between mt-8 items-center lg:flex-row flex-col gap-4">
                                <ul className="flex flex-wrap text-base font-medium text-center text-gray-820">
                                    {/* Personal Info Tab */}
                                    <li className="me-2">
                                        <button
                                            onClick={() => handleTabClick("personal")}
                                            className={`inline-block cursor-pointer lg:px-6 px-3 scroll-px-3.5 py-3 rounded-lg ${activeTab === "personal" ? "bg-yellow-150 text-white" : "text-gray-820"}`}
                                        >
                                            Personal Info
                                        </button>
                                    </li>
                                    {/* Orders Placed Tab */}
                                    <li className="me-2">
                                        <button
                                            onClick={() => handleTabClick("orders")}
                                            className={`inline-block cursor-pointer lg:px-6 px-3 scroll-px-3.5 py-3 rounded-lg ${activeTab === "orders" ? "bg-yellow-150 text-white" : "text-gray-820"}`}
                                        >
                                            Orders Placed
                                        </button>
                                    </li>
                                </ul>
                                <div className="flex gap-4 items-center">
                                    <button onClick={openModal} className="cursor-pointer px-6 py-2 rounded-lg bg-yellow-150/15 text-base font-bold text-yellow-150">
                                        Restrict
                                    </button>
                                    <button onClick={openModal2} className="px-6 py-2 rounded-lg bg-red-150/15 cursor-pointer text-base font-bold text-red-150">
                                        Ban User
                                    </button>
                                </div>
                            </div>

                            {/* Content for Personal Info Tab */}
                            {activeTab === "personal" && (
                                <div className="mt-8 border border-gray-200 rounded-lg p-5">
                                    <h1 className="text-black font-semibold text-lg">Profile Details</h1>
                                    <p className="mt-1 text-gray-150 font-medium text-xs">See your personal account details here</p>
                                    <div className="grid grid-cols-2 mt-6 gap-7 text-xs font-medium">
                                        <div className="space-y-6">
                                            <div>
                                                <label className="text-gray-450">First Name</label>
                                                <p className="text-sm text-black mt-1">Daniel</p>
                                            </div>
                                            <div>
                                                <label className="text-gray-450">Email Address</label>
                                                <p className="text-sm text-black mt-1">danielj@gmail.com</p>
                                            </div>
                                            <div>
                                                <label className="text-gray-450">Role</label>
                                                <p className="text-sm text-black mt-1">Customer</p>
                                            </div>
                                            <div>
                                                <label className="text-gray-450">Total Paid Amount</label>
                                                <p className="text-sm text-black mt-1">£235325</p>
                                            </div>

                                        </div>
                                        <div className="space-y-6">
                                            <div>
                                                <label className="text-gray-450">Last Name</label>
                                                <p className="text-sm text-black mt-1">James</p>
                                            </div>
                                            <div>
                                                <label className="text-gray-450">Phone Number</label>
                                                <p className="text-sm text-black mt-1">+1 123 456 789</p>
                                            </div>
                                            <div>
                                                <label className="text-gray-450">Gender</label>
                                                <p className="text-sm text-black mt-1">Male</p>
                                            </div>
                                            <div>
                                                <label className="text-gray-450">Status</label>
                                                <div className="mt-1">
                                                    <div className="inline-flex items-center text-green-150 font-semibold bg-green-150/15 px-3 py-1 rounded-full w-fit">
                                                        <div className="h-[6px] w-[6px] rounded-full bg-green-150 me-2"></div> Active
                                                    </div>

                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            )}

                            {/* Content for Orders Placed Tab */}
                            {activeTab === "orders" && (
                                <div className="mt-8">
                                    <div className="border border-gray-750 rounded-lg pt-7 pb-3 drop-shadow-sm bg-white mt-4">
                                        <div className="flex gap-6 items-center justify-between mb-7 w-full px-7">
                                            <h1 className="font-inter font-bold text-lg flex-1">Orders Placed</h1>
                                            <button className="flex items-center border border-gray-300 rounded-lg lg:px-4 py-3 px-2 text-gray-700 hover:bg-gray-100">
                                                <span className="mr-4 font-medium lg:text-sm text-xs text-black">Date</span>
                                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.1616 1.6167C13.5066 1.6167 13.7866 1.8967 13.7866 2.2417L13.787 2.94821C15.0037 3.03163 16.0143 3.4484 16.7295 4.16512C17.5103 4.94928 17.9212 6.07678 17.917 7.42928V15.0318C17.917 17.8085 16.1537 19.5334 13.3162 19.5334H6.26783C3.43033 19.5334 1.66699 17.7843 1.66699 14.9685V7.42762C1.66699 4.80861 3.23954 3.12748 5.80423 2.94849L5.80474 2.2417C5.80474 1.8967 6.08474 1.6167 6.42974 1.6167C6.77474 1.6167 7.05474 1.8967 7.05474 2.2417L7.05449 2.93253H12.5362L12.5366 2.2417C12.5366 1.8967 12.8166 1.6167 13.1616 1.6167ZM16.667 9.0367H2.91699V14.9685C2.91699 17.1068 4.10699 18.2834 6.26783 18.2834H13.3162C15.477 18.2834 16.667 17.1285 16.667 15.0318L16.667 9.0367ZM13.5013 14.2803C13.8463 14.2803 14.1263 14.5603 14.1263 14.9053C14.1263 15.2503 13.8463 15.5303 13.5013 15.5303C13.1563 15.5303 12.873 15.2503 12.873 14.9053C12.873 14.5603 13.1488 14.2803 13.4938 14.2803H13.5013ZM9.80341 14.2803C10.1484 14.2803 10.4284 14.5603 10.4284 14.9053C10.4284 15.2503 10.1484 15.5303 9.80341 15.5303C9.45841 15.5303 9.17508 15.2503 9.17508 14.9053C9.17508 14.5603 9.45091 14.2803 9.79591 14.2803H9.80341ZM6.09774 14.2803C6.44274 14.2803 6.72274 14.5603 6.72274 14.9053C6.72274 15.2503 6.44274 15.5303 6.09774 15.5303C5.75274 15.5303 5.46858 15.2503 5.46858 14.9053C5.46858 14.5603 5.74524 14.2803 6.09024 14.2803H6.09774ZM13.5013 11.0414C13.8463 11.0414 14.1263 11.3214 14.1263 11.6664C14.1263 12.0114 13.8463 12.2914 13.5013 12.2914C13.1563 12.2914 12.873 12.0114 12.873 11.6664C12.873 11.3214 13.1488 11.0414 13.4938 11.0414H13.5013ZM9.80341 11.0414C10.1484 11.0414 10.4284 11.3214 10.4284 11.6664C10.4284 12.0114 10.1484 12.2914 9.80341 12.2914C9.45841 12.2914 9.17508 12.0114 9.17508 11.6664C9.17508 11.3214 9.45091 11.0414 9.79591 11.0414H9.80341ZM6.09774 11.0414C6.44274 11.0414 6.72274 11.3214 6.72274 11.6664C6.72274 12.0114 6.44274 12.2914 6.09774 12.2914C5.75274 12.2914 5.46858 12.0114 5.46858 11.6664C5.46858 11.3214 5.74524 11.0414 6.09024 11.0414H6.09774ZM12.5362 4.18253H7.05449L7.05474 4.9842C7.05474 5.3292 6.77474 5.6092 6.42974 5.6092C6.08474 5.6092 5.80474 5.3292 5.80474 4.9842L5.8043 4.20145C3.93744 4.35828 2.91699 5.48991 2.91699 7.42762V7.7867H16.667L16.667 7.42762C16.6703 6.39845 16.3937 5.59845 15.8445 5.04845C15.3624 4.56496 14.6577 4.2762 13.7873 4.20185L13.7866 4.9842C13.7866 5.3292 13.5066 5.6092 13.1616 5.6092C12.8166 5.6092 12.5366 5.3292 12.5366 4.9842L12.5362 4.18253Z" fill="black" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="overflow-x-auto">
                                           <OrderTable />
                                        </div>
                                        <div className="flex items-center justify-between py-4 px-7 font-inter text-sm lg:flex-row flex-col gap-4">
                                            {/* Previous Button */}
                                            <button className=" border border-gray-300 rounded-lg font-medium px-4 py-2 text-gray-700">
                                                Previous
                                            </button>

                                            {/* Page Numbers */}
                                            <div className="flex space-x-2">
                                                <button className="lg:px-4 px-2 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-blue-100">
                                                    1
                                                </button>
                                                <button className="lg:px-4 px-2 text-sm font-medium rounded-md bg-white text-gray-700 hover:bg-blue-100">
                                                    2
                                                </button>
                                                <button className="lg:px-4 px-2 text-sm font-medium rounded-md bg-white text-gray-700 hover:bg-blue-100">
                                                    3
                                                </button>
                                                <button className="lg:px-4 px-2 text-sm font-medium rounded-md bg-white text-gray-700 hover:bg-blue-100">
                                                    ...
                                                </button>

                                                <button className="lg:px-4 px-2 text-sm font-medium rounded-md bg-white text-gray-700 hover:bg-blue-100">
                                                    8
                                                </button>
                                                <button className="lg:px-4 px-2 text-sm font-medium rounded-md bg-white text-gray-700 hover:bg-blue-100">
                                                    9
                                                </button>
                                                <button className="lg:px-4 px-2 text-sm font-medium rounded-md bg-white text-gray-700 hover:bg-blue-100">
                                                    10
                                                </button>
                                            </div>

                                            {/* Next Button */}
                                            <button className=" border border-gray-300 rounded-lg font-medium px-6 py-2 text-gray-700">
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="overflow-y-auto overflow-x-hidden fixed z-50 bg-black/40 justify-center flex items-center w-full md:inset-0 max-h-full">
                    <div className="bg-white p-6 rounded-lg w-[570px] relative">
                        <h2 className="text-2xl font-bold text-black">Restrict User</h2>
                        <button
                            onClick={closeModal}
                            className="absolute right-7 top-7 rounded-lg cursor-pointer"
                        >
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6.5L6 18.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 6.5L18 18.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </button>
                        <hr className="h-px my-4 bg-gray-200 border-0 " />
                        <p className="text-lg font-medium text-black mb-6">Are you sure you want to restrict this user</p>
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label className="block text-gray-150 text-sm font-medium">Start Date</label>
                                <input type="text" className="w-full px-2 py-3 mt-2 border border-gray-300 rounded-lg placeholder:text-black placeholder:text-sm" placeholder="12 Nov 2024" />
                            </div>
                            <div className="flex-1">
                                <label className="block text-gray-150 text-sm font-medium">End Date</label>
                                <input type="text" className="w-full px-2 py-3 mt-2 border border-gray-300 rounded-lg placeholder:text-black placeholder:text-sm" placeholder="31 Nov 2024" />
                            </div>
                        </div>
                        <hr className="h-px mt-8 mb-4 bg-gray-200 border-0 " />

                        <div className="mt-4 flex justify-end gap-4 relative">
                            <button
                                onClick={() => {
                                    // Handle restrict action here
                                    closeModal();
                                }}
                                className="px-4 cursor-pointer py-2 rounded-full font-medium bg-white border border-black text-black"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    // Handle restrict action here
                                    closeModal();
                                }}
                                className="px-4 py-2 rounded-full cursor-pointer font-medium bg-red-500 text-white"
                            >
                                Restrict
                            </button>
                        </div>
                    </div>
                </div>
            )}
               {isModalOpen2 && (
                <div className="overflow-y-auto overflow-x-hidden fixed z-50 bg-black/40 justify-center flex items-center w-full md:inset-0 max-h-full">
                    <div className="bg-white p-6 rounded-lg w-[570px] relative">
                        <h2 className="text-2xl font-bold text-black">Ban User</h2>
                        <button
                            onClick={closeModal2}
                            className="absolute right-7 top-7 rounded-lg cursor-pointer"
                        >
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6.5L6 18.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 6.5L18 18.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </button>
                        <hr className="h-px my-4 bg-gray-200 border-0 " />
                        <p className="text-lg font-medium text-black mb-6">Are you sure you want to ban this user</p>
                    
                        <hr className="h-px mt-8 mb-4 bg-gray-200 border-0 " />

                        <div className="mt-4 flex justify-end gap-4 relative">
                            <button
                                onClick={() => {
                                    // Handle restrict action here
                                    closeModal2();
                                }}
                                className="px-4 cursor-pointer py-2 rounded-full font-medium bg-white border border-black text-black"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    // Handle restrict action here
                                    closeModal2();
                                }}
                                className="px-7 py-2 rounded-full cursor-pointer font-medium bg-red-500 text-white"
                            >
                                Ban
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
