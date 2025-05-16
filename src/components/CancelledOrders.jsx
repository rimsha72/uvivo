import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function CancelledOrders() {
    const [isOpen, setIsOpen] = useState(false);
    const [isStatusOpen, setIsStatusOpen] = useState(null);
    const navigate = useNavigate();

    const handleViewOrder = () => {
        navigate('/order/view', { state: { orderStatus: "Cancelled" } });
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
            date: "Jan 13, 2025",
            person: "Artist",
            price: "$100",
            Account: "View Details",
        },
        {
            id: "01",
            name: "Olivia Daddario",
            type: "Hair trimming",
            provider: "GlamHaus",
            date: "Jan 13, 2025",
            person: "Customer",
            price: "$100",
            Account: "View Details",
        },
        {
            id: "01",
            name: "Olivia Daddario",
            type: "Hair trimming",
            provider: "GlamHaus",
            date: "Jan 13, 2025",
            person: "Artist",
            price: "$100",
            Account: "View Details",
        },
        {
            id: "01",
            name: "Olivia Daddario",
            type: "Hair trimming",
            provider: "GlamHaus",
            date: "Jan 13, 2025",
            person: "Artist",
            price: "$100",
            Account: "View Details",
        },
        {
            id: "01",
            name: "Olivia Daddario",
            type: "Hair trimming",
            provider: "GlamHaus",
            date: "Jan 13, 2025",
            person: "Artist",
            price: "$100",
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
                        <th scope="col" className="px-6 py-4">Date</th>
                        <th scope="col" className="px-6 py-4">Cancelled by</th>
                        <th scope="col" className="px-6 py-4">Price</th>
                        <th scope="col" className="px-6 py-4">Order Status</th>
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
                            <td className="px-6 py-5">{user.date}</td>
                            <td className="px-6 py-5">{user.person}</td>
                            <td className="px-6 py-5">{user.price}</td>
                            <td className="px-6 py-5">
                                <div className="bg-red-400/20 text-red-600 flex gap-2 justify-center items-center rounded-full font-medium py-1">
                                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.61552 11.375H4.71553C4.27053 11.375 3.70053 11.14 3.39053 10.825L1.34053 8.77499C1.02553 8.45999 0.790527 7.89 0.790527 7.45V4.55C0.790527 4.105 1.02553 3.53501 1.34053 3.22501L3.39053 1.175C3.70553 0.860003 4.27553 0.625 4.71553 0.625H7.61552C8.06052 0.625 8.63053 0.860003 8.94053 1.175L10.9905 3.22501C11.3055 3.54001 11.5405 4.11 11.5405 4.55V7.45C11.5405 7.895 11.3055 8.46499 10.9905 8.77499L8.94053 10.825C8.62553 11.14 8.06052 11.375 7.61552 11.375ZM4.71553 1.375C4.47053 1.375 4.09052 1.53 3.92052 1.705L1.87053 3.755C1.70053 3.93 1.54053 4.305 1.54053 4.55V7.45C1.54053 7.695 1.69553 8.075 1.87053 8.245L3.92052 10.295C4.09552 10.465 4.47053 10.625 4.71553 10.625H7.61552C7.86052 10.625 8.24053 10.47 8.41053 10.295L10.4605 8.245C10.6305 8.06999 10.7905 7.695 10.7905 7.45V4.55C10.7905 4.305 10.6355 3.925 10.4605 3.755L8.41053 1.705C8.23553 1.535 7.86052 1.375 7.61552 1.375H4.71553Z" fill="#EA4335" />
                                        <path d="M4.41574 8.12497C4.32074 8.12497 4.22574 8.08997 4.15074 8.01497C4.00574 7.86997 4.00574 7.62997 4.15074 7.48497L7.65074 3.98497C7.79574 3.83997 8.03574 3.83997 8.18074 3.98497C8.32574 4.12997 8.32574 4.36997 8.18074 4.51497L4.68074 8.01497C4.60574 8.08997 4.51074 8.12497 4.41574 8.12497Z" fill="#EA4335" />
                                        <path d="M7.91574 8.12497C7.82074 8.12497 7.72574 8.08997 7.65074 8.01497L4.15074 4.51497C4.00574 4.36997 4.00574 4.12997 4.15074 3.98497C4.29574 3.83997 4.53574 3.83997 4.68074 3.98497L8.18074 7.48497C8.32574 7.62997 8.32574 7.86997 8.18074 8.01497C8.10574 8.08997 8.01074 8.12497 7.91574 8.12497Z" fill="#EA4335" />
                                    </svg>

                                    <p>Cancelled</p>
                                </div>
                            </td>
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
