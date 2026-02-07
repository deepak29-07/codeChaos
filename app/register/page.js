export default function Register() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-500 mb-8">
                📝 Register
            </h1>
            <div className="bg-[#333333] rounded-2xl p-8 w-full max-w-md">
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-2">Team Name</label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Enter your team name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Team Size</label>
                        <select className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                            <option>1 Member</option>
                            <option>2 Members</option>
                            <option>3 Members</option>
                            <option>4 Members</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-green-500 hover:bg-green-600 rounded-lg font-bold transition-colors"
                    >
                        Register Now
                    </button>
                </form>
            </div>
        </div>
    )
}
