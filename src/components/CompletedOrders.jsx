import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function CompletedOrders() {
    const [isOpen, setIsOpen] = useState(false);
    const [isStatusOpen, setIsStatusOpen] = useState(null);
    const navigate = useNavigate();

    const handleViewOrder = () => {
        navigate('/order/view', { state: { orderStatus: "Completed" } });
    };



    const toggleDropdown = (index) => {
        setIsStatusOpen(isStatusOpen === index ? null : index);
    };

    const tableData = [
        {
            id: "01",
            name: "Olivia Daddario",
            type: "Hair trimming",
            provider: "GlamHaus",
            time: "11:00 AM - Jan 13, 2025",
            price: "$100",
            review: "---",
            Account: "View Details",
        },
        {
            id: "01",
            name: "Olivia Daddario",
            type: "Hair trimming",
            provider: "GlamHaus",
            time: "11:00 AM - Jan 13, 2025",
            price: "$100",
            review: "---",
            Account: "View Details",
        },
        {
            id: "01",
            name: "Olivia Daddario",
            type: "Hair trimming",
            provider: "GlamHaus",
            time: "11:00 AM - Jan 13, 2025",
            price: "$100",
            review: "---",
            Account: "View Details",
        },
        {
            id: "01",
            name: "Olivia Daddario",
            type: "Hair trimming",
            provider: "GlamHaus",
            time: "11:00 AM - Jan 13, 2025",
            price: "$100",
            review: "---",
            Account: "View Details",
        },
        {
            id: "01",
            name: "Olivia Daddario",
            type: "Hair trimming",
            provider: "GlamHaus",
            time: "11:00 AM - Jan 13, 2025",
            price: "$100",
            review: "---",
            Account: "View Details",
        },
    ];
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left rtl:text-right fomt-sans">
                <thead className="text-xs border-[#E7E7E7] border-t-[1px] border-b-[1px] text-gray-250 font-semibold bg-[#FCFCFC]">
                    <tr>
                        <th scope="col" className="px-6 py-4">ID</th>
                        <th scope="col" className="px-6 py-4">Customer name</th>
                        <th scope="col" className="px-6 py-4">Service Type</th>
                        <th scope="col" className="px-6 py-4">Service Provider</th>
                        <th scope="col" className="px-6 py-4">Scheduled time</th>
                        <th scope="col" className="px-6 py-4">Rating</th>
                        <th scope="col" className="px-6 py-4">Order Status</th>
                        <th scope="col" className="px-6 py-4">Payment</th>
                        <th scope="col" className="px-6 py-4">View</th>
                    </tr>
                </thead>

                <tbody className="text-sm text-gray-250 font-sans">
                    {tableData.map((user, index) => (
                        <tr key={index} className="border-b border-gray-200 bg-white">
                            <td className="px-6 py-5">#{user.id}</td>
                            <td className="flex items-center px-6 py-4 text-gray-150 font-semibold whitespace-nowrap">
                                <div className="text-sm font-medium ml-3">{user.name}</div>
                            </td>
                            <td className="px-6 py-5">{user.type}</td>
                            <td className="px-6 py-5">{user.provider}</td>
                            <td className="px-6 py-5">{user.time}</td>
                            <td className="px-6 py-5">
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
                            </td>
                            <td className="px-6 py-5">
                                <div className="bg-green-600/20 text-green-600 flex gap-2 justify-center items-center rounded-full font-medium py-1">
                                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.66553 11.375C3.70053 11.375 1.29053 8.965 1.29053 6C1.29053 3.035 3.70053 0.625 6.66553 0.625C9.63053 0.625 12.0405 3.035 12.0405 6C12.0405 8.965 9.63053 11.375 6.66553 11.375ZM6.66553 1.375C4.11553 1.375 2.04053 3.45 2.04053 6C2.04053 8.55 4.11553 10.625 6.66553 10.625C9.21553 10.625 11.2905 8.55 11.2905 6C11.2905 3.45 9.21553 1.375 6.66553 1.375Z" fill="#00A559" />
                                        <path d="M5.9555 7.79005C5.8555 7.79005 5.7605 7.75005 5.6905 7.68005L4.2755 6.26505C4.1305 6.12005 4.1305 5.88005 4.2755 5.73505C4.4205 5.59005 4.6605 5.59005 4.8055 5.73505L5.9555 6.88505L8.5255 4.31505C8.6705 4.17005 8.9105 4.17005 9.0555 4.31505C9.2005 4.46005 9.2005 4.70005 9.0555 4.84505L6.2205 7.68005C6.1505 7.75005 6.0555 7.79005 5.9555 7.79005Z" fill="#00A559" />
                                    </svg>
                                    <p>Completed</p>
                                </div>
                            </td>
                            <td className="px-6 py-5">{user.price}</td>
                            <td className="px-6 py-5 text-gray-150 font-semibold">
                                <button className="flex gap-1 items-center cursor-pointer" onClick={() => handleViewOrder()}>
                                    {user.Account} <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.21506 10.3009C7.12006 10.3009 7.02506 10.2659 6.95006 10.1909C6.80506 10.0459 6.80506 9.80593 6.95006 9.66093L9.72006 6.89093L6.95006 4.12093C6.80506 3.97593 6.80506 3.73593 6.95006 3.59093C7.09506 3.44593 7.33506 3.44593 7.48006 3.59093L10.5151 6.62593C10.6601 6.77093 10.6601 7.01093 10.5151 7.15593L7.48006 10.1909C7.40506 10.2659 7.31006 10.3009 7.21506 10.3009Z" fill="#434343" />
                                        <path d="M10.165 7.26587H1.75C1.545 7.26587 1.375 7.09587 1.375 6.89087C1.375 6.68587 1.545 6.51587 1.75 6.51587H10.165C10.37 6.51587 10.54 6.68587 10.54 6.89087C10.54 7.09587 10.37 7.26587 10.165 7.26587Z" fill="#434343" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
