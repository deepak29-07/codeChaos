"use client";
import { useState, useCallback } from "react";

/**
 * Custom hook for managing wheel rotation state
 * @param {number} totalIcons - Total number of icons in the wheel
 * @returns {Object} - rotation state and control functions
 */
export default function useWheelRotation(totalIcons = 8) {
    // Start at 4 so Home icon (index 0) is at 180° (center position)
    const [rotationIndex, setRotationIndex] = useState(4);

    // Rotate clockwise (up arrow) - moves icons forward
    const rotateClockwise = useCallback(() => {
        setRotationIndex((prev) => (prev + 1) % totalIcons);
    }, [totalIcons]);

    // Rotate counter-clockwise (down arrow) - moves icons backward
    const rotateCounterClockwise = useCallback(() => {
        setRotationIndex((prev) => (prev - 1 + totalIcons) % totalIcons);
    }, [totalIcons]);

    return {
        rotationIndex,
        rotateClockwise,
        rotateCounterClockwise,
    };
}
