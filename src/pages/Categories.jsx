
import { useState } from "react"
import category from "../assets/category3.png"
import category1 from "../assets/category4.png"
import category2 from "../assets/category5.png"
import category3 from "../assets/category6.png"
import category4 from "../assets/category7.png"
import category5 from "../assets/category8.png"
export default function Categories() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            {/* <Header /> */}
            <div className="max-w-screen-3xl mx-auto font-sans">
                <div className="mx-4 sm:mx-8 my-4 space-y-4">
                    <h1 className="text-[30px] font-bold text-gray-150">Categories</h1>
                    <div className="grid lg:grid-cols-4 md:grid-cols-1 grid-cols-1 gap-5 px-12 py-5">
                        <div>
                            <img src={category} alt='' />
                        </div>
                        <div>
                            <img src={category1} alt='' />
                        </div>
                        <div>
                            <img src={category2} alt='' />
                        </div>
                        <div>
                            <img src={category3} alt='' />
                        </div>
                        <div>
                            <img src={category4} alt='' />
                        </div>
                        <div>
                            <img src={category5} alt='' />
                        </div>
                        <button onClick={() => setIsOpen(true)} className="rounded-lg border cursor-pointer border-[#E7E7E7] bg-[#F7F7F7] flex justify-center items-center">
                            <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.6665 28.5H37.3332" stroke="#800000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M28 37.8333V19.1666" stroke="#800000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20.9998 51.8333H34.9998C46.6665 51.8333 51.3332 47.1666 51.3332 35.5V21.5C51.3332 9.83329 46.6665 5.16663 34.9998 5.16663H20.9998C9.33317 5.16663 4.6665 9.83329 4.6665 21.5V35.5C4.6665 47.1666 9.33317 51.8333 20.9998 51.8333Z" stroke="#800000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="overflow-y-auto overflow-x-hidden font-sans fixed flex bg-black/20 backdrop-blur-xs z-50 justify-center items-center w-full md:inset-0 max-h-full">
                    <div className="bg-white py-6 px-16 rounded-lg shadow-lg max-w-[755px] w-full flex justify-center flex-col items-center">
                        <h1 className="text-2xl text-gray-150 font-bold">Add Category</h1>
                        <form className="space-y-5 mt-8 w-full">
                            <div>
                                <label htmlFor="category_name" className="block mb-2 text-[15px] font-semibold text-gray-250">Category Name</label>
                                <input
                                    type="text"
                                    name="category"
                                    className="w-full rounded-[10px] border bg-[#F7F7F7] border-[#E7E7E7] px-4 py-2 text-base placeholder:text-gray-250 focus:outline-none"
                                    placeholder=""
                                    autoComplete="off"
                                />
                            </div>
                            <div>
                                <label htmlFor="category_name" className="block mb-2 text-[15px] font-semibold text-gray-250">Add Picture</label>
                                <div className="flex items-center justify-center w-full">
                                    <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 bg-[#F7F7F7] border-[#E7E7E7] rounded-lg cursor-pointer hover:bg-gray-100">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.5 12H18.5" stroke="#747474" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M12.5 18V6" stroke="#747474" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <input id="dropzone-file" type="file" className="hidden" />
                                    </label>
                                </div>
                            </div>
                            <div className="flex gap-4">
                            <button className="border border-red-150 rounded-[10px] text-red-150 py-2 w-full font-semibold" onClick={()=>setIsOpen(false)}>Cancel</button>
                            <button className="border border-red-150 rounded-[10px] bg-red-150 text-white py-2 w-full font-semibold" onClick={()=>setIsOpen(false)}>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
