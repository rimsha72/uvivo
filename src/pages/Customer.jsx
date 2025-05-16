
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { useState } from "react";
import UserTable from "../components/UserTable";
import UserTable2 from '../components/UserTable2';
export default function Customer() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="max-w-screen-3xl mx-auto font-sans">
                <div className="mx-4 sm:mx-8 my-4 space-y-4">
                    <div className="pt-7 pb-3 drop-shadow-sm bg-transparent mt-4">
                        <div className="flex lg:flex-row flex-col gap-4 lg:gap-6 items-center justify-between mb-7 w-full lg:px-7 px-4">
                            <h1 className="font-inter font-bold text-lg w-full">User Management</h1>
                            <div className="w-full">
                                <form className="max-w-[427px] mx-auto w-full">
                                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                            </svg>
                                        </div>
                                        <input type="search" id="default-search" className="block w-full px-4 py-3 ps-10 text-sm text-gray-900 rounded-lg bg-[#FCFCFC] focus:outline-none placeholder:text-gray-970 placeholder:text-sm" placeholder="Search here..." />
                                    </div>
                                </form>
                            </div>
                            <div className="w-full flex flex-row items-end justify-end lg:gap-4 gap-2">
                                <div className="">
                                    <button onClick={() => setIsOpen(true)} className="flex items-center bg-[#FCFCFC] border border-[#E7E7E7] rounded-lg lg:px-7 py-3 px-2 text-gray-250 hover:bg-gray-100">
                                        <span className="mr-4 font-medium text-sm text-gray-250">Duration</span>
                                        <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M11.4924 0.724854C11.8374 0.724854 12.1174 1.00485 12.1174 1.34985L12.1178 2.05636C13.3345 2.13978 14.3451 2.55656 15.0603 3.27327C15.8411 4.05744 16.252 5.18494 16.2478 6.53744V14.1399C16.2478 16.9166 14.4845 18.6416 11.647 18.6416H4.59864C1.76114 18.6416 -0.00219727 16.8924 -0.00219727 14.0766V6.53577C-0.00219727 3.91676 1.57035 2.23564 4.13504 2.05665L4.13555 1.34985C4.13555 1.00485 4.41555 0.724854 4.76055 0.724854C5.10555 0.724854 5.38555 1.00485 5.38555 1.34985L5.3853 2.04069H10.867L10.8674 1.34985C10.8674 1.00485 11.1474 0.724854 11.4924 0.724854ZM14.9978 8.14485H1.2478V14.0766C1.2478 16.2149 2.4378 17.3916 4.59864 17.3916H11.647C13.8078 17.3916 14.9978 16.2366 14.9978 14.1399L14.9978 8.14485ZM11.8321 13.3884C12.1771 13.3884 12.4571 13.6684 12.4571 14.0134C12.4571 14.3584 12.1771 14.6384 11.8321 14.6384C11.4871 14.6384 11.2038 14.3584 11.2038 14.0134C11.2038 13.6684 11.4796 13.3884 11.8246 13.3884H11.8321ZM8.13422 13.3884C8.47922 13.3884 8.75922 13.6684 8.75922 14.0134C8.75922 14.3584 8.47922 14.6384 8.13422 14.6384C7.78922 14.6384 7.50589 14.3584 7.50589 14.0134C7.50589 13.6684 7.78172 13.3884 8.12672 13.3884H8.13422ZM4.42855 13.3884C4.77355 13.3884 5.05355 13.6684 5.05355 14.0134C5.05355 14.3584 4.77355 14.6384 4.42855 14.6384C4.08355 14.6384 3.79939 14.3584 3.79939 14.0134C3.79939 13.6684 4.07605 13.3884 4.42105 13.3884H4.42855ZM11.8321 10.1495C12.1771 10.1495 12.4571 10.4295 12.4571 10.7745C12.4571 11.1195 12.1771 11.3995 11.8321 11.3995C11.4871 11.3995 11.2038 11.1195 11.2038 10.7745C11.2038 10.4295 11.4796 10.1495 11.8246 10.1495H11.8321ZM8.13422 10.1495C8.47922 10.1495 8.75922 10.4295 8.75922 10.7745C8.75922 11.1195 8.47922 11.3995 8.13422 11.3995C7.78922 11.3995 7.50589 11.1195 7.50589 10.7745C7.50589 10.4295 7.78172 10.1495 8.12672 10.1495H8.13422ZM4.42855 10.1495C4.77355 10.1495 5.05355 10.4295 5.05355 10.7745C5.05355 11.1195 4.77355 11.3995 4.42855 11.3995C4.08355 11.3995 3.79939 11.1195 3.79939 10.7745C3.79939 10.4295 4.07605 10.1495 4.42105 10.1495H4.42855ZM10.867 3.29069H5.3853L5.38555 4.09235C5.38555 4.43735 5.10555 4.71735 4.76055 4.71735C4.41555 4.71735 4.13555 4.43735 4.13555 4.09235L4.13511 3.30961C2.26825 3.46643 1.2478 4.59807 1.2478 6.53577V6.89485H14.9978L14.9978 6.53577C15.0011 5.5066 14.7245 4.7066 14.1753 4.1566C13.6932 3.67311 12.9885 3.38435 12.1181 3.31001L12.1174 4.09235C12.1174 4.43735 11.8374 4.71735 11.4924 4.71735C11.1474 4.71735 10.8674 4.43735 10.8674 4.09235L10.867 3.29069Z" fill="#747474" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <UserTable2 />
                        <div className="flex lg:flex-row flex-col items-center justify-between py-4 mt-4 px-7 font-inter text-sm">
                            {/* Previous Button */}
                            <button className=" border border-gray-200 rounded-lg font-medium px-4 py-2 text-gray-700">
                                Previous
                            </button>

                            {/* Page Numbers */}
                            <div className="flex lg:space-x-2">
                                <button className="lg:px-4 py-2 px-2 text-sm rounded-md text-gray-700 hover:bg-blue-100">
                                    1
                                </button>
                                <button className="lg:px-4 py-2 px-2 text-sm rounded-md bg-white text-gray-250 hover:bg-blue-100">
                                    2
                                </button>
                                <button className="lg:px-4 py-2 px-2 text-sm rounded-md bg-white text-gray-250 hover:bg-blue-100">
                                    3
                                </button>
                                <button className="lg:px-4 py-2 px-2 text-sm rounded-md bg-white text-gray-250 hover:bg-blue-100">
                                    ...
                                </button>

                                <button className="lg:px-4 py-2 px-2 text-sm rounded-md bg-white text-gray-250 hover:bg-blue-100">
                                    8
                                </button>
                                <button className="lg:px-4 py-2 px-2 text-sm rounded-md bg-white text-gray-250 hover:bg-blue-100">
                                    9
                                </button>
                                <button className="lg:px-4 py-2 px-2 text-sm rounded-md bg-white text-gray-250 hover:bg-blue-100">
                                    10
                                </button>
                            </div>

                            {/* Next Button */}
                            <button className=" border border-gray-200 rounded-lg font-medium px-6 py-2 text-gray-700">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="overflow-y-auto overflow-x-hidden font-sans fixed flex bg-black/20 backdrop-blur-xs z-50 justify-center items-center w-full md:inset-0 max-h-full">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-[428px]">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer
                                components={[
                                    'StaticDatePicker',
                                ]}
                            >
                                <DemoItem>
                                    <StaticDatePicker defaultValue={dayjs('2025-03-10')} />
                                </DemoItem>
                            </DemoContainer>
                        </LocalizationProvider>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="mt-4 px-4 py-3 bg-red-150 text-white transition w-full rounded-lg"
                        >
                            Reset
                        </button>
                    </div>
                </div>
            )}
        </div>

    )
}
