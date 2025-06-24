import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profile1 from "../assets/profile1.png"
import profile2 from "../assets/profile2.png"
import profile3 from "../assets/profile3.png"
import report from "../assets/report.png"

const Reports = () => {
    const navigate = useNavigate();

    const handleViewDetails = (reportId) => {
        navigate(`/reports/${reportId}`);
    };

    return (
        <div className="max-w-screen-3xl mx-auto font-sans">
            <div className="mx-4 sm:mx-8 my-4 space-y-4">
                <h1 className="font-inter font-bold text-lg w-full">Reports Management</h1>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className='bg-white rounded-lg border border-[#E3E3E3] p-5'>
                        <div className='flex justify-between gap-4 items-start border-gray-200 pb-2 border-b'>
                            <div className='flex gap-3 items-center'>
                                <img src={profile1} alt="" />
                                <div>
                                    <p className='text-xs font-medium text-black'>Olivia Daddario</p>
                                    <button className='text-xs text-red-150 flex gap-2 mt-1 items-center'>View profile details <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.41115 9.7778C7.31999 9.7778 7.22882 9.74421 7.15685 9.67224C7.0177 9.53309 7.0177 9.30278 7.15685 9.16364L9.815 6.50549L7.15685 3.84733C7.0177 3.70819 7.0177 3.47788 7.15685 3.33873C7.29599 3.19959 7.5263 3.19959 7.66545 3.33873L10.5779 6.25119C10.717 6.39033 10.717 6.62064 10.5779 6.75979L7.66545 9.67224C7.59348 9.74421 7.50231 9.7778 7.41115 9.7778Z" fill="#4B96F5" />
                                        <path d="M10.242 6.86522H2.16674C1.97002 6.86522 1.80688 6.70209 1.80688 6.50537C1.80688 6.30864 1.97002 6.14551 2.16674 6.14551H10.242C10.4387 6.14551 10.6018 6.30864 10.6018 6.50537C10.6018 6.70209 10.4387 6.86522 10.242 6.86522Z" fill="#4B96F5" />
                                    </svg>
                                    </button>
                                </div>
                            </div>
                            <button className='flex gap-2 rounded-2xl text-xs text-[#EA4335] items-center bg-[#EA4335]/10 px-4 py-1 font-semibold'>
                                <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.23618 11.6323H4.45329C4.02625 11.6323 3.47927 11.4068 3.18178 11.1045L1.21456 9.13732C0.912282 8.83504 0.686768 8.28806 0.686768 7.86582V5.08293C0.686768 4.65589 0.912282 4.10891 1.21456 3.81143L3.18178 1.8442C3.48406 1.54192 4.03105 1.31641 4.45329 1.31641H7.23618C7.66322 1.31641 8.21021 1.54192 8.50769 1.8442L10.4749 3.81143C10.7772 4.11371 11.0027 4.66069 11.0027 5.08293V7.86582C11.0027 8.29286 10.7772 8.83984 10.4749 9.13732L8.50769 11.1045C8.20541 11.4068 7.66322 11.6323 7.23618 11.6323ZM4.45329 2.03612C4.21818 2.03612 3.85352 2.18487 3.69038 2.3528L1.72316 4.32003C1.56003 4.48796 1.40648 4.84782 1.40648 5.08293V7.86582C1.40648 8.10093 1.55523 8.46559 1.72316 8.62872L3.69038 10.5959C3.85832 10.7591 4.21818 10.9126 4.45329 10.9126H7.23618C7.47129 10.9126 7.83595 10.7639 7.99909 10.5959L9.96631 8.62872C10.1294 8.46079 10.283 8.10093 10.283 7.86582V5.08293C10.283 4.84782 10.1342 4.48316 9.96631 4.32003L7.99909 2.3528C7.83116 2.18966 7.47129 2.03612 7.23618 2.03612H4.45329Z" fill="#EA4335" />
                                    <path d="M4.1653 8.51372C4.07413 8.51372 3.98297 8.48013 3.911 8.40816C3.77185 8.26901 3.77185 8.0387 3.911 7.89956L7.26968 4.54088C7.40882 4.40174 7.63913 4.40174 7.77828 4.54088C7.91742 4.68003 7.91742 4.91034 7.77828 5.04948L4.4196 8.40816C4.34763 8.48013 4.25646 8.51372 4.1653 8.51372Z" fill="#EA4335" />
                                    <path d="M7.52398 8.51372C7.43281 8.51372 7.34165 8.48013 7.26968 8.40816L3.911 5.04948C3.77185 4.91034 3.77185 4.68003 3.911 4.54088C4.05014 4.40174 4.28045 4.40174 4.4196 4.54088L7.77828 7.89956C7.91742 8.0387 7.91742 8.26901 7.77828 8.40816C7.7063 8.48013 7.61514 8.51372 7.52398 8.51372Z" fill="#EA4335" />
                                </svg>
                                Freeze Account
                            </button>
                        </div>
                        <div className='flex gap-2 mt-3'>
                            <img src={report} alt="" />
                            <div>
                                <h1 className='text-black font-bold text-xs'>Reported Content</h1>
                                <p className='font-semibold text-red-150 text-[11px]'>Reason</p>
                                <p className='text-gray-250 text-[11px]'>
                                    Lorem ipsum dolor sit amet consectetur. Gravida vitae id eu odio mauris quam a. Ac pellentesque elit nisl sed morbi scelerisque arcu. At aliquam lectus venenatis sit libero.
                                </p>
                            </div>
                        </div>
                        <button onClick={() => handleViewDetails(1)} className='bg-red-150 rounded-lg text-white text-sm w-full px-3 py-2.5 mt-4'>View Details</button>
                    </div>
                    <div className='bg-white rounded-lg border border-[#E3E3E3] p-5'>
                        <div className='flex justify-between gap-4 items-start border-gray-200 pb-2 border-b'>
                            <div className='flex gap-3 items-center'>
                                <img src={profile2} alt="" />
                                <div>
                                    <p className='text-xs font-medium text-black'>Olivia Daddario</p>
                                    <button className='text-xs text-red-150 flex gap-2 mt-1 items-center'>View profile details <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.41115 9.7778C7.31999 9.7778 7.22882 9.74421 7.15685 9.67224C7.0177 9.53309 7.0177 9.30278 7.15685 9.16364L9.815 6.50549L7.15685 3.84733C7.0177 3.70819 7.0177 3.47788 7.15685 3.33873C7.29599 3.19959 7.5263 3.19959 7.66545 3.33873L10.5779 6.25119C10.717 6.39033 10.717 6.62064 10.5779 6.75979L7.66545 9.67224C7.59348 9.74421 7.50231 9.7778 7.41115 9.7778Z" fill="#4B96F5" />
                                        <path d="M10.242 6.86522H2.16674C1.97002 6.86522 1.80688 6.70209 1.80688 6.50537C1.80688 6.30864 1.97002 6.14551 2.16674 6.14551H10.242C10.4387 6.14551 10.6018 6.30864 10.6018 6.50537C10.6018 6.70209 10.4387 6.86522 10.242 6.86522Z" fill="#4B96F5" />
                                    </svg>
                                    </button>
                                </div>
                            </div>
                            <button className='flex gap-2 rounded-2xl text-xs text-[#EA4335] items-center bg-[#EA4335]/10 px-4 py-1 font-semibold'>
                                <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.23618 11.6323H4.45329C4.02625 11.6323 3.47927 11.4068 3.18178 11.1045L1.21456 9.13732C0.912282 8.83504 0.686768 8.28806 0.686768 7.86582V5.08293C0.686768 4.65589 0.912282 4.10891 1.21456 3.81143L3.18178 1.8442C3.48406 1.54192 4.03105 1.31641 4.45329 1.31641H7.23618C7.66322 1.31641 8.21021 1.54192 8.50769 1.8442L10.4749 3.81143C10.7772 4.11371 11.0027 4.66069 11.0027 5.08293V7.86582C11.0027 8.29286 10.7772 8.83984 10.4749 9.13732L8.50769 11.1045C8.20541 11.4068 7.66322 11.6323 7.23618 11.6323ZM4.45329 2.03612C4.21818 2.03612 3.85352 2.18487 3.69038 2.3528L1.72316 4.32003C1.56003 4.48796 1.40648 4.84782 1.40648 5.08293V7.86582C1.40648 8.10093 1.55523 8.46559 1.72316 8.62872L3.69038 10.5959C3.85832 10.7591 4.21818 10.9126 4.45329 10.9126H7.23618C7.47129 10.9126 7.83595 10.7639 7.99909 10.5959L9.96631 8.62872C10.1294 8.46079 10.283 8.10093 10.283 7.86582V5.08293C10.283 4.84782 10.1342 4.48316 9.96631 4.32003L7.99909 2.3528C7.83116 2.18966 7.47129 2.03612 7.23618 2.03612H4.45329Z" fill="#EA4335" />
                                    <path d="M4.1653 8.51372C4.07413 8.51372 3.98297 8.48013 3.911 8.40816C3.77185 8.26901 3.77185 8.0387 3.911 7.89956L7.26968 4.54088C7.40882 4.40174 7.63913 4.40174 7.77828 4.54088C7.91742 4.68003 7.91742 4.91034 7.77828 5.04948L4.4196 8.40816C4.34763 8.48013 4.25646 8.51372 4.1653 8.51372Z" fill="#EA4335" />
                                    <path d="M7.52398 8.51372C7.43281 8.51372 7.34165 8.48013 7.26968 8.40816L3.911 5.04948C3.77185 4.91034 3.77185 4.68003 3.911 4.54088C4.05014 4.40174 4.28045 4.40174 4.4196 4.54088L7.77828 7.89956C7.91742 8.0387 7.91742 8.26901 7.77828 8.40816C7.7063 8.48013 7.61514 8.51372 7.52398 8.51372Z" fill="#EA4335" />
                                </svg>
                                Freeze Account
                            </button>
                        </div>
                        <div className='flex gap-2 mt-3'>
                            <img src={report} alt="" />
                            <div>
                                <h1 className='text-black font-bold text-xs'>Reported Content</h1>
                                <p className='font-semibold text-red-150 text-[11px]'>Reason</p>
                                <p className='text-gray-250 text-[11px]'>
                                    Lorem ipsum dolor sit amet consectetur. Gravida vitae id eu odio mauris quam a. Ac pellentesque elit nisl sed morbi scelerisque arcu. At aliquam lectus venenatis sit libero.
                                </p>
                            </div>
                        </div>
                        <button onClick={() => handleViewDetails(2)} className='bg-red-150 rounded-lg text-white text-sm w-full px-3 py-2.5 mt-4'>View Details</button>
                    </div>
                    <div className='bg-white rounded-lg border border-[#E3E3E3] p-5'>
                        <div className='flex justify-between gap-4 items-start border-gray-200 pb-2 border-b'>
                            <div className='flex gap-3 items-center'>
                                <img src={profile3} alt="" />
                                <div>
                                    <p className='text-xs font-medium text-black'>Olivia Daddario</p>
                                    <button className='text-xs text-red-150 flex gap-2 mt-1 items-center'>View profile details <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.41115 9.7778C7.31999 9.7778 7.22882 9.74421 7.15685 9.67224C7.0177 9.53309 7.0177 9.30278 7.15685 9.16364L9.815 6.50549L7.15685 3.84733C7.0177 3.70819 7.0177 3.47788 7.15685 3.33873C7.29599 3.19959 7.5263 3.19959 7.66545 3.33873L10.5779 6.25119C10.717 6.39033 10.717 6.62064 10.5779 6.75979L7.66545 9.67224C7.59348 9.74421 7.50231 9.7778 7.41115 9.7778Z" fill="#4B96F5" />
                                        <path d="M10.242 6.86522H2.16674C1.97002 6.86522 1.80688 6.70209 1.80688 6.50537C1.80688 6.30864 1.97002 6.14551 2.16674 6.14551H10.242C10.4387 6.14551 10.6018 6.30864 10.6018 6.50537C10.6018 6.70209 10.4387 6.86522 10.242 6.86522Z" fill="#4B96F5" />
                                    </svg>
                                    </button>
                                </div>
                            </div>
                            <button className='flex gap-2 rounded-2xl text-xs text-[#EA4335] items-center bg-[#EA4335]/10 px-4 py-1 font-semibold'>
                                <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.23618 11.6323H4.45329C4.02625 11.6323 3.47927 11.4068 3.18178 11.1045L1.21456 9.13732C0.912282 8.83504 0.686768 8.28806 0.686768 7.86582V5.08293C0.686768 4.65589 0.912282 4.10891 1.21456 3.81143L3.18178 1.8442C3.48406 1.54192 4.03105 1.31641 4.45329 1.31641H7.23618C7.66322 1.31641 8.21021 1.54192 8.50769 1.8442L10.4749 3.81143C10.7772 4.11371 11.0027 4.66069 11.0027 5.08293V7.86582C11.0027 8.29286 10.7772 8.83984 10.4749 9.13732L8.50769 11.1045C8.20541 11.4068 7.66322 11.6323 7.23618 11.6323ZM4.45329 2.03612C4.21818 2.03612 3.85352 2.18487 3.69038 2.3528L1.72316 4.32003C1.56003 4.48796 1.40648 4.84782 1.40648 5.08293V7.86582C1.40648 8.10093 1.55523 8.46559 1.72316 8.62872L3.69038 10.5959C3.85832 10.7591 4.21818 10.9126 4.45329 10.9126H7.23618C7.47129 10.9126 7.83595 10.7639 7.99909 10.5959L9.96631 8.62872C10.1294 8.46079 10.283 8.10093 10.283 7.86582V5.08293C10.283 4.84782 10.1342 4.48316 9.96631 4.32003L7.99909 2.3528C7.83116 2.18966 7.47129 2.03612 7.23618 2.03612H4.45329Z" fill="#EA4335" />
                                    <path d="M4.1653 8.51372C4.07413 8.51372 3.98297 8.48013 3.911 8.40816C3.77185 8.26901 3.77185 8.0387 3.911 7.89956L7.26968 4.54088C7.40882 4.40174 7.63913 4.40174 7.77828 4.54088C7.91742 4.68003 7.91742 4.91034 7.77828 5.04948L4.4196 8.40816C4.34763 8.48013 4.25646 8.51372 4.1653 8.51372Z" fill="#EA4335" />
                                    <path d="M7.52398 8.51372C7.43281 8.51372 7.34165 8.48013 7.26968 8.40816L3.911 5.04948C3.77185 4.91034 3.77185 4.68003 3.911 4.54088C4.05014 4.40174 4.28045 4.40174 4.4196 4.54088L7.77828 7.89956C7.91742 8.0387 7.91742 8.26901 7.77828 8.40816C7.7063 8.48013 7.61514 8.51372 7.52398 8.51372Z" fill="#EA4335" />
                                </svg>
                                Freeze Account
                            </button>
                        </div>
                        <div className='flex gap-2 mt-3'>
                            <img src={report} alt="" />
                            <div>
                                <h1 className='text-black font-bold text-xs'>Reported Content</h1>
                                <p className='font-semibold text-red-150 text-[11px]'>Reason</p>
                                <p className='text-gray-250 text-[11px]'>
                                    Lorem ipsum dolor sit amet consectetur. Gravida vitae id eu odio mauris quam a. Ac pellentesque elit nisl sed morbi scelerisque arcu. At aliquam lectus venenatis sit libero.
                                </p>
                            </div>
                        </div>
                        <button onClick={() => handleViewDetails(3)} className='bg-red-150 rounded-lg text-white text-sm w-full px-3 py-2.5 mt-4'>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reports;