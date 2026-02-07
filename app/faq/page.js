export default function Faqs() {
    return (
        <div className="flex flex-col px-4 py-8 min-h-screen">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-20 mb-6 sm:mb-8">
                <div className="w-full sm:w-[40%] md:w-[30%] lg:w-[20%] h-fit bg-[#333333] rounded-2xl p-4">
                    <h3 className="text-center text-sm sm:text-base md:text-lg">Team Size</h3>
                    <h3 className="text-center text-lg sm:text-xl md:text-2xl font-bold">1 - 4</h3>
                </div>
                <div className="w-full sm:w-[40%] md:w-[30%] lg:w-[20%] h-fit bg-[#333333] rounded-2xl p-4">
                    <h3 className="text-center text-sm sm:text-base md:text-lg">Registration Cost</h3>
                    <h3 className="text-center text-lg sm:text-xl md:text-2xl font-bold">NA</h3>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <details className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%] bg-gray-500 rounded-2xl sm:rounded-full mb-2 sm:mb-3">
                    <summary className="p-3 sm:p-4 cursor-pointer text-sm sm:text-base"> What is the project submission deadline ?</summary>
                    <div className="px-4 pb-4 text-sm sm:text-base">
                        The deadline for submitting your project is the end of February. Submissions are evaluated on a first-come, first-serve basis, so the earlier you submit, the better your chances of getting reviewed promptly.
                    </div>
                </details>
                <div className="flex items-center justify-center w-full sm:w-[80%] md:w-[60%] lg:w-[50%] min-h-10 py-2 sm:py-3 px-4 bg-gray-500 rounded-2xl sm:rounded-full mb-2 sm:mb-3">
                    <p className="text-sm sm:text-base text-center"> Who can participate in this hackathon ?</p>
                </div>
                <div className="flex items-center justify-center w-full sm:w-[80%] md:w-[60%] lg:w-[50%] min-h-10 py-2 sm:py-3 px-4 bg-gray-500 rounded-2xl sm:rounded-full mb-2 sm:mb-3">
                    <p className="text-sm sm:text-base text-center"> What should the projects be built on ?</p>
                </div>
                <div className="flex items-center justify-center w-full sm:w-[80%] md:w-[60%] lg:w-[50%] min-h-10 py-2 sm:py-3 px-4 bg-gray-500 rounded-2xl sm:rounded-full mb-2 sm:mb-3">
                    <p className="text-sm sm:text-base text-center"> What to get help ?</p>
                </div>
                <p className="text-sm sm:text-base md:text-lg mt-4 text-center"> Got more questions? Reach out to community@geekroom.in</p>
            </div>
        </div>
    )
}