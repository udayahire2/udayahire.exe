import React from "react";

/**
 * PageRails — two fixed vertical SVG lines spanning the full page height,
 * sitting at the left/right edges of the max-w-7xl content boundary.
 * strokeWidth="1" + vectorEffect="non-scaling-stroke" = always 1 CSS px, crisp on all DPR.
 */
export function PageRails() {
    return (
        <div
            aria-hidden="true"
            className="fixed inset-0 pointer-events-none z-0 flex justify-center overflow-hidden"
        >
            <div className="relative w-full max-w-7xl h-full">
                <svg
                    className="absolute inset-0 w-full h-full overflow-visible"
                    viewBox="0 0 1 1"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Left rail */}
                    <line
                        x1="0" y1="0" x2="0" y2="1"
                        className="stroke-border"
                        strokeWidth="1"
                        vectorEffect="non-scaling-stroke"
                    />
                    {/* Right rail */}
                    <line
                        x1="1" y1="0" x2="1" y2="1"
                        className="stroke-border"
                        strokeWidth="1"
                        vectorEffect="non-scaling-stroke"
                    />
                </svg>
            </div>
        </div>
    );
}
