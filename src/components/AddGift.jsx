import React, { useState } from "react";
import { db, storage } from "../../firebase"; 
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";

const AddGift = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [priceDollars, setPriceDollars] = useState("");
  const [priceVocacash, setPriceVocacash] = useState("");
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !priceDollars || !priceVocacash || !image) {
      setError("Please fill all fields and upload an image.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const storageRef = ref(storage, `gifts/${image.name}`);
      await uploadBytes(storageRef, image);
      const imageUrl = await getDownloadURL(storageRef);

      const giftRef = doc(collection(db, "gifts"));
      const giftId = giftRef.id; 

      await setDoc(giftRef, {
        giftId, 
        name,
        applicationPrice: parseFloat(priceDollars),
        priceVivocash: parseFloat(priceVocacash),
        imageUrl,
        createdAt: Date.now(), 
      });

      console.log("Gift added with ID: ", giftId);
      onClose();
    } catch (error) {
      console.error("Error adding gift:", error);
      setError("Failed to add gift. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Upload</label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="text-center">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="imageUpload"
              />
              <label
                htmlFor="imageUpload"
                className="cursor-pointer flex flex-col items-center"
              >
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M24 12v12m0 0l-6-6m6 6l6-6M12 36h24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="mt-1 text-sm text-gray-600">
                  {image ? image.name : "Upload a file"}
                </p>
              </label>
            </div>
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Application price($)</label>
            <input
              type="number"
              value={priceDollars}
              onChange={(e) => setPriceDollars(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="$"
              step="0.01"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Price in Vocacash</label>
            <input
              type="number"
              value={priceVocacash}
              onChange={(e) => setPriceVocacash(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="00"
              step="1"
            />
          </div>
          <div className="flex justify-end space-x-4 w-full text-sm font-medium">
            <button
              type="button"
              onClick={onClose}
              className="border border-red-150 text-red-150 px-4 py-2.5 rounded-lg w-full cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-red-150 text-white px-4 py-2.5 rounded-lg w-full cursor-pointer disabled:opacity-50"
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddGift;