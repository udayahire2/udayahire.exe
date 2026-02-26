import React from "react";

/**
 * SectionFrame — horizontal divider lines at the top and bottom of
 * each section. Vertical rails are handled globally by <PageRails />.
 */
export function SectionFrame() {
    return (
        <svg
            className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Top border */}
            <line x1="0" y1="0" x2="100%" y2="0" className="stroke-border" strokeWidth="1" opacity="0.4" />

            {/* Bottom border */}
            <line x1="0" y1="100%" x2="100%" y2="100%" className="stroke-border" strokeWidth="1" opacity="0.4" />

            {/* Edge Nodes (Left/Right intersection markers) */}
            <circle cx="0" cy="0" r="1.5" className="fill-muted-foreground/60" />
            <circle cx="100%" cy="0" r="1.5" className="fill-muted-foreground/60" />
            <circle cx="0" cy="100%" r="1.5" className="fill-muted-foreground/60" />
            <circle cx="100%" cy="100%" r="1.5" className="fill-muted-foreground/60" />

            {/* Center Registration Marks */}
            <path d="M 50% -4 L 50% 4" className="stroke-muted-foreground/30" strokeWidth="1" />
            <path d="M 50% calc(100% - 4px) L 50% calc(100% + 4px)" className="stroke-muted-foreground/30" strokeWidth="1" />
        </svg>
    );
}