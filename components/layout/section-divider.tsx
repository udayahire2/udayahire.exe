import React from "react";

/**
 * SectionDivider — the visible gap between sections.
 * Renders a fixed-height strip filled with a subtle SVG dot-grid pattern,
 * so the whitespace between sections looks intentional and premium.
 */
export function SectionDivider() {
    const id = React.useId().replace(/:/g, "");

    return (
        <div
            aria-hidden="true"
            className="w-full h-24 relative shrink-0 pointer-events-none"
        >
            <svg
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    {/* 20px grid dot pattern */}
                    <pattern
                        id={id}
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                    >
                        <circle
                            cx="1"
                            cy="1"
                            r="1.1"
                            fill="currentColor"
                            fillOpacity="0.07"
                        />
                    </pattern>

                    {/* Vertical fade mask — fully visible in center, fades top & bottom */}
                    <linearGradient id={`${id}-fade`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="black" stopOpacity="0" />
                        <stop offset="30%" stopColor="black" stopOpacity="1" />
                        <stop offset="70%" stopColor="black" stopOpacity="1" />
                        <stop offset="100%" stopColor="black" stopOpacity="0" />
                    </linearGradient>
                    <mask id={`${id}-mask`}>
                        <rect width="100%" height="100%" fill={`url(#${id}-fade)`} />
                    </mask>
                </defs>

                {/* Dot fill with fade mask */}
                <rect
                    width="100%"
                    height="100%"
                    fill={`url(#${id})`}
                    mask={`url(#${id}-mask)`}
                />
            </svg>
        </div>
    );
}
