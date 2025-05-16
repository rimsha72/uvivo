import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, isBefore, startOfDay } from "date-fns";

export default function TimeSlotPicker() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [availableSlots, setAvailableSlots] = useState([]);

    // Define available time slots for specific dates
    const timeSlots = {
        "2025-03-11": ["08:00 AM - 09:00 AM", "09:00 AM - 10:00 AM", , "10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM", "12:00 PM - 01:00 PM", "01:00 PM - 02:00 PM", "02:00 PM - 03:00 PM,"],
        "2025-03-12": ["10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM"],
        "2025-03-13": ["01:00 PM - 02:00 PM", "02:00 PM - 03:00 PM"],
        "2025-03-14": ["03:00 PM - 04:00 PM", "04:00 PM - 05:00 PM"],
        "2025-03-15": ["08:00 AM - 09:00 AM", "09:00 AM - 10:00 AM", , "10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM", "12:00 PM - 01:00 PM", "01:00 PM - 02:00 PM", "02:00 PM - 03:00 PM,"],
        "2025-03-18": ["08:00 AM - 09:00 AM", "09:00 AM - 10:00 AM", , "10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM", "12:00 PM - 01:00 PM", "01:00 PM - 02:00 PM", "02:00 PM - 03:00 PM,"],
        "2025-03-19": ["08:00 AM - 09:00 AM", "09:00 AM - 10:00 AM", , "10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM", "12:00 PM - 01:00 PM", "01:00 PM - 02:00 PM", "02:00 PM - 03:00 PM,"],
        "2025-03-20": ["08:00 AM - 09:00 AM", "09:00 AM - 10:00 AM", , "10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM", "12:00 PM - 01:00 PM", "01:00 PM - 02:00 PM", "02:00 PM - 03:00 PM,"],
        "2025-03-21": ["08:00 AM - 09:00 AM", "09:00 AM - 10:00 AM", , "10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM", "12:00 PM - 01:00 PM", "01:00 PM - 02:00 PM", "02:00 PM - 03:00 PM,"],
        "2025-03-22": ["08:00 AM - 09:00 AM", "09:00 AM - 10:00 AM", , "10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM", "12:00 PM - 01:00 PM", "01:00 PM - 02:00 PM", "02:00 PM - 03:00 PM,"],
        "2025-03-23": ["08:00 AM - 09:00 AM", "09:00 AM - 10:00 AM", , "10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM", "12:00 PM - 01:00 PM", "01:00 PM - 02:00 PM", "02:00 PM - 03:00 PM,"],

    };
    const today = startOfDay(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
        const formattedDate = date.toISOString().split("T")[0];
        setAvailableSlots(timeSlots[formattedDate] || []);
    };

    const removeSlot = (slot) => {
        setAvailableSlots(availableSlots.filter((s) => s !== slot));
    };
    const highlightDates = (date) => {
        return isBefore(date, today) ? "disabled-date" : "";
    };
    return (
        <div className="flex flex-col md:flex-row gap-6 bg-white">
            <div className="w-full md:w-2/3">
                <h3 className="text-base font-semibold text-gray-150 mb-4">Available Time Slots</h3>
                <div className="custom-datepicker">
                    <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        inline
                        minDate={today}
                        maxDate={addDays(today, 30)}
                        dayClassName={highlightDates}
                    />
                </div>
            </div>

            <div className="w-full md:w-1/3 ">
                <h3 className="text-base font-semibold text-gray-150 mb-4">Available Time Slots</h3>
                <div className="grid grid-cols-2 gap-2">
                    {availableSlots.length > 0 ? (
                        availableSlots.map((slot, index) => (
                            <div key={index} className="flex items-center bg-[#FCFCFC] relative px-4 py-2 rounded-lg ">
                                <span className="text-[#747474] font-medium">{slot}</span>
                                <button
                                    onClick={() => removeSlot(slot)}
                                    className="ml-2 right-4 absolute"
                                >
                                    <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.06575 1.49481C9.35865 1.20191 9.35865 0.727041 9.06575 0.434147C8.77286 0.141254 8.29799 0.141254 8.00509 0.434147L4.99989 3.43935L1.99469 0.434148C1.7018 0.141255 1.22693 0.141255 0.934035 0.434148C0.641141 0.727041 0.641142 1.20191 0.934035 1.49481L3.93923 4.50001L0.934025 7.50522C0.641132 7.79811 0.641132 8.27298 0.934025 8.56588C1.22692 8.85877 1.70179 8.85877 1.99469 8.56588L4.99989 5.56067L8.0051 8.56588C8.298 8.85877 8.77287 8.85877 9.06576 8.56588C9.35865 8.27298 9.35865 7.79811 9.06576 7.50522L6.06055 4.50001L9.06575 1.49481Z" fill="#747474" />
                                    </svg>


                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No slots available</p>
                    )}
                </div>
            </div>

            {/* Custom Calendar Styling */}
            <style>
                {`
                  .react-datepicker__day--disabled {
                    background-color: #f8f9f9 !important;
                    color: #a0a0a0 !important;
                    pointer-events: none;
            border-radius: 12px;

                }
        .react-datepicker {
            border-radius: 12px;
            border: none;
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
            padding: 10px;
            background: white;
            font-family:"open sans"
        }
        .react-datepicker__header {
            background-color: white;
            border-bottom: none;
            padding: 10px;
        }
             .react-datepicker__current-month {
            color: #434343; 
            font-size: 16px; 
            font-weight: 500; 
            font-family:"open sans";
            margin-bottom: 10px;
            text-align: left; 
            flex-grow: 1; 
            
        }
        .react-datepicker__day-name,
        .react-datepicker__day,
        .react-datepicker__time-name {
            color: #333;
            padding-top:12px;
            font-weight: 500;
        }
        .react-datepicker__day--selected,
        .react-datepicker__day--keyboard-selected {
            background-color: #8b0000 !important; /* Dark Red */
            color: white !important;
            border-radius: 8px;
        }
        .react-datepicker__day:hover {
            background-color: #b22222 !important;
            color: white !important;
        }
        .react-datepicker__day-names {
            display: flex;
            justify-content: space-between;
            padding: 0 5px; /* Add padding for more spacing */
            gap: 20px; /* Increased gap between weekdays */
        }
        .react-datepicker__day-name {
            flex: 1;
            text-align: center;
            font-weight: bold;
            color: #333;
        }
        .react-datepicker__week {
            display: flex;
            justify-content: space-between; /* Ensure dates are spaced properly */
        }
        .react-datepicker__day {
            flex: 1;
            text-align: center;
            padding: 5px;
            margin: 2px; /* Add some margin for better spacing */
        }
    `}
            </style>

        </div>
    );
}
