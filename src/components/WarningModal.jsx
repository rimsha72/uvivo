// WarningModal.jsx
import React, { useState } from "react";
import { db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";

const WarningModal = ({ isOpen, onClose, userId }) => {
  const [reason, setReason] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleWarn = async () => {
    if (!reason) return;

    setIsLoading(true);
    try {
      await setDoc(doc(db, "warnings", userId), { reason, timestamp: Date.now() });
      onClose();
    } catch (error) {
      console.error("Error adding warning:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/10 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-xl w-full">
        <h2 className="text-lg font-semibold mb-4 text-center">Warning Report</h2>
        <textarea
          value={reason}
          rows={6}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Write about something warning "
          className="w-full p-2 border border-[#E3E3E3] bg-[#FAFAFA] rounded mb-4"
        />
        <div className="flex w-full gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-red-150 w-full text-red-150 rounded-lg font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handleWarn}
            disabled={isLoading || !reason}
            className="px-4 py-2 bg-red-150 w-full text-white rounded-lg font-medium"
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WarningModal;