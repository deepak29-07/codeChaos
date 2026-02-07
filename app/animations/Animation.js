"use client";

/**
 * CircularIcons Component
 * Displays navigation icons in a full circular arrangement
 * Supports rotation - active icon is the one pointing towards center (180°)
 */
export default function CircularIcons({ rotationIndex = 0, onActiveChange }) {
  // Navigation icons - only first 4 have valid content
  const navItems = [
    { icon: "🏠", label: "Home", hasContent: true },
    { icon: "📋", label: "FAQ", hasContent: true },
    { icon: "📞", label: "Contact", hasContent: true },
    { icon: "👥", label: "Team", hasContent: true },
    { icon: "🏆", label: "Prizes", hasContent: false },
    { icon: "📅", label: "Schedule", hasContent: false },
    { icon: "💼", label: "Sponsors", hasContent: false },
    { icon: "📝", label: "Register", hasContent: false },
  ];

  const totalIcons = navItems.length;

  // Calculate angle for each icon (evenly distributed in a full circle)
  const getIconAngle = (index) => {
    return (index * 45) + (rotationIndex * 45);
  };

  // Check if an icon is at the "center" position (pointing left at 180°)
  const isActiveIcon = (index) => {
    const angle = ((getIconAngle(index) % 360) + 360) % 360;
    return angle === 180;
  };

  // Get current active item
  const getActiveItem = () => {
    for (let i = 0; i < navItems.length; i++) {
      if (isActiveIcon(i)) {
        return navItems[i];
      }
    }
    return navItems[0];
  };

  // Notify parent of active item change
  if (onActiveChange) {
    const activeItem = getActiveItem();
    // Use setTimeout to avoid calling during render
    setTimeout(() => onActiveChange(activeItem), 0);
  }

  return (
    <div className="flex items-center justify-center 
                    h-[280px] w-[280px] 
                    sm:h-[360px] sm:w-[360px] 
                    md:h-[450px] md:w-[450px] 
                    lg:h-[600px] lg:w-[600px] 
                    bg-black px-4 sm:px-8 lg:px-15 rounded-[50%] 
                    drop-shadow-[0_0_100px_rgba(179,255,102,0.7)] 
                    sm:drop-shadow-[0_0_150px_rgba(179,255,102,0.8)] 
                    lg:drop-shadow-[0_0_200px_rgba(179,255,102,0.9)] 
                    lg:translate-x-[30%] xl:translate-x-[50%]">
      {/* Parent Circle */}
      <div className="flex relative items-center justify-center 
                      w-[240px] h-[240px] 
                      sm:w-[300px] sm:h-[300px] 
                      md:w-[380px] md:h-[380px] 
                      lg:w-[520px] lg:h-[520px] 
                      rounded-full border-2 border-gray-500 bg-[rgb(128,128,128)]">

        <img
          src="https://thumbs.dreamstime.com/b/d-planet-earth-globe-transparent-sphere-grey-land-silhouettes-focused-americas-133823152.jpg"
          className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[300px] rounded-[50%]"
          alt="Earth globe"
        />

        {navItems.map((item, index) => {
          const angle = getIconAngle(index);
          const isActive = isActiveIcon(index);

          return (
            <div
              key={index}
              className={`absolute top-1/2 left-1/2 
                         w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 
                         flex items-center justify-center
                         bg-white rounded-full 
                         text-sm sm:text-base md:text-lg lg:text-xl
                         shadow-lg
                         transition-all duration-500 ease-in-out
                         icon-item
                         ${isActive ? 'active-icon ring-2 ring-green-400 scale-125 z-10' : ''}
                         ${!item.hasContent ? 'opacity-60' : ''}`}
              style={{
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(var(--radius)) rotate(${-angle}deg)`,
                boxShadow: isActive ? '0 0 20px rgba(74, 222, 128, 0.8)' : undefined
              }}
              title={item.label}
            >
              {item.icon}
            </div>
          );
        })}

      </div>

      {/* CSS for icon positioning at different breakpoints */}
      <style>{`
        .icon-item {
          --radius: 95px;
        }
        @media (min-width: 640px) {
          .icon-item { --radius: 120px; }
        }
        @media (min-width: 768px) {
          .icon-item { --radius: 155px; }
        }
        @media (min-width: 1024px) {
          .icon-item { --radius: 210px; }
        }
      `}</style>
    </div>
  );
}
