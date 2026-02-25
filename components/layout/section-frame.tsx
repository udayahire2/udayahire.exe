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
        <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
        >
            <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 1 1"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* top divider — spans the full section width */}
                <line
                    x1="0" y1="0" x2="1" y2="0"
                    stroke="currentColor"
                    strokeOpacity="0.12"
                    strokeWidth="1"
                    vectorEffect="non-scaling-stroke"
                />
                {/* bottom divider — spans the full section width */}
                <line
                    x1="0" y1="1" x2="1" y2="1"
                    stroke="currentColor"
                    strokeOpacity="0.12"
                    strokeWidth="1"
                    vectorEffect="non-scaling-stroke"
                />
            </svg>
        </div>
    );
}