import React, { useState } from 'react';
import bmwImage from "../assets/gift.png"
import chevy from "../assets/gift1.png"
import mercedesImage from "../assets/gift2.png"
import lamboImage from "../assets/gift3.png"
import coin from "../assets/coin.png"
import money from "../assets/money.png"
import AddGift from '../components/AddGift';

const CoinIcon = () => (
    <img src={coin} alt='' />
);

const gifts = [
    { id: 1, name: 'BMW M3', coins: 500, price: 50, image: bmwImage },
    { id: 2, name: 'Chevy Silverado', coins: 500, price: 50, image: chevy },
    { id: 3, name: 'G63 Mercedes', coins: 500, price: 50, image: mercedesImage },
    { id: 4, name: 'Lamborghini', coins: 500, price: 50, image: lamboImage },
];

const Gift = () => {
const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className="max-w-screen-3xl mx-auto font-sans">
            <div className="mx-4 sm:mx-8 my-4 space-y-4">
                <div className="flex justify-between items-center mb-6 w-full">
                    <h1 className="font-inter font-bold text-lg w-full">Manage Gifts</h1>
                    <div className="w-full">
                        <form className="max-w-[427px] mx-auto w-full">
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="search" id="default-search" className="block w-full px-4 py-3 ps-10 text-sm text-gray-900 rounded-lg bg-gray-100 focus:outline-none placeholder:text-gray-970 placeholder:text-sm" placeholder="Search here..." />
                            </div>
                        </form>
                    </div>
                    <div className='w-full flex justify-end'>
                        <button onClick={() => setIsModalOpen(true)} className="bg-red-150 cursor-pointer text-sm font-medium text-white px-4 py-2 rounded-lg transition">
                            Add New Gift
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {gifts.map((gift) => (
                        <div
                            key={gift.id}
                            className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
                        >
                            <img
                                src={gift.image}
                                alt={gift.name}
                                className="w-32 h-32 object-contain mb-4"
                            />

                            <h3 className="text-base font-semibold text-black mb-2">{gift.name}</h3>

                            <div className="flex items-center space-x-12 mb-4 text-black font-semibold text-lg">
                                <span className="flex gap-2"><CoinIcon />{gift.coins}</span>
                                <span className="flex gap-2"><img src={money} alt='' />{gift.price}</span>
                            </div>

                            <div className="flex space-x-2 w-full">
                                <button className="flex gap-3 items-center justify-center text-black px-4 border border-red-150 py-2.5 text-sm rounded-lg transition w-full">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.125 3.7373C11.0438 3.53105 8.95 3.4248 6.8625 3.4248C5.625 3.4248 4.3875 3.4873 3.15 3.6123L1.875 3.7373" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M5.3125 3.10625L5.45 2.2875C5.55 1.69375 5.625 1.25 6.68125 1.25H8.31875C9.375 1.25 9.45625 1.71875 9.55 2.29375L9.6875 3.10625" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.7812 5.71289L11.375 12.0066C11.3062 12.9879 11.25 13.7504 9.50625 13.7504H5.49375C3.75 13.7504 3.69375 12.9879 3.625 12.0066L3.21875 5.71289" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.4563 10.3125H8.53755" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M5.9375 7.8125H9.0625" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    Remove
                                </button>
                                <button className="bg-red-150 flex gap-3 text-sm justify-center items-center text-white px-4 py-2.5 rounded-lg transition w-full">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 1.25H5C2.5 1.25 1.25 2.5 1.25 5V13.125C1.25 13.4687 1.53125 13.75 1.875 13.75H10C12.5 13.75 13.75 12.5 13.75 10V5C13.75 2.5 12.5 1.25 10 1.25Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M8.06874 4.89985L4.82499 8.1436C4.69999 8.2686 4.58125 8.51235 4.55625 8.68735L4.38125 9.92485C4.31875 10.3749 4.63124 10.6874 5.08124 10.6249L6.31873 10.4499C6.49373 10.4249 6.7375 10.3061 6.8625 10.1811L10.1062 6.93735C10.6625 6.3811 10.9312 5.7311 10.1062 4.9061C9.28125 4.07485 8.63124 4.33735 8.06874 4.89985Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M7.6062 5.3623C7.8812 6.34355 8.64995 7.11855 9.63745 7.39355" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    Edit
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <AddGift
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                // onSubmit={handleAddGift}
            />
        </div>
    );
};

export default Gift;