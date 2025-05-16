import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { MdOutlineCheckCircle } from "react-icons/md";
export default function OrderTable() {
    const [statusFilter, setStatusFilter] = useState("Completed");
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("Completed");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const statuses = ["Completed", "Pending", "Cancelled"];
    const handleViewClick = () => {
        navigate('/order/view');
    };

    const data = [
        { id: '01', name: 'Olivia Daddario', service: 'Hair trimming', category: 'Hair trimming', time: '11:00 AM - Jan 13, 2025', price: '$100', status: 'Completed' },
        { id: '02', name: 'Jack Paul', service: 'Hair trimming', category: 'Hair trimming', time: '11:00 AM - Jan 13, 2025', price: '$100', status: 'Completed' },
        { id: '03', name: 'Mr Aalexandar', service: 'Hair trimming', category: 'Hair trimming', time: '11:00 AM - Jan 13, 2025', price: '$100', status: 'Completed' },
        { id: '04', name: 'Mr Aalexandar', service: 'Hair trimming', category: 'Hair trimming', time: '11:00 AM - Jan 13, 2025', price: '$100', status: 'Completed' },
        { id: '01', name: 'Olivia Daddario', service: 'Hair trimming', category: 'Hair trimming', time: '11:00 AM - Jan 13, 2025', price: '$100', status: 'Cancelled' },
        { id: '02', name: 'Jack Paul', service: 'Hair trimming', category: 'Hair trimming', time: '11:00 AM - Jan 13, 2025', price: '$100', status: 'Cancelled' },
        { id: '03', name: 'Mr Aalexandar', service: 'Hair trimming', category: 'Hair trimming', time: '11:00 AM - Jan 13, 2025', price: '$100', status: 'Cancelled' },
        { id: '04', name: 'Mr Aalexandar', service: 'Hair trimming', category: 'Hair trimming', time: '11:00 AM - Jan 13, 2025', price: '$100', status: 'Cancelled' },
        { id: '01', name: 'Olivia Daddario', service: 'Hair trimming', category: 'Hair trimming', time: '11:00 AM - Jan 13, 2025', price: '$100', status: 'Pending' },
        { id: '02', name: 'Jack Paul', service: 'Hair trimming', category: 'Hair trimming', time: '11:00 AM - Jan 13, 2025', price: '$100', status: 'Pending' },
        { id: '03', name: 'Mr Aalexandar', service: 'Hair trimming', category: 'Hair trimming', time: '11:00 AM - Jan 13, 2025', price: '$100', status: 'Pending' },
        { id: '04', name: 'Mr Aalexandar', service: 'Hair trimming', category: 'Hair trimming', time: '11:00 AM - Jan 13, 2025', price: '$100', status: 'Pending' },
    ];


    const renderRating = (status) => {
        if (status === "Completed") {
            return (
                <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, index) => (
                        <FaStar key={index} />
                    ))}
                </div>
            );
        }
        return "-";
    };

    // Filter data based on the selected status
    const filteredData = data.filter(item => item.status === statusFilter || statusFilter === "All");

    return (
        <div className="overflow-x-auto text-gray-900 font-sans">
            <div className="flex justify-between items-center mb-6 font-sans">
                <h2 className="text-[15px] font-semibold text-gray-150">Orders</h2>
                <div className="relative">
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="bg-[#F7F7F7] border border-[#E7E7E7] px-4 py-2 rounded-md flex items-center space-x-2 text-sm text-gray-250 w-full"
                    >
                        <span>{selectedCategory}</span>
                        <svg
                            width="14"
                            height="7"
                            viewBox="0 0 14 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-2"
                        >
                            <path
                                d="M12.2802 1.46667L7.93355 5.81334C7.42021 6.32668 6.58022 6.32668 6.06688 5.81334L1.72021 1.46667"
                                stroke="#747474"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 z-10 bg-white shadow-lg rounded-md border border-[#E7E7E7]">
                            <ul>
                                {statuses.map((category, index) => (
                                    <li
                                        key={index}
                                        className="px-4 py-2 hover:bg-gray-100 border-b border-gray-200 text-gray-250 text-sm cursor-pointer"
                                        onClick={() => {
                                            setSelectedCategory(category);
                                            setStatusFilter(category); // Update status filter
                                            setDropdownOpen(false);
                                        }}
                                    >
                                        {category}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            <table className="w-full text-left border-collapse border border-gray-200">
                <thead className="text-xs bg-gray-100 border-b border-gray-200">
                    <tr>
                        <th className="px-6 py-4">ID</th>
                        <th className="px-6 py-4">Customer name</th>
                        <th className="px-6 py-4">Service Title</th>
                        <th className="px-6 py-4">Service Category</th>
                        <th className="px-6 py-4">Scheduled Time</th>
                        <th className="px-6 py-4">Price</th>
                        <th className="px-6 py-4">Rating</th>
                        {statusFilter === "Pending" && (
                            <th className="px-6 py-4 text-center">Order Status</th>
                        )}
                        <th className="px-6 py-4">View Details</th>
                    </tr>
                </thead>
                <tbody className="text-sm bg-white text-gray-250">
                    {filteredData.map((item, index) => (
                        <tr key={index} className="border-b border-gray-200">
                            <td className="px-6 py-4">{item.id}</td>
                            <td className="px-6 py-4 text-gray-150 font-medium">{item.name}</td>
                            <td className="px-6 py-4">{item.service}</td>
                            <td className="px-6 py-4">{item.category}</td>
                            <td className="px-6 py-4">{item.time}</td>
                            <td className="px-6 py-4">{item.price}</td>
                            <td className="px-6 py-4 " >{renderRating(item.status)}</td>
                            {statusFilter === "Pending" && (
                                <td className="px-6 py-4 "><p className="flex gap-2 items-center text-[#FFC300] bg-[#FFC300]/10 font-medium rounded-full justify-center py-0.5"><MdOutlineCheckCircle /> In-Progress</p></td>
                            )}
                            <td className="px-6 py-4 text-gray-150 font-semibold">
                                <button className="flex gap-1 items-center cursor-pointer" onClick={() => handleViewClick()}>
                                    View Details <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
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
