"use client";
import Button from "../components/Button";
import CircularIcons from "./animations/Animation";
import useWheelRotation from "./animations/useWheelRotation";

export default function Home() {
  const { rotationIndex, rotateClockwise, rotateCounterClockwise } = useWheelRotation(8);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center overflow-hidden min-h-screen px-4 py-8 lg:py-0">
      {/* Left Section - Title and Buttons */}
      <div className="flex w-full lg:w-[50%] min-h-[50vh] lg:h-screen items-center justify-center">
        <div>
          <div className="w-full">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
              <span className="text-green-500 font-antio">pears GLOBAL</span> HACKATHON
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row p-3 gap-4 sm:gap-6">
            <Button />
            <Button />
          </div>
        </div>
      </div>

      {/* Right Section - Animation with Controls */}
      <div className="flex flex-col-reverse lg:flex-row w-full lg:w-[50%] items-center justify-center min-h-[50vh] lg:h-screen">
        {/* Arrow Controls */}
        <div className="flex lg:flex-col items-center justify-around gap-4 mb-4 lg:mb-0 lg:mr-4">
          {/* Up Arrow - Rotates clockwise */}
          <button
            onClick={rotateClockwise}
            className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-200 active:scale-95"
            aria-label="Rotate clockwise"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[50px] lg:h-[50px] text-green-500 hover:text-green-400"
              fill="currentColor"
            >
              <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20ZM13 12V16H11V12H8L12 8L16 12H13Z"></path>
            </svg>
          </button>

          {/* Down Arrow - Rotates counter-clockwise */}
          <button
            onClick={rotateCounterClockwise}
            className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-200 active:scale-95"
            aria-label="Rotate counter-clockwise"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[50px] lg:h-[50px] text-green-500 hover:text-green-400"
              fill="currentColor"
            >
              <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20ZM13 12H16L12 16L8 12H11V8H13V12Z"></path>
            </svg>
          </button>
        </div>

        {/* Circular Icons Animation */}
        <CircularIcons rotationIndex={rotationIndex} />
      </div>
    </div>
  );
}
