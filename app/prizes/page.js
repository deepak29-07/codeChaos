export default function Prizes() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-500 mb-8">
                🏆 Prizes
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
                <div className="bg-[#333333] rounded-2xl p-6 text-center">
                    <div className="text-4xl mb-4">🥇</div>
                    <h3 className="text-xl font-bold mb-2">1st Place</h3>
                    <p className="text-green-400 text-2xl font-bold">$5,000</p>
                </div>
                <div className="bg-[#333333] rounded-2xl p-6 text-center">
                    <div className="text-4xl mb-4">🥈</div>
                    <h3 className="text-xl font-bold mb-2">2nd Place</h3>
                    <p className="text-green-400 text-2xl font-bold">$3,000</p>
                </div>
                <div className="bg-[#333333] rounded-2xl p-6 text-center">
                    <div className="text-4xl mb-4">🥉</div>
                    <h3 className="text-xl font-bold mb-2">3rd Place</h3>
                    <p className="text-green-400 text-2xl font-bold">$1,000</p>
                </div>
            </div>
        </div>
    )
}
