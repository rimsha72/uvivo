// FreezeModal.jsx
import React, { useState } from "react";
import { db } from "../../firebase";
import { doc, setDoc, updateDoc } from "firebase/firestore";

const FreezeModal = ({ isOpen, onClose, userId, onStatusChange }) => {
    const [endDate, setEndDate] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleFreeze = async () => {
        if (!endDate) return;

        setIsLoading(true);
        try {
            const endDateMs = new Date(endDate).getTime();
            await setDoc(doc(db, "freezed_users", userId), { endDate: endDateMs });
            await updateDoc(doc(db, "app_users", userId), { status: "freezed" });
            onStatusChange("freezed");
            onClose();
        } catch (error) {
            console.error("Error freezing account:", error);
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/10 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-xl w-full">
                <h2 className="text-lg font-semibold mb-1 text-center">Freeze Account</h2>
                <p className="text-sm mb-4 text-gray-500 text-center">Please select the time frame of freezing the account</p>

                <div className="my-8">
                    <label className="mb-1 text-base font-medium text-black">End date</label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="w-full p-2 border border-gray-200 rounded mb-4 mt-1"
                    />
                </div>

                <div className="flex justify-end gap-2">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 border border-red-150 w-full text-red-150 rounded-lg font-medium"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleFreeze}
                        disabled={isLoading}
                       className="px-4 py-2 bg-red-150 w-full text-white rounded-lg font-medium"
                    >
                        {isLoading ? "Freezing..." : "Freeze"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FreezeModal;