
import { RiCloseFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import { useState } from 'react'
export default function Sidebar() {
  const [showMenue, setShowMenue] = useState(false);
  return (
    <>
      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(4px); }
            75% { transform: translateX(-4px); }
          }
          @keyframes bounceVertical {
            0%, 100% { transform: translateY(0); }
            25% { transform: translateY(-3px); }
            75% { transform: translateY(3px); }
          }
          .animate-bounce-hover:hover {
            animation: bounce 0.25s ease-in-out 2;
          }
          .animate-bounce-vertical-hover:hover {
            animation: bounceVertical 0.25s ease-in-out 2;
          }
        `}
      </style>
      <div className='bg-blue-350'>
        <button type="button" onClick={e => setShowMenue(true)} className="flex items-center p-2 ml-3 border-0 text-sm text-red-110 rounded-lg lg:hidden">
          <span className="sr-only">Open sidebar</span>
          <svg className="w-6  h-6" aria-hidden="true" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
          </svg>
        </button>
      </div>

      <aside className={`fixed top-0 left-0 z-40 w-64 bg-white h-screen overflow-y-scroll no-scrollbar ${showMenue ? null : `hidden`} lg:block`} aria-label="Sidebar">
        <div className="h-full font-sans">
          {showMenue &&
            <button className='float-right text-xl text-black p-4' onClick={e => setShowMenue(false)}>
              <RiCloseFill />
            </button>
          }
          <div className='flex justify-center items-center py-6'>
            <Link to='/'>
              {/* <img src={logo} alt='....' className='w-[112px] h-[79px]' /> */}
              <h1 className='font-bold text-4xl text-red-150'>Logo Here</h1>
            </Link>
          </div>
          <form className="max-w-md mx-auto p-4">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                <svg className="w-[23px] h-[23px] text-black-150" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" id="default-search" className="block w-full p-4 ps-13 text-black-150 placeholder:text-black-150 text-[16px] font-open bg-gray-650 focus:outline-none" placeholder="Search..." required />
            </div>
          </form>
          <ul className="space-y-2 font-sans text-base px-4 pt-4 pb-6 ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "flex items-center p-4 bg-red-150 rounded-lg text-white" : "flex items-center p-4 text-red-150 font-semibold rounded-lg transition-all duration-100 hover:bg-gray-100 hover:scale-[1.02] animate-bounce-hover"
                }
              >
                {({ isActive }) => (
                  <div className="flex items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M17.79 22.75H6.21C3.47 22.75 1.25 20.52 1.25 17.78V10.37C1.25 9.00997 2.09 7.29997 3.17 6.45997L8.56 2.25997C10.18 0.999974 12.77 0.939974 14.45 2.11997L20.63 6.44997C21.82 7.27997 22.75 9.05997 22.75 10.51V17.79C22.75 20.52 20.53 22.75 17.79 22.75ZM9.48 3.43997L4.09 7.63997C3.38 8.19997 2.75 9.46997 2.75 10.37V17.78C2.75 19.69 4.3 21.25 6.21 21.25H17.79C19.7 21.25 21.25 19.7 21.25 17.79V10.51C21.25 9.54997 20.56 8.21997 19.77 7.67997L13.59 3.34997C12.45 2.54997 10.57 2.58997 9.48 3.43997Z"
                        fill={isActive ? "white" : "#4B96F5"}
                      />
                      <path
                        d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18C12.75 18.41 12.41 18.75 12 18.75Z"
                        fill={isActive ? "white" : "#4B96F5"}
                      />
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">Dashboard</span>
                  </div>
                )}
              </NavLink>

            </li>
            <li>
              <NavLink
                to="/customer"
                className={({ isActive }) =>
                  isActive ? "flex items-center p-4 bg-red-150 rounded-lg text-white" : "flex items-center p-4 text-red-150 font-semibold rounded-lg transition-all duration-100 hover:bg-gray-100 hover:scale-[1.02] animate-bounce-hover"
                }
              >
                {({ isActive }) => (
                  <div className="flex items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.0001 7.16C17.9401 7.15 17.8701 7.15 17.8101 7.16C16.4301 7.11 15.3301 5.98 15.3301 4.58C15.3301 3.15 16.4801 2 17.9101 2C19.3401 2 20.4901 3.16 20.4901 4.58C20.4801 5.98 19.3801 7.11 18.0001 7.16Z" stroke={isActive ? "white" : "#4B96F5"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M16.9702 14.4402C18.3402 14.6702 19.8502 14.4302 20.9102 13.7202C22.3202 12.7802 22.3202 11.2402 20.9102 10.3002C19.8402 9.59016 18.3102 9.35016 16.9402 9.59016" stroke={isActive ? "white" : "#4B96F5"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M5.96998 7.16C6.02998 7.15 6.09998 7.15 6.15998 7.16C7.53998 7.11 8.63998 5.98 8.63998 4.58C8.63998 3.15 7.48998 2 6.05998 2C4.62998 2 3.47998 3.16 3.47998 4.58C3.48998 5.98 4.58998 7.11 5.96998 7.16Z" stroke={isActive ? "white" : "#4B96F5"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M6.99994 14.4402C5.62994 14.6702 4.11994 14.4302 3.05994 13.7202C1.64994 12.7802 1.64994 11.2402 3.05994 10.3002C4.12994 9.59016 5.65994 9.35016 7.02994 9.59016" stroke={isActive ? "white" : "#4B96F5"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M12.0001 14.6302C11.9401 14.6202 11.8701 14.6202 11.8101 14.6302C10.4301 14.5802 9.33008 13.4502 9.33008 12.0502C9.33008 10.6202 10.4801 9.47021 11.9101 9.47021C13.3401 9.47021 14.4901 10.6302 14.4901 12.0502C14.4801 13.4502 13.3801 14.5902 12.0001 14.6302Z" stroke={isActive ? "white" : "#4B96F5"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M9.08997 17.7804C7.67997 18.7204 7.67997 20.2603 9.08997 21.2003C10.69 22.2703 13.31 22.2703 14.91 21.2003C16.32 20.2603 16.32 18.7204 14.91 17.7804C13.32 16.7204 10.69 16.7204 9.08997 17.7804Z" stroke={isActive ? "white" : "#4B96F5"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">User Management</span>
                  </div>
                )}
              </NavLink>

            </li>
            <li>
              <NavLink
                to="/gifts"
                className={({ isActive }) =>
                  isActive ? "flex items-center p-4 bg-red-150 rounded-lg text-white" : "flex items-center p-4 text-red-150 font-semibold rounded-lg transition-all duration-100 hover:bg-gray-100 hover:scale-[1.02] animate-bounce-hover"
                }
              >
                {({ isActive }) => (
                  <div className="flex items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.39 5.21L16.7999 8.02999C16.9899 8.41999 17.4999 8.78999 17.9299 8.86999L20.48 9.28999C22.11 9.55999 22.49 10.74 21.32 11.92L19.3299 13.91C18.9999 14.24 18.81 14.89 18.92 15.36L19.4899 17.82C19.9399 19.76 18.9 20.52 17.19 19.5L14.7999 18.08C14.3699 17.82 13.65 17.82 13.22 18.08L10.8299 19.5C9.11994 20.51 8.07995 19.76 8.52995 17.82L9.09996 15.36C9.20996 14.9 9.01995 14.25 8.68995 13.91L6.69996 11.92C5.52996 10.75 5.90996 9.56999 7.53996 9.28999L10.0899 8.86999C10.5199 8.79999 11.03 8.41999 11.22 8.02999L12.63 5.21C13.38 3.68 14.62 3.68 15.39 5.21Z" stroke={isActive ? "white" : "#4B96F5"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M8 5H2" stroke={isActive ? "white" : "#4B96F5"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M5 19H2" stroke={isActive ? "white" : "#4B96F5"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M3 12H2" stroke={isActive ? "white" : "#4B96F5"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <span className="flex-1 ml-3 whitespace-nowrap">Manage Gifts</span>
                  </div>
                )}
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/reports"
                className={({ isActive }) =>
                  isActive ? "flex items-center p-4 bg-red-150 rounded-lg text-white" : "flex items-center p-4 text-red-150 font-semibold rounded-lg transition-all duration-100 hover:bg-gray-100 hover:scale-[1.02] animate-bounce-hover"
                }
              >
                {({ isActive }) => (
                  <div className="flex items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 7.75V13" stroke={isActive ? "white" : "#4B96F5"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M21.08 8.58003V15.42C21.08 16.54 20.4799 17.58 19.5099 18.15L13.5699 21.58C12.5999 22.14 11.3999 22.14 10.4199 21.58L4.47992 18.15C3.50992 17.59 2.90991 16.55 2.90991 15.42V8.58003C2.90991 7.46003 3.50992 6.41999 4.47992 5.84999L10.4199 2.42C11.3899 1.86 12.5899 1.86 13.5699 2.42L19.5099 5.84999C20.4799 6.41999 21.08 7.45003 21.08 8.58003Z" stroke={isActive ? "white" : "#4B96F5"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M12 16.2002V16.3002" stroke={isActive ? "white" : "#4B96F5"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">Reports</span>
                  </div>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/chats"
                className={({ isActive }) =>
                  isActive ? "flex items-center p-4 bg-red-150 rounded-lg text-white" : "flex items-center p-4 text-red-150 font-semibold rounded-lg transition-all duration-100 hover:bg-gray-100 hover:scale-[1.02] animate-bounce-hover"
                }
              >
                {({ isActive }) => (
                  <div className="flex items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 9C17 12.87 13.64 16 9.5 16L8.57001 17.12L8.02 17.78C7.55 18.34 6.65 18.22 6.34 17.55L5 14.6C3.18 13.32 2 11.29 2 9C2 5.13 5.36 2 9.5 2C12.52 2 15.13 3.67001 16.3 6.07001C16.75 6.96001 17 7.95 17 9Z" stroke={isActive ? "white" : "#4B96F5"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M22.0001 12.8598C22.0001 15.1498 20.8201 17.1798 19.0001 18.4598L17.6601 21.4098C17.3501 22.0798 16.4501 22.2098 15.9801 21.6398L14.5001 19.8598C12.0801 19.8598 9.92007 18.7898 8.57007 17.1198L9.50006 15.9998C13.6401 15.9998 17.0001 12.8698 17.0001 8.99982C17.0001 7.94982 16.7501 6.95982 16.3001 6.06982C19.5701 6.81982 22.0001 9.5798 22.0001 12.8598Z" stroke={isActive ? "white" : "#4B96F5"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M7 9H12" stroke={isActive ? "white" : "#4B96F5"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <span className="flex-1 ml-3 whitespace-nowrap">Chats</span>
                  </div>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/vivocash"
                className={({ isActive }) =>
                  isActive ? "flex items-center p-4 bg-red-150 rounded-lg text-white" : "flex items-center p-4 text-red-150 font-semibold rounded-lg transition-all duration-100 hover:bg-gray-100 hover:scale-[1.02] animate-bounce-hover"
                }
              >
                {({ isActive }) => (
                  <div className="flex items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984" stroke={isActive ? "white" : "#4B96F5"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M12 6V18" stroke={isActive ? "white" : "#4B96F5"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke={isActive ? "white" : "#4B96F5"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">VivoCash</span>
                  </div>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  isActive ? "flex items-center p-4 bg-red-150 rounded-lg text-white" : "flex items-center p-4 text-red-150 font-semibold rounded-lg transition-all duration-100 hover:bg-gray-100 hover:scale-[1.02] animate-bounce-hover"
                }
              >
                {({ isActive }) => (
                  <div className="flex items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 15.75C9.93 15.75 8.25 14.07 8.25 12C8.25 9.93 9.93 8.25 12 8.25C14.07 8.25 15.75 9.93 15.75 12C15.75 14.07 14.07 15.75 12 15.75ZM12 9.75C10.76 9.75 9.75 10.76 9.75 12C9.75 13.24 10.76 14.25 12 14.25C13.24 14.25 14.25 13.24 14.25 12C14.25 10.76 13.24 9.75 12 9.75Z" fill={isActive ? "white" : "#4B96F5"} />
                      <path d="M15.21 22.1898C15 22.1898 14.79 22.1598 14.58 22.1098C13.96 21.9398 13.44 21.5498 13.11 20.9998L12.99 20.7998C12.4 19.7798 11.59 19.7798 11 20.7998L10.89 20.9898C10.56 21.5498 10.04 21.9498 9.42 22.1098C8.79 22.2798 8.14 22.1898 7.59 21.8598L5.87 20.8698C5.26 20.5198 4.82 19.9498 4.63 19.2598C4.45 18.5698 4.54 17.8598 4.89 17.2498C5.18 16.7398 5.26 16.2798 5.09 15.9898C4.92 15.6998 4.49 15.5298 3.9 15.5298C2.44 15.5298 1.25 14.3398 1.25 12.8798V11.1198C1.25 9.6598 2.44 8.4698 3.9 8.4698C4.49 8.4698 4.92 8.2998 5.09 8.0098C5.26 7.7198 5.19 7.2598 4.89 6.7498C4.54 6.1398 4.45 5.4198 4.63 4.7398C4.81 4.0498 5.25 3.4798 5.87 3.1298L7.6 2.1398C8.73 1.4698 10.22 1.8598 10.9 3.0098L11.02 3.2098C11.61 4.2298 12.42 4.2298 13.01 3.2098L13.12 3.0198C13.8 1.8598 15.29 1.4698 16.43 2.1498L18.15 3.1398C18.76 3.4898 19.2 4.0598 19.39 4.7498C19.57 5.4398 19.48 6.1498 19.13 6.7598C18.84 7.2698 18.76 7.7298 18.93 8.0198C19.1 8.3098 19.53 8.4798 20.12 8.4798C21.58 8.4798 22.77 9.6698 22.77 11.1298V12.8898C22.77 14.3498 21.58 15.5398 20.12 15.5398C19.53 15.5398 19.1 15.7098 18.93 15.9998C18.76 16.2898 18.83 16.7498 19.13 17.2598C19.48 17.8698 19.58 18.5898 19.39 19.2698C19.21 19.9598 18.77 20.5298 18.15 20.8798L16.42 21.8698C16.04 22.0798 15.63 22.1898 15.21 22.1898ZM12 18.4898C12.89 18.4898 13.72 19.0498 14.29 20.0398L14.4 20.2298C14.52 20.4398 14.72 20.5898 14.96 20.6498C15.2 20.7098 15.44 20.6798 15.64 20.5598L17.37 19.5598C17.63 19.4098 17.83 19.1598 17.91 18.8598C17.99 18.5598 17.95 18.2498 17.8 17.9898C17.23 17.0098 17.16 15.9998 17.6 15.2298C18.04 14.4598 18.95 14.0198 20.09 14.0198C20.73 14.0198 21.24 13.5098 21.24 12.8698V11.1098C21.24 10.4798 20.73 9.9598 20.09 9.9598C18.95 9.9598 18.04 9.5198 17.6 8.7498C17.16 7.9798 17.23 6.9698 17.8 5.9898C17.95 5.7298 17.99 5.4198 17.91 5.1198C17.83 4.8198 17.64 4.5798 17.38 4.4198L15.65 3.4298C15.22 3.1698 14.65 3.3198 14.39 3.7598L14.28 3.9498C13.71 4.9398 12.88 5.4998 11.99 5.4998C11.1 5.4998 10.27 4.9398 9.7 3.9498L9.59 3.7498C9.34 3.3298 8.78 3.1798 8.35 3.4298L6.62 4.4298C6.36 4.5798 6.16 4.8298 6.08 5.1298C6 5.4298 6.04 5.7398 6.19 5.9998C6.76 6.9798 6.83 7.9898 6.39 8.7598C5.95 9.5298 5.04 9.9698 3.9 9.9698C3.26 9.9698 2.75 10.4798 2.75 11.1198V12.8798C2.75 13.5098 3.26 14.0298 3.9 14.0298C5.04 14.0298 5.95 14.4698 6.39 15.2398C6.83 16.0098 6.76 17.0198 6.19 17.9998C6.04 18.2598 6 18.5698 6.08 18.8698C6.16 19.1698 6.35 19.4098 6.61 19.5698L8.34 20.5598C8.55 20.6898 8.8 20.7198 9.03 20.6598C9.27 20.5998 9.47 20.4398 9.6 20.2298L9.71 20.0398C10.28 19.0598 11.11 18.4898 12 18.4898Z" fill={isActive ? "white" : "#4B96F5"} />
                    </svg>

                    <span className="flex-1 ml-3 whitespace-nowrap">Settings</span>
                  </div>
                )}
              </NavLink>
            </li>
            <div className="absolute bottom-4 w-full pr-8 space-y-2">
                <li>
                <NavLink
                  to="/privacy-policy"
                  className={({ isActive }) =>
                    isActive ? "flex items-center w-full p-4 bg-red-150 rounded-lg text-white" : "flex items-center p-4 text-red-150 font-semibold rounded-lg transition-all duration-100 hover:bg-gray-100 hover:scale-[1.02] animate-bounce-hover"
                  }
                >
                  {({ isActive }) => (
                    <div className="flex items-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984" stroke={isActive ? "white" : "#4B96F5"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M12 6V18" stroke={isActive ? "white" : "#4B96F5"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke={isActive ? "white" : "#4B96F5"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                      <span className="flex-1 ml-3 whitespace-nowrap">Your Revenue</span>
                    </div>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/privacy-policy"
                  className={({ isActive }) =>
                    isActive ? "flex items-center w-full p-4 bg-red-150 rounded-lg text-white" : "flex items-center p-4 text-red-150 font-semibold rounded-lg transition-all duration-100 hover:bg-gray-100 hover:scale-[1.02] animate-bounce-hover"
                  }
                >
                  {({ isActive }) => (
                    <div className="flex items-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.18457 2.42822H4.18848C6.29868 2.60166 9.54249 3.67598 11.3555 4.8042L11.3613 4.80811L11.3682 4.81201L11.6074 4.95166L11.6348 4.96729L11.6631 4.97998C11.7758 5.0282 11.8996 5.04423 11.9922 5.04639C12.0438 5.04757 12.1051 5.0451 12.1689 5.03369C12.224 5.02383 12.3133 5.00031 12.4043 4.94287L12.4053 4.94385L12.5645 4.84424L12.5654 4.84326C13.202 4.44424 14.0116 4.0471 14.9111 3.68506L14.9121 3.68604C14.9854 3.65735 15.0741 3.66413 15.1523 3.71631C15.2204 3.76172 15.2598 3.83424 15.2598 3.92041V7.53076L16.0361 7.01709L16.8662 6.46729L16.8711 6.46338C16.9314 6.42247 17.0065 6.41258 17.0742 6.43311L17.1387 6.46338L17.1436 6.46729L17.9736 7.01709L18.75 7.53076V2.77979C18.7501 2.66266 18.8374 2.55488 18.958 2.53076L18.957 2.52979C19.2259 2.4837 19.4883 2.44877 19.7197 2.43018H19.8398L19.8604 2.42822C20.3778 2.38569 20.9111 2.53586 21.3418 2.85791L21.5195 3.00635L21.5225 3.00928C21.9848 3.43103 22.2402 4.01568 22.2402 4.67041V16.7397C22.2402 17.7603 21.4552 18.7081 20.4775 18.9292L20.2793 18.9634L19.9492 19.0034L19.9443 19.0044C17.8215 19.2827 14.462 20.3924 12.5781 21.4321L12.5645 21.4399L12.5518 21.4478C12.433 21.5233 12.2332 21.5796 12 21.5796C11.8306 21.5796 11.6679 21.5497 11.5273 21.4956L11.3945 21.4341L11.3896 21.4312L11.0127 21.2339C9.05475 20.2484 5.99723 19.2657 4.00684 19.0044H4.00781L3.71777 18.9644L3.70996 18.9634L3.51465 18.9292C2.54635 18.7076 1.75977 17.753 1.75977 16.7397V4.65967L1.77148 4.41748C1.81878 3.94076 2.00613 3.51018 2.31348 3.16455L2.47656 2.99951C2.88406 2.62776 3.39542 2.42485 3.94629 2.41846L4.18457 2.42822ZM3.81641 2.91748C3.49221 2.94613 3.18834 3.06043 2.92871 3.25635L2.80273 3.36084L2.80078 3.36182C2.43997 3.69384 2.25008 4.16137 2.25 4.65967V16.7397C2.25 17.177 2.43619 17.5808 2.7002 17.8813C2.93093 18.144 3.24582 18.3561 3.60449 18.4448L3.76074 18.4751L3.76367 18.4761L4.06348 18.5161C6.25245 18.808 9.6434 19.9178 11.5889 20.9878L11.6074 20.9985L11.627 21.0073C11.7318 21.0538 11.8409 21.0765 11.9297 21.0854C11.9962 21.0921 12.143 21.1012 12.2852 21.0444L12.3145 21.0327L12.3418 21.0181C14.2954 19.9392 17.6904 18.8201 19.8887 18.5269L20.2285 18.4868L20.2305 18.4858C20.6603 18.4331 21.0365 18.1954 21.2998 17.894C21.5635 17.5922 21.7499 17.1867 21.75 16.7505V4.68018C21.75 4.2385 21.6012 3.83774 21.3301 3.52002L21.2061 3.38916L21.1982 3.38232L21.0566 3.26611C20.7208 3.02046 20.3062 2.91318 19.8994 2.93018H19.2598V8.00049C19.2596 8.09525 19.2119 8.17313 19.1289 8.21631C19.0562 8.25411 18.9876 8.25706 18.9297 8.23682L18.875 8.20947L18.8662 8.20361L17.2861 7.15381L17.0098 6.96924L16.7334 7.15381L15.1562 8.20166C15.0737 8.25529 14.9776 8.25978 14.8936 8.21729C14.808 8.16889 14.7599 8.08428 14.7598 8.00049V4.26904L14.04 4.62061C13.5995 4.83577 13.1985 5.05234 12.8467 5.25928L13.0996 5.68994L12.8457 5.25928L12.835 5.26611L12.6768 5.36475C12.2848 5.60702 11.7088 5.60281 11.3438 5.37549H11.3428L11.1045 5.22607H11.1055C10.2149 4.66751 8.98153 4.13304 7.7334 3.71826C6.48535 3.30352 5.18408 2.996 4.15039 2.91162L4.12988 2.90967H3.97949L3.81641 2.91748Z"  stroke={isActive ? "white" : "#4B96F5"}  fill={isActive ? "white" : "#4B96F5"} />
                        <path d="M12 21.2402C11.59 21.2402 11.25 20.9002 11.25 20.4902V5.49023C11.25 5.08023 11.59 4.74023 12 4.74023C12.41 4.74023 12.75 5.08023 12.75 5.49023V20.4902C12.75 20.9102 12.41 21.2402 12 21.2402Z" fill={isActive ? "white" : "#4B96F5"}  />
                        <path d="M19 8.74999C18.85 8.74999 18.71 8.70998 18.58 8.61998L17 7.57L15.42 8.61998C15.19 8.76998 14.9 8.78996 14.65 8.65996C14.41 8.52996 14.25 8.27999 14.25 7.99999V3.91997C14.25 3.60997 14.44 3.33996 14.72 3.21996C16.1 2.66996 17.61 2.23997 18.88 2.03997C19.1 1.99997 19.32 2.07001 19.49 2.21001C19.66 2.35001 19.75 2.56002 19.75 2.78002V7.99999C19.75 8.27999 19.6 8.52996 19.35 8.65996C19.24 8.71996 19.12 8.74999 19 8.74999ZM17 5.91997C17.14 5.91997 17.29 5.95998 17.42 6.04998L18.25 6.59996V3.68999C17.45 3.86999 16.58 4.12999 15.75 4.43999V6.59996L16.58 6.04998C16.71 5.95998 16.86 5.91997 17 5.91997Z" fill={isActive ? "white" : "#4B96F5"}  />
                      </svg>
                      <span className="flex-1 ml-3 whitespace-nowrap">Privacy Policy</span>
                    </div>
                  )}
                </NavLink>
              </li>
              <li className="w-full">
                <NavLink
                  to="/login"
                  className="flex items-center p-4 rounded-lg bg-[#EA4335] text-white w-full"
                >
                  <div className="flex items-center">
                    <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 10.7275L15 10.7275M15 10.7275L13 8.72754M15 10.7275L13 12.7275M11 14.7275L11 17.7275C11 18.8321 10.1046 19.7275 9 19.7275L3 19.7275C1.89543 19.7275 1 18.8321 1 17.7275L1 3.72754C1 2.62297 1.89543 1.72754 3 1.72754L9 1.72754C10.1046 1.72754 11 2.62297 11 3.72754L11 6.72754" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap text-white">Logout</span>
                  </div>
                </NavLink>
              </li>
            </div>
          </ul>

        </div>
      </aside>

    </>
  )
}
