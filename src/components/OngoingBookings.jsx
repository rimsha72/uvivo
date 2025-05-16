import { useState } from "react";
import service from "../assets/service.png"
import profile from "../assets/profile7.png"
const services = [
    {
        id: 1,
        category: "Makeup",
        title: "5 Star Manicure Pedicure",
        provider: "Rafina Danez",
        duration: "60 - 499",
        time: "Mon - Sun",
        rating: "5.0",
        image: service,
    },
    {
        id: 2,
        category: "Hair",
        title: "5 Star Manicure Pedicure",
        provider: "Rafina Danez",
        duration: "60 - 499",
        time: "Mon - Sun",
        rating: "5.0",
        image: service,
    },
    {
        id: 3,
        category: "Nails",
        title: "5 Star Manicure Pedicure",
        provider: "Rafina Danez",
        duration: "60 - 499",
        time: "Mon - Sun",
        rating: "5.0",
        image: service,
    }
];
const categories = ["All Categories", ...new Set(services.map(service => service.category))];

export default function Services() {
    const [selectedCategory, setSelectedCategory] = useState("Select Category");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const filteredServices = selectedCategory === "Select Category" || selectedCategory === "All Categories"
        ? services
        : services.filter(service => service.category === selectedCategory);

    return (
        <div>
            <div className="flex justify-between items-center mb-6 font-sans">
                <h2 className="text-[15px] font-semibold text-gray-150">Services</h2>
                <div className="relative">
                    {/* Dropdown Button */}
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="bg-[#F7F7F7] border border-[#E7E7E7] px-4 py-2 rounded-md flex items-center space-x-2 text-sm text-gray-250"
                    >
                        <span>{selectedCategory}</span>
                        <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.2802 1.46667L7.93355 5.81334C7.42021 6.32668 6.58022 6.32668 6.06688 5.81334L1.72021 1.46667" stroke="#747474" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 z-10 bg-white shadow-lg rounded-md">
                            <ul>
                                {categories.map((category, index) => (
                                    <li key={index} 
                                        className="px-4 py-2 hover:bg-gray-100 border-b border-gray-200 text-gray-250 text-sm cursor-pointer"
                                        onClick={() => {
                                            setSelectedCategory(category === "All Categories" ? "Select Category" : category);
                                            setDropdownOpen(false);
                                        }}>
                                        {category}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service) => (
                    <div key={service.id} className="drop-shadow-sm rounded-lg shadow-sm p-2 bg-white flex gap-4">
                        <img src={service.image} alt={service.title} className="rounded-md w-[105px] h-[105px]" />
                        <div>
                            <p className="text-sm text-gray-250 text-[10px]">{service.category}</p>
                            <h3 className="text-sm font-semibold mt-1 text-red-150">{service.title}</h3>
                            <p className="text-sm text-gray-250 flex items-center gap-2">
                                <img src={profile} alt="" />
                                <span className="font-semibold text-[11px] text-gray-250">{service.provider}</span>
                                <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.13673 0.652728C4.01561 0.755951 3.95504 0.80757 3.89036 0.850923C3.74208 0.950301 3.57556 1.01927 3.40045 1.05385C3.32405 1.06893 3.24473 1.07526 3.08609 1.08792C2.68749 1.11973 2.48819 1.13563 2.32191 1.19437C1.93733 1.3302 1.63483 1.6327 1.49899 2.01729C1.44026 2.18356 1.42436 2.38286 1.39255 2.78146C1.37989 2.9401 1.37356 3.01943 1.35847 3.09582C1.3239 3.27094 1.25493 3.43746 1.15555 3.58573C1.1122 3.65041 1.06058 3.71098 0.957355 3.83211C0.697996 4.13646 0.568311 4.28861 0.49227 4.44773C0.316379 4.81574 0.316379 5.2435 0.49227 5.61152C0.568316 5.77063 0.697996 5.92278 0.957355 6.22714C1.06057 6.34825 1.1122 6.40883 1.15555 6.47349C1.25493 6.62177 1.3239 6.78829 1.35847 6.96342C1.37356 7.03982 1.37989 7.11915 1.39255 7.27777C1.42436 7.67638 1.44026 7.87568 1.49899 8.04196C1.63483 8.42654 1.93733 8.72906 2.32191 8.86489C2.48819 8.92358 2.68749 8.9395 3.08609 8.97133C3.24473 8.98397 3.32405 8.99033 3.40045 9.0054C3.57556 9.03997 3.74208 9.10896 3.89036 9.20834C3.95504 9.25166 4.0156 9.30329 4.13673 9.4065C4.44109 9.66589 4.59324 9.79556 4.75235 9.87161C5.12037 10.0475 5.54813 10.0475 5.91614 9.87161C6.07526 9.79556 6.22741 9.66589 6.53176 9.4065C6.65288 9.30329 6.71346 9.25166 6.77812 9.20834C6.92639 9.10896 7.09292 9.03997 7.26805 9.0054C7.34445 8.99033 7.42378 8.98397 7.5824 8.97133C7.98101 8.9395 8.18031 8.92358 8.34659 8.86489C8.73117 8.72906 9.03368 8.42654 9.16952 8.04196C9.22821 7.87568 9.24413 7.67638 9.27596 7.27777C9.28859 7.11915 9.29496 7.03982 9.31003 6.96342C9.3446 6.78829 9.41359 6.62177 9.51297 6.47349C9.55629 6.40883 9.60792 6.34825 9.71113 6.22714C9.97051 5.92278 10.1002 5.77063 10.1762 5.61152C10.3521 5.2435 10.3521 4.81574 10.1762 4.44773C10.1002 4.28861 9.97051 4.13646 9.71113 3.83211C9.60792 3.71098 9.55629 3.65041 9.51297 3.58573C9.41359 3.43746 9.3446 3.27094 9.31003 3.09582C9.29496 3.01943 9.28859 2.9401 9.27596 2.78146C9.24413 2.38286 9.22821 2.18356 9.16952 2.01729C9.03368 1.6327 8.73117 1.3302 8.34659 1.19437C8.18031 1.13563 7.98101 1.11973 7.5824 1.08792C7.42378 1.07526 7.34445 1.06893 7.26805 1.05385C7.09292 1.01927 6.92639 0.950301 6.77812 0.850923C6.71346 0.80757 6.65288 0.755956 6.53176 0.652728C6.22741 0.393369 6.07526 0.26369 5.91614 0.187644C5.54813 0.0117521 5.12037 0.0117521 4.75235 0.187644C4.59324 0.263685 4.44109 0.393369 4.13673 0.652728ZM7.50958 3.96677C7.66765 3.80868 7.66765 3.55237 7.50958 3.39428C7.35151 3.2362 7.09516 3.2362 6.93709 3.39428L4.52465 5.80674L3.73139 5.01351C3.5733 4.85544 3.317 4.85544 3.15891 5.01351C3.00082 5.17158 3.00082 5.42788 3.15891 5.586L4.23839 6.66549C4.39647 6.82356 4.65277 6.82356 4.81089 6.66549L7.50958 3.96677Z" fill="#800000" />
                                </svg>

                            </p>
                                <span className="flex gap-1 items-center text-[10px] text-gray-250 mt-1"> 
                                    <p>Date & Time</p>
                                    
                                </span>
                            <p className="text-gray-250 text-xs mt-3">Booked 1:00 PM, 12 Dec 2024 </p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}
