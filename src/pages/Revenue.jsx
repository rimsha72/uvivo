import RevenueChart from '../components/RevenueChart';
export default function Revenue() {

    return (
        <div>
            {/* <Header /> */}
            <div className="max-w-screen-3xl mx-auto">
                <div className="mx-4 sm:mx-8 my-4 space-y-4 fnt-sans">
                <h1 className="font-bold text-[30px] text-gray-150">Revenue</h1>
                    <div className="pt-7 pb-3 bg-white mt-8">
                        <RevenueChart />
                    </div>
                </div>
            </div>
        </div>

    )
}
