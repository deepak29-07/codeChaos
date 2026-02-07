"use client";

/**
 * CircularIcons Component
 * Displays icons in a circular arrangement showing only 4 icons at a time
 * Supports rotation via up/down arrow controls
 */
export default function CircularIcons({ rotationIndex = 0 }) {
    const allIcons = ["🔥", "⚡", "🚀", "🎯", "💡", "🧠", "📦", "🛠️"];
    const totalIcons = allIcons.length;
    const visibleCount = 4;

    // Calculate which 4 icons to show based on rotation
    const getVisibleIcons = () => {
        const visible = [];
        for (let i = 0; i < visibleCount; i++) {
            const index = (rotationIndex + i) % totalIcons;
            visible.push({ icon: allIcons[index], originalIndex: index });
        }
        return visible;
    };

    const visibleIcons = getVisibleIcons();

    // Position icons in a semi-circle (right half) - showing 4 positions
    const positions = [
        { angle: -60 },   // Top position
        { angle: -20 },   // Upper middle
        { angle: 20 },    // Lower middle
        { angle: 60 },    // Bottom position
    ];

    // Responsive radius based on screen size - using inline calculation
    const getIconStyle = (angle, radiusPx) => ({
        transform: `
      translate(-50%, -50%)
      rotate(${angle}deg)
      translateX(${radiusPx}px)
      rotate(${-angle}deg)
    `,
    });

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
                      w-[220px] h-[220px] 
                      sm:w-[280px] sm:h-[280px] 
                      md:w-[350px] md:h-[350px] 
                      lg:w-[480px] lg:h-[480px] 
                      rounded-full border-2 border-gray-500 bg-[rgb(128,128,128)]">

                <img
                    src="https://thumbs.dreamstime.com/b/d-planet-earth-globe-transparent-sphere-grey-land-silhouettes-focused-americas-133823152.jpg"
                    className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[300px] rounded-[50%]"
                    alt="Earth globe"
                />

                {visibleIcons.map((item, displayIndex) => {
                    const position = positions[displayIndex];

                    return (
                        <div
                            key={`${rotationIndex}-${displayIndex}`}
                            className="absolute top-1/2 left-1/2 
                         w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 
                         flex items-center justify-center
                         bg-white rounded-full 
                         text-lg sm:text-xl md:text-2xl lg:text-3xl
                         shadow-lg
                         transition-all duration-500 ease-in-out
                         icon-item"
                            data-angle={position.angle}
                        >
                            {item.icon}
                        </div>
                    );
                })}

            </div>

            {/* CSS for icon positioning at different breakpoints */}
            <style>{`
        .icon-item {
          --radius: 100px;
        }
        .icon-item[data-angle="-60"] {
          transform: translate(-50%, -50%) rotate(-60deg) translateX(var(--radius)) rotate(60deg);
        }
        .icon-item[data-angle="-20"] {
          transform: translate(-50%, -50%) rotate(-20deg) translateX(var(--radius)) rotate(20deg);
        }
        .icon-item[data-angle="20"] {
          transform: translate(-50%, -50%) rotate(20deg) translateX(var(--radius)) rotate(-20deg);
        }
        .icon-item[data-angle="60"] {
          transform: translate(-50%, -50%) rotate(60deg) translateX(var(--radius)) rotate(-60deg);
        }
        @media (min-width: 640px) {
          .icon-item { --radius: 130px; }
        }
        @media (min-width: 768px) {
          .icon-item { --radius: 160px; }
        }
        @media (min-width: 1024px) {
          .icon-item { --radius: 210px; }
        }
      `}</style>
        </div>
    );
}
