export default function Contact() {
    return (
        <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[50%] min-h-screen mx-auto px-4 py-8">
            <div className="flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold mb-6"> Contact Us</div>
            <div className="bg-[#333333] rounded-xl p-4 sm:p-6 md:p-8">
                <h1 className="text-center text-xl sm:text-2xl md:text-3xl mb-4">GOT A QUERY ?</h1>
                <p className="text-sm sm:text-base md:text-lg mb-4">We're here to assist you! Join us on Keet:</p>
                <button className="rounded-2xl bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base mb-4 transition-colors">JOIN US ON KEET</button>
                <p className="text-sm sm:text-base md:text-lg mb-4">Also checkout our social handles :</p>
                <div className="space-y-2 text-sm sm:text-base">
                    <div className="break-all">www.geekroom.in</div>
                    <div className="break-all">community@geekroom.in</div>
                    <div>GEEK SUITE</div>
                    <div>Pears_p2p</div>
                </div>
            </div>
        </div>
    )
}