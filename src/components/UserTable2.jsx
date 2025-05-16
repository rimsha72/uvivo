import { useState } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";
import profile4 from "../assets/profile4.png";
import profile5 from "../assets/profile5.png";
import profile6 from "../assets/profile6.png";
import profile7 from "../assets/profile7.png";
import profile8 from "../assets/profile8.png";
import profile9 from "../assets/profile9.png";

export default function UserTable2() {
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
            profile: profile1,
            joinDate: "Jan 13, 2022",
            email: "Userefandax1234@gmail.com",
            actionStatus: "Active",
            totalEarnings: "$500k",
            totalPosts: "50k",
            account: "View Profile Details",
        },
        {
            id: "02",
            name: "Jack Paul",
            profile: profile2,
            joinDate: "Jan 12, 2022",
            email: "Userefandax1234@gmail.com",
            actionStatus: "Freeze",
            actionStatus2: "Active Now",
            totalEarnings: "$500k",
            totalPosts: "50k",
            account: "View Profile Details",
        },
        {
            id: "03",
            name: "Mr Aalexandar",
            profile: profile3,
            joinDate: "Jan 12, 2022",
            email: "Userefandax1234@gmail.com",
            actionStatus: "Active",
            totalEarnings: "$500k",
            totalPosts: "50k",
            account: "View Profile Details",
        },
        {
            id: "04",
            name: "Arnold Archer",
            profile: profile4,
            joinDate: "Jan 12, 2022",
            email: "Userefandax1234@gmail.com",
            actionStatus: "Active",
            totalEarnings: "$500k",
            totalPosts: "50k",
            account: "View Profile Details",
        },
        {
            id: "05",
            name: "Olivia Daddario",
            profile: profile5,
            joinDate: "Jan 12, 2022",
            email: "Userefandax1234@gmail.com",
            actionStatus: "Active",
            totalEarnings: "$500k",
            totalPosts: "50k",
            account: "View Profile Details",
        },
        {
            id: "06",
            name: "Arnold Archer",
            profile: profile6,
            joinDate: "Jan 12, 2022",
            email: "Userefandax1234@gmail.com",
            actionStatus: "Active",
            totalEarnings: "$500k",
            totalPosts: "50k",
            account: "View Profile Details",
        },
        {
            id: "07",
            name: "Jack Paul",
            profile: profile7,
            joinDate: "Jan 12, 2022",
            email: "Userefandax1234@gmail.com",
            actionStatus: "Freeze",
            actionStatus2: "Active Now",
            totalEarnings: "$500k",
            totalPosts: "50k",
            account: "View Profile Details",
        },
        {
            id: "08",
            name: "Arnold Archer",
            profile: profile8,
            joinDate: "Jan 12, 2022",
            email: "Userefandax1234@gmail.com",
            actionStatus: "Active",
            totalEarnings: "$500k",
            totalPosts: "50k",
            account: "View Profile Details",
        },
        {
            id: "09",
            name: "Olivia Daddario",
            profile: profile9,
            joinDate: "Jan 12, 2022",
            email: "Userefandax1234@gmail.com",
            actionStatus: "Active",
            totalEarnings: "$500k",
            totalPosts: "50k",
            account: "View Profile Details",
        },
    ];

    return (
        <div className="p-6">
            <div className="overflow-x-auto">
                <table className="w-full text-left rtl:text-right font-sans">
                    <thead className="text-sm border-[#E7E7E7] border-t-[1px] border-b-[1px] text-gray-250 font-normal bg-[#FCFCFC]">
                        <tr>
                            <th scope="col" className="px-6 py-4">Name</th>
                            <th scope="col" className="px-6 py-4">Join Date</th>
                            <th scope="col" className="px-6 py-4">Account Status</th>
                            <th scope="col" className="px-6 py-4">Total Earnings</th>
                            <th scope="col" className="px-6 py-4">Total Posts</th>
                            <th scope="col" className="px-6 py-4">Account</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-gray-250 font-sans">
                        {tableData.map((user, index) => (
                            <tr key={index} className="border-b border-gray-200 bg-white">
                                <td className="px-6 py-5 text-black font-semibold whitespace-nowrap flex items-center gap-3">
                                    <img src={user.profile} alt={user.name} className="w-10 h-10 rounded-full" />
                                    {user.name}
                                </td>
                                <td className="px-6 py-4">{user.joinDate}</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-2">
                                        <span
                                            className={`px-3 py-1 rounded-full flex items-center gap-2 text-xs ${user.actionStatus === "Active"
                                                    ? "bg-green-250/10 text-green-400"
                                                    : "bg-red-250/10 text-red-400"
                                                }`}
                                        >
                                            {user.actionStatus === "Active" ? (
                                                <IoIosCheckmarkCircleOutline className="text-green-400 w-3 h-3" />
                                            ) : (
                                                <IoCloseCircleOutline className="text-red-400 w-3 h-3" />
                                            )}
                                            {user.actionStatus}
                                        </span>
                                        {user.actionStatus2 && (
                                            <span
                                                className={`px-3 py-1 rounded-full flex items-center gap-2 text-xs bg-green-250/10 text-green-400`}
                                            >
                                                <IoIosCheckmarkCircleOutline className="text-green-400 w-3 h-3" />
                                                {user.actionStatus2}
                                            </span>
                                        )}
                                    </span>
                                </td>
                                <td className="px-6 py-4">{user.totalEarnings}</td>
                                <td className="px-6 py-4">{user.totalPosts}</td>
                                <td className="px-6 py-4 text-black font-semibold">
                                    <button
                                        className="flex gap-1 items-center cursor-pointer"
                                        // onClick={() => handleViewClick(user.id)}
                                    >
                                        {user.account}{" "}
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
        </div>
    );
}