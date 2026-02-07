export default function Sponsors() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-500 mb-8">
                💼 Sponsors
            </h1>
            <p className="text-gray-400 text-lg mb-8">Our amazing partners making this event possible</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-4xl">
                <div className="bg-[#333333] rounded-2xl p-6 flex items-center justify-center h-32">
                    <span className="text-xl font-bold text-gray-500">Sponsor 1</span>
                </div>
                <div className="bg-[#333333] rounded-2xl p-6 flex items-center justify-center h-32">
                    <span className="text-xl font-bold text-gray-500">Sponsor 2</span>
                </div>
                <div className="bg-[#333333] rounded-2xl p-6 flex items-center justify-center h-32">
                    <span className="text-xl font-bold text-gray-500">Sponsor 3</span>
                </div>
                <div className="bg-[#333333] rounded-2xl p-6 flex items-center justify-center h-32">
                    <span className="text-xl font-bold text-gray-500">Sponsor 4</span>
                </div>
            </div>
        </div>
    )
}
