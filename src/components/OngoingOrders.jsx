import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function OngoingOrders() {
    const [isOpen, setIsOpen] = useState(false);
    const [isStatusOpen, setIsStatusOpen] = useState(null);
    const navigate = useNavigate();

    const handleViewOrder = () => {
        navigate('/order/view', { state: { orderStatus: "In-Process" } });
    };
    
    const toggleDropdown = (index) => {
        setIsStatusOpen(isStatusOpen === index ? null : index);
    };

    const tableData = [
        {
            id: "01",
            name: "Olivia Daddario",
            service: "Hair trimming",
            type: "Hair trimming",
            time: "11:00 AM - Jan 13, 2025",
            price: "$100",
            review: "---",
            Account: "View Details",
            status: "In-process",
        },
        {
            id: "01",
            name: "Olivia Daddario",
            service: "Hair trimming",
            type: "Hair trimming",
            time: "11:00 AM - Jan 13, 2025",
            price: "$100",
            review: "---",
            Account: "View Details",
            status: "In-process",
        },
        {
            id: "01",
            name: "Olivia Daddario",
            service: "Hair trimming",
            type: "Hair trimming",
            time: "11:00 AM - Jan 13, 2025",
            price: "$100",
            review: "---",
            Account: "View Details",
            status: "In-process",
        },
        {
            id: "01",
            name: "Olivia Daddario",
            service: "Hair trimming",
            type: "Hair trimming",
            time: "11:00 AM - Jan 13, 2025",
            price: "$100",
            review: "---",
            Account: "View Details",
            status: "In-process",
        },
        {
            id: "01",
            name: "Olivia Daddario",
            service: "Hair trimming",
            type: "Hair trimming",
            time: "11:00 AM - Jan 13, 2025",
            price: "$100",
            review: "---",
            Account: "View Details",
            status: "In-process",
        },
    ];
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left rtl:text-right fomt-sans">
                <thead className="text-xs border-[#E7E7E7] border-t-[1px] border-b-[1px] text-gray-250 font-semibold bg-[#FCFCFC]">
                    <tr>
                        <th scope="col" className="px-6 py-4">ID</th>
                        <th scope="col" className="px-6 py-4">Customer name</th>
                        <th scope="col" className="px-6 py-4">Service Title</th>
                        <th scope="col" className="px-6 py-4">Service Type</th>
                        <th scope="col" className="px-6 py-4">Scheduled time</th>
                        <th scope="col" className="px-6 py-4">Price</th>
                        <th scope="col" className="px-6 py-4">Review</th>
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
                            <td className="px-6 py-5">{user.service}</td>
                            <td className="px-6 py-5">{user.type}</td>
                            <td className="px-6 py-5">{user.time}</td>
                            <td className="px-6 py-5">{user.price}</td>
                            <td className="px-6 py-5">{user.review}</td>
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
