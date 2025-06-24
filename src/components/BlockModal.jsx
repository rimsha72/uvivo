// BlockModal.jsx
import React, { useState } from "react";
import { db } from "../../firebase";
import { updateDoc, doc } from "firebase/firestore";

const BlockModal = ({ isOpen, onClose, userId, onStatusChange }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleBlock = async () => {
    setIsLoading(true);
    try {
      await updateDoc(doc(db, "app_users", userId), { status: "blocked" });
      onStatusChange("blocked");
      onClose();
    } catch (error) {
      console.error("Error blocking account:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-lg font-semibold mb-4">Confirm Block</h2>
        <p className="mb-4">Are you sure you want to block this account?</p>
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-black rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleBlock}
            disabled={isLoading}
            className="px-4 py-2 bg-[#DD2025] text-white rounded disabled:opacity-50"
          >
            {isLoading ? "Blocking..." : "Block"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlockModal;