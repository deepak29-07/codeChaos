export default function PromotionTeam() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-500 mb-8">
                📣 Promotion Team
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
                <div className="bg-[#333333] rounded-2xl p-6 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-600 flex items-center justify-center text-3xl">
                        👤
                    </div>
                    <h3 className="font-bold text-lg mb-1">Team Member 1</h3>
                    <p className="text-gray-400 text-sm">Marketing Lead</p>
                </div>
                <div className="bg-[#333333] rounded-2xl p-6 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-600 flex items-center justify-center text-3xl">
                        👤
                    </div>
                    <h3 className="font-bold text-lg mb-1">Team Member 2</h3>
                    <p className="text-gray-400 text-sm">Social Media Manager</p>
                </div>
                <div className="bg-[#333333] rounded-2xl p-6 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-600 flex items-center justify-center text-3xl">
                        👤
                    </div>
                    <h3 className="font-bold text-lg mb-1">Team Member 3</h3>
                    <p className="text-gray-400 text-sm">Content Creator</p>
                </div>
            </div>
            <a href="/" className="mt-8 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-full font-bold transition-colors">
                ← Back to Home
            </a>
        </div>
    )
}
