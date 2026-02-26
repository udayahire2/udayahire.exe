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
            className="w-full h-24 relative shrink-0 pointer-events-none flex items-center justify-center"
        >
            <div className="absolute inset-0 w-full max-w-7xl mx-auto h-full border-x border-border/40" />

            <svg
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    {/* 20px grid cross pattern */}
                    <pattern
                        id={id}
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                        patternUnits="userSpaceOnUse"
                    >
                        <path
                            d="M 12 10 L 12 14 M 10 12 L 14 12"
                            className="stroke-muted-foreground/20"
                            strokeWidth="1"
                            strokeLinecap="round"
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

                {/* Grid fill with fade mask */}
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
