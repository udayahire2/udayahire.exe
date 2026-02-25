"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function HeroBackground() {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden bg-background">
            <svg
                className="absolute inset-0 h-full w-full stroke-white/5 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]"
                aria-hidden="true"
            >
                {/* Horizontal Lines */}
                <line x1="0" y1="20%" x2="100%" y2="20%" strokeWidth="1" className="stroke-white/10" />
                <line x1="0" y1="80%" x2="100%" y2="80%" strokeWidth="1" className="stroke-white/10" />

                {/* Vertical Lines - Centered */}
                <line x1="20%" y1="0" x2="20%" y2="100%" strokeWidth="1" className="stroke-white/10" />
                <line x1="80%" y1="0" x2="80%" y2="100%" strokeWidth="1" className="stroke-white/10" />

                {/* Animated Beam - Subtle Diagonal */}
                <motion.line
                    x1="-10%" y1="-10%"
                    x2="110%" y2="110%"
                    stroke="url(#beam-gradient)"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 2
                    }}
                />
                <linearGradient id="beam-gradient" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="50%" stopColor="#fff" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="transparent" />
                </linearGradient>
            </svg>

            {/* Subtle light orb for depth */}
            <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/20 opacity-20 blur-[120px]" />
        </div>
    );
}
