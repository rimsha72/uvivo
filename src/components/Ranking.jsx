import { useState } from "react";
import profile from "../assets/profile1.png";
import profile1 from "../assets/profile3.png";
import profile2 from "../assets/profile4.png";
import profile3 from "../assets/profile5.png";
import profile4 from "../assets/profile6.png";
import { useNavigate } from "react-router-dom";

export default function Ranking() {
    const [ratings, setRatings] = useState({});
    const navigate = useNavigate();

    const handleViewClick = (customerId) => {
        navigate(`/customer/${customerId}`);
    };

    const handleRatingChange = (index, newRating) => {
        setRatings((prevRatings) => ({
            ...prevRatings,
            [index]: newRating,
        }));
    };

    const ratingOptions = ["Platinum", "Gold", "Silver", "Bronze", "User Rank"];

    const tableData = [
        { id: "01", name: "Olivia Daddario", profile: profile, noOfbookings: "100k", averageRating: "4.8", cancellationRate: "10%", rating: "Platinum" },
        { id: "02", name: "Jack Paul", profile: profile1, noOfbookings: "100k", averageRating: "4.8", cancellationRate: "10%", rating: "Gold" },
        { id: "03", name: "Mr Aalexandar", profile: profile2, noOfbookings: "100k", averageRating: "4.8", cancellationRate: "10%", rating: "Silver" },
        { id: "04", name: "Arnold Archer", profile: profile3, noOfbookings: "100k", averageRating: "4.8", cancellationRate: "10%", rating: "Bronze" },
        { id: "05", name: "Jack Paul", profile: profile4, noOfbookings: "100k", averageRating: "4.8", cancellationRate: "10%", rating: "User Rank" },
    ];

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left rtl:text-right font-sans">
                <thead className="text-xs border-[#E7E7E7] border-t-[1px] border-b-[1px] text-gray-250 font-semibold bg-[#FCFCFC]">
                    <tr>
                        <th className="px-6 py-4">ID</th>
                        <th className="px-6 py-4">Name</th>
                        <th className="px-6 py-4">No of Bookings</th>
                        <th className="px-6 py-4">Average Rating</th>
                        <th className="px-6 py-4">Cancellation Rate</th>
                        <th className="px-6 py-4">Rating</th>
                        <th className="px-6 py-4">Account</th>
                    </tr>
                </thead>
                <tbody className="text-sm text-gray-250 font-sans">
                    {tableData.map((user, index) => (
                        <tr key={index} className="border-b border-gray-200 bg-white">
                            <td className="px-6 py-5">#{user.id}</td>
                            <td className="flex items-center px-6 py-4 text-gray-150 font-semibold whitespace-nowrap gap-3">
                                <img src={user.profile} alt="" />
                                <div className="text-sm font-medium">{user.name}</div>
                            </td>
                            <td className="px-6 py-5">{user.noOfbookings}</td>
                            <td className="px-6 py-5">
                                <div className="flex gap-3 items-center">
                                    {user.averageRating}
                                    <svg className="w-4 h-4 ms-1 text-[#FFCC00]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                </div>
                            </td>
                            <td className="px-6 py-5">{user.cancellationRate}</td>
                            <td className="px-6 py-5">
                                <select
                                    value={ratings[index] || user.rating}
                                    onChange={(e) => handleRatingChange(index, e.target.value)}
                                    className="bg-[#FFCC002B] rounded-full px-2 py-0.5 focus:outline-none"
                                >
                                    {ratingOptions.map((option, i) => (
                                        <option key={i} value={option} className="bg-white">{option}</option>
                                    ))}
                                </select>
                            </td>
                            <td className="px-6 py-5 text-gray-150 font-semibold">
                                <button className="flex gap-1 items-center cursor-pointer" onClick={() => handleViewClick(user.id)}>
                                    View Profile <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
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
