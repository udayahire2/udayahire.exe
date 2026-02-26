import React from "react";

/**
 * SectionFrame — full-bleed horizontal divider lines at the top and bottom of
 * each section.  Vertical rails are now handled globally by <PageRails />.
 *
 * Uses vectorEffect="non-scaling-stroke" so lines are always exactly 1 CSS px
 * regardless of how the SVG scales.
 */
export function SectionFrame() {
    return (
        <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1 1"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Top border */}
            <line x1="0" y1="0" x2="1" y2="0" className="stroke-border" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            {/* Bottom border */}
            <line x1="0" y1="1" x2="1" y2="1" className="stroke-border" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            {/* Left border */}
            <line x1="0" y1="0" x2="0" y2="1" className="stroke-border" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            {/* Right border */}
            <line x1="1" y1="0" x2="1" y2="1" className="stroke-border" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        </svg>
    );
}