"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * PageRails — two fixed vertical SVG lines spanning the full page height,
 * sitting at the left/right edges of the max-w-7xl content boundary.
 */
export function PageRails() {
    return (
        <div
            aria-hidden="true"
            className="fixed inset-0 pointer-events-none z-20 flex justify-center"
        >
            <div className="relative w-full max-w-7xl h-full">

                {/* ── Glowing Animated Drops ── */}
                <div className="absolute top-0 left-0 w-px h-full overflow-hidden">
                    <motion.div
                        className="w-full h-32 bg-linear-to-b from-transparent via-primary/50 to-transparent"
                        animate={{ translateY: ['-100%', '1000%'] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 1 }}
                    />
                </div>
                <div className="absolute top-0 right-0 w-px h-full overflow-hidden">
                    <motion.div
                        className="w-full h-32 bg-linear-to-b from-transparent via-primary/50 to-transparent"
                        animate={{ translateY: ['-100%', '1000%'] }}
                        transition={{ duration: 9, repeat: Infinity, ease: "linear", delay: 4 }}
                    />
                </div>

                <svg
                    className="absolute inset-0 w-full h-full overflow-visible"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Left rail */}
                    <line x1="0" y1="0" x2="0" y2="100%" className="stroke-border" strokeWidth="1" opacity="0.4" />

                    {/* Right rail */}
                    <line x1="100%" y1="0" x2="100%" y2="100%" className="stroke-border" strokeWidth="1" opacity="0.4" />

                    {/* Corner Crosshairs - Left Top */}
                    <path d="M -4 0 L 4 0 M 0 -4 L 0 4" className="stroke-muted-foreground/40" strokeWidth="1" />
                    {/* Corner Crosshairs - Right Top */}
                    <path d="M calc(100% - 4px) 0 L calc(100% + 4px) 0 M 100% -4 L 100% 4" className="stroke-muted-foreground/40" strokeWidth="1" />
                    {/* Corner Crosshairs - Left Bottom */}
                    <path d="M -4 100% L 4 100% M 0 calc(100% - 4px) L 0 calc(100% + 4px)" className="stroke-muted-foreground/40" strokeWidth="1" />
                    {/* Corner Crosshairs - Right Bottom */}
                    <path d="M calc(100% - 4px) 100% L calc(100% + 4px) 100% M 100% calc(100% - 4px) L 100% calc(100% + 4px)" className="stroke-muted-foreground/40" strokeWidth="1" />
                </svg>
            </div>
        </div>
    );
}
