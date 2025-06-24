import React, { useState, useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function UserTable() {
  const [isStatusOpen, setIsStatusOpen] = useState(null);
  const [users, setUsers] = useState([]); 
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const usersCollection = collection(db, "app_users");
        const usersSnapshot = await getDocs(usersCollection);
        const usersData = usersSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
        setUsers([]); // Fallback to empty array on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleViewClick = (customerId) => {
    navigate(`/customer/${customerId}`);
  };

  const toggleDropdown = (index) => {
    setIsStatusOpen(isStatusOpen === index ? null : index);
  };

  const formatDate = (epochMs) => {
    const date = new Date(epochMs);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left rtl:text-right font-sans">
        <thead className="text-sm border-[#E7E7E7] border-t-[1px] border-b-[1px] text-gray-250 font-normal bg-[#FCFCFC]">
          <tr>
            <th scope="col" className="px-6 py-4">Name</th>
            <th scope="col" className="px-6 py-4">Join Date</th>
            <th scope="col" className="px-6 py-4 flex items-center gap-2">
              Email{" "}
              <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.99992 0.833496V10.1668M5.99992 10.1668L10.6666 5.50016M5.99992 10.1668L1.33325 5.50016" stroke="#8D8D8D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </th>
            <th scope="col" className="px-6 py-4">Action Status</th>
            <th scope="col" className="px-6 py-4">Account</th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-250 font-sans">
          {isLoading ? (
            <tr>
              <td colSpan="5" className="px-6 py-5 text-center">
                <div className="flex items-center justify-center">
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
              </td>
            </tr>
          ) : users.length === 0 ? (
            <tr>
              <td colSpan="5" className="px-6 py-5 text-center">
                No users found.
              </td>
            </tr>
          ) : (
            users.map((user, index) => (
              <tr key={index} className="border-b border-gray-200 bg-white">
                <td className="px-6 py-5 text-black font-semibold whitespace-nowrap">
                  {user.displayName || user.userName || "N/A"}
                </td>
                <td className="px-6 py-4">
                  {user.createdAt ? formatDate(user.createdAt) : "N/A"}
                </td>
                <td className="px-6 py-4">{user.email || "N/A"}</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full flex items-center gap-2 text-xs ${
                        user.status === "active"
                          ? "bg-green-250/10 text-green-400"
                          : "bg-red-250/10 text-red-400"
                      }`}
                    >
                      {user.status === "active" ? (
                        <IoIosCheckmarkCircleOutline className="text-green-400 w-3 h-3" />
                      ) : (
                       <></> // <IoCloseCircleOutline className="text-red-400 w-3 h-3" />
                      )}
                      {user.status || "N/A"}
                    </span>
                  </span>
                </td>
                <td className="px-6 py-4 text-black font-semibold">
                  <button
                    className="flex gap-1 items-center cursor-pointer"
                    onClick={() => handleViewClick(user.uid)}
                  >
                    View Profile Details{" "}
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
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}