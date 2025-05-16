
import { useState } from "react"
export default function Settings() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            {/* <Header /> */}
            <div className="max-w-screen-3xl mx-auto font-sans">
                <div className="mx-4 sm:mx-8 my-4 space-y-4">
                    <h1 className="text-[30px] font-bold text-gray-150">Settings</h1>
                    <form className="space-y-8 mt-8 w-full p-4">
                        <div>
                            <label htmlFor="current" className="block mb-2 text-[15px] font-semibold text-gray-250">Current Password</label>
                            <input
                                type="password"
                                name="current"
                                className="w-full rounded-[10px] border bg-[#F7F7F7] border-[#E7E7E7] px-4 py-2 text-base placeholder:text-gray-250 focus:outline-none"
                                placeholder=""
                                autoComplete="off"
                            />
                        </div>
                        <div>
                            <label htmlFor="new" className="block mb-2 text-[15px] font-semibold text-gray-250">New Password</label>
                            <input
                                type="password"
                                name="new"
                                className="w-full rounded-[10px] border bg-[#F7F7F7] border-[#E7E7E7] px-4 py-3 text-base placeholder:text-gray-250 focus:outline-none"
                                placeholder=""
                                autoComplete="off"
                            />
                        </div>
                        <div>
                            <label htmlFor="repeat" className="block mb-2 text-[15px] font-semibold text-gray-250">Repeat New Password</label>
                            <input
                                type="password"
                                name="repeat"
                                className="w-full rounded-[10px] border bg-[#F7F7F7] border-[#E7E7E7] px-4 py-2 text-base placeholder:text-gray-250 focus:outline-none"
                                placeholder=""
                                autoComplete="off"
                            />
                        </div>
                        <div className="flex justify-end">
                        <button className="border border-red-150 rounded-[10px] bg-red-150 text-white py-2 px-4 w-[300px] font-semibold" onClick={()=>setIsOpen(false)}>Save</button>
                            
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
