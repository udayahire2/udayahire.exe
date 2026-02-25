"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface BackgroundGridProps {
    intensity?: number; // 0 to 1, default 1
    vignette?: boolean; // default true
    animate?: boolean; // default false
    className?: string;
}

export function BackgroundGrid({
    intensity = 1,
    vignette = true,
    animate = false,
    className,
}: BackgroundGridProps) {
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const requestRef = useRef<number>(0);

    useEffect(() => {
        if (!animate) return;

        const animateBackground = () => {
            // Very slow movement: 2px drift over 25s
            // Using a simple sine wave for smooth, continuous motion
            const time = Date.now() * 0.00005; // extremely slow
            const x = Math.sin(time) * 20;
            const y = Math.cos(time * 0.8) * 20;

            setOffset({ x, y });
            requestRef.current = requestAnimationFrame(animateBackground);
        };

        requestRef.current = requestAnimationFrame(animateBackground);

        return () => cancelAnimationFrame(requestRef.current);
    }, [animate]);

    // Adjust opacity based on intensity - reduced for minimal aesthetic
    const baseOpacity = 0.15 * intensity;
    const majorOpacity = 0.25 * intensity;

    return (
        <div
            className={cn(
                "fixed inset-0 -z-50 h-full w-full overflow-hidden bg-background pointer-events-none select-none",
                className
            )}
            role="presentation"
            aria-hidden="true"
        >
            {/* Layer 1: Base Color - Handled by bg-[#0b0f14] on container */}

            {/* Grid Container with parallax offset */}
            <div
                className="absolute inset-0 w-full h-full will-change-transform"
                style={{
                    transform: animate
                        ? `translate(${offset.x}px, ${offset.y}px)`
                        : "none",
                }}
            >
                {/* Layer 2: Micro Grid */}
                <div
                    className="absolute inset-0 micro-grid-layer"
                    style={{
                        backgroundImage: `linear-gradient(hsl(var(--border) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border) / 0.3) 1px, transparent 1px)`,
                        backgroundSize: "24px 24px",
                        opacity: baseOpacity,
                        // Optimization for mobile: reduce opacity via media query in CSS or just rely on simple opacity here.
                        // Requirement says mobile: reduce_micro_grid_opacity: 0.2. 
                        // We can use a CSS variable or a class to handle this responsive adjustment if needed,
                        // but for simplicity and performance, a slightly lower base is often fine.
                        // Let's stick effectively to the requirement via inline style or class.
                    }}
                >
                    {/* Mobile adjustment via tailwind utilities if needed, but inline style overrides. 
               We will use a class wrapper or media query logic if strict adherence is needed.
               Let's use a class for opacity and override with style for dynamic intensity.
           */}
                </div>

                {/* Layer 3: Major Grid */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(hsl(var(--border) / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border) / 0.4) 1px, transparent 1px)`,
                        backgroundSize: "96px 96px",
                        opacity: majorOpacity,
                    }}
                />
            </div>

            {/* Layer 4: Vignette */}
            {vignette && (
                <div
                    className="absolute inset-0 w-full h-full bg-gradient-radial from-transparent via-background/60 to-background/95"
                    style={{
                        pointerEvents: "none",
                    }}
                />
            )}

            {/* Layer 5: Noise */}
            <div className="absolute inset-0 w-full h-full opacity-[0.015] mix-blend-overlay">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    version="1.1"
                >
                    <filter id="noise">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.80" // High frequency for fine grain
                            numOctaves="4"
                            stitchTiles="stitch"
                        />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noise)" />
                </svg>
            </div>

            {/* Mobile adjustments style block */}
            <style jsx global>{`
        @media (max-width: 768px) {
          .micro-grid-layer {
            opacity: ${0.2 * intensity} !important;
          }
        }
      `}</style>
        </div>
    );
}
