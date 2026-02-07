
export default function Button() {
  return (
    <div className="flex w-fit items-center py-2 sm:py-3 rounded-full gap-2 sm:gap-4 px-3 sm:px-4 bg-gray-500 font-sans border-2">
      <div className="bg-gray-400 h-6 w-6 sm:h-8 sm:w-8 rounded-[50%]"></div>
      <h1 className="text-sm sm:text-base md:text-lg lg:text-2xl whitespace-nowrap">LEAD ORGANIZERS</h1>
      <button className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 border-2 border-emerald-500 rounded-[50%]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="text-green-500" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></button>
    </div>
  );
}