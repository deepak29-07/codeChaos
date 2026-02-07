"use client";
import { useState, useEffect } from "react";
import Button from "../components/Button";
import CircularIcons from "./animations/Animation";
import useWheelRotation from "./animations/useWheelRotation";

// Home Content Component
function HomeContent() {
  return (
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
  );
}

// FAQ Content Component
function FAQContent() {
  return (
    <div className="w-full max-w-lg">
      <h1 className="text-green-500 text-3xl sm:text-4xl md:text-5xl font-bold mb-6">📋 FAQ</h1>
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="bg-[#333333] rounded-2xl p-4 flex-1 min-w-[120px]">
          <h3 className="text-center text-sm">Team Size</h3>
          <h3 className="text-center text-xl font-bold">1 - 4</h3>
        </div>
        <div className="bg-[#333333] rounded-2xl p-4 flex-1 min-w-[120px]">
          <h3 className="text-center text-sm">Registration Cost</h3>
          <h3 className="text-center text-xl font-bold">NA</h3>
        </div>
      </div>
      <div className="space-y-2">
        <details className="bg-gray-600 rounded-xl">
          <summary className="p-3 cursor-pointer text-sm">What is the project submission deadline?</summary>
          <div className="px-4 pb-3 text-sm">End of February. First-come, first-serve basis.</div>
        </details>
        <div className="bg-gray-600 rounded-xl p-3 text-sm">Who can participate in this hackathon?</div>
        <div className="bg-gray-600 rounded-xl p-3 text-sm">What should the projects be built on?</div>
      </div>
      <p className="text-sm mt-4 text-gray-400">Got more questions? community@geekroom.in</p>
    </div>
  );
}

// Contact Content Component
function ContactContent() {
  return (
    <div className="w-full max-w-md">
      <h1 className="text-green-500 text-3xl sm:text-4xl md:text-5xl font-bold mb-6">📞 Contact Us</h1>
      <div className="bg-[#333333] rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4">GOT A QUERY?</h2>
        <p className="text-sm mb-4">We're here to assist you! Join us on Keet:</p>
        <button className="rounded-2xl bg-green-500 hover:bg-green-600 text-white px-6 py-2 text-sm mb-4 transition-colors">
          JOIN US ON KEET
        </button>
        <p className="text-sm mb-3">Also checkout our social handles:</p>
        <div className="space-y-1 text-sm text-gray-300">
          <div>www.geekroom.in</div>
          <div>community@geekroom.in</div>
          <div>GEEK SUITE</div>
          <div>Pears_p2p</div>
        </div>
      </div>
    </div>
  );
}

// Team Content Component with category buttons
function TeamContent() {
  const teamCategories = [
    { name: "WEBSITE", href: "/team/website" },
    { name: "DESIGN", href: "/team/design" },
    { name: "PROMOTION", href: "/team/promotion" },
    { name: "PR", href: "/team/pr" },
  ];

  return (
    <div className="w-[40vw] min-w-[300px]">
      <h1 className="text-green-500 text-3xl sm:text-4xl md:text-5xl font-bold mb-6">👥 Team</h1>
      <div className="space-y-5">
        {teamCategories.map((category, index) => (
          <a
            key={category.name}
            href={category.href}
            className="flex items-center justify-between bg-[#333333] hover:bg-[#404040] rounded-full px-4 py-3 transition-all duration-300 group"
          >
            {/* Left side - arrow or pear icon */}
            <div className="w-10 h-10 flex items-center justify-center">
              {index % 2 === 0 ? (
                <div className="w-8 h-8 rounded-full border-2 border-green-500 flex items-center justify-center">
                  <span className="text-green-500">‹</span>
                </div>
              ) : (
                <div className="w-10 h-10 rounded-full bg-[#555555] flex items-center justify-center">
                  <span className="text-green-400 text-lg">🍐</span>
                </div>
              )}
            </div>

            {/* Center - Category name */}
            <span className="text-white font-bold text-lg tracking-wider">{category.name}</span>

            {/* Right side - pear icon or arrow */}
            <div className="w-10 h-10 flex items-center justify-center">
              {index % 2 === 0 ? (
                <div className="w-10 h-10 rounded-full bg-[#555555] flex items-center justify-center">
                  <span className="text-green-400 text-lg">🍐</span>
                </div>
              ) : (
                <div className="w-8 h-8 rounded-full border-2 border-green-500 flex items-center justify-center">
                  <span className="text-green-500">›</span>
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

// Placeholder Content for icons without pages
function PlaceholderContent({ label, icon }) {
  return (
    <div className="w-full max-w-md text-center">
      <h1 className="text-gray-500 text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
        {icon} {label}
      </h1>
      <p className="text-gray-500">Coming soon...</p>
    </div>
  );
}

export default function Home() {
  const { rotationIndex, rotateClockwise, rotateCounterClockwise } = useWheelRotation(8);
  const [activeItem, setActiveItem] = useState({ label: "Home", icon: "🏠", hasContent: true });

  // Render content based on active item
  const renderContent = () => {
    switch (activeItem.label) {
      case "Home":
        return <HomeContent />;
      case "FAQ":
        return <FAQContent />;
      case "Contact":
        return <ContactContent />;
      case "Team":
        return <TeamContent />;
      default:
        return <PlaceholderContent label={activeItem.label} icon={activeItem.icon} />;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center overflow-hidden min-h-screen px-4 py-8 lg:py-0">
      {/* Left Section - Dynamic Content based on active icon */}
      <div className="flex w-full lg:w-[50%] min-h-[50vh] lg:h-screen items-center justify-center">
        <div className="transition-all duration-500 ease-in-out">
          {renderContent()}
        </div>
      </div>

      {/* Right Section - Animation with Controls */}
      <div className="flex flex-col-reverse lg:flex-row w-full lg:w-[50%] items-center justify-center min-h-[50vh] lg:h-screen">
        {/* Arrow Controls - Positioned at top and bottom, shifted right */}
        <div className="flex lg:flex-col items-center lg:justify-between gap-4 mb-4 lg:mb-0 lg:mr-[-20px] lg:h-[90vh] lg:py-4">
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
        <CircularIcons rotationIndex={rotationIndex} onActiveChange={setActiveItem} />
      </div>
    </div>
  );
}
