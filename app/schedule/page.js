export default function Schedule() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-500 mb-8">
                📅 Schedule
            </h1>
            <div className="w-full max-w-2xl space-y-4">
                <div className="bg-[#333333] rounded-2xl p-6 flex items-center gap-4">
                    <div className="text-2xl">🚀</div>
                    <div>
                        <h3 className="font-bold text-lg">Kickoff</h3>
                        <p className="text-gray-400">February 15, 2026 - 9:00 AM</p>
                    </div>
                </div>
                <div className="bg-[#333333] rounded-2xl p-6 flex items-center gap-4">
                    <div className="text-2xl">💻</div>
                    <div>
                        <h3 className="font-bold text-lg">Hacking Begins</h3>
                        <p className="text-gray-400">February 15, 2026 - 10:00 AM</p>
                    </div>
                </div>
                <div className="bg-[#333333] rounded-2xl p-6 flex items-center gap-4">
                    <div className="text-2xl">📝</div>
                    <div>
                        <h3 className="font-bold text-lg">Submissions Due</h3>
                        <p className="text-gray-400">February 28, 2026 - 11:59 PM</p>
                    </div>
                </div>
                <div className="bg-[#333333] rounded-2xl p-6 flex items-center gap-4">
                    <div className="text-2xl">🏆</div>
                    <div>
                        <h3 className="font-bold text-lg">Winners Announced</h3>
                        <p className="text-gray-400">March 7, 2026 - 3:00 PM</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
