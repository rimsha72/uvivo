import { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function EarningTable() {
    const [isOpen, setIsOpen] = useState(false);
    const [isStatusOpen, setIsStatusOpen] = useState(null);
    const navigate = useNavigate();

    const handleViewClick = (customerId) => {
        navigate(`/customer/${customerId}`);
    };

    const toggleDropdown = (index) => {
        setIsStatusOpen(isStatusOpen === index ? null : index);
    };

    const tableData = [
        {
            id: "01",
            name: "Olivia Daddario",
            status: "Completed",
            earnings: "$633.00",
            source: "Live & gifts",
            duration: "24 May - 28 May 2024",
            action: "View Profile Details",
        },
        {
            id: "02",
            name: "Jack Paul",
            status: "In Progress",
            earnings: "$231.00",
            source: "Live & gifts",
            duration: "24 May - 28 May 2024",
            action: "View Profile Details",
        },
        {
            id: "03",
            name: "Mr Aalexandar",
            status: "Cancelled",
            earnings: "$260.00",
            source: "Live & gifts",
            duration: "24 May - 28 May 2024",
            action: "View Profile Details",
        },
        {
            id: "04",
            name: "Arnold Archer",
            status: "Completed",
            earnings: "$900.00",
            source: "Live & gifts",
            duration: "24 May - 28 May 2024",
            action: "View Profile Details",
        },
    ];

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left rtl:text-right font-sans">
                <thead className="text-sm border-[#E7E7E7]  border-t-[1px] border-b-[1px] text-gray-250 font-normal bg-[#FCFCFC]">
                    <tr>
                        <th scope="col" className="px-6 py-4">Name</th>
                        <th scope="col" className="px-6 py-4">Status</th>
                        <th scope="col" className="px-6 py-4">Earnings</th>
                        <th scope="col" className="px-6 py-4">Source</th>
                        <th scope="col" className="px-6 py-4 flex items-center gap-2">
                            Duration{" "}
                            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.99992 0.833496V10.1668M5.99992 10.1668L10.6666 5.50016M5.99992 10.1668L1.33325 5.50016" stroke="#8D8D8D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </th>
                        <th scope="col" className="px-6 py-4">Action</th>
                    </tr>
                </thead>
                <tbody className="text-sm text-gray-250 font-sans">
                    {tableData.map((user, index) => (
                        <tr key={index} className="border-b border-gray-200 bg-white">
                            <td className="px-6 py-5 text-black font-semibold whitespace-nowrap">
                                {user.name}
                            </td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center gap-2">
                                    <span
                                        className={`px-3 py-1 rounded-full flex items-center gap-2 text-xs ${user.status === "Completed"
                                            ? "bg-green-250/10 text-green-400"
                                            : user.status === "In Progress"
                                                ? "bg-yellow-150/10 text-yellow-400"
                                                : "bg-red-250/10 text-red-400"
                                            }`}
                                    >
                                        {user.status === "Completed" ? (
                                            <IoIosCheckmarkCircleOutline className="text-green-400 w-3 h-3" />
                                        ) : (
                                            <FaCircle className={`w-1.5 h-1.5 ${user.status === "In Progress" ? "text-yellow-400" : "text-red-400"}`} />
                                        )}
                                        {user.status}
                                    </span>
                                </span>
                            </td>
                            <td className="px-6 py-4">{user.earnings}</td>
                            <td className="px-6 py-4">{user.source}</td>
                            <td className="px-6 py-4">{user.duration}</td>
                            <td className="px-6 py-4 text-black font-semibold">
                                <button
                                    className="flex gap-1 items-center cursor-pointer"
                                    // onClick={() => handleViewClick(user.id)}
                                >
                                    {user.action}{" "}
                                    <svg
                                        width="12"
                                        height="13"
                                        viewBox="0 0 12 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7.21506 10.3009C7.12006 10.3009 7.02506 10.2659 6.95006 10.1909C6.80506 10.0459 6.80506 9.80593 6.95006 9.66093L9.72006 6.89093L6.95006 4.12093C6.80506 3.97593 6.80506 3.73593 6.95006 3.59093C7.09506 3.44593 7.33506 3.44593 7.48006 3.59093L10.5151 6.62593C10.6601 6.77093 10.6601 7.01093 10.5151 7.15593L7.48006 10.1909C7.40506 10.2659 7.31006 10.3009 7.21506 10.3009Z"
                                            fill="#434343"
                                        />
                                        <path
                                            d="M10.165 7.26587H1.75C1.545 7.26587 1.375 7.09587 1.375 6.89087C1.375 6.68587 1.545 6.51587 1.75 6.51587H10.165C10.37 6.51587 10.54 6.68587 10.54 6.89087C10.54 7.09587 10.37 7.26587 10.165 7.26587Z"
                                            fill="#434343"
                                        />
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